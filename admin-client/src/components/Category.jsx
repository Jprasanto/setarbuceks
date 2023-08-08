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
         <div className='justify-between flex mb-4'>
                <h1 className='text-4xl mb-4'>MENU</h1>
                <button 
                    // onClick untuk add 
                    className='border p-1 pr-3 pl-3 rounded bg-green-800 text-white  hover:scale-125'
                    > Add New Category
                </button> 
            </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left  text-sm font-light">
              <thead
                className="border-b bg-white text-white font-medium dark:border-green-800 dark:bg-green-800">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Name</th>
                  <th scope="col" className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category)=>{
                    return (
                        <tr key={category.id}
                        className="border-b bg-neutral-100 dark:border-green-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{category.id}</td>
                        <td className="whitespace-nowrap px-6 py-4">{category.name}</td>
                        <td className="content-center">  
                          <button 
                            onClick = {() => handleDelete(e.id)}
                            className='border p-1 rounded bg-green-800 text-white  hover:scale-125'
                            > Delete 
                          </button> 
                        </td>
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