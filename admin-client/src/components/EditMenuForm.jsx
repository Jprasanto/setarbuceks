import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { editMenu } from "../store/action/actionCreator";
import { useDispatch } from "react-redux";

export default function EditMenuForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    authorId: "",
    categoryId: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setEditForm({
      ...editForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/items/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...editForm,
      }),
    });
    navigate("/");
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-green-800 underline">
          Update Menu
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="name"
              value={editForm.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Description
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="description"
              value={editForm.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Price
            </label>
            <input
              type="number"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="price"
              value={editForm.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Image Url
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="imgUrl"
              value={editForm.imgUrl}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              AuthorId
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="authorId"
              value={editForm.authorId}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Category
            </label>
            <input
              type="select"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="categoryId"
              value={editForm.categoryId}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full  hover:scale-105 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-800 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800"
            >
              Edit
            </button>
            <button className="w-full mt-3 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800">
              <Link to={"/"}>Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
