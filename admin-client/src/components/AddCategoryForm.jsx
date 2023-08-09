import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCategory } from "../store/action/actionCreator";

export default function AddCategoryForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [categoryForm, setCategoryForm] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setCategoryForm({
      ...categoryForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addCategory(categoryForm))
      navigate('/category')
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-green-800 underline">
          Add New Category
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
              value={categoryForm.name}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-800 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800"
            >
              <Link to="/">ADD CATEGORY</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
