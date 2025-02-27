import Image from "next/image";
import logo from "../../../public/photo/icons/logo.svg"
import Link from "next/link";

const Navbar = () => {

    const navLink =[
        {
            name:"Home",
            path:"/"
        },
        {
            name:"About",
            path:"/about"
        },
        {
            name:"Home",
            path:"/"
        },
        {
            name:"About",
            path:"/about"
        },
    ]
    return (
        <div className="navbar max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                       {
                        navLink.map((link,index) =>{
                          return <li key={index}>  <Link href={link.path}>{link.name}</Link></li>
                        })
                       }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><Image src={logo} alt="logo"width={60} height={40} /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                {
                        navLink.map((link,index) =>{
                          return <li key={index}>  <Link href={link.path}>{link.name}</Link></li>
                        })
                       }
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-secondary">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;