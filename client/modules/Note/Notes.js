import React, { PropTypes } from 'react';
import Edit from '../../components/Edit';
import Note from './Note';

import styles from './Note.css';

const Notes = ({ notes, laneId, editNote, onUpdate, deleteNote }) => {
  return (
    <ul>{notes.map((note) =>
      <Note
        id={note.id}
        key={note.id}
        editing={note.editing}
      >
        <Edit
          editing={note.editing}
          value={note.task}
          onValueClick={() => editNote(note.id)}
          onUpdate={(task) => onUpdate(
            task,
            note.id 
          )}
          onDelete={() => deleteNote(note.id, laneId)}
        />
      </Note>
  )}</ul>);
};

Notes.propTypes = {
  deleteNote: PropTypes.func,
  onUpdate: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
};

export default Notes;
