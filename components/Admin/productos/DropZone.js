import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {  ContainerDrops, DropZones, Thumb, ThumbsContainer } from "./dropZoneStyles";
import {useAlert} from 'react-alert'


export const DropZone = ({files,setFiles}) => {
  // const [files, setFiles] = useState([]);
  const alert = useAlert()
  const maxSize = 3000000;
  const { getRootProps, getInputProps, fileRejections,isDragActive } = useDropzone({
    maxFiles:3,
    accept: "image/*",
     minSize:0,
     maxSize,
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
  useEffect(() => {
    if(fileRejections.length > 0 ){
      let error = fileRejections[0].errors[0].code
      let msg = ''
      if(error === 'file-too-large'){
         msg = "La imagen es demasiado pesada"
      }
      if (error === "too-many-files") {
        msg = "Maximo numero de imagenes excedido";
      }
      alert.error(msg)
    }
  }, [fileRejections])
  

  return (
    <ContainerDrops>
      <DropZones {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Arraste las imagenes aqui, o presione click para agregar <strong>Max 3mb</strong></p>
      </DropZones>
      <ThumbsContainer>{thumbs}</ThumbsContainer>
     
    </ContainerDrops>
  );
}


