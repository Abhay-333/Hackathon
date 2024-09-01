import { useState, useEffect } from "react";
import Home from "./Home";
import vid from "../Resources/vid.mp4";
import img1 from "../Resources/img1.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const validation = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please Enter the Required field: ");
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate('/users')
  }

 
  return (
    <div className="flex items-center justify-center h-fit w-full ">
      <video
        src={vid}
        loop
        muted
        autoPlay
        className="z-[-1] relative w-[40%] mr-[8rem]"
      ></video>

      <div
        // style={{
        //   backgroundImage: `url(${img1})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        // className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative "
        // className="bg-[#1F2937] relative"
      >
        <div className="box text-white h-[25rem] bg-[#2f3e53] overflow-hidden w-[23rem] rounded-xl">
          <h1 className="text-center mt-10 text-4xl font-bold">Login</h1>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-1 mt-5 pl-10">
              <input
                type="email"
                value={email}
                className="w-[90%] p-3 flex-shrink-0 rounded-lg h-[3rem] text-black bg-zinc-100 flex-grow-0 border-[0px]"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="text-sm opacity-[0.8] font-semibold">
                Enter Username or email
              </label>

              <input
                type="password"
                value={password}
                className="w-[90%] p-3 flex-shrink-0 rounded-lg h-[3rem] text-black bg-zinc-100 mt-5 flex-grow-0"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="text-sm opacity-[0.8] font-semibold">
                Password
              </label>

              <hr className="mt-4 w-[89%] border-[#6e6d6d]" />

              <button
                onClick={validation}
                className="bg-blue-500 text-white font-bold rounded-lg py-3 mt-7 w-[90%]"
              >
                Log In
              </button>
            </div>
          </form>
        </div>

        {/* <div class="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div class="w-[300px] p-8 rounded-lg bg-white/30 backdrop-blur-lg border border-white/50 shadow-lg">
            <h1 class="text-2xl font-semibold text-white">Glassmorphism</h1>
            <p class="mt-4 text-white">
              This is an example of a glassmorphism effect using Tailwind CSS.
            </p>
            <button class="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow">
              Click Me
            </button>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Login;
