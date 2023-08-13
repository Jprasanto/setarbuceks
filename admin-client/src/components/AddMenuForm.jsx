import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addMenu } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/action/actionCreator";

export default function AddMenuForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [addForm, setAddForm] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    categoryId: "",
    ingredients: []
  });

  const { category } = useSelector((state) => { return state.category })

  const handleChange = (e) => {
    const { value, name } = e.target;

    setAddForm({
      ...addForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    inputField.forEach(e => {
      addForm.ingredients.push(e.ingredients)
    })

    try {
      await dispatch(addMenu(addForm))
      navigate("/");
    } catch (err) {
      console.log(err)
    }
  };

  const [inputField, setInputField] = useState([
    { ingredients: '' }
  ])
  const handleFormChange = (index, event) => {
    let data = [...inputField];
    data[index][event.target.name] = event.target.value;
    setInputField(data)
  }
  const addFields = () => {
    let newfield = { ingredients: '' }

    setInputField([...inputField, newfield])
  }
  const removeFields = (index) => {
    let data = [...inputField];
    data.splice(index, 1)
    setInputField(data)
  }

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-green-800 underline">
          Add New Menu
        </h1>
        <form className="mt-6" key={category.id} onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="name"
              value={addForm.name}
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
              value={addForm.description}
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
              value={addForm.price}
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
              value={addForm.imgUrl}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Category
            </label>
            <select
              type="select"
              className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
              name="categoryId"
              defaultValue={addForm.categoryId}
              onChange={handleChange}
            >
              <option disabled>Select Category</option>
              {category?.map((e) => (
                <option key={e.id} value={e.id}>{e.name}</option>
              )
              )}
            </select>
          </div>

          <label className="block text-sm font-semibold text-gray-800">
            Ingredients
          </label>
          {inputField.map((input, index) => {
            return (
              <div className="mb-2" key={index.id}>
                <div className="flex gap-3" >
                  <input
                    form="ingredient"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-green-800 bg-white border rounded-md focus:border-green-800 focus:ring-green-800 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="ingredients"
                    value={input.ingredients}
                    onChange={event => handleFormChange(index, event)}
                  />
                  <label
                    className=" border px-4 py-2 mt-2 rounded hover:bg-green-800 hover:text-white hover:scale-125"
                    onClick={addFields}>
                    +
                  </label>
                  <label
                    className=" border px-4 py-2 mt-2 rounded hover:bg-green-800 hover:text-white hover:scale-125"
                    onClick={() => removeFields(index)}>
                    -
                  </label>
                </div>
              </div>
            )
          })}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full hover:scale-110 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-800 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800"
            >
              ADD MENU
            </button>
          </div>
        </form>
      </div >
    </div >
  );
}
