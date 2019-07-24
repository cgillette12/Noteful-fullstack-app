import React, { Component } from 'react'
import UserContent from '../ApiContent'
import { Link } from 'react-router-dom'
import { api } from '../config'

export default class AddFolder extends Component {
  static contextType = UserContent

  handleSubmitFolder = e => {
    e.preventDefault()
    const newFolder = {
      name: e.target['folder-name'].value,
      
    }
    fetch(api.folders,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newFolder),
    })
    .then(res =>{
      if(!res.ok){
        throw new Error('Something went wrong, please try again later.')
      }else{
        return res.json()
      }
    }) 
    .then(data =>{
      this.context.addFolder(data)
      this.context.history.push('/')
    })
    .catch(error => {
      return error
    })
  }

  render(){
  return (
    <section className='Add-folder'>
            <h2>Create a folder</h2>
         <form className='folder-form' onSubmit={this.handleSubmitFolder}>
            <label>
                Name
            </label>
            <input type='text' name='folder-name'/>
            <div className='buttons'>
                <button type='submit'>Add folder</button>
                <button><Link to="/">Cancel</Link></button>
            </div>
          </form>
    </section>
  )
  }
}

