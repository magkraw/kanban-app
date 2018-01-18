import React, { PropTypes } from 'react';
import Lane from './Lane.js';
import Edit from '..client/components/Edit';

const Notes = ({ notes }) => {
  return (<ul className={styles.Notes}>{notes.map((note) =>
    <Note
      id={note.id}
      key={note.id}
      editing={note.editing}
    />
    <Edit
      editing={note.editing}
      value={note.task}
      onValueClick={() => editNote(note.id)}
      onUpdate={(task) => onUpdate({
          ...note,
          task,
          editing: false,
        }
      )}
      onDelete={() => deleteNote(note.id, laneId)}
    />
  </Note>
  )}</ul>);
};

Lanes.propTypes = {
  lanes: PropTypes.array,
};

export default Lanes;
