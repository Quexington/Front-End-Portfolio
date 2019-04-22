import ACTIONS from '../../../actions';

const actionCreators = {
  getFriendQueue: function(friendId, cache){
    return function(dispatch){
      //Simulating an [API CALL]
      dispatch({
        type: ACTIONS.TOGGLE_QUEUE_LOADING,
        element: "queue-loading",
        loading: true,
      });
      setTimeout(() => {
        //Data to get from API
        const initSongs = [{
          "id": "6",
          "song-pic-url": "../img/soma.jpeg",
"title": "Soma",
          "artists": ["The Strokes"],
          "album": "Is This It",
          "song_length": "2:33",
          "listens": "2345678",
          "genres": ["Alternative", "Soft Rock"]
        },
        {
          "id": "7",
          "song-pic-url": "../img/bounce-back.png",
"title": "Bounce Back",
          "artists": ["Big Sean"],
          "album": "I Decided.",
          "song_length": "3:42",
          "listens": "6734567",
          "genres": ["Hip-Hop"]
        },
        {
          "id": "8",
          "song-pic-url": "../img/spaceman.jpg",
"title": "Spaceman",
          "artists": ["The Killers"],
          "album": "Day & Age",
          "song_length": "4:44",
          "listens": "2345678",
          "genres": ["Alternative", "Soft Rock"]
        },
        {
          "id": "9",
          "song-pic-url": "../img/kids.jpg",
"title": "Kids",
          "artists": ["The Frights"],
          "album": "You Are Going to Hate This",
          "song_length": "2:54",
          "listens": "362457",
          "genres": ["Alternative"]
        },
        {
          "id": "10",
          "song-pic-url": "../img/the-calendar-hung-itself.jpg",
"title": "The Calendar Hung Itself...",
          "artists": ["Bright Eyes"],
          "album": "Fevers And Mirrors",
          "song_length": "3:55",
          "listens": "867345",
          "genres": ["Alternative"]
        },];
        const initSettings = {
          play: true,
          owned: false,
          access: false,
          "remove-after-played": true,
          "shuffle-setting": false,
          "auto-fill-queue": true,
          "queue-privacy": true,
          "allow-friend-add": false,
          "allow-friend-invite": true,
          "allow-friend-control": false,
          "allow-friend-order": false,
          "allow-friend-remove": false,
          "access-method": "invite",
        };
        dispatch({
          type: ACTIONS.SET_FRIEND_STREAMING_ID,
          id: friendId,
        });
        if (cache) {
          dispatch({
            type: ACTIONS.CACHE_QUEUE_STATE,
          });
        }
        dispatch({
          type: ACTIONS.INITIALIZE_QUEUE_STATE,
          songs: initSongs,
          settings: initSettings,
        });
        dispatch({
          type: ACTIONS.TOGGLE_QUEUE_LOADING,
          element: "queue-loading",
          loading: false,
        });
      }, 1000);
    }
  }
}

export default actionCreators;
