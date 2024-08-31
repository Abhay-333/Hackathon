import { useState, useEffect } from "react";
import Home from "./Home";
import vid from "../Resources/vid.mp4";
import img1 from '../Resources/img1.jpg';

const Login = () => {
  const [users, setUsers] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchData = async () => {
    try {
      const api = `https://randomuser.me/api/?results=10`;
      const response = await fetch(api);
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const validation = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please Enter the Required field: ");
    } else {
      <Home />;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <video
        src={vid}
        loop
        muted
        autoPlay
        className="w-[40%] mr-[8rem]"
      ></video>
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="box h-[25rem] w-[23rem] rounded-lg border-[2px] border-[#6e6d6d]"
      >
        <h1 className="text-center mt-10 text-4xl font-semibold">Login</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-1 mt-5 pl-10">
            <input
              type="email"
              value={email}
              className="w-[90%] p-3 flex-shrink-0 rounded-lg h-[3rem] bg-zinc-300 flex-grow-0 border-[0px]"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-sm opacity-[0.8] font-semibold">
              Enter Username or email
            </label>

            <input
              type="password"
              value={password}
              className="w-[90%] p-3 flex-shrink-0 rounded-lg h-[3rem] bg-zinc-300 mt-5 flex-grow-0"
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
    </div>
  );
};

export default Login;
