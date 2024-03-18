import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, deleteUser } from "../thunk/fetchUsers";
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/user-thunk";
import UsersListItem from "./UsersListItem";

export default function UserList() {
  const dispatch = useDispatch();
  const [dataFetchUsers, fetchIsLoading, fetchError] = useThunk(fetchUsers);
  const [addUserList, addUserLoading, addUserError] = useThunk(addUser);
  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dataFetchUsers();
  }, [dataFetchUsers]);

  let content;
  if (fetchIsLoading) {
    content = <div>Loading... </div>;
  } else if (fetchError) {
    content = <div>{fetchError} </div>;
  } else {
    content = data?.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }
  const handleAddUser = () => {
    addUserList();
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "5rem", margin: "2rem" }}>
        <h1>USERS </h1>
        <button
          onClick={handleAddUser}
          disabled={addUserLoading}
          style={{ border: "1px solid lightgray", padding: "5px 10px" }}>
          {!addUserLoading ? "Add user" : "Loading..."}
        </button>
        {addUserError && "Error creating user..."}
      </div>
      {content}
    </div>
  );
}
