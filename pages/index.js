import axios from "axios";
import React, { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000", { transports: ["websocket"] });

export default function index() {
   const [name, setName] = useState("");
   const [list, setList] = useState([]);

   const handlepost = (e) => {
      socket.emit("start", { post: name });
   };
   socket.on("test", (data) => {
      setList([...list, data]);
   });
   // setInterval(() => {
   //    handlepost();
   // }, 2000);

   // const request = require("request");
   //  lMessage;


   return (
      <div>
         <input type="text" onChange={(e) => setName(e.target.value)} />
         {/* <button onClick={handlepost}>handle post</button>
         {list.map((p) => (
            <div>
               <li>{p.post}</li>
            </div>
         ))} */}
      </div>
   );
}

// export default index;
