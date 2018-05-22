import React from 'react'

import './NoteList.css'

class NodeList extends React.Component {

    render() {

        return (
            <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                
                {this.props.note.map((item)=> {
                    return(
                        <a className={item.active}>
                            <li>
                                <div 
                                    className="note"
                                    onClick={() => (
                                        this.props.click(item)
                                    )}
                                >
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