import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import ExpandedItem from "./ExpandedItem";
import { useRemoveAlbumsMutation } from "../store/index";
import PhotoList from "./PhotoList";
export default function AlbumListItem({ album }) {
  const [removeAlbums, results] = useRemoveAlbumsMutation();

  const handleRemoveAlbum = () => {
    removeAlbums(album);
  };
  if (results.isLoading) {
    return <div>Loading </div>;
  }

  const header = (
    <div style={{ display: "flex", gap: "1rem", margin: "1rem" }}>
      <div>{album.title}</div>
      <button
        style={{ border: "1px solid  lightgray", padding: "5px 10px" }}
        onClick={handleRemoveAlbum}>
        <RiDeleteBin5Line />
      </button>
    </div>
  );
  return (
    <div style={{ margin: "1rem 1rem 1rem 3rem" }}>
      <ExpandedItem header={header}>
        <PhotoList album={album} />
      </ExpandedItem>
    </div>
  );
}
