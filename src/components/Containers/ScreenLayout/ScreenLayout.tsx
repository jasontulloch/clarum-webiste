import React from 'react';
import styles from '@/components/Containers/ScreenLayout/ScreenLayout.module.css';
// Internal Components
import SidebarWithHeader from '@/components/Sidebars/SidebarWithHeader/SiderbarWithHeader';

const ScreenLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.container}>
      <SidebarWithHeader />
      <div className="ml-0 mr-0 md:ml-4 md:mr-4 lg:ml-[19rem] lg:mr-8 flex-1 p-4">
        {children}
      </div>
      <div className={styles.footerSpacer} />
      {/* <Footer /> */}
    </div>
  );
};

export default ScreenLayout;