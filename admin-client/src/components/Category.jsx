import React, {useState, useEffect} from 'react';

export default function App() {
    const [categories, setCategory] = useState([])

    useEffect(()=>{
      fetch("http://localhost:3000/category")
      .then((response)=>{
        return response.json()
      })
      .then((body)=>{
        setCategory(body)
      })
      .catch((err)=> console.log(err))
    }, [])
   

  return (
    <div className="flex flex-col w-1/2 m-auto">
        <h1 className="text-4xl m-3">MENU CATEGORY</h1>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left  text-sm font-light">
              <thead
                className="border-b bg-white text-white font-medium dark:border-green-800 dark:bg-green-800">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Name</th>
        
                </tr>
              </thead>
              <tbody>
                {categories.map((category)=>{
                    return (
                        <tr key={category.id}
                        className="border-b bg-neutral-100 dark:border-green-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{category.id}</td>
                        <td className="whitespace-nowrap px-6 py-4">{category.name}</td>
                        </tr>
                    )
                })}               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}