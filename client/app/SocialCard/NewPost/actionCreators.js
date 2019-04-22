import ACTIONS from '../../actions';

const actionCreators = {
  handleChange: function(description){
    return function(dispatch){
      dispatch({
        type: ACTIONS.UPDATE_NEW_POST_DESCRIPTION,
        description,
      });
    }
  },
  cancelNewPost: function(){
    return function(dispatch){
      dispatch({
        type: ACTIONS.CANCEL_NEW_POST,
      });
      dispatch({
        type: ACTIONS.TOGGLE_SOCIAL_LOADING,
        element: "post-loading",
        loading: false,
      });
      dispatch({
        type: ACTIONS.SET_ALERT_STATUS,
        alert: false,
      });
    }
  },
  createNewPost: function(songs, description){
    return function(dispatch){
      dispatch({
        type: ACTIONS.TOGGLE_SOCIAL_LOADING,
        element: "post-loading",
        loading: true,
      });
      //Simulating [API CALL]
      setTimeout(() => {
        console.log(songs);
        const post = {
          "post-id": "02345",
          "friend": {
            "friend_id": "0",
            "session_id": "",
            "profile-pic-url": "../img/quexington-profile-pic.jpg",
            "online": "true",
            "streaming": "true",
            "access-method": "none",
            "username": "quexington",
            "current-playing": "If you got the money - Jamie T",
            "last-online": "1 16 18 14 0",
          },
          songs: [
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
          description: "BITHC",
          "time": "1 25 19 16 54",
        };
        dispatch({
          type: ACTIONS.CREATE_NEW_POST,
          post,
        });
        dispatch({
          type: ACTIONS.CANCEL_NEW_POST,
        });
        dispatch({
          type: ACTIONS.TOGGLE_SOCIAL_LOADING,
          element: "post-loading",
          loading: false,
        });
        dispatch({
          type: ACTIONS.SET_ALERT_STATUS,
          alert: false,
        });
      },1000);
    }
  }
}

export default actionCreators;
