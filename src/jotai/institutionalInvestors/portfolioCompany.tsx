// Types
import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany'
// State Management
import { atom } from 'jotai'

export const portfolioCompanyAtom = atom({
    id: 0,
    name: '',
    logo: '',
    initial: ''
})