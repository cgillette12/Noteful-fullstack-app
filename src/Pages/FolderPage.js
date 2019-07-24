import React, { Component } from 'react'
import NoteList from '../NoteList/NoteList'
import FolderList from '../FolderList/FolderList'


export default class FolderPage extends Component {
  render() {
    return (
        <div>
        <nav>
          <FolderList folder_id={this.props.folder_id} folders = {this.props.folders}/>
        </nav>
        <section>
          
          <NoteList folder_id={this.props.folder_id} notes={this.props.notes}/>
        </section>
      </div>
    )
  }
}
