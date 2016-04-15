export const SET_SIDEBAR = 'SET_SIDEBAR'

import { fetchSidebarItems } from '../api/sidebar';

export function set(items) {
  return {
    type: SET_SIDEBAR,
    payload: items
  }
}

export function setSidebarFromAPI() {
  return dispatch =>
    fetchSidebarItems().then(
      items => dispatch(set(items))
    );
}
