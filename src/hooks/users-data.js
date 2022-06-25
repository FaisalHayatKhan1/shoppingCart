import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const useData = () => {
  const selectedUser = useSelector((state) => state.toogle.formVal);
  const [loginUser, setLoginUser] = useState([]);
  async function getUsersData() {
    let usersData = [];
    const response = await fetch(
      "https://react-app-d64b7-default-rtdb.firebaseio.com/users.json"
    );
    const data = await response.json();
    for (const key in data) {
      usersData.push({
        id: key,
        name: data[key].firstNameValue,
        email: data[key].emailValue,
        password: data[key].passValue,
        admin: data[key].isAdmin,
      });
    }
    console.log("sadasdad",usersData)
    setLoginUser(usersData);
  }
  useEffect(() => {
    getUsersData();
  }, []);
  const data =
    loginUser.length !== 0
      ? loginUser.find((data) => data.email === selectedUser.email)
      : undefined;
  return {
    selectedData:data,
    allUsers: loginUser,
  };
};

export default useData;
