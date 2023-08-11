import { Link } from "react-router-dom"

const RowTableCat = ({ deleteCategory, category }) => {
    return (
        <tr
            className="border-b bg-neutral-100 dark:border-green-800"
        >
            <td className="whitespace-nowrap px-6 py-4 font-medium">
                {category.id}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
                {category.name}
            </td>
            <td className="content-center">
                <button
                    onClick={() => dispatch(deleteCategory(category.id))}
                    className="border p-1 rounded bg-green-800 text-white  hover:scale-125"
                >
                    Delete
                </button>
                <button
                    className="border pr-2 pl-2 p-1 ml-3 rounded bg-green-800 text-white  hover:scale-125"
                >
                    <Link to={'/category/edit'} >
                        Edit
                    </Link>
                </button>
            </td>
        </tr>
    )
}

export default RowTableCat