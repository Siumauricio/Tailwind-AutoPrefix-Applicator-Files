import React from "react";
import {readFileAsync} from "./Utils";

export const ListFiles = ({FileList}) => {
   const handleClick = () => {
      FileList.forEach(async (file) => {
         let contentBuffer = await readFileAsync(file);
         var enc = new TextEncoder(); // always utf-8
         console.log(enc.encode(contentBuffer));
      });
   };

   return (
      <>
         <div className="border rounded-3  h-screen w-50  h-25 m-auto overflow-auto">
            <h3 className="text-center">Files Loaded: {FileList.length}</h3>
            <ul>
               {FileList.map((file, index) => {
                  return <li key={index}>{file.name}</li>;
               })}
            </ul>
         </div>
         <div className="d-flex flex-column justify-content-center mt-4">
            <button className="btn btn-primary m-auto" onClick={handleClick}>
               Process
            </button>
         </div>
      </>
   );
};
