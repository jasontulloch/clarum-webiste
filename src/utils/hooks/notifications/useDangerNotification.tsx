import { isShowNotificationAtom, notificationDescriptionAtom, notificationHeaderAtom, notificationTypeAtom } from '@/jotai/notifications/notification';
import { useSetAtom } from 'jotai';

export const useDangerNotification = () =>  {
    // Global State
    const setIsShowNotification = useSetAtom(isShowNotificationAtom);
    const setNotificationHeader = useSetAtom(notificationHeaderAtom);
    const setNotificationDescription = useSetAtom(notificationDescriptionAtom);
    const setNotificationType = useSetAtom(notificationTypeAtom);
  
    const triggerDangerNotification = (
        header: string,
        description: string
    ) => {
        setIsShowNotification(true)
        setNotificationHeader(header)
        setNotificationDescription(description)
        setNotificationType('Danger')
    };

    return {
        triggerDangerNotification,
    };
}
