import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate()
  const [login, setLogin] = useState({ email: "", pass: "" });
  const [logindata, setLogindata] = useState([])


  const change = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }
  const submit = () => {
    axios.get(`http://localhost:7896/user/${login?.email}`)
      .then((res) => {
        console.log(res.data)
        if (res?.data) {
          if (res?.data[0]?.pass === login.pass) {
            setLogindata([...logindata, login]);

            localStorage.setItem("record", JSON.stringify(res?.data[0]))
            navigate("/login")

          }
        }
        else {

          console.log("user is invalid")
        }

      })
      .catch((e) => console.log(e))





  }




  console.log(logindata);



  return (
    <>
      <div className="flex justify-center p-5">

        <div className="border-2 border-black p-12 text-center w-[350px] h-[370px]">
          <div className="text-center mb-[-30px] mt-[-30px] ">
            <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg" width="100%" height="20%" />
          </div>
          <input type="email" className="border-2 border-black p-[1px] rounded " id="email" name="email" value={login.email} onChange={change} placeholder="Username or Email" />
          <br />
          <br />
          <input type="password" className="border-2 border-black p-[1px] rounded" id="pass" name="pass" value={login.pass} onChange={change} placeholder="Password" />
          <br />
          <br />
          <button type="submit" className="bg-sky-500	 w-[170px] py-[3px] rounded text-white" onClick={submit} >submit</button>
          <br />
          <br />

        </div>


      </div>
    
      <div className="flex justify-center">
        <div className="w-[350px] text-center border-2 border-black p-3 ">

        Don't have an account?
          <a  href="#" className="color-sky-600"  onClick={() => navigate("/signup")} >signup</a>

        </div></div>
    </>
  );
}

export default App;