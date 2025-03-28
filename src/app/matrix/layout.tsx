'use client'

import { Navbar, NavbarItem, NavbarSection } from '@/components/catalyst/navbar'
import { Sidebar, SidebarHeader } from '@/components/catalyst/sidebar';
import { SidebarLayout } from '@/components/catalyst/sidebar-layout';
import { usePathname } from 'next/navigation';
import React from 'react'

const MatrixLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname();
    return (
        <>
            <div className="flex bg-zinc-900 w-full h-24 fixed pt-8">
                <div className="fixed w-64 border-2 border-white rounded-md p-2 bg-slate-50 text-black">
                    Filters
                </div>
                <Navbar className='fixed py-0 px-4 pl-72'>
                    <NavbarSection>
                        <NavbarItem href="/matrix/food" current={pathname.startsWith('/matrix/food')}>Food</NavbarItem>
                        <NavbarItem href="/matrix/sleep" current={pathname.startsWith('/matrix/sleep')}>Sleep</NavbarItem>
                        <NavbarItem href="/matrix/activity" current={pathname.startsWith('/matrix/activity')}>Activity</NavbarItem>
                    </NavbarSection>
                </Navbar>
            </div>
            <div className='pt-28 pl-72 w-full'>{children}</div>
        </>
    )
}

export default MatrixLayout
