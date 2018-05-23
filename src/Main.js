import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component {
constructor() {
    super()

    let n = []

    if (localStorage.getItem('notes')) {
        n = JSON.parse(localStorage.getItem('notes'))
    }

    this.state = {
        currentNote: this.blankNote(),
        notes: n,
    }
}

blankNote = () => {
    return {
    id: null,
    title: '',
    body: '',
    }
}

setCurrentNote = (note) => {
    this.setState({ currentNote: note })
}

resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
}

saveNote = (note) => {
    const notes = [...this.state.notes]

    if (note.id) {
    // existing note
    const i = notes.findIndex(currentNote => currentNote.id === note.id)
    notes[i] = note
    } else {
    // new note
    note.id = Date.now()
    notes.push(note)
    }

    this.setState({ notes, currentNote: note })
    localStorage.setItem('notes', JSON.stringify(notes))

}

deleteNote = (note) => {
    if (note.id !== null) {

        const notes = [...this.state.notes]

        const i = notes.findIndex(currentNote => currentNote.id === note.id)
        notes.splice(i, 1)

        this.setState({ notes, currentNote: this.blankNote() })
        localStorage.setItem('notes', JSON.stringify(notes))

    }
}

render() {
    return (
    <div
        className="Main"
        style={style}
    >
        <Sidebar resetCurrentNote={this.resetCurrentNote} />
        <NoteList
        notes={this.state.notes}
        setCurrentNote={this.setCurrentNote}
        />
        <NoteForm
        currentNote={this.state.currentNote}
        saveNote={this.saveNote}
        deleteNote={this.deleteNote}
        />
    </div>
    )
}
}

const style = {
display: 'flex',
height: '100vh',
alignItems: 'stretch',
}

export default Main
