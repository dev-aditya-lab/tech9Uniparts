import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Header = () => {
    // navbar
    return (
        <>
            <div className="navbar bg-gray-300 ">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl">Abhi</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>
                                    Nutanix Solution
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none absolute z-50">
                                    <li><NavLink to='/NsCapex' className={({ isActive }) => `${isActive ? "text-blue-500" : ""}`}>CAPEX</NavLink></li>
                                    <li><NavLink to='/NsOpex' className={({ isActive }) => `${isActive ? "text-blue-500" : ""}`} >OPEX</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    Discrete Solution
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none absolute z-50">
                                    <li><NavLink to='/DsCapex' className={({ isActive }) => `${isActive ? "text-blue-500" : ""}`} >CAPEX</NavLink></li>
                                    <li><NavLink to='/DsOpex' className={({ isActive }) => `${isActive ? "text-blue-500" : ""}`} >OPEX</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    Account
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none absolute z-50">
                                    <li><NavLink>Logout</NavLink></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
