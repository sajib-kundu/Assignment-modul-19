import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'


const FullScreenLoader = ()=> {
    
        return (
            <div className="container mt-5">
                 <div className="row d-flex justify-content-center">
                    <div className="col-md-2 loader">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden"></span>

                        </div>
                
                   </div>
                
                </div>
                
            </div>
        );
    
};

export default FullScreenLoader;
