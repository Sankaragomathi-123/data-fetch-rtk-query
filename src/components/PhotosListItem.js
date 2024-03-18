import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRemovePhotosMutation } from "../store";
import "./style.css";

export default function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotosMutation();
  console.log(results, "REM");

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className=" image-container">
      <img src={photo?.url} alt="photoList" className="image" />
      <button
        className="delete-icon"
        onClick={handleRemovePhoto}
        style={{ border: "1px solid  lightgray", padding: "5px 10px" }}>
        <RiDeleteBin5Line />
      </button>
    </div>
  );
}
