// Institutional Investor Screens
import DashboardScreen from '@/screens/InstitutionalInvestors/Dashboard';
import PortfolioScreen from '@/screens/InstitutionalInvestors/Portfolio';
import DocumentsScreen from '@/screens/InstitutionalInvestors/Documents';
import AnalyticsScreen from '@/screens/InstitutionalInvestors/Analytics';
import ReportsScreen from '@/screens/InstitutionalInvestors/Reports';
import SettingsScreen from '@/screens/InstitutionalInvestors/Settings';
import NotificationsScreen from '@/screens/InstitutionalInvestors/Notifications';
import AddCompanyScreen from '@/screens/InstitutionalInvestors/AddCompany';
// Tailwind
import { BellIcon, ChartPieIcon, Cog6ToothIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, DocumentTextIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

const institutionalInvestorScreens = [
    { name: "Dashboard", component: <DashboardScreen />, path: '/dashboard', icon: HomeIcon, position: 'sideappbar', isIncludeOnLanding: true },
    { name: 'Portfolio', component: <PortfolioScreen />, path: '/portfolio', icon: FolderIcon, position: 'sideappbar', isIncludeOnLanding: true  },
    { name: 'Add a company', component: <AddCompanyScreen />, path: '/add-company', icon: PlusCircleIcon, position: 'sideappbar', isIncludeOnLanding: true  },
    { name: 'Documents', component: <DocumentsScreen />, path: '/documents', icon: DocumentDuplicateIcon, position: 'sideappbar', isIncludeOnLanding: false  },
    { name: 'Analytics', component: <AnalyticsScreen />, path: '/analytics', icon: ChartPieIcon, position: 'sideappbar', isIncludeOnLanding: false },
    { name: 'Reports', component: <ReportsScreen />, path: '/reports', icon: DocumentTextIcon, position: 'sideappbar', isIncludeOnLanding: false },
    { name: 'Settings', component: <SettingsScreen />, path: '/settings', icon: Cog6ToothIcon, position: '', isIncludeOnLanding: true },
    { name: 'Notifications', component: <NotificationsScreen />, path: '/notifications', icon: BellIcon, position: '', isIncludeOnLanding: true },
];

export default {
    institutionalInvestorScreens: institutionalInvestorScreens
}