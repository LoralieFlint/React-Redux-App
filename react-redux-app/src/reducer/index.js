import {
    FETCH_MUSIC_START,
    FETCH_MUSIC_SUCCESS,
    FETCH_MUSIC_ERROR
  } from "../actions/music";

  const initialState = {
    dog: null,
    isLoading: false,
    error: null
  };

  export function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_MUSIC_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_MUSIC_SUCCESS:
        return {
          ...state,
          dog: action.payload,
          isLoading: false
        };
      case FETCH_MUSIC_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  }