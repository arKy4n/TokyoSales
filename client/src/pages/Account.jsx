import axios from "axios";
import { useState, useEffect } from "react";

export const Account = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:5000/user/account");

        setData(response.data.userData);
        // console.log(response.data.userData);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Account Information</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
