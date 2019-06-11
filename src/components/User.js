import React, { Component } from 'react'

export class User extends Component {
    state = {
        userList: [
            {userName: "Marten", present: true},
            {userName: "Hendrik", present: true},
            {userName: "Truus", present: true}
    ]
    }

    toggle = (clickedUser) => {
        console.log(clickedUser)
        const userList = this.state.userList
        const updatedUserList = userList.map(user => {
            console.log(user, clickedUser)
            if(user.userName === clickedUser.userName){
                console.log('update')
                return {
                    ...user,
                    present: !user.present
                }
            }
            return user
        })
        this.setState({userList: updatedUserList})
        console.log(` is toggled`)
    }
    
    render() {
            return this.state.userList.map((user) =>{
                return <div><p>User: <b>{user.userName}</b></p>
                <p>Present: <b>{ user.present ? `${user.userName} is present` : `${user.userName} is absent` }</b></p>
                <button onClick={() => this.toggle(user)}>Toggle</button>
                </div>
            })
            /*
            return (
                <div>
                    <p>User: <b>{this.state.userList.user1}</b></p>
                    <p>User: <b>{this.state.userList.user2}</b></p>
                    <p>User: <b>{this.state.userList.user3}</b></p>
                </div>
            )*/
        }
    }

    export default User
