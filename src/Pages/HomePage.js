import React, { Component } from 'react'
import NoteList from '../NoteList/NoteList'
import FolderList from '../FolderList/FolderList'
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <nav>
          <FolderList folders = {this.props.folders}/>
        </nav>
        <section>
          <NoteList notes={this.props.notes}/>
        </section>
      </div>
    )
  }
}
