// Types
import { NewCompanyProps, PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany'
// Internal Lists
import industriesList from '@/lists/industriesList'
// State Management
import { atom } from 'jotai'



const newPortfolioCompany = {
    name: '',
    industry: industriesList[0].value,
    transactionType: '',
    about: '',
    team: [],
    dueDiligenceProviders: []
}

export const newPorfolioCompanyAtom = atom<NewCompanyProps>({
    ...newPortfolioCompany
})

export const portfolioCompanyAtom = atom<PortfolioCompanyProps>({
    id: 0,
    logo: '',
    initial: '',
    path: '',
    ...newPortfolioCompany
})

export const portfolioCompaniesAtom = atom<PortfolioCompanyProps[]>([
    { id: 1, name: 'ABC, Inc.', industry: 'Construction', transactionType: 'Purchase', about: 'International construction company focused on buidling skyscrappers.', team: [], dueDiligenceProviders: [], logo: '', path: '', initial: 'AB' },
    { id: 2, name: 'XYC Corp.', industry: 'Food & Beverage', transactionType: 'Sale', about: 'Canned goods producer and distributor.', team: [], dueDiligenceProviders: [], logo: '', path: '', initial: 'XY' },
    { id: 3, name: 'Shell Corp.', industry: 'Manufacturing', transactionType: 'Purchase', about: 'Owns and operates 17 factories worldwide.', team: [], dueDiligenceProviders: [], logo: '', path: '', initial: 'SC' },
    { id: 4, name: 'Manufacturing Inc.', industry: 'Professional Services', transactionType: 'Sale', about: 'Consultancy firm specializing in business valuation.', team: [], dueDiligenceProviders: [], logo: '', path: '', initial: 'MI' },
])
