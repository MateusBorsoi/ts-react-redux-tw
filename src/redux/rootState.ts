import { AuthState } from "../types/user/authTypes";
import { UserState } from "../types/user/userTypes";

export interface RootState {
    auth: AuthState
    user: UserState

}