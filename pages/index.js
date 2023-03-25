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
          <File file="8" pieceLocation={`${pieceLocation.rank}${pieceLocation.file}`}><Pawn /></File>
          <File file="7" pieceLocation={`${pieceLocation.rank}${pieceLocation.file}`}><Pawn /></File>
          <File file="6" pieceLocation={`${pieceLocation.rank}${pieceLocation.file}`}><Pawn /></File>
          <File file="5" pieceLocation={`${pieceLocation.rank}${pieceLocation.file}`}><Pawn /></File>
          <File file="4" pieceLocation={`${pieceLocation.rank}${pieceLocation.file}`}><Pawn /></File>
          <File file="3" pieceLocation={`${pieceLocation.rank}${pieceLocation.file}`}><Pawn /></File>
          <File file="2" pieceLocation={`${pieceLocation.rank}${pieceLocation.file}`}><Pawn /></File>
          <File file="1" pieceLocation={`${pieceLocation.rank}${pieceLocation.file}`}><Pawn /></File>
        </div>
      </main>
    </>
  )
}

function File(props) {
  const piece = props.children;
  const pieceLocation = props.pieceLocation;
  return (
    <div className='file'>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`A${props.file}`}>{pieceLocation === `A${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`B${props.file}`}>{pieceLocation === `B${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`C${props.file}`}>{pieceLocation === `C${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`D${props.file}`}>{pieceLocation === `D${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`E${props.file}`}>{pieceLocation === `E${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`F${props.file}`}>{pieceLocation === `F${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`G${props.file}`}>{pieceLocation === `G${props.file}` && piece}</div>
      <div className='square' onDragOver={handleDragOver} onDrop={handleDrop} id={`H${props.file}`}>{pieceLocation === `H${props.file}` && piece}</div>
    </div>
  )
}

function Pawn() {
  isGrabbed = false;

  return (
    <Image 
      className={`piece${isGrabbed ? " grabbing" : " grab"}`}
      src={whitePawn} 
      draggable
    />
  )
}