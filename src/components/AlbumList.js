import React from "react";
import { useFetchAlbumsQuery, useAddAlbumsMutation } from "../store/index";
import ExpandedItem from "./ExpandedItem";
import AlbumListItem from "./AlbumListItem";

export default function AlbumList({ user }) {
  const { data, loading, error } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumsMutation();
  console.log(results, "RES");

  let content;
  if (loading) {
    content = <div>Loading... </div>;
  } else if (error) {
    content = <div>Error in Albums </div>;
  } else {
    content = data?.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }
  const handleAddalbums = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "3rem", margin: "1rem 1rem 1rem 9rem", alignItems:'center' }}>
        <div>Album | for {user.name}</div>
        <button
          onClick={handleAddalbums}
          style={{ border: "1px solid lightgray", padding: "5px 10px" }}>
          + add albums
        </button>
      </div>
      {content}
    </div>
  );
}
