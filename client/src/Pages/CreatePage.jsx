import React from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import AppNavbar from "../Components/AppNavbar.jsx";
import {ErrorToast, isEmpty, SuccessToast} from "../helper/ValidationHelper.js";


const CreatePage = () => {

    let navigate = useNavigate();
    const CreateData = async (event)=>{
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
           let result = await axios.post("/api/Create",{
                food_name:foodName,
                food_code:foodCode,
                img:foodImage,
                food_category:foodCategory,
                qty:parseFloat(qty),
                price:parseFloat(price)
            })
            if(result !== null){
                SuccessToast("Data Create Success");
                navigate("/")
            }
            else{
                navigate("/create");
            }

        }



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
                            <form onSubmit={CreateData}>
                                <h6 className="mt-5"> Create Food Item </h6>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <lab>Food Name</lab>
                                        <input  className="form-control form-control-sm input" name="foodName" type="text"/>
                                    </div>
                                    <div className="col-md-4">
                                        <lab>Food Code</lab>
                                        <input className="form-control form-control-sm input" name="foodCode" type="text"/>
                                    </div>
                                    <div className="col-md-4">
                                        <lab>Food Image</lab>
                                        <input className="form-control form-control-sm input" name="foodImage" type="text"/>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <lab>Food category</lab>
                                        <input className="form-control form-control-sm input" name="foodCategory"
                                               type="text"/>
                                    </div>
                                    <div className="col-md-4">
                                        <lab>QTY</lab>
                                        <input className="form-control form-control-sm input" name="qty" type="text"/>
                                    </div>
                                    <div className="col-md-4">
                                        <lab>Price</lab>
                                        <input className="form-control form-control-sm input" name="price" type="text"/>
                                    </div>

                                </div>
                                <button type="submit" className="btn btn=sm mt-3 submit-button-color">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CreatePage;