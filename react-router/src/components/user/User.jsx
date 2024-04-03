import React from "react";
import {useParams} from "react-router-dom";

function User() {
  const { userid } = useParams();
  return(
      <div className="text-3xl">user: {userid}</div>
      )
}

export default User;
