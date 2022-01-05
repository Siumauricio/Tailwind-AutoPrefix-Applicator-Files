export const Request = async (url, prefix, contentArray) => {
   return await fetch(url, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({prefix: prefix, content: contentArray}),
   });
};

export const GetZip = async (url, prefix, contentArray) => {
   await Request(url, prefix, contentArray)
      .then((transfer) => {
         return transfer.blob();
      })
      .then((bytes) => {
         const downloadUrl = URL.createObjectURL(bytes);
         const a = document.createElement("a");
         a.href = downloadUrl;
         document.body.appendChild(a);
         a.click();
         return bytes;
      });
};
