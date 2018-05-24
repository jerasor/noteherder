import React, { Component } from 'react'

import './App.css'
import { auth } from './base'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    uid: null,
  }

  componentWillMount() {
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.handleAuth(user.uid)
          localStorage.setItem('uid', user.uid)
        } else {
          this.handleUnauth()
          localStorage.clear()
        }
      }
    )

    this.setState({ uid: localStorage.getItem('uid') })

  }

  handleAuth = (uid) => {
    this.setState({ uid: uid })
  }

  handleUnauth = () => {
    this.setState({ uid: null })
  }

  signOut = () => {
    auth.signOut()
  }

  signedIn = () => {
    return this.state.uid
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
            ? <Main uid={this.state.uid} signOut={this.signOut} />
            : <SignIn />
        }

      </div>
    )
  }
}

export default App
