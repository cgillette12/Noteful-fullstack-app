import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Folder extends Component {
  render() {
      const {id,name} = this.props
    return (
      <div>
        <ul>
            <li className={id}>
            <Link to={`/Folder/${id}`}>
                {name}
            </Link>
            </li>
        </ul>
      </div>
    )
  }
}
/* <Link to="/settings/profile"></Link> */