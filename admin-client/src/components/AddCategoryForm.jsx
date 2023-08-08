import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddCategoryForm() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
              type="email"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="email"
              value={loginForm.email}
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
