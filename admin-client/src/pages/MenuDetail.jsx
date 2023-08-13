import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getDetailMenu, deleteMenu } from "../store/action/actionCreator";
import { useEffect } from "react";


const MenuDetail = () => {
    const { id } = useParams()

    const { item: menu, menuLoading: loading } = useSelector((state) => { return state.menu })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailMenu(id));
    }, []);

    return (
        <>
            <div>{loading && <div className="text-4xl">Loading... </div>}</div>

            <div className=" flex-col container w-1/2 mx-auto pt-16">
                <div className="mx-auto w-[400px] overflow-hidden rounded-lg bg-gray-200">
                    <img src={menu.imgUrl} />
                </div>
                <div className="flex-row">
                    <h3 className="mt-4 text-gray-700 text-3xl mb-5">{menu.name}</h3>
                    <p className="mb-2">{menu.description}</p>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                        Rp. {menu.price}
                    </p>
                </div>
                <div className="flex justify-between mt-2">
                    <div>
                        <button className="border p-1 pl-3 pr-3 text-center rounded bg-green-800 text-white  hover:scale-125">
                            <Link to="/edit">Edit</Link>
                        </button>
                    </div>
                    <div className="">
                        <button onClick={() => dispatch(deleteMenu(menu.id))} className="border p-1 rounded bg-green-800 text-white  hover:scale-125">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuDetail
