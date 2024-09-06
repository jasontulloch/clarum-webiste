import { useEffect } from 'react';
// State Management
import { useAtom, useSetAtom } from 'jotai';
import {
  isShowNotificationAtom,
  notificationHeaderAtom,
  notificationDescriptionAtom,
  notificationTypeAtom,
} from '@/jotai/notifications/notification';

export const useAutoHideNotification = () => {

    const [isShowNotification, setIsShowNotification] = useAtom(isShowNotificationAtom);
    const [notificationType, setNotificationType] = useAtom(notificationTypeAtom);

    const [notificationHeader, setNotificationHeader] = useAtom(notificationHeaderAtom);
    const [notificationDescription, setNotificationDescription] = useAtom(notificationDescriptionAtom);

    useEffect(() => {
        if (isShowNotification && notificationType !== 'Warning') {
            const timeout = setTimeout(() => {
                setIsShowNotification(false);
                setNotificationHeader('');
                setNotificationDescription('');
                setNotificationType('Success');
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [isShowNotification, notificationType]);

    return {
        isShowNotification,
        notificationType,
        notificationHeader,
        notificationDescription,
        setIsShowNotification,
        setNotificationHeader,
        setNotificationDescription,
        setNotificationType,
      };
};
