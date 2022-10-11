import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>

            <div className='navbar bg-purple-300 md:flex'>
                <div className='flex-1'>
                    <NavLink className="btn btn-ghost normal-case text-xl pl-2">Programming Quiz</NavLink>
                </div>
                <div className=''>
                    <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                        {
                        open ? <XMarkIcon></XMarkIcon> : <Bars3Icon ></Bars3Icon>
                    }
                    </div>
                    
                    {/* <span>{open ? 'open' : 'close'}</span> */}

                    <ul className={`md:flex text-center w-full bg-purple-300 p-2 absolute md:static duration-500 ease-in ${open ? 'top-12' : 'top-[-120px]'}`}>
                        <li className='mr-4'><NavLink to='/'>Home</NavLink></li>
                        <li className='mr-4'><NavLink to='/topic'>Topic</NavLink></li>
                        <li className='mr-4'><NavLink to='/statistic'>Statistics</NavLink></li>
                        <li className='mr-4'><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Header;