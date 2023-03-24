import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import whiteKnight from '../public/pieces/wn.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <div id='chess-board'>
          <File file="8"/>
          <File file="7"/>
          <File file="6"/>
          <File file="5"/>
          <File file="4"/>
          <File file="3"/>
          <File file="2"/>
          <File file="1"/>
        </div>
      </main>
    </>
  )
}

function File(props) {
  return (
    <div className='file'>
      <div className='square' id={`A${props.file}`}><Knight /></div>
      <div className='square' id={`B${props.file}`}></div>
      <div className='square' id={`C${props.file}`}></div>
      <div className='square' id={`D${props.file}`}></div>
      <div className='square' id={`E${props.file}`}></div>
      <div className='square' id={`F${props.file}`}></div>
      <div className='square' id={`G${props.file}`}></div>
      <div className='square' id={`H${props.file}`}></div>
    </div>
  )
}

function Knight() {
  console.log(whiteKnight);

  return (
    <Image src={whiteKnight}/>
  )
}