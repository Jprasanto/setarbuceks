import React from "react";
import imgUrl from "../assets/pngegg.png"
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="w-full h-16 bg-green-800 flex justify-between" >
            <div className="flex gap-3 text-white m-4 ">
                <div className="relative -top-5 mr-4 w-[70px]">
                    <Link to='/'>
                        <img src={imgUrl} />
                    </Link>
                </div>
                <div className="mr-4">
                    <Link to='/maintenance'>
                        COFFEE
                    </Link>
                </div>
                <div className="relative w-[90px]">
                    <Link to='/menu'>
                        MENU
                    </Link>
                </div>
                <div className="mr-4">
                    <Link to='/maintenance'>
                        COFFEEHOUSE
                    </Link>
                </div>
                <div className="mr-4">
                    <Link to='/maintenance'>
                        RESPONSIBILITY
                    </Link>
                </div>
                <div className="mr-4">
                    <Link to='/maintenance'>
                        STARBUCKS REWARDS
                    </Link>
                </div>
                <div className="mr-4">
                    <Link to='/maintenance'>
                        PROMO
                    </Link>

                </div>
                <div className="mr-4">
                    <Link to='/maintenance'>
                        ABOUT US
                    </Link>
                </div>
            </div>
            <div className="flex text-white m-4">
                <div className="mr-4">
                    <Link to='/maintenance'>
                        Find A Store
                    </Link>
                </div>
            </div>
        </div>
    );
}

