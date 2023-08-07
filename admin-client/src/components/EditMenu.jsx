
import { useState } from 'react';

export default function addMenu() {

    const [addForm, setAddForm] = useState({
        name: "",
        description: "",
        price:"",
        imgUrl: "",
        authorId: "",
        categoryId: ""
    });

    const handleChange = (e) => {
        const {value, name} = e.target

        setAddForm({
            ...addForm,
            [name]: value
        })
    }

    const handleSubmit = async (e) =>{
        await fetch("http://localhost:3000/items", {
            method: "post",
            
        })
        e.preventDefault()
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-800 underline">
                   Add Menu
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
                            name='name'
                            value={addForm.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
                            name='description'
                            value={addForm.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
                            name='price'
                            value={addForm.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Image Url
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
                            name='imgUrl'
                            value={addForm.imgUrl}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            AuthorId
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
                            name='authorId'
                            value={addForm.authorId}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Category 
                        </label>
                        <input
                            type="select"
                            className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
                            name='authorId'
                            value={addForm.categoryId}
                            onChange={handleChange}
                        />
                    </div>
                 
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-800 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800">
                            ADD
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}