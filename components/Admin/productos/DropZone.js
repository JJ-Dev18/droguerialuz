import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {  ContainerDrops, DropZones, Thumb, ThumbsContainer } from "./dropZoneStyles";



export const DropZone = ({files,setFiles}) => {
  // const [files, setFiles] = useState([]);
  
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles:3,
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <Thumb  key={file.name}>
      <div >
        <img src={file.preview} />
      </div>
    </Thumb>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <ContainerDrops>
      <DropZones {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Arraste las imagenes aqui, o presione click para agregar </p>
      </DropZones>
      <ThumbsContainer >{thumbs}</ThumbsContainer>
    </ContainerDrops>
  );
}


