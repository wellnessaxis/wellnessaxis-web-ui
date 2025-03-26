import React from 'react'
import { SidebarLayout } from '@/components/catalyst/sidebar-layout'
import ApplicationNavBar from './application-navbar'
import ApplicationSideBar from './application-sidebar'


const ApplicationLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <SidebarLayout
            navbar={
                <ApplicationNavBar/>
            }
            sidebar={
                <ApplicationSideBar/>
            }
        >
            {children}
        </SidebarLayout>
    )
}

export default ApplicationLayout