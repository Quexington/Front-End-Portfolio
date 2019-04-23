import ACTIONS from '../../../actions';

const actionCreators = {
  addQueue: function(songs){
    return function(dispatch){
      songs.map((e) => {
        dispatch({
          type: ACTIONS.ADD_SONG,
          song: e,
          spot: "bottom",
        });
      });
    }
  },
  copyQueue: function(songs){
    return function(dispatch){
      dispatch({
        type: ACTIONS.INITIALIZE_QUEUE_STATE,
        songs,
      });
    }
  },
  initSocial: function(friendId){
    return function(dispatch){
      dispatch({
        type: ACTIONS.TOGGLE_SOCIAL_LOADING,
        element: "social-loading",
        loading: true,
      });
      dispatch({
        type: ACTIONS.TOGGLE_SOCIAL_FOCUS,
        focus: true,
      });
      //Simulating an [API CALL]
      setTimeout(() => {
        const posts = [
          {
            "post_id": "3",
            "friend": {
              "friend_id": "2",
              "session_id": "12345",
              "profile-pic-url": "../img/mattrules98-profile-pic.jpg",
              "online": "true",
              "streaming": "true",
              "access-method": "invite",
              "username": "mattrules98",
              "current-playing": "Rockstar - Post Malone, 21 Savage",
              "last-online": "",
            },
            "songs": [
              {
                "id": "6",
                "song-pic-url": "../img/soma.jpeg",
"title": "Soma",
                "artists": ["The Strokes"],
                "album": "Is This It",
                "song_length": "2:33",
                "listens": "2345678",
                "genres": ["Alternative", "Soft Rock"]
              },
            ],
            "title": "Great day!",
            "description": "What a great day I had!",
            "time": "1 24 19 16 54",
          },
          {
            "post_id": "3",
            "friend": {
              "friend_id": "2",
              "session_id": "12345",
              "profile-pic-url": "../img/mattrules98-profile-pic.jpg",
              "online": "true",
              "streaming": "true",
              "access-method": "invite",
              "username": "mattrules98",
              "current-playing": "Rockstar - Post Malone, 21 Savage",
              "last-online": "",
            },
            "songs": [
              {
                "id": "6",
                "song-pic-url": "../img/soma.jpeg",
"title": "Soma",
                "artists": ["The Strokes"],
                "album": "Is This It",
                "song_length": "2:33",
                "listens": "2345678",
                "genres": ["Alternative", "Soft Rock"]
              },
            ],
            "title": "Great day!",
            "description": "What a great day I had!",
            "time": "1 24 19 16 54",
          },
          {
            "post_id": "3",
            "friend": {
              "friend_id": "2",
              "session_id": "12345",
              "profile-pic-url": "../img/mattrules98-profile-pic.jpg",
              "online": "true",
              "streaming": "true",
              "access-method": "invite",
              "username": "mattrules98",
              "current-playing": "Rockstar - Post Malone, 21 Savage",
              "last-online": "",
            },
            "songs": [
              {
                "id": "6",
                "song-pic-url": "../img/soma.jpeg",
"title": "Soma",
                "artists": ["The Strokes"],
                "album": "Is This It",
                "song_length": "2:33",
                "listens": "2345678",
                "genres": ["Alternative", "Soft Rock"]
              },
            ],
            "title": "Great day!",
            "description": "What a great day I had!",
            "time": "1 24 19 16 54",
          },
        ];
        dispatch({
          type: ACTIONS.INITIALIZE_SOCIAL_STATE,
          posts,
        });
        dispatch({
          type: ACTIONS.TOGGLE_SOCIAL_LOADING,
          element: "social-loading",
          loading: false,
        });
      },1000);
    }
  }
}

export default actionCreators;
