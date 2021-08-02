import React, {useEffect, useState} from "react";
import { useQuery, gql } from "@apollo/client";
import {
  LOAD_USERS,
  UserInfo
} from "../graphQL/Queries";

export default function GetUser() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers)
    }
  }, [data])

  return (
        <div>
          {users.map((val: UserInfo) => {
            return <h1>{val.firstName}</h1>
      })}
    </div>
  )
}