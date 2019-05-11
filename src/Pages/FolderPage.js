import React, { Component } from 'react'
import NoteList from '../NoteList/NoteList'
import FolderList from '../FolderList/FolderList'


export default class FolderPage extends Component {
  render() {
    console.log('FolderPage props', this.props)
    return (
        <div>
        <nav>
          <FolderList folders = {this.props.folders}/>
        </nav>
        <section>
          
          <NoteList folderId={this.props.folderId} notes={this.props.notes}/>
        </section>
      </div>
    )
  }
}
