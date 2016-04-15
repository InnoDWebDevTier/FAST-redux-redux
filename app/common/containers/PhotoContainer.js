import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PhotoDisplay from '../components/PhotoDisplay'
import * as PhotoActions from '../actions/photo'

function mapStateToProps(state) {
  return {
    photos: state.photo.photos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PhotoActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDisplay)
