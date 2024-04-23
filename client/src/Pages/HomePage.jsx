import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import AppNavbar from "../Components/AppNavbar.jsx";
import FullScreenLoader from "../Components/FullScreenLoader.jsx";
import {SuccessToast} from "../helper/ValidationHelper.js";

const HomePage = () => {
     //const BaseURL = "http://localhost:3030/api";

    let [data, setData] = useState([]);

    useEffect(() => {
        ( async ()=>{
            await ReadData();
        })()
    }, []);

    const ReadData= async ()=>{

        let res= await axios.get("api/Read");
        setData(res.data['data']);

    }

    const DeleteData = async (id)=>{
        let res = await axios.get(`/api/Delete/${id}`);
        SuccessToast("Data Delete Success");
        await ReadData();
    }

    return (
        data.length === 0?(<FullScreenLoader/>): (<div className="container-fluid"> //Loder Call
            <div className="row">

                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="AppNavbar">
                        {<AppNavbar/>}
                    </div>
                </div>
                {/* Main Content */}
                <div className="col-lg-9 col-md-8 col-sm-12">
                    <div className="container mt-2">
                        <h6 className="mt-1">All Food List</h6>
                        <div className="row mt-5">

                            {
                                data.length > 0 &&
                                data.map((item, index) => {
                                    return (
                                        // For Card showing code
                                        <div
                                            className="col-md-3 col-sm-6 p-1"> {/* Adjust column size based on your layout */}
                                            <div className="card card-round">
                                                <figure><img className="w-100 img-rounded-top image-container" alt=""
                                                             src={item['img']}/></figure>
                                                <button
                                                    className="btn btn-sm btn-overlay fontcontrol">Tk: {item['price']}</button>
                                                <div className="card-body">
                                                    <h6>{item['food_name']}</h6>
                                                    <div className="d-flex justify-content-center">
                                                        <button onClick={() => DeleteData(item['_id'])}
                                                                className="btn btn-sm delete-btn-color mx-2 ">Delete
                                                        </button>
                                                        {/* Adjust margin if needed */}
                                                        <Link className="btn btn-sm edit-btn-color mx-2"
                                                              to={`/update/${item['_id']}`}>Edit</Link> {/* Adjust margin if needed */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>


                </div>
            </div>
        </div>)


    );
};

export default HomePage;