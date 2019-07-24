import React, { Component } from 'react'
import Note from './Note'
import UserContent from '../ApiContent'
import { Link } from 'react-router-dom'

export default class NoteList extends Component {
  static contextType = UserContent
  render() {
     let notes = this.context.notes || [];

     if (this.props.folder_id) {
        notes = notes.filter(note => note.folder_id === this.props.folder_id)
     }

     const noteData = notes.map((item, index)=> {
          const {id , name, modified, folder_id, content} = item;
          return (<Note
          key={index}
          id ={id}
          name= {name}
          modified={modified}
          folder_id={folder_id}
          content={content}
          />)
      })
    return (
        <section>
            {noteData}
            <button>
              <Link to='/addNote'>
              Add Note
              </Link>
              </button>
        </section>
    )
  }
}
