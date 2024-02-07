

import axios from "axios";
import React, { useEffect, useState } from "react";

const UserPage: React.FC = () => {
  const [data, setData] = useState(null);
useEffect(()=>{
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:5000/user/userdata", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
        console.log(response.status, response.data);
    }catch(error) {
      console.error("Error fetching data", error);
    }
};

fetchData();
},[]);

  return (
    <div>
      <h2>Account information</h2>
      <pre>
        {JSON.stringify(data,null,2)}
      </pre>
    </div>
  );
};

export default UserPage;
