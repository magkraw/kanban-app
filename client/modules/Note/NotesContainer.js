import { connect } from 'react-redux';
import Notes from './Notes';
import { updateNoteRequest, editNote, deleteNoteRequest } from '../Note/NoteActions';

const mapDispatchToProps = {
  editNote,
  onUpdate: updateNoteRequest,
  deleteNote: deleteNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
