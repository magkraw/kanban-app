import { connect } from 'react-redux';
import Notes from './Notes';
import { editNote, deleteNoteRequest } from '../Note/NoteActions';

const mapDispatchToProps = {
  editNote,
  deleteNote: deleteNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
