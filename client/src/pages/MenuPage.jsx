import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function MenuPage() {
    return (
        <>
            <div>
                <div className="bg-[url('https://www.starbucks.co.id/storage/image/temporary/summernote_image_1648777184.jpg')] bg-center  h-[370px] bg-slate-400  ">
                    <div className="backdrop-blur-md bg-black/30 h-full w-full flex justify-between">
                        <div className="m-auto w-1/3">
                            <p className="font-extrabold mb-8 text-xl text-white">DELICIOUS, HANDCRAFTED BEVERAGES AND GREAT-TASTING FOOD.</p>
                            <p className="text-white">It’s true. The perfect cup of coffee and a wholesome, delicious meal or snack can make your day. So we make sure everything you choose is of the finest quality. Because really, isn’t that how life should be?</p>
                            <button className="mt-8 flex gap-2 border-2 p-2 font-bold text-white rounded">
                                <Link to='/menu/detail' >
                                    Explore More &gt;&gt;
                                </Link>
                            </button>
                        </div>
                        <div className="m-auto w-[450px]">
                            <img src="https://www.starbucks.co.id/storage/image/temporary/summernote_image_1648777184.jpg" />
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://stories.starbucks.com/uploads/2022/07/SBX20220801-Summer-Remix-FeatureHorizontal.jpg')] bg-center flex h-[370px] bg-slate-400 justify-between">
                    <div className="backdrop-blur-xl bg-black/30 h-full w-full flex justify-between">
                        <div className="m-auto w-[450px]">
                            <img src="https://stories.starbucks.com/uploads/2022/07/SBX20220801-Summer-Remix-FeatureHorizontal.jpg" />
                        </div>
                        <div className="m-auto w-1/3">
                            <p className="font-extrabold text-xl mb-8 text-white">STARBUCKS BEVERAGES</p>
                            <p className="text-white">Amazing coffees from around the world. Handcrafted beverages to discover and enjoy. We love bringing you these things.  Elevate your moments with the Starbucks Beverage Symphony – a sip, a symphony, a story.</p>
                            <button className="mt-6 flex gap-2 border-2 p-2 font-bold text-white rounded">
                                <Link to='/menu/detail' >
                                    Explore More &gt;&gt;
                                </Link>

                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://i0.wp.com/urbanladies.co/wp-content/uploads/2020/08/Starbucks%C2%AE-Essentials10.jpeg?fit=730%2C520&ssl=1')] bg-center h-[370px] bg-slate-400  ">
                    <div className="backdrop-blur-md bg-black/30 h-full w-full flex justify-between">
                        <div className="m-auto w-1/3">
                            <p className="font-extrabold text-xl mb-8 text-white">STARBUCKS MERCHANDISE</p>

                            <p className="text-white">Elevate your coffee experience with our exclusive range of stylish and functional products, designed to complement your daily brew.Show your passion for exceptional coffee and timeless design with Starbucks Merchandise – it's more than just a collection; it's a statement of your coffee devotion. </p>
                            <button className="mt-6 flex gap-2 border-2 p-2 font-bold text-white rounded">
                                <Link to='/menu/detail' >
                                    Explore More &gt;&gt;
                                </Link>
                            </button>
                        </div>
                        <div className="m-auto w-[450px]">
                            <img src="https://i0.wp.com/urbanladies.co/wp-content/uploads/2020/08/Starbucks%C2%AE-Essentials10.jpeg?fit=730%2C520&ssl=1" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}