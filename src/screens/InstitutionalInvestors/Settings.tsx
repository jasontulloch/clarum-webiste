import React from 'react';
// Internal Components
import ScreenLayout from '@/components/Containers/ScreenLayout';
import VerticalNavigationList from '@/components/Navigation/VerticalNavigationList';
import SimpleSectionHeading from '@/components/Headings/SectionHeadings/SimpleSectionHeading';

const InstitutionalInvestorsSettingsScreen = () => {

    const settingsNavigationList = [
        { name: 'Account', path: '/account', isActive: false, isSetup: false },
        { name: 'Notifications', path: '/notifications', isActive: false, isSetup: true },
        { name: 'Deleted Items', path: '/deleted-items', isActive: false, isSetup: false },
        { name: 'About', path: '/about-clarum', isActive: false, isSetup: false },
    ]

    return (
        <ScreenLayout>
            <SimpleSectionHeading header={'Settings'} size={'h1'} />
            <VerticalNavigationList list={settingsNavigationList} />
        </ScreenLayout>
    )
}

export default InstitutionalInvestorsSettingsScreen;