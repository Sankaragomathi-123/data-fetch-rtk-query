import React from "react";
import { useAddPhotosMutation, useFetchPhotosQuery } from "../store";
import { RiHandCoinFill } from "react-icons/ri";
import PhotosListItem from "./PhotosListItem";

export default function PhotoList({ album }) {
  const { data, loading, error } = useFetchPhotosQuery(album);
  const [addPhotos, addPhotosResults] = useAddPhotosMutation();
  console.log(data, "al-photo");

  const handleAddPhotos = () => {
    addPhotos(album);
  };
  let content;
  if (loading) {
    content = <p>Photos Loading... </p>;
  } else if (error) {
    content = <p>Error Photos </p>;
  } else {
    content = data?.map((photo) => {
      return <PhotosListItem photo={photo} />;
    });
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "3rem",
          margin: "1rem 1rem 1rem 9rem",
          alignItems: "center",
        }}>
        <h1>{album.title}</h1>
        <button
          onClick={handleAddPhotos}
          style={{ border: "1px solid lightgray", padding: "5px 10px" }}>
          + Add Photos
        </button>
      </div>
      <div style={{ display: "flex", gap: "3rem" }}>{content}</div>
    </div>
  );
}
