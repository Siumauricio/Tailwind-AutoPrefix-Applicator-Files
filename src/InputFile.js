import React, {useState} from "react";
import {ListFiles} from "./ListFiles";

export const InputFile = () => {
   const [FileList, setFileList] = useState([]);
   const handleChange = (e) => {
      const {files} = e.target;
      const BufferArrayList = Array.from(files).map((file) => {
         return file;
      });
      setFileList(BufferArrayList);
   };
   return (
      <>
         <div className="d-flex flex-column align-items-center mb-5">
            <div className="custom-file">
               <input className="custom-file-input" onChange={handleChange} type="file" multiple />
               <label className="custom-file-label"></label>
            </div>
         </div>
         <ListFiles FileList={FileList} />
      </>
   );
};
