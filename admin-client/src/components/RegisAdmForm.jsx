import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addAdmin } from "../store/action/actionCreator";
import { useDispatch } from "react-redux";

export default function RegisAdmForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [regisForm, setRegisForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: ""
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setRegisForm({
      ...regisForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addAdmin(regisForm))
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-green-800 underline">
          Register an Admin
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Username
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="username"
              value={regisForm.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="email"
              value={regisForm.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="password"
              value={regisForm.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Phone Number
            </label>
            <input
              type="number"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="phoneNumber"
              value={regisForm.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Address
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="address"
              value={regisForm.address}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full  hover:scale-105 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-800 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800"
            >
              Register
            </button>
            <button className="w-full mt-3 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800">
              <Link to={"/"}>
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
