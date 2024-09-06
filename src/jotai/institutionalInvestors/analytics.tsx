// Types
import { ObservationProps, TrendingStatsProps } from '@/types/institutionalInvestors/analytics'
// State Management
import { atom } from 'jotai'

export const financialDueDiligenceKeyMetricsAtom = atom<TrendingStatsProps[]>([
    { name: 'Revenue', value: '$356m', change: '+4.75%', changeType: 'positive' },
    { name: 'Cost of goods sold', value: '$112m', change: '+4.00%', changeType: 'negative' },
    { name: 'Operating expenses', value: '$92m', change: '-2.25%', changeType: 'positive' },
    { name: 'EBITDA', value: '$143m', change: '+10.25%', changeType: 'postive' },
]) 

export const financialDueDiligenceObservationsAtom = atom<ObservationProps[]>([
    {
        id: 5,
        name: 'Declining EBITDA',
        status: 'Red flag',
        observation: 'EBITDA has declined an average of 8% monthly over the past 3 months.',
        date: 'June 10, 2023',
        dateTime: '2023-06-10T00:00Z',
    },
    {
        id: 1,
        name: 'Redundant overhead',
        status: 'Potential adjustment',
        observation: 'At least 17 backend roles identified as redundant post-acquisition.',
        date: 'March 17, 2023',
        dateTime: '2023-03-17T00:00Z',
    },
    {
        id: 2,
        name: 'Unclassified expense',
        status: 'Potential adjustment',
        observation: 'Aug 17, 2024 has a one-time expense of $760k.',
        date: 'May 5, 2023',
        dateTime: '2023-05-05T00:00Z',
    },
    {
        id: 3,
        name: 'Consultant fees',
        status: 'Potential adjustment',
        observation: 'Paid Courtney Henry $30k for IT servies in January, February, and March of 2024.',
        date: 'May 25, 2023',
        dateTime: '2023-05-25T00:00Z',
    },
    {
        id: 4,
        name: 'GL Detail Aug-2024',
        status: 'Observation',
        observation: 'Missing general ledger detail for August 2024.',
        date: 'June 7, 2023',
        dateTime: '2023-06-07T00:00Z',
    }
])