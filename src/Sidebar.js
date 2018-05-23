import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

class Sidebar extends React.Component {

    constructor() {
        super()

        //the state of this component is used to 
        //simulate an on hover event
        this.state = {
            hoverStyle: {
                position: 'absolute',
                left: '0',
                width: '100%',
                transition: 'opacity 0.25s ease-in-out',
            },
            hovering: false,
        }
    }

    //handles the hover style
    //essenttially toggles the display of the hover image (opacity is 0 or not)
    hovered(_ev) {

        let hover = !(this.state.hovering)

        let hoverStyle = this.state.hoverStyle

        if (hover) {
            hoverStyle = {
                opacity: '0',
            }
        }
        else {
            hoverStyle = {
                position: 'absolute',
                left: '0',
                width: '100%',
                transition: 'opacity 0.25s ease-in-out',
            }
        }

        this.setState({
            hoverStyle: hoverStyle,
            hovering: hover,
        })

    }
    
    render() {
        return (
            <nav 
                className="Sidebar"
                style={styles.sidebar}
            >
            <div 
                className="logo"
                style={styles.logo}
            >
                <img 
                    src={quill} 
                    alt="Noteherder"
                    style={styles.logoImg}
                />
            </div>
            <a className="new-note" href="/notes" style={styles.newNote}>
                <img src={newHover} alt="New note" style={styles.newNoteImg}/>
                <img className="outline" src={newIcon} alt="New note" style={this.state.hoverStyle} onMouseEnter={()=>this.hovered()} onMouseLeave={()=>this.hovered()}/>
            </a>
            <div className="SignOut" style={styles.signOut}>
                <button style={styles.signOutButton}>
                <i className="fa fa-sign-out" style={styles.signOutButtonFont}></i>
                </button>
            </div>
            </nav>
        )
    }
}

//the various styles for this component
const styles = {
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        fontFamily: 'Fauna One',
        color: '#666',
        fontSize: '3rem',
    },
    logoImg: {
        width: '3rem',
        paddingLeft: '0.4rem',
    },
    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '4rem',
    },
    buttonSidebar: {
        backgrounColor: 'transparent',
        border: '0',
        color: '#008BF8',
        cursor: 'pointer',
    },
    newNoteImg: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
    },
    aImgHover: {
        opacity: '0',
    },
      
    signOut: {
        position: 'absolute',
        bottom: '1rem',
    },
    signOutButton: {
        backgrounColor: 'transparent',
        border: '0',
        color: '#008BF8',
        cursor: 'pointer',
        outline: 'none',
    },
    signOutButtonFont: {
        fontSize: '2rem',
    },
}

export default Sidebar