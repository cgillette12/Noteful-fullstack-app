import React, { Component } from 'react'
import UserContent from '../ApiContent'
import { Link } from 'react-router-dom'
import { api } from '../config'

export default class AddNote extends Component {
    static contextType = UserContent
    handleSubmit = e => {
        e.preventDefault()
        const newNote = {
            title: e.target['note-name'].value,
            content: e.target['content'].value,
            folder_id: parseInt(e.target['note-folder-id'].value),
        }
        fetch(api.notes,{
            method: 'POST',
            headers: {
                   'content-type': 'application/json'
                     },
            body: JSON.stringify(newNote),
        })
        .then(res =>{
            if(!res.ok){
                throw new Error('Something went wrong, please try again later.')
            }else{
              return res.json()
            }
        }) 
        .then(data =>{
            this.context.addNote(data)
            this.context.history.push('/')
        })
        .catch(error => {
            return error
        })
    }
  render() {
      const { folders=[] } = this.context
    return (
        <section className='Add-note'>
            <h2>Create a note</h2>
         <form className='Note-box' onSubmit={this.handleSubmit}>
         <div>
            <label>
                Name
            </label>
            <input type='text' name='note-name'/>
         </div>
         <div>
            <label>
                Content
            </label>
            <textarea name='content'/>
         </div>
         <div>
            <label>
                Folder
            </label>
            <select name='note-folder-id'>
                <option value={null}>...</option>
                {folders.map(folder => 
                    <option key={folder.id} value={folder.id}>
                      {folder.name}
                    </option>
                )}
            </select>
            </div>
            <div className='buttons'>
                <button type='submit'>Add Note</button>
                <button><Link to="/">Cancel</Link></button>
            </div>
          </form>
        </section>
    )
  }
}
