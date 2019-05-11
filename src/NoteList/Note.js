import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContent from '../ApiContent'
import { api } from '../config'

export default class Note extends Component {
  
    static contextType = UserContent
    
    handleDeleteNote= e => {
        e.preventDefault()
        const noteId = this.props.id
       
        fetch(`${api.notes}/${noteId}`,{
              method: 'DELETE',
              headers: {
                  'content-type': 'application/json'
                },
              })
            .then(res => {
                if(!res.ok){
                    throw new Error('unable to process at this time')
                  }
              
                  return res
                })
                // .then(res => res.json())
                .then(() => {
                  this.context.delete(noteId)
                })
                .catch(error => {
                console.error(error)
              })
            }

   render() {
    const {id,
        name,
        modified,
        content} = this.props;
    return (
      <div className={id}>
        <h2>
        <Link to={`/note/${id}`}>
          {name}
        </Link>
        </h2>
        <p>Date modified {modified}</p>
        <p>{content}</p>
        <button onClick={this.handleDeleteNote}>Delete</button>
      </div>
    )
}
}
