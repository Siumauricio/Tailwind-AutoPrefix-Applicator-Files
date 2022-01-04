import React, {useState} from "react";
import {GetZip, Request} from "./Request";
import {getFileList} from "./Utils";
const URL = "http://localhost:3001/recieveFile";
export const ListFiles = ({FileList}) => {
   const [prefix, setPrefix] = useState("tw-");
   const [loader, setLoader] = useState(false);

   const handleClick = async () => {
      setLoader(true);
      const contentArray = await getFileList(FileList);
      await GetZip(URL, prefix, contentArray);
      setLoader(false);
   };

   return (
      <>
         <input type="text" className="form-control w-25 m-auto mb-3" placeholder="Enter prefix" value={prefix} onChange={(e) => setPrefix(e.target.value)} />
         <div className="border rounded-3  h-screen w-50  h-25 m-auto overflow-auto">
            <h3 className="text-center">Files Loaded: {FileList.length}</h3>
            <ul>
               {FileList.map((file, index) => {
                  return <li key={index}>{file.name}</li>;
               })}
            </ul>
         </div>
         {loader ? (
            <div className="d-flex justify-content-center mt-3">
               <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
               </div>
            </div>
         ) : (
            ""
         )}
         <div className="d-flex flex-column justify-content-center mt-4">
            <button className="btn btn-primary m-auto" onClick={handleClick}>
               Process
            </button>
         </div>
      </>
   );
};
