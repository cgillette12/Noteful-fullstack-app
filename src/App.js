import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import UserContent from './ApiContent'




import AddNote from './NoteList/AddNote'
import AddFolder from './FolderList/AddFolder'
import HomePage from './Pages/HomePage'
import FolderPage from './Pages/FolderPage';
import NotePage from './Pages/NotePage';
import ErrorPage from './Pages/ErrorPage'
import config from './config'



export default class App extends Component {

  state = {
    folders:[],
    notes:[]
}
componentDidMount(){
 


const options = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json"
  }
};
  let folderData = fetch(`${config.API_ENDPOINT}api/folder`, options)
  .then(res => {
    if(!res.ok) {
      throw new Error('Something went wrong, please try again later.');
    }
    return res;
  })
  .then(res => res.json())
  .then(data => {
    this.setState({
      folders: data,
      error: null
    });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  });

  let noteData = fetch(`${config.API_ENDPOINT}api/notes`, options)
  .then(res => {
    if(!res.ok) {
      throw new Error('Something went wrong, please try again later.');
    }
    return res;
  })
  .then(res => res.json())
  .then(data => {
    this.setState({
      notes: data,
      error: null
    });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
    return folderData && noteData
  });
}
handleAddFolder = folder => {
  this.setState({
    folders:[...this.state.folders,folder]
  })
}
handleAddNote = note => {
  this.setState({
    notes:[...this.state.notes, note]
  })
}
handleDeleteNote = noteId => {
  this.setState({
    notes: this.state.notes.filter(note => note.id !== noteId)
  })
}
  render() {
    return (
        <UserContent.Provider value ={{
          history:this.props.history,
          folders:this.state.folders,
          notes:this.state.notes,
          addNote:this.handleAddNote,
          addFolder:this.handleAddFolder,
          delete:this.handleDeleteNote
        }}>
          <ErrorPage history={this.props.history}> 
      <div>

        <header>
        <h2>
          <Link to={`/`}>
          NoteFul
        </Link>
          </h2>
        </header>
        <Route exact path="/" render={()=> <HomePage {...this.state} /> }/>
        <Route exact path='/Folder/:folder_id' render={(routeProps) => 
          <FolderPage folder_id={routeProps.match.params.folder_id} {...this.state} />} />
        <Route exact path='/Folder' render= {(  ) =>  
          <FolderPage  {...this.state} />} />
        <Route exact path='/Note/:noteId' render= {( routeProps ) =>  
          <NotePage noteId={routeProps.match.params.noteId} {...this.state} />} />
        <Route exact path='/addNote' render= { () => <AddNote />}/>
        <Route exact path='/addFolder' render= { () => <AddFolder/>}/>
      </div>
          </ErrorPage>
          </UserContent.Provider>
    )
  }
}

