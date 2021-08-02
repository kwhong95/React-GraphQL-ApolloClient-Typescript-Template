import { gql } from "@apollo/client";

export interface UserInfo {
  id : number;
  firstName: string;
  email: string;
  password: string;
}

export interface LoadUsers {
  getAllUsers: UserInfo[];
}

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      email
      password
    }
  }
`