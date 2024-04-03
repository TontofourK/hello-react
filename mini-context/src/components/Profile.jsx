import React, { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);

  console.log(user);
  if (!user) return <h1>Not logged in</h1>;
  return (
    <>
      Profile: {user.username}
      <h1>More Components</h1>
    </>
  );
}

export default Profile;
