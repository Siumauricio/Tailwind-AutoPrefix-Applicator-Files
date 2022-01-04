export const readFileAsync = (file) => {
   return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
         resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
   });
};

export const getFileList = async (FileList) => {
   const encoder = new TextDecoder("utf-8");
   const BufferArrayMap = FileList.map(async (file) => {
      const bufferFile = await readFileAsync(file);
      return {name: file.name, content: bufferFile};
   });
   const BufferArray = await Promise.all(BufferArrayMap);
   const contentArray = BufferArray.map((buffer) => {
      const content = encoder.decode(buffer.content);
      return {name: buffer.name, code: content};
   });

   return contentArray;
};
