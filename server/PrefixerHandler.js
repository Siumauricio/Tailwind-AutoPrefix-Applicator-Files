const {TailwindClasses} = require("./tailwind-classes");
const AdmZip = require("adm-zip");

const applyPrefix = (prefix, html) => {
   const escapeRegExp = (s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
   let code = html;
   TailwindClasses.forEach((cls) => {
      code = code.replace(new RegExp(`(["':\\s])(?!${prefix})(-?${escapeRegExp(cls)})(?![-/])`, "g"), `$1${prefix}$2`);
   });
   return code;
};
const getCodeConverted = (prefix, fileList) => {
   return fileList.map((file) => {
      return {name: file.name, code: applyPrefix(prefix, file.code)};
   });
};
const getZip = (prefix, fileList) => {
   const zip = new AdmZip();
   const files = getCodeConverted(prefix, fileList);
   files.forEach((file) => {
      zip.addFile(file.name, Buffer.from(file.code));
   });
   zip.writeZip("output.zip");
   return zip;
};

module.exports = {
   getZip,
};
