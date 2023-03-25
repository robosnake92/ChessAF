import Head from 'next/head'
import Image from 'next/image'
import whitePawn from '../public/pieces/white-pawn.png'
import { useState } from 'react';

export default function Home() {
  const [pieceLocation, setPieceLocation] = useState({rank: "A", file: "1"});

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

  const possibleFiles = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const Files = possibleFiles.map(fileNumber => {
    const possibleRanks = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const squares = possibleRanks.map(rank => {
      return <div 
        className='square' 
        onDragOver={handleDragOver} 
        onDrop={handleDrop} 
        id={`${rank}${fileNumber}`}>{`${pieceLocation.rank}${pieceLocation.file}` === `${rank}${fileNumber}` && <Pawn />}</div>;
    })

    return <File file={fileNumber} pieceLocation={pieceLocation} setPieceLocation={setPieceLocation}>{squares}</File>;
  })

  return (
    <>
      <main>
        <div id='chess-board'>
          {Files}
        </div>
      </main>
    </>
  )
}

function File(props) {
  return (
    <div className='file'>
      {props.children}
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