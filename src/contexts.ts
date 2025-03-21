
import {createContext} from 'react'
import { USER_WITH_MULTIPLE_SUBSCRIPTION } from './mocks/user'

export const AuthContext = createContext(USER_WITH_MULTIPLE_SUBSCRIPTION) // USER_WITHOUT_SUBSCRIPTION, USER_WITH_ONE_SUBSCRIPTION, USER_WITH_MULTIPLE_SUBSCRIPTION
