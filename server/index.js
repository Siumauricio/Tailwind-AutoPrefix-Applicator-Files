const {getZip} = require("./PrefixerHandler");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: false, limit: "50mb"}));

app.use(cors());
app.post("/recieveFile", (req, res) => {
   const {prefix} = req.body;
   const {content} = req.body;
   const zip = getZip(prefix, content);
   res.setHeader("Content-Type", "application/zip");
   res.setHeader("Content-Disposition", `attachment; filename=${prefix}.zip`);
   res.setHeader("Content-Length", zip.toBuffer().length);
   res.send(zip.toBuffer());
   fs.unlinkSync("output.zip");
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});
