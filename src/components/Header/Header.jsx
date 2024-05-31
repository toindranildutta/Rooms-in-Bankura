import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const userData = useSelector((state) => state.auth.userData);
    const navigate = useNavigate();
    const location = useLocation();


    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "Rooms Map",
            slug: "/rooms-map",
            active: authStatus,
        },
        {
            name: "All Listings",
            slug: "/all-listings",
            active: authStatus,
        },
        {
            name: "Add Listing",
            slug: "/add-listing",
            active: authStatus,
        },
    ]
    return (
        <header className='py-3 mt-1 shadow-md bg-white mb-0.5'>
            <Container>
                <nav className='flex mr-auto'>
                    <div className=' w-auto'>
                        <Link to='/'>
                            <Logo width='150px' />
                        </Link>
                    </div>

                    <ul className='flex ml-auto w-auto'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
    className={`inline-block px-5 py-2 duration-100 ${location.pathname === item.slug ? "text-blue-600" : "text-zinc-700"} font-semibold hover:bg-blue-100`}
                                    >{item.name}</button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <div className='flex ml-auto'>
                                <div className='text-blue-500 text-xs text-center mt-1 mr-4 ml-20'>
                                    Signed in as <br/>
                                   <b className='text-zinc-700'>{userData?.name}</b> 
                                </div>
                                <li >
                                    <button className='duration-100 text-red-500 font-semibold  hover:bg-red-100'>
                                        <LogoutBtn />
                                    </button>
                                </li>
                            </div>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header



