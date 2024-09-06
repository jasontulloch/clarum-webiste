import React, { useState } from 'react';
// Internal Components
import ScreenLayout from '@/components/Containers/ScreenLayout/ScreenLayout';
import LeftLabelWithDescriptionToggle from '@/components/Forms/Toggles/LeftLabelWithDescriptionToggle/LeftLabelWithDescriptionToggle';
import SimpleSectionHeading from '@/components/Headings/SectionHeadings/SimpleSectionHeading/SimpleSectionHeading';

const InstitutionalInvestorsNotificationsScreen = () => {

    const [notificationSettings, setNotificationSettings] = useState([
        { 
            section: "Documents & Dataroom",
            content: [
                { header: "Uploads", description: "Notify me when a new file is uploaded", isActive: true },
                { header: "Overwrites", description: "Notify me when a file is overwritten", isActive: true },
                { header: "Deletes", description: "Notify me when a file is removed", isActive: true },
                { header: "New connection", description: "Notify me when a dataroom connection is created", isActive: true },
                { header: "Broken connection", description: "Notify me when a dataroom connection breaks", isActive: true },
            ]
        },
        {
            section: "Analytics",
            content: [
                { header: "Key metrics", description: "Notify me when key metrics are updated", isActive: true },
                { header: "Red flags", description: "Notify me when red flags are discovered", isActive: true },
                { header: "Potential adjustments", description: "Notify me when potential adjustments are discovered", isActive: true },
                { header: "Observation", description: "Notify me when an observation is made", isActive: true },
            ]
        },
        {
            section: "Reports",
            content: [
                { header: "Due diligence reports", description: "Notify me when Clarum AI generates responses to due diligence questions", isActive: true },
                { header: "Models", description: "Notify me when Clarum AI generates new models", isActive: true },
                { header: "Reports", description: "Notify me when Clarum AI generates reports", isActive: true },
            ]
        }
    ]) 

    const handleIsNotificationActive = (sectionIndex: number, itemIndex: number, newValue: boolean) => {
        const updatedSettings = [...notificationSettings];
        updatedSettings[sectionIndex].content[itemIndex].isActive = newValue;
        setNotificationSettings(updatedSettings);
    }

    return (
        <ScreenLayout>
            <div className="mt-2">
                <SimpleSectionHeading header={'Notification settings'} size={'h1'} />
                {notificationSettings?.map((setting, sectionIndex) => {
                    return (
                        <div className="mb-10">
                            <SimpleSectionHeading header={setting.section} size={'h3'} />
                            {setting?.content?.map((item, itemIndex) => {
                                return (
                                    <LeftLabelWithDescriptionToggle 
                                        header={item.header}
                                        description={item.description}
                                        isActive={item.isActive}
                                        setIsActive={(newValue: boolean) => handleIsNotificationActive(sectionIndex, itemIndex, newValue)}
                                        isLast={itemIndex + 1 === setting.content.length}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </ScreenLayout>
    )
}

export default InstitutionalInvestorsNotificationsScreen;