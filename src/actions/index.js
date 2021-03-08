import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_ACTIVE_PAINTING, FILTER_BY_MUSEUM } from './types';
import artworks from '../data/artworks';
// import store from '../index.js';

export function fetchPaintings() {
  return { type: FETCH_PAINTINGS, payload: artworks };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function deletePainting(activeID) {
  return { type: DELETE_ACTIVE_PAINTING, id: activeID };
}

export function filterByMuseum(museumName) {
  // const filteredPaintings = store.getState().paintings.filter(painting => painting.museum.name === museumName)
  return { type: FILTER_BY_MUSEUM, museumName: museumName};
}