import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const api = `https://randomuser.me/api/?results=10`;
      const response = await fetch(api);
      const data = await response.json();
      setUsers(data.results);
      console.log(data.results);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const openGoogleMap = (lat,lng) => {
    const mapURL = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(mapURL, "_blank");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-[76%]">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="flex flex-wrap gap-6 items-center justify-center">

        {loading ? (<h1 className="text-5xl">Loading...</h1>) : <Card  users={users} openGoogleMap={openGoogleMap} />}


        {/* {users.map(user => (
          <div key={user.id.value} className="bg-white p-4 rounded-lg shadow-md w-64">
            <img
              src={user.picture.thumbnail}
              alt={`${user.name.first}'s avatar`}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center mb-2">{user.name}</h2>
            <p className="text-center text-gray-600">{user.email}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Users;
