import axios from "axios";

export const FETCH_MUSIC_START = "FETCH_MUSIC_START";
export const FETCH_MUSIC_SUCCESS = "FETCH_MUSIC_SUCCESS";
export const FETCH_MUSIC_ERROR = "FETCH_MUSIC_ERROR";

export function fetchMusic () {
    return dispatch => {
        dispatch({ type: FETCH_MUSIC_START});

        axios
        .get("https://itunes.apple.com/search?musicArtist")
        .then(res => {
          dispatch({ type: FETCH_MUSIC_SUCCESS, payload: res.data.message });
        })
        .catch(err => {
          dispatch({ type: FETCH_MUSIC_ERROR, payload: err });
        });
    }
}