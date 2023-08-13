import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetailMenu } from "../store/action/actionCreator";
import { useEffect } from "react";
import Footer from "../components/Footer";

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
            <div className=" flex-col container w-1/2 mx-auto pt-16 mb-40 ">
                <div className="mx-auto w-[400px] overflow-hidden rounded-lg bg-gray-200">
                    <img src={menu.imgUrl} />
                </div>
                <div className="flex-row mt-24">
                    <h3 className="mt-4 text-gray-700 text-3xl mb-5">{menu.name}</h3>
                    <p className="mb-2">{menu.description}</p>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                        Rp. {menu.price}
                    </p>
                </div>
            </div >
            <div>
                <Footer />
            </div>
        </>
    )
}

export default MenuDetail
