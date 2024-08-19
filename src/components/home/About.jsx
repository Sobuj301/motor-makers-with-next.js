import Image from 'next/image';
import person from "../../../public/photo/images/about_us/person.jpg"
import parts from "../../../public/photo/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="hero  min-h-screen p-2">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='md:w-1/2 relative'>
                        <Image className='rounded-xl' src={person} alt='person pic' width={500} height={100} />
                        <Image className='md:absolute right-3 top-52 border-gray-200 rounded-xl' src={parts} alt='parts pic' width={250} height={200} />
                    </div>
                    <div className='md:w-1/2 space-y-3'>
                        <p className='text-orange-500'>About Us</p>
                        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience in this field</h1>
                        <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                        </p>
                        <button className="btn btn-warning">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;