// "use client";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// const url = "http://localhost:8000";
// import { createContext } from "react";

// export const DataApi = createContext();

// export const DataProvider = ({ children }) => {
//   //   ("use server");
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const { data } = await axios.get(`${url}/api/v1/products/`);
//       setData(data.data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <DataApi.Provider data={data} value={{ data }}>
//       {children}
//     </DataApi.Provider>
//   );
// };
