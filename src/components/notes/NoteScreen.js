import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What Happend toda?"
                    className="notes__textarea"
                ></textarea>
                <div className="notes__image">
                    <img
                        src="https://okdiario.com/img/2019/10/30/la-oca-o-ganso-curiosidades-655x368.jpg"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    )
}
