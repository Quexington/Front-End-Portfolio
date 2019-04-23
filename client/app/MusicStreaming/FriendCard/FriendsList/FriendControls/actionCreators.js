import ACTIONS from '../../../../actions';

const actionCreators = {
  inviteFriend: function(friendId){
    return function(dispatch){
      //Simulating an [API CALL]
      console.log("Inviting " + friendId);
    }
  },
  removeFriend: function(friendId){
    return function(dispatch){
      dispatch({
        type: ACTIONS.SET_FRIEND_ALERT_STATUS,
        alert: true,
      });
      dispatch({
        type: ACTIONS.SET_FRIEND_ALERT_DATA,
        id: friendId,
      })
      dispatch({
        type: ACTIONS.SET_ALERT_STATUS,
        alert: true,
      });
      /*dispatch({
        type: ACTIONS.REMOVE_FRIEND,
        id: friendId,
      });
      //Simulating [API CALL]
      console.log("Removing "+ friendId);*/
    }
  },
  addFriend: function(friendId){
    return function(dispatch){
      dispatch({
        type: ACTIONS.ADD_FRIEND,
        id: friendId,
      });
    }
  },
  stopFriend: function(){
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
          "id": "1",
          "song-pic-url": "../img/rockstar.jpeg",
          "title": "rockstar (feat. 21 Savage)",
          "artists": ["Post Malone", "21 Savage"],
          "album": "beerbongs & bentleys",
          "song_length": "3:38",
          "listens": "8234567",
          "genres": ["Hip-Hop"]
        },
        {
          "id": "2",
          "song-pic-url": "../img/right-before-my-eyes.jpg",
"title": "Right Before My Eyes",
          "artists": ["Cage the Elephant"],
          "album": "Thank You Happy Birthday",
          "song_length": "3:14",
          "listens": "4674758",
          "genres": ["Alternative"]
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
          "id": "5",
          "song-pic-url": "../img/holy-cannoli.jpg",
"title": "Holy Cannoli",
          "artists": ["Walter Mitty and His Makeshift Orchestra"],
          "album": "Well Soon",
          "song_length": "2:19",
          "listens": "254678",
          "genres": ["Alternative"]
        },];
        const initSettings = {
          play: false,
          owned: true,
          access: false,
          "remove-after-played": true,
          "shuffle-setting": false,
          "auto-fill-queue": true,
          "queue-privacy": true,
          "allow-friend-add": true,
          "allow-friend-invite": false,
          "allow-friend-control": false,
          "allow-friend-order": false,
          "allow-friend-remove": false,
          "access-method": "invite",
        };
        dispatch({
          type: ACTIONS.SET_FRIEND_STREAMING_ID,
          id: "",
        });
        dispatch({
          type: ACTIONS.INITIALIZE_QUEUE_CACHE,
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
