import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreatePage from "./Pages/CreatePage.jsx";
import UpdatePage from "./Pages/UpdatePage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import {Toaster} from "react-hot-toast";

const App = () => {
    return (
        <>
            <Toaster position="top-right" />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/create" element={<CreatePage/>}/>
                <Route path="/update/:id" element={<UpdatePage/>}/>
            </Routes>
            
        </BrowserRouter>
        </>
    );
};

export default App;