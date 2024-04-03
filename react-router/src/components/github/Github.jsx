import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <>
      <div className="text-3xl bg-gray-500 text-white">
        Github followers: {data.followers}
      </div>
      <img src={data.avatar_url} width={300} alt="" />
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/TontofourK");
  response.json();
};
