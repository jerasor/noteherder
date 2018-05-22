import React from 'react'

import './NoteList.css'

class NodeList extends React.Component {

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

    render() {

        return (
            <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                
                {this.state.Note.map((item)=> {
                    return(
                        <a className={item.active}>
                            <li>
                                <div className="note">
                                <div className="note-title">
                                    {item.title}
                                </div>
                                <div className="note-body">
                                    <p>
                                    {item.description}
                                    </p>
                                </div>
                                </div>
                            </li>
                        </a>
                    )
                    })
                }
                
            </ul>
            </div>
        )
    }   
}

export default NodeList