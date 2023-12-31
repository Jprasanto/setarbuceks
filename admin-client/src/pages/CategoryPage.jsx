import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategory, fetchCategory } from "../store/action/actionCreator";
import RowTableCat from "../components/RowTableCat";

export default function CategoryPage() {
  const dispatch = useDispatch()
  const { category: categories, categoryLoading: loading } = useSelector((state) => { return state.category })
  useEffect(() => {
    dispatch(fetchCategory())
  }, [])

  return (
    <>
      <div>{loading && <div>Loading... </div>}</div>
      <div className="flex flex-col w-1/2 m-auto mt-16">
        <div className="justify-between flex mb-4">
          <h1 className="text-4xl mb-4">MENU</h1>
          <button
            className="border p-1 pr-3 pl-3 rounded bg-green-800 text-white  hover:scale-125"
          >
            <Link to="/category/add">Add New Category</Link>
          </button>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left  text-sm font-light">
                <thead className="border-b bg-white text-white font-medium dark:border-green-800 dark:bg-green-800">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((category) => {
                    return (
                      <RowTableCat key={category.id} deleteCategory={deleteCategory} category={category} />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
