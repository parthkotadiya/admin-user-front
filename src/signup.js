import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function SIGNUP() {
    const navigate = useNavigate()
    const [data, setData] = useState({ email: "", pass: "", role: "" });

    const [database, setDatabase] = useState([]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const getdata = () => {
        axios.get("http://localhost:7896/get-all")
            .then((dt) => {
                setDatabase(dt.data);
            }).catch((e) => console.log(e))

    }

    useEffect(() => {
        getdata()
    }, [])
    const handlesub = () => {

        axios.post("http://localhost:7896/create", data)
            .then((back) => {
                getdata();
            })


        // setDatabase([...database, data]);
        // console.log(database);
        // localStorage.setItem("project1", JSON.stringify([...database, data]));
        navigate("/")
        alert("User added successfully");
    }

    return (
        <>
            <div className="flex justify-center p-5">
                <div className="border-2 border-black p-12 text-center w-[350px] h-[480px]">
                    <div className="text-center mb-[-30px] mt-[-30px] ">
                        <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg" width="100%" height="20%" />
                    </div>
                    <h1><b>Sign up to see photos and videos from your friends. </b></h1>
                    <br />
                    <hr/>
<br/>
                    <input type="email" className="border-2 border-black p-[1px] rounded" id="email" name="email" value={data.email} onChange={handleChange} placeholder="email" />
                    <br />
                    <br />
                    <input type="password" className="border-2 border-black p-[1px] rounded" id="pass" name="pass" value={data.pass} onChange={handleChange} placeholder="Password" /><br />
                    <br />

                    <label for="role">Choose role:</label>

                    <select name="role" id="role" onChange={handleChange}>
                        <option >select</option>
                        <option value="admin">admin</option>
                        <option value="user">user</option>
                    </select>
                    <br />
                    <br />
                    <button type="submit"  className="bg-sky-500	 w-[170px] py-[3px] rounded text-white" onClick={handlesub}>Sign Up</button>
                    <br />
                    <br />

                </div></div>
            <tbody>
                {database.map((item, index) => {
                    return (
                        <tr>
                            <td>
                                {item.email}
                            </td>
                            <td>
                                {item.pass}
                            </td>
                            <td>
                                {item.role}
                            </td>
                        </tr>
                    )
                })}
            </tbody>



        </>

    )

}

export default SIGNUP
