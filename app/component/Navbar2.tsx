"use client"
import React from 'react'
import {usePathname} from 'next/navigation'

const Navbar2 = () => {
    const pathname = usePathname()
    return (
        <div>
            <div>Navbar2</div>
            <div>You are inside {pathname}</div>
        </div>
    )
}

export default Navbar2