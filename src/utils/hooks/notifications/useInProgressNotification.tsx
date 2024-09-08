import { isShowNotificationAtom, notificationHeaderAtom, notificationTypeAtom } from '@/jotai/notifications/notification';
import { useSetAtom } from 'jotai';
import { useState } from 'react';

export const useInProgressNotification = () =>  {
    // Global State
    const setIsShowNotification = useSetAtom(isShowNotificationAtom);
    const setNotificationHeader = useSetAtom(notificationHeaderAtom);
    const setNotificationType = useSetAtom(notificationTypeAtom);
  
    const triggerInProgressNotification = (
        initialHeader: string,
        initialType: 'Success' | 'Warning' | 'Danger',
        successHeader: string,
        successType: 'Success' | 'Warning' | 'Danger',
        delay: number = 3000
    ) => {
        setNotificationHeader(initialHeader);
        setNotificationType(initialType);
        setIsShowNotification(true);

        setTimeout(() => {
        setNotificationHeader(successHeader);
        setNotificationType(successType);
        setIsShowNotification(true);
        }, delay);
    };

    return {
        triggerInProgressNotification,
    };
}
