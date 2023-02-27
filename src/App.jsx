import { useState } from 'react'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import uuid from 'react-uuid'

import './App.css'

function App() {
  const [note, setNote] = useState([])
  function addNote(){
    const NoteInfo={
      id:uuid(),
      title:'title',
      body:'this is the list',
      lastModified: Date.now()
    }
    setNote([NoteInfo, ...note])
  }
  function DeleteNote(id){
    setNote(prevnote=>
      prevnote.filter(el=>el.id!==id))
    // console.log(id)
  }


  return (
    <div className="App flex">
      <SideBar Addnote={addNote} Notes={note} DeleteNote={DeleteNote}/>
      <Main/>
    
    </div>
  )
}

export default App
