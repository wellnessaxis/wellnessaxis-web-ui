'use client'

import React from 'react'
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from '@/components/catalyst/dropdown'
import {
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarHeader,
    SidebarHeading,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
    SidebarSpacer
} from '@/components/catalyst/sidebar'
import {
    ArrowRightStartOnRectangleIcon,
    ChevronUpIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    UserIcon,
    DocumentChartBarIcon,
    SquaresPlusIcon
} from '@heroicons/react/16/solid'
import {
    QuestionMarkCircleIcon
} from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'

const ApplicationSideBar = () => {
    const pathname = usePathname();
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarItem>
                    <SidebarLabel className='text-xl'>Wellness Axis</SidebarLabel>
                </SidebarItem>
            </SidebarHeader>
            <SidebarBody>
                <SidebarSection>
                    <SidebarItem href="/matrix" current={pathname.startsWith('/matrix')}>
                        <SquaresPlusIcon />
                        <SidebarLabel>Matrix</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/assessment" current={pathname.startsWith('/assessment')}>
                        <DocumentChartBarIcon />
                        <SidebarLabel>Assessment</SidebarLabel>
                    </SidebarItem>
                    <SidebarHeading></SidebarHeading>
                    <SidebarHeading></SidebarHeading>
                    <SidebarHeading></SidebarHeading>
                    <SidebarHeading>Dimensions</SidebarHeading>
                    <SidebarItem href="/dimensions/condition" current={pathname.startsWith('/dimensions/condition')}>Condition</SidebarItem>
                    <SidebarItem href="/dimensions/food" current={pathname.startsWith('/dimensions/food')}>Food</SidebarItem>
                    <SidebarItem href="/dimensions/sleep" current={pathname.startsWith('/dimensions/sleep')}>Sleep</SidebarItem>
                    <SidebarItem href="/dimensions/activity" current={pathname.startsWith('/dimensions/activity')}>Activity</SidebarItem>
                </SidebarSection>
                <SidebarSpacer />
                <SidebarSection>
                    <SidebarItem href="/support">
                        <QuestionMarkCircleIcon />
                        <SidebarLabel>Support</SidebarLabel>
                    </SidebarItem>
                </SidebarSection>
            </SidebarBody>
            <SidebarFooter className="max-lg:hidden">
                <Dropdown>
                    <DropdownButton as={SidebarItem}>
                        <span className="flex min-w-0 items-center gap-3">
                            <UserIcon className="size-10 aspect-square rounded" />
                            <span className="min-w-0">
                                <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Travis Scott</span>
                                <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                                    @travisscott
                                </span>
                            </span>
                        </span>
                        <ChevronUpIcon />
                    </DropdownButton>
                    <DropdownMenu className="min-w-64" anchor="top start">
                        <DropdownItem href="/my-profile">
                            <UserIcon />
                            <DropdownLabel>My profile</DropdownLabel>
                        </DropdownItem>
                        <DropdownItem href="/settings">
                            <Cog8ToothIcon />
                            <DropdownLabel>Settings</DropdownLabel>
                        </DropdownItem>
                        <DropdownDivider />
                        <DropdownItem href="/privacy-policy">
                            <ShieldCheckIcon />
                            <DropdownLabel>Privacy policy</DropdownLabel>
                        </DropdownItem>
                        <DropdownItem href="/share-feedback">
                            <LightBulbIcon />
                            <DropdownLabel>Share feedback</DropdownLabel>
                        </DropdownItem>
                        <DropdownDivider />
                        <DropdownItem href="/logout">
                            <ArrowRightStartOnRectangleIcon />
                            <DropdownLabel>Sign out</DropdownLabel>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </SidebarFooter>
        </Sidebar>
    )
}

export default ApplicationSideBar