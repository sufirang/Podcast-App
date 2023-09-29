import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Common/Header";
import Button from "../components/Common/Button";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import Loader from "../components/Common/Loader";


function ProfilePage() {

  const user = useSelector((state) => state.user.user);

  console.log("My User", user);

  if (!user) {
    return <Loader/>
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        //An error happened 
        toast.error(error.message);
      });
  };

  return (

    <div>
      <Header />
      <div className="main-container">
        <div className="profile">
      <img src={user.profileImage} alt="no img"/>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.uid}</h1>
      </div>
      <Button text="Logout" onClick={handleLogout}/>
    </div>
    </div>
  );
}

export default ProfilePage;
