import Head from 'next/head'
import Image from 'next/image'
import whitePawn from '../public/pieces/white-pawn.png'
import { useState } from 'react';

export default function Home() {
  const [pieceLocation, setPieceLocation] = useState({rank: "A", file: "1"});

  return (
    <>
      <main>
        <div id='chess-board'>
          <File file="8" pieceLocation={pieceLocation} setPieceLocation={setPieceLocation}><Pawn /></File>
          <File file="7" pieceLocation={pieceLocation} setPieceLocation={setPieceLocation}><Pawn /></File>
          <File file="6" pieceLocation={pieceLocation} setPieceLocation={setPieceLocation}><Pawn /></File>
          <File file="5" pieceLocation={pieceLocation} setPieceLocation={setPieceLocation}><Pawn /></File>
          <File file="4" pieceLocation={pieceLocation} setPieceLocation={setPieceLocation}><Pawn /></File>
          <File file="3" pieceLocation={pieceLocation} setPieceLocation={setPieceLocation}><Pawn /></File>
          <File file="2" pieceLocation={pieceLocation} setPieceLocation={setPieceLocation}><Pawn /></File>
          <File file="1" pieceLocation={pieceLocation} setPieceLocation={setPieceLocation}><Pawn /></File>
        </div>
      </main>
    </>
  )
}

function File(props) {
  const piece = props.children;
  const pieceLocation = props.pieceLocation;
  const setPieceLocation = props.setPieceLocation

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.target.id;

    if(!!id){
      const rank = id.split("")[0];
      const file = id.split("")[1];
      setPieceLocation({rank: rank, file: file});
    }
  }

  return (
    <div className='file'>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`A${props.file}`}>{`${pieceLocation.rank}${pieceLocation.file}` === `A${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`B${props.file}`}>{`${pieceLocation.rank}${pieceLocation.file}` === `B${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`C${props.file}`}>{`${pieceLocation.rank}${pieceLocation.file}` === `C${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`D${props.file}`}>{`${pieceLocation.rank}${pieceLocation.file}` === `D${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`E${props.file}`}>{`${pieceLocation.rank}${pieceLocation.file}` === `E${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`F${props.file}`}>{`${pieceLocation.rank}${pieceLocation.file}` === `F${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`G${props.file}`}>{`${pieceLocation.rank}${pieceLocation.file}` === `G${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`H${props.file}`}>{`${pieceLocation.rank}${pieceLocation.file}` === `H${props.file}` && piece}</div>
    </div>
  )
}

function Pawn() {
  
  const handleDragEnd = (event) => {
  }

  const handleDragStart = (event) => {
    event.dataTransfer.effectAllowed = "move";
  }

  return (
    <Image 
      className={`piece grab`}
      src={whitePawn} 
      draggable
      onDragEnd = {handleDragEnd}
      onDragStart = {handleDragStart}
      alt = "white pawn"
    />
  )
}