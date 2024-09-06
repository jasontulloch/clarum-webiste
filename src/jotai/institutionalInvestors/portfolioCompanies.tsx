// Types
import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany'
// State Management
import { atom } from 'jotai'

export const portfolioCompanyAtom = atom<PortfolioCompanyProps>({
    id: 0,
    name: '',
    logo: '',
    initial: '',
    path: ''
})

export const portfolioCompaniesAtom = atom<PortfolioCompanyProps[]>([
    { id: 1, name: 'ABC, Inc.', logo: '', path: '#', initial: 'AB' },
    { id: 2, name: 'XYC Corp.', logo: '', path: '#', initial: 'XY' },
    { id: 3, name: 'Shell Corp.', logo: '', path: '#', initial: 'SC' },
    { id: 4, name: 'Manufacturing Inc.', logo: '', path: '#', initial: 'MI' },
])
