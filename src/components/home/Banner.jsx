import Image from "next/image";
import banner1 from "../../../public/photo/images/banner/1.jpg"
import banner2 from "../../../public/photo/images/banner/2.jpg"
import banner3 from "../../../public/photo/images/banner/3.jpg"
import banner4 from "../../../public/photo/images/banner/4.jpg"
import banner5 from "../../../public/photo/images/banner/5.jpg"
import banner6 from "../../../public/photo/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="md:px-20">
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image src={banner1} alt="banner pic" className="rounded-xl" height={200} width={1100} />
                    <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                        <div className="text-white space-y-5 md:w-1/2 pl-16">
                            <h2 className="text-2xl font-bold">Automotive Production Manager</h2>
                            <p className="text-sm">Oversees the entire production process of vehicles, ensuring that manufacturing operations run smoothly, efficiently, and within budget. They coordinate between different departments</p>
                            <div className="flex gap-5">
                                <button className="btn btn-active btn-primary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 md:right-16 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image src={banner2} className="rounded-xl" alt="" height={200} width={1100} />
                    <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                        <div className="text-white space-y-5 md:w-1/2 pl-16">
                            <h2 className="text-2xl font-bold">Manufacturing Engineer</h2>
                            <p className="text-sm">Focuses on improving manufacturing processes and equipment. They design, implement, and optimize systems that enhance production efficiency and product quality</p>
                            <div className="flex gap-5">
                                <button className="btn btn-active btn-primary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5  md:right-16 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image className="rounded-xl" src={banner3} alt="" height={200} width={1100} />
                    <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                        <div className="text-white space-y-5 md:w-1/2 pl-16">
                            <h2 className="text-2xl font-bold">Quality Control Inspector</h2>
                            <p className="text-sm">Oversees the entire production process of vehicles, ensuring that manufacturing operations run smoothly, efficiently, and within budget. They coordinate between different departments</p>
                            <div className="flex gap-5">
                                <button className="btn btn-active btn-primary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5  md:right-16 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <Image className="rounded-xl" src={banner4} alt="" height={200} width={1100} />
                    <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                        <div className="text-white space-y-5 md:w-1/2 pl-16">
                            <h2 className="text-2xl font-bold">Assembly Line Worker</h2>
                            <p className="text-sm">Oversees the entire production process of vehicles, ensuring that manufacturing operations run smoothly, efficiently, and within budget. They coordinate between different departments</p>
                            <div className="flex gap-5">
                                <button className="btn btn-active btn-primary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>


                    </div>
                    <div className="absolute left-5 right-5  md:right-16 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <Image className="rounded-xl" src={banner5} alt="" height={200} width={1100} />
                    <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                        <div className="text-white space-y-5 md:w-1/2 pl-16">
                            <h2 className="text-2xl font-bold">Supply Chain Manager</h2>
                            <p className="text-sm">Oversees the entire production process of vehicles, ensuring that manufacturing operations run smoothly, efficiently, and within budget. They coordinate between different departments</p>
                            <div className="flex gap-5">
                                <button className="btn btn-active btn-primary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>


                    </div>
                    <div className="absolute left-5 right-5  md:right-16 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <Image className="rounded-xl" src={banner6} alt="banner pic" height={200} width={1100} />
                    <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                        <div className="text-white space-y-5 md:w-1/2 pl-16">
                            <h2 className="text-2xl font-bold">Automotive Design Engineer</h2>
                            <p className="text-sm">Oversees the entire production process of vehicles, ensuring that manufacturing operations run smoothly, efficiently, and within budget. They coordinate between different departments</p>
                            <div className="flex gap-5">
                                <button className="btn btn-active btn-primary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5  md:right-16 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;