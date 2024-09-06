// State Management
import { atom } from 'jotai'

export const isShowNotificationAtom = atom<boolean>(false)
export const notificationHeaderAtom = atom<string>("")
export const notificationDescriptionAtom = atom<string>("")
export const notificationTypeAtom = atom<'Success' | 'Warning' | 'Danger'>("Success")