
export interface AuthData {
    email: string;
    password: string;
}

export interface AuthState {
    isLogged: boolean;
    logindata: AuthData | null;
}