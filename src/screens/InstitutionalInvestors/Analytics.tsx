import React from 'react';
// State Management
import { useAtomValue } from 'jotai';
import { financialDueDiligenceKeyMetricsAtom, financialDueDiligenceObservationsAtom } from '@/jotai/institutionalInvestors/analytics';
// Internal Components
import ScreenLayout from '@/components/Containers/ScreenLayout';
import TrendingStatsDisplay from '@/components/DataDisplays/Stats/TrendingStatsDisplay';
import SimpleSectionHeading from '@/components/Headings/SectionHeadings/SimpleSectionHeading';
import BadgesButtonAndActionsStackedList from '@/components/Lists/Stacked/BadgesButtonandActionsStackedList';

const InstitutionalInvestorsAnalyticsScreen = () => {

    const financialDueDiligenceKeyMetrics = useAtomValue(financialDueDiligenceKeyMetricsAtom)
    const financialDueDiligenceObservations = useAtomValue(financialDueDiligenceObservationsAtom)

    return (
        <ScreenLayout>
            <SimpleSectionHeading header={'Financial due diligence'} size={'h1'} />
            <SimpleSectionHeading header={'Key metrics (Sep-2023 - Aug-2024)'} size={'h3'} />
            <TrendingStatsDisplay stats={financialDueDiligenceKeyMetrics} />
            <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="mt-12 h-full w-full">
                    <SimpleSectionHeading header={'Observations'} size={'h3'} />
                    <BadgesButtonAndActionsStackedList list={financialDueDiligenceObservations} />
                </div>
            </div>
        </ScreenLayout>
    )
}

export default InstitutionalInvestorsAnalyticsScreen;