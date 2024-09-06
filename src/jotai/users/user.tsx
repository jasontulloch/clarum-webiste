// Types
import { UserProps } from '@/types/users/user'
// State Management
import { atom } from 'jotai'

export const userAtom = atom<UserProps>({
    id: 0,
    firstName: 'Anton',
    lastName: 'Otaner'
})