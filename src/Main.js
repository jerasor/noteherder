import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {

    constructor() {
        super()

        

        this.state = {
            Note: [
                {
                    title: 'Kohlrabi welsh',
                    description: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
                    active: 'active',
                },
                {
                    title: 'Dandelion cucumber',
                    description: 'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.',
                    active: 'notActive',
                },
                {
                    title: 'Prairie turnip',
                    description: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.',
                    active: 'notActive',
                },
            ],
            activeNoteDescription: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
            activeNoteTitle: 'Kohlrabi welsh',
        }

    }

    handleNoteClick(item, _ev) {
        
        let Note = [...this.state.Note]
        let activeDescription = this.state.activeNoteDescription
        let activeTitle = this.state.activeNoteTitle

        Note.forEach((n) => {
            if(n===item) {
                n.active = 'active'
                activeDescription = n.description
                activeTitle = n.title
            } else {
                n.active = 'notActive'
            }
        })

        this.setState({
            Note: Note,
            activeNoteDescription: activeDescription,
            activeNoteTitle: activeTitle,
        })

    }

    changeActiveNote(title, description) {

        let note = [...this.state.Note]

        note.forEach((n) => {
            if(n.active === 'active'){
                if(description !== undefined){
                    n.description = description
                    this.setState({
                        activeNoteDescription: description
                    })
                }

                if(title !== undefined){
                    n.title = title
                    this.setState({
                        activeNoteTitle: title
                    })
                }
            }
        })

        this.setState({
            Note: note
        })

    }

    handleInputChange(ev) {
        this.changeActiveNote(ev.target.value, undefined)
    }

    handleTextAreaChange(ev) {
        this.changeActiveNote(undefined, ev.target.value)
    }
    
    render() {
        return (
            <div 
                className="Main"
                style={style}
            >
                <Sidebar />
                <NoteList note={this.state.Note} click={this.handleNoteClick.bind(this)} />
                <NoteForm 
                    notes={this.state.Note} 
                    textChange={this.handleTextAreaChange.bind(this)}
                    titleChange={this.handleInputChange.bind(this)}
                    text={this.state.activeNoteDescription}
                    title={this.state.activeNoteTitle}
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