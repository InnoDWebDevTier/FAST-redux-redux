export const SET_PHOTOS = 'SET_PHOTOS'

import { fetchPhotos } from '../api/photo'

export function set(photos) {
  return {
    type: SET_PHOTOS,
    payload: photos 
  }
}

export function setPhotosFromAPI() {
  return dispatch =>
    fetchPhotos().then(
      photos => dispatch(set(photos))
    );
}
