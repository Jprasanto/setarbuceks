import { useState, useEffect } from 'react';

export default function fetchMenu() {

    const [menu, setMenu] = useState([])

    
    useEffect(()=>{
        fetch("http://localhost:3000/items")
        .then((response)=> response.json())
        .then((body)=>{
            setMenu(body)
        })
        .catch((err)=> console.log(err))
    }, [])
    
    const handleDelete = (id) =>{
        const newMenu= menu.filter(item => item.id !== id)
        setMenu(newMenu)
    }

    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
            <div className='justify-between flex mb-4'>
                <h1 className='text-4xl mb-4'>MENU</h1>
                <button 
                    // onClick untuk add 
                    className='border p-1 pr-3 pl-3 rounded bg-green-800 text-white  hover:scale-125'
                    > Add New Menu
                </button> 
            </div>
            <div className="justify-between grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {menu.map((e)=>{
                    return (
                        <> 
                        <div key={e.id}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={e.imgUrl} />
                            </div>
                            <div className='flex-row'>
                                <h3 className="mt-4 text-sm text-gray-700">{e.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">Rp. {e.price}</p>
                            </div>
                            <div className='flex justify-between mt-2'>

                                <div>
                                    <button 
                                    // onClick untuk edit 
                                    className='border p-1 pr-3 text-center rounded bg-green-800 text-white  hover:scale-125'
                                    > Edit
                                    </button> 
                                </div>
                                <div >
                                    <button 
                                    onClick = {() => handleDelete(e.id)}
                                    className='border p-1 rounded bg-green-800 text-white  hover:scale-125'
                                    > Delete 
                                    </button> 
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
      </div>
    );
}