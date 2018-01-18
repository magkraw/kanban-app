import React, { PropTypes } from 'react';
import Edit from '..client/components/Edit';
import Note from '/Note';

const Notes = ({ notes, laneId, editNote, onUpdate, deleteNote }) => {
  return (<ul className={styles.Notes}>{notes.map((note) =>
    <Note
      id={note.id}
      key={note.id}
      editing={note.editing}
    >
      <Edit
        editing={note.editing}
        value={note.task}
        onValueClick={() => editNote(note.id)}
        onUpdate={(task) => onUpdate({
          ...note,
          task,
          editing: false,
        })}
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

export default connect(
  null,
  mapDispatchToProps
)(Notes);
