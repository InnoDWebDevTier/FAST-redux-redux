import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import * as SidebarActions from '../actions/sidebar'

function mapStateToProps(state) {
  return {
    items: state.sidebar.items
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SidebarActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
