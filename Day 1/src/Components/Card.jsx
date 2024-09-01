import React from "react";
import Group from "../Resources/Group.png";
import Group1 from "../Resources/Group 1.png";
import Group2 from "../Resources/Group 2.png";
import UserDetails from "./UserDetails";
import { useNavigate } from "react-router-dom";


const Card = ({ users, openGoogleMap }) => {
  const navigate = useNavigate()

  const redirectUserDetail = () => {
    navigate('/users/userDetails')
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-10">
      {/* <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-4 pb-4">
        <a
          href={link}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Learn More
        </a>
      </div> */}
      {users &&
        users.map((user, index) => (
          <div
            // onClick={() => redirectUserDetail()}
            key={index}
            className="box cursor-pointer bg-[#3B82F6] text-white h-[70vh] w-[26vw] rounded-[15px] border-[7px] border-[white] p-3 flex flex-col transform transition-transform duration-300 hover:scale-105"
          >
            <div className="randomUserNav h-[8vh] flex items-center justify-center gap-[5vw]">
              <h1 className="font-bold text-[16px] text-[rgba(0, 0, 0, 0.7)]">
                Portfolio Overview
              </h1>
            </div>

            <div className="userName&ProfilePic flex h-[23vh] items-center justify-center flex-col">
              <div className="profilePic h-[12vh] flex-shrink-0 w-[6vw] rounded-full shadow-md shadow-black">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src={`${user.picture.large}`}
                  alt=""
                />
              </div>

              <h1 className="text-2xl font-bold mt-2">
                {user.name.first} {user.name.last}
              </h1>
              <div className="userName font-semibold mt-1">
                {user.login.username}
              </div>
            </div>

            <hr className="border-gray-400 border-t-3 mt-3 mb-2" />

            <div className="locaCont  flex items-center gap-5 justify-center h-[6vh]">
              <div
                className="location flex gap-2 item-center justify-center w-fit cursor-pointer"
                onClick={() =>
                  openGoogleMap(
                    user.location.coordinates.latitude,
                    user.location.coordinates.longitude
                  )
                }
              >
                <img
                  className="flex-grow-0 self-center"
                  src={`${Group1}`}
                  alt=""
                />
                <p className="self-center text-[1vw]">Location</p>
              </div>

              <div className="contact flex gap-2 item-center justify-center w-fit">
                <img
                  className="self-center flex-grow-0"
                  src={`${Group2}`}
                  alt=""
                />
                <p className="text-[1vw] self-center">Call Me</p>
              </div>
            </div>

            <hr className="border-gray-400 border-t-3 mt-2" />

            <div className="userDetails">
              <div className="flexbox flex flex-wrap gap-3 text-[1vw] mt-3">
                <div className="city flex-shrink-0 w-[11vw]">
                  <p>City</p>
                  <p className="text-[1.2vw]">{user.location.city}</p>
                </div>

                <div className="Nationality  flex-shrink-0 w-[11vw]">
                  <p>Nationality</p>
                  <p className="text-[1.2vw]">{user.nat}</p>
                </div>

                <div className="DOB  flex-shrink-0 w-[11vw]">
                  <p>Date of Birth</p>
                  <p className="text-[1.2vw]">{user.dob.date.split("T")[0]}</p>
                </div>

                <div className="Phone  flex-shrink-0 w-[11vw]">
                  <p>Phone No.</p>
                  <p className="text-[1.2vw]">{user.phone}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
