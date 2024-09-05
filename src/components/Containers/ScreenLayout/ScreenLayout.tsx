import React from 'react';
import styles from '@/components/Containers/ScreenLayout/ScreenLayout.module.css';
import SidebarWithHeader from '@/components/Sidebars/SidebarWithHeader/SiderbarWithHeader';

const ScreenLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.container}>
      <SidebarWithHeader />
      {children}
      <div className={styles.footerSpacer} />
      {/* <Footer /> */}
    </div>
  );
};

export default ScreenLayout;