const MaintenancePage = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center max-w-2xl">
                    <img src="https://cdn.pixabay.com/photo/2017/06/20/08/12/maintenance-2422173__340.png"
                        alt="tailwindcss maintenance" />
                    <h1 className="mb-3 text-3xl font-bold text-center text-green-800">Under Maintenance</h1>
                    <p className="text-center text-gray-600">The Page you are looking for is currently under maintenance and will be
                        back soon.</p>
                </div>
            </div>
        </>
    )
}

export default MaintenancePage