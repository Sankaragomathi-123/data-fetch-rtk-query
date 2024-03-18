import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

// FETCH USERS
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3001/users");

  return response.data;
});

export { fetchUsers };

// ADD USER LIST
const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3001/users", {
    name: faker.person.fullName(),
  });
  return response.data;
});
export { addUser };

// DELETE USER
const deleteUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`http://localhost:3001/users/${user.id}`);

  return user;
});

export { deleteUser };
