import { Link } from "react-router-dom"

const MenuCard = ({ deleteMenu, e }) => {
    return (
        <div >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={e.imgUrl} />
            </div>
            <div className="flex-row">
                <h3 className="mt-4 text-sm text-gray-700">{e.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                    Rp. {e.price}
                </p>
            </div>
            <div className="flex justify-between mt-2">
                <div>
                    <button className="border p-1 pl-3 pr-3 text-center rounded bg-green-800 text-white  hover:scale-125">
                        <Link to="/edit">Edit</Link>
                    </button>
                </div>
                <div>
                    <button onClick={() => dispatch(deleteMenu(e.id))} className="border p-1 rounded bg-green-800 text-white  hover:scale-125">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuCard