import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Note from '../NoteList/Note'
import Folder from '../FolderList/Folder'


export default class NotePage extends Component {
  render() {
      console.log('Note Page renders')
    const note = this.props.notes.find(note => note.id === this.props.noteId);
    const folder = this.props.folders.find(folder => folder.id === note.folderId);

    
    return (
        <div>
            <Link to={`/`}><button>Go back</button></Link>
        <nav>
          <Folder id={folder.id} name={folder.name}/>
        </nav>
        <section>
          <Note 
            id={note.id}
            name={note.name}
            modified={note.modified}
            folderId={note.folderId}
            content={note.content}
        />
        </section>
      </div>
    )
  }
}
