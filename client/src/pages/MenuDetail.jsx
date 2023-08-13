import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMenu } from "../store/action/actionCreator";
import { useEffect } from "react";
import MenuCard from '../components/MenuCard'
import Footer from "../components/Footer";

export default function MenuPage() {
    // const { loading, item: menu } = useFetch("http://localhost:3000/items");

    const { menus: menu, menuLoading: loading } = useSelector((state) => { return state.menu })

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMenu());
    }, []);
    if (loading) {
        return (
            <div className="text-4xl">Loading... </div>
        )
    }
    return (
        <>
            <div className="bg-zinc-200 bg-center w-full">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                    <div className="justify-between flex mb-4">
                        <h1 className="text-4xl mb-4">MENU</h1>
                    </div>
                    <div className="justify-between grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {menu?.map((e) => {
                            return (
                                <MenuCard key={e.id} e={e} />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
