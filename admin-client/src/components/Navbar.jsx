import React from "react";
import imgUrl from "../assets/pngegg.png"

export default function DropdownComponent() {
    return (
        <div className="w-full h-12 bg-green-800 flex justify-between" >
            <div className="flex gap-3 text-white m-3 ">
                <div className="relative -top-5 mr-4 w-[60px]">
                    <img src={imgUrl} />
                </div>
                <div className="mr-4">
                    Dashboard
                </div>
                <div className="relative w-[90px]">
                    <select className=" text-white bg-transparent rounded-md shadow-sm appearance-none outline-none focus:border-green-800 ">
                        <option className="text-green-800">Categories</option>
                        <option className="text-green-800">BEVERAGES</option>
                        <option className="text-green-800">FOOD</option>
                        <option className="text-green-800">MERCHANDISE</option>
                    </select>
                </div>
                <div className="mr-4">
                    Register Admin
                </div>
            </div>
            <div className="flex text-white m-3 gap-3">
                <div className="mr-4">
                    Login
                </div>
                <div className="mr-4">
                    Register
                </div>
                <div className="mr-4">
                    Logout
                </div>
            </div>
        </div>
    );
}

