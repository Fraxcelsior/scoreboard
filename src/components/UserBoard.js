import React, { Component } from 'react'
import User from './User'


export class UserBoard extends Component {
    render() {
        return (
            <div>
                <h3>User Board</h3>
                <User />
            </div>
        )
    }
}

export default UserBoard
