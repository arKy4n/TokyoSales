import axios from "axios";

export const Account = async () => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  try {
    console.log("Check1");
    const response = await axios.get("http://localhost:5000/user/account", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Check2");
    const json = response.json();
  } catch (err) {
    console.log(err);
  }
  //   axios
  //     .get("http://localhost:5000/user/account")
  //     .then((res) => {
  //       const { success, message } = res.data;
  //     })
  //     .catch((err) => console.log(err));
  return (
    <>
      <h1>Account Information</h1>
      <div></div>
    </>
  );
};
