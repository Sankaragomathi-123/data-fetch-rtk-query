import React from "react";
import { useThunk } from "../hooks/user-thunk";
import { deleteUser } from "../thunk/fetchUsers";
import ExpandedItem from "./ExpandedItem";
import AlbumList from "./AlbumList";

export default function UsersListItem({ user }) {
  const [deleteUserList, loading, error] = useThunk(deleteUser);
  const handleDeleteUser = () => {
    deleteUserList(user);
  };

  const header = (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
      }}>
      <ul>
        <li> {user.name} </li>
      </ul>
      <button onClick={handleDeleteUser}>{loading ? "loading" : "X"}</button>
      {error && <div>{error} </div>}
    </div>
  );
  return (
    <ExpandedItem header={header}>
      <AlbumList user={user} />
    </ExpandedItem>
  );
}
