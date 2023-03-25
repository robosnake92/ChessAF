import Head from 'next/head';
import Image from 'next/image';
import whitePawn from '../public/pieces/white-pawn.png';
import { useEffect, useState } from 'react';

export default function Home() {
  const [grabbedPiece, setGrabbedPiece] = useState(null);
  const [pieceLocation, setPieceLocation] = useState({
    whitePawn1: { rank: "A", file: "2", component: <Pawn pieceName='whitePawn1' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn2: { rank: "B", file: "2", component: <Pawn pieceName='whitePawn2' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn3: { rank: "C", file: "2", component: <Pawn pieceName='whitePawn3' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn4: { rank: "D", file: "2", component: <Pawn pieceName='whitePawn4' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn5: { rank: "E", file: "2", component: <Pawn pieceName='whitePawn5' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn6: { rank: "F", file: "2", component: <Pawn pieceName='whitePawn6' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn7: { rank: "G", file: "2", component: <Pawn pieceName='whitePawn7' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn8: { rank: "H", file: "2", component: <Pawn pieceName='whitePawn8' setGrabbedPiece={setGrabbedPiece} /> },
  });

  useEffect(() => {
    console.log('pieceLocation updated: ', pieceLocation);
  }, [pieceLocation])

  useEffect(() => {
    console.log('grabbedPiece updated: ', grabbedPiece);
  }, [grabbedPiece])

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.target.id;

    if (!!id) {
      const rank = id.split("")[0];
      const file = id.split("")[1];
      setPieceLocation(pieceLocation => ({ ...pieceLocation, [grabbedPiece]: { ...pieceLocation[grabbedPiece], rank: rank, file: file } }));
    }
  }

  const possibleFiles = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const Files = possibleFiles.map(fileNumber => {
    const possibleRanks = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const squares = possibleRanks.map(rank => {
      // Check each possible piece
      // TODO: once we find the piece, we don't have to filter anymore. Maybe check if there's a function that stops once the object is found?
      const piece = Object.keys(pieceLocation).filter(pieceKey => {
        const pieceState = pieceLocation[pieceKey];
        return `${pieceState.rank}${pieceState.file}` === `${rank}${fileNumber}`;
      });

      let pieceComponent = null
      if (typeof piece !== undefined && piece.length !== 0) {
        pieceComponent = pieceLocation[piece].component;
      }
      
      return <div
        className='square'
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        id={`${rank}${fileNumber}`}
        key={`${rank}${fileNumber}`}
      >{pieceComponent}</div>
    })

    return <File key={`file-${fileNumber}`} file={fileNumber} pieceLocation={pieceLocation}>{squares}</File>;
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

function Pawn(props) {
  const pieceName = props.pieceName;
  const setGrabbedPiece = props.setGrabbedPiece;

  const handleDragEnd = (event) => {
  }

  const handleDragStart = (event) => {
    event.dataTransfer.effectAllowed = "move";
    setGrabbedPiece(pieceName);
  }

  return (
    <Image
      className={`piece grab`}
      src={whitePawn}
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      alt="white pawn"
    />
  )
}