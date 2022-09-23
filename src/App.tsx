import React,{useState} from 'react';
import  Col  from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import CreateNotes from './components/CreateNotes';
import Header from './components/Header'
import NotesList from './components/NotesList';
import {Note} from './models/note.model'
function App() {
  // typescript automatically detetct the type here
  const [name,setName] = useState("subham")
  // to define the type of notes we can make use of angular bracket 
  const [notes,setNotes] = useState<Note[]>([{
    id : new Date().toString(),
    title : "meetings",
    text : "Schedule meeting with UI/UX Team",
    color : "#dfdfdf",
    date : (new Date()).toString()
  }])

  
  return (
    <>
      <Header />
      <Container className="mt-5">
          <Row>
            <Col>
              <NotesList notes={notes} setNotes={setNotes}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <CreateNotes notes={notes} setNotes={setNotes}/>
            </Col>
          </Row>
      </Container>
    </>
  );
}

export default App;
