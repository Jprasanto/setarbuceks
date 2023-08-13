import { Link } from "react-router-dom"

const MenuCard = ({ e }) => {
    return (
        <div className="hover:scale-110">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                <Link to={`${e.id}`}>
                    <img src={e.imgUrl} />
                </Link>
            </div>
            <div className="flex-row">
                <h3 className="mt-4 text-sm text-gray-700">{e.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                    Rp. {e.price}
                </p>
            </div>
        </div>
    )
}

export default MenuCard