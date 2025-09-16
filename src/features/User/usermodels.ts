export interface User {
  id: number;
  username: string;
  password: string;
}

//version pour l'insertion sans id 
export interface NewUser {
    username: string;
    password: string;
}