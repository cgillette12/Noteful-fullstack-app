import React, { Component } from 'react'
import Folder from './Folder'
import UserContent from '../ApiContent'
import { Link } from 'react-router-dom'
export default class FolderList extends Component {
    static contextType = UserContent
  render() {
      let folders = this.context.folders || [];
        folders = folders.map((item, index)=> {
          const {id , name} = item;
          return (<Folder
          key={index}
          id ={id}
          name= {name}
          />)
       })

    return (
        <div>
            {folders}
            <button><Link to='/addFolder'>Add New Folder</Link></button>
        </div>
            
    )
  }
}


