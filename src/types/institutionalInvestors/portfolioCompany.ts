export type NewCompanyProps = {
    name: string,
    industry: string,
    transactionType: string,
    about: string,
    team: any[],
    dueDiligenceProviders: any[]
}

export type PortfolioCompanyProps = {
    id: number,
    logo: string,
    initial: string,
    path: string,
} & NewCompanyProps