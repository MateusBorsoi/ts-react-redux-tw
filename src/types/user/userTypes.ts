export interface User {
  id: number;
  name: string;
  email: string;
  senha: string;
}

export interface UserState {
  userData: User | null;
  loading: boolean;
  error: string | null;
}
