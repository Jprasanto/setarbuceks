import React from "react";
import imgUrl from "../assets/pngegg.png"

export default function DropdownComponent() {
    return (
        <div className="w-full h-16 bg-green-800 flex justify-between" >
            <div className="flex gap-3 text-white m-4 ">
                <div className="relative -top-5 mr-4 w-[70px]">
                    <img src={imgUrl} />
                </div>
                <div className="mr-4">
                    COFFEE
                </div>
                <div className="relative w-[90px]">
                    <select className=" text-white bg-transparent rounded-md shadow-sm appearance-none outline-none focus:border-green-800 ">
                        <option className="text-green-800">MENU</option>
                        <option className="text-green-800">BEVERAGES</option>
                        <option className="text-green-800">FOOD</option>
                        <option className="text-green-800">MERCHANDISE</option>
                    </select>
                </div>
                <div className="mr-4">
                    COFFEEHOUSE
                </div>
                <div className="mr-4">
                    RESPONSIBILITY
                </div>
                <div className="mr-4">
                    STARBUCKS REWARDS
                </div>
                <div className="mr-4">
                    PROMO
                </div>
                <div className="mr-4">
                    ABOUT US
                </div>
            </div>
            <div className="flex text-white m-4">
                <div className="mr-4">
                    Find A Store
                </div>
            </div>
        </div>
    );
}

