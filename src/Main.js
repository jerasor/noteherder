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
            ]
        }
    }

    handleNoteClick(item, _ev) {
        
        let Note = [...this.state.Note]

        Note.forEach((n) => {
            if(n===item) {
                n.active = 'active'
            } else {
                n.active = 'notActive'
            }
        })

        this.setState({
            Note: Note
        })

    }
    
    render() {
        return (
            <div 
                className="Main"
                style={style}
            >
                <Sidebar />
                <NoteList note={this.state.Note} click={this.handleNoteClick.bind(this)} />
                <NoteForm />
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