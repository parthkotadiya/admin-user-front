import axios from "axios";
import { useEffect, useState } from "react";

function LOGIN() {
    alert("user login successfully")


    const [database, setDatabase] = useState([]);
    console.log(database);


    const getdata = () => {
        axios.get("http://localhost:7896/get-all")
            .then((dt) => {
                setDatabase(dt.data);
            }).catch((e) => console.log(e))

    }

    useEffect(() => {
        getdata()
    }, [])

    const loginuser = JSON.parse(localStorage.getItem("record")) || []
    console.log(loginuser);


    
    return (
        <>
            <div className="flex justify-center">
                <table className="table table-border table-striped">
                    <thead>
                        <tr>
                            <th>
                                email
                            </th>
                            <th>
                                password
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            database.map((item, index) => {
                                return (
                                    <tr key={index}><td>{item.email}</td>
                                        <td>{item.pass}</td>
                                        <td><button type="button" className="bg-red-600 px-3" disabled={loginuser.role !== "admin"} onClick={() => console.log("hello")}> delete</button></td></tr>
                                )
                            })
                        }
                    </tbody>

                </table>

            </div>

        </>

    )
}
export default LOGIN