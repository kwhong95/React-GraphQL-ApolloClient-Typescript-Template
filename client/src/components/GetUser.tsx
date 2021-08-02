import React, {useEffect} from "react";
import { useQuery, gql } from "@apollo/client";
import {LOAD_USERS, User} from "../graphQL/Queries";

export default function GetUser() {

  const { error, loading, data } = useQuery<User>(LOAD_USERS);

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <></>
  )
}