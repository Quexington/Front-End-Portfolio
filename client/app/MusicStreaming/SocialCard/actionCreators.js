import ACTIONS from '../../actions';

const actionCreators = {
  popUp: function(){
    return function(dispatch){
      dispatch({
        type: ACTIONS.POP_UP_NEW_POST,
        active: true,
      });
      dispatch({
        type: ACTIONS.SET_ALERT_STATUS,
        alert: true,
      });
    }
  },
  backButton: function(){
    return function(dispatch){
      dispatch({
        type: ACTIONS.TOGGLE_SOCIAL_LOADING,
        element: "social-loading",
        loading: true,
      });
      dispatch({
        type: ACTIONS.TOGGLE_SOCIAL_FOCUS,
        focus: false,
      });
      //Simulating [API CALL]
      setTimeout(() => {
        const posts = [
          {
            "post_id": "1",
            "friend": {
              "friend_id": "3",
              "session_id": "",
              "profile-pic-url": "../img/user5-profile-pic.jpg",
              "online": "false",
              "streaming": "false",
              "access-method": "none",
              "username": "user5",
              "current-playing": "",
              "last-online": "1 14 18 2 0",
            },
            "songs": [
              {
                "id": "4",
                "song-pic-url": "../img/king-kunta.jpg",
"title": "King Kunta",
                "artists": ["Kendrick Lamar"],
                "album": "To Pimp A Butterfly",
                "song_length": "3:54",
                "listens": "7354637",
                "genres": ["Hip-Hop"]
              },
              {
                "id": "3",
                "song-pic-url": "../img/the-rock-show.jpg",
"title": "The Rock Show",
                "artists": ["blink-182"],
                "album": "Take Off Your Pants And Jacket",
                "song_length": "2:51",
                "listens": "5678923",
                "genres": ["Alternative"]
              },
              {
                "id": "5",
                "song-pic-url": "../img/holy-cannoli.jpg",
"title": "Holy Cannoli",
                "artists": ["Walter Mitty and His Makeshift Orchestra"],
                "album": "Well Soon",
                "song_length": "2:19",
                "listens": "254678",
                "genres": ["Alternative"]
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
            ],
            "title": "Great day!",
            "description": "What a great day I had!",
            "time": "1 25 19 16 54",
          },
          {
            "post_id": "2",
            "friend": {
              "friend_id": "1",
              "session_id": "",
              "profile-pic-url": "../img/user3-profile-pic.jpg",
              "online": "true",
              "streaming": "false",
              "access-method": "none",
              "username": "user3",
              "current-playing": "",
              "last-online": "",
            },
            "songs": [
              {
                "id": "5",
                "song-pic-url": "../img/holy-cannoli.jpg",
"title": "Holy Cannoli",
                "artists": ["Walter Mitty and His Makeshift Orchestra"],
                "album": "Well Soon",
                "song_length": "2:19",
                "listens": "254678",
                "genres": ["Alternative"]
              },
            ],
            "title": "Bad Day!>:(",
            "description": "What a terrible day I had!",
            "time": "1 25 19 22 10",
          },
          {
            "post_id": "3",
            "friend": {
              "friend_id": "2",
              "session_id": "12345",
              "profile-pic-url": "../img/user1-profile-pic.jpg",
              "online": "true",
              "streaming": "true",
              "access-method": "invite",
              "username": "user1",
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
      }, 1000);
    }
  }
}

export default actionCreators;
