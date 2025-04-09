'use client'

import { Checkbox, CheckboxField, CheckboxGroup } from '@/components/catalyst/checkbox';
import { Description, Fieldset, Label, Legend } from '@/components/catalyst/fieldset';
import { Navbar, NavbarItem, NavbarSection } from '@/components/catalyst/navbar'
import { Sidebar, SidebarHeader, SidebarLabel } from '@/components/catalyst/sidebar';
import { SidebarLayout } from '@/components/catalyst/sidebar-layout';
import { Text } from '@/components/catalyst/text';
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
                <div className="fixed w-64 pl-8 pr-2 py-2">
                    <Fieldset>
                        <Legend>Conditions</Legend>
                        <Text>Select the conditions you are suffering with.</Text>
                        <CheckboxGroup>
                            <CheckboxField>
                                <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                                <Label>Diabetes Type1</Label>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                                <Label>Diabetes Type2</Label>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                                <Label>High Blood Pressure</Label>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                                <Label>Low Blood Pressure</Label>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                                <Label>Hypo Thyroid</Label>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                                <Label>Hyper Thyroid</Label>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                                <Label>High LDL</Label>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                                <Label>Heart Arteries Blocks</Label>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                                <Label>Back Pain</Label>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                                <Label>Knee Pain</Label>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                                <Label>Joint Pains</Label>
                            </CheckboxField>
                        </CheckboxGroup>
                    </Fieldset>
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
