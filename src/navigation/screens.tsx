// Institutional Investor Screens
import DashboardScreen from '@/screens/InstitutionalInvestors/Dashboard/Dashboard';
import PortfolioScreen from '@/screens/InstitutionalInvestors/Portfolio/Portfolio';
import DocumentsScreen from '@/screens/InstitutionalInvestors/Documents/Documents';
import AnalyticsScreen from '@/screens/InstitutionalInvestors/Analytics/Analytics';
import ReportsScreen from '@/screens/InstitutionalInvestors/Reports/Reports';
import SettingsScreen from '@/screens/InstitutionalInvestors/Settings/Settings';
import NotificationsScreen from '@/screens/InstitutionalInvestors/Notifications/Notifications';
// Tailwind
import { BellIcon, ChartPieIcon, Cog6ToothIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const institutionInvestorScreens = [
    { name: "Dashboard", component: <DashboardScreen />, path: '/dashboard', icon: HomeIcon, position: 'sideappbar' },
    { name: 'Portfolio', component: <PortfolioScreen />, path: '/portfolio', icon: FolderIcon, position: 'sideappbar' },
    { name: 'Documents', component: <DocumentsScreen />, path: '/documents', icon: DocumentDuplicateIcon, position: 'sideappbar' },
    { name: 'Analytics', component: <AnalyticsScreen />, path: '/analytics', icon: ChartPieIcon, position: 'sideappbar' },
    { name: 'Reports', component: <ReportsScreen />, path: '/reports', icon: DocumentTextIcon, position: 'sideappbar' },
    { name: 'Settings', component: <SettingsScreen />, path: '/settings', icon: Cog6ToothIcon, position: '' },
    { name: 'Notifications', component: <NotificationsScreen />, path: '/notifications', icon: BellIcon, position: '' },
];

export default {
    institutionInvestorScreens: institutionInvestorScreens
}