import React from 'react';
// Internal Components
import SidebarWithHeader from '@/components/Sidebars/SiderbarWithHeader';

const ScreenLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <SidebarWithHeader />
      <div className="mt-2 ml-0 mr-0 md:ml-4 md:mr-4 lg:ml-[19rem] lg:mr-8 flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default ScreenLayout;