import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import AppNavbar from "../Components/AppNavbar.jsx";
import {ErrorToast, isEmpty, SuccessToast} from "../helper/ValidationHelper.js";

const UpdatePage = () => {

    let navigate = useNavigate();

    let {id} = useParams();

    const [Existing, setExisting] = useState(null);

    const ExistingInfo = async (id)=>{
        let res = await axios.get(`/api/ReadById/${id}`)
        setExisting(res.data['data'][0])
    }
    useEffect(() => {
        (async ()=>{
            await ExistingInfo(id)
        })()
    }, []);

    const UpdateData = async (event)=>{
        event.preventDefault();

        let formData = new FormData(event.target);

        let foodName = formData.get("foodName");
        let foodCode = formData.get("foodCode");
        let foodImage = formData.get("foodImage");
        let foodCategory = formData.get("foodCategory");
        let qty = formData.get("qty");
        let price = formData.get("price");

        if(isEmpty(foodName )){
            ErrorToast("Food Name Required")
        }
        else if(isEmpty(foodCode )){
            ErrorToast("Food Code Required")
        }
        else if(isEmpty(foodImage )){
            ErrorToast("Food Image Required")
        }
        else if(isEmpty(foodCategory )){
            ErrorToast("Food Category Required")
        }
        else if(isEmpty(qty )){
            ErrorToast("Food qty Required")
        }
        else if(isEmpty(price )){
            ErrorToast("Food price Required")
        }

       else{
            let result = await axios.post(`/api/Update/${id}`,{
                food_name:foodName,
                food_code:foodCode,
                img:foodImage,
                food_category:foodCategory,
                qty:parseFloat(qty),
                price:parseFloat(price)

            })
            if(result !== null){
                SuccessToast("Data Update Success");
                navigate("/")
            }
            else {
                navigate("/update");
                // SuccessToast("Data Update Success");
            }
        }


        // navigate("/");
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="AppNavbar">
                        {<AppNavbar/>}
                    </div>
                </div>
                {/* Main Content */}
                <div className="col-lg-9 col-md-8 col-sm-12">
                    <div className="container">

                        <div className="row">
                            <form onSubmit={UpdateData}>
                                <h6 className="mt-5"> Update Food Item </h6>
                                <div className="row mt-5">

                                    <div className="col-md-4">
                                        <lab>Food Name</lab>
                                        <input defaultValue={Existing !== null ? (Existing['food_name']) : ("")}
                                               className="form-control form-control-sm input" name="foodName" type="text"/>
                                    </div>
                                    <div className="col-md-4">
                                        <lab>Food Code</lab>
                                        <input defaultValue={Existing !== null ? (Existing['food_code']) : ("")}
                                               className="form-control form-control-sm input" name="foodCode" type="text"/>
                                    </div>
                                    <div className="col-md-4">
                                        <lab>Food Image</lab>
                                        <input defaultValue={Existing !== null ? (Existing['img']) : ("")}
                                               className="form-control form-control-sm input" name="foodImage" type="text"/>
                                    </div>
                                    <div className="col-md-4">
                                        <lab>Food category</lab>
                                        <input defaultValue={Existing !== null ? (Existing['food_category']) : ("")}
                                               className="form-control form-control-sm input" name="foodCategory"
                                               type="text"/>
                                    </div>
                                    <div className="col-md-4">
                                        <lab>QTY</lab>
                                        <input defaultValue={Existing !== null ? (Existing['qty']) : ("")}
                                               className="form-control form-control-sm input" name="qty" type="text"/>
                                    </div>
                                    <div className="col-md-4">
                                        <lab>Price</lab>
                                        <input defaultValue={Existing !== null ? (Existing['price']) : ("")}
                                               className="form-control form-control-sm input" name="price" type="text"/>
                                    </div>

                                </div>
                                <button type="submit" className="btn btn=sm mt-3 submit-button-color">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpdatePage;