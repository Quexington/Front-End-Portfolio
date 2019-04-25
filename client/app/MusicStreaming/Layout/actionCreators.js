import ACTIONS from '../../actions';

const actionCreators = {
  init: function(){
    return function(dispatch){
      dispatch({
        type: ACTIONS.TOGGLE_LOADING,
        loading: true,
      });
      //Simulating initial [API CALL]
      setTimeout(() => {
        const friends = [
          {
            "friend_id": "0",
            "session_id": "",
            "profile-pic-url": "../img/user4-profile-pic.jpg",
            "online": "false",
            "streaming": "false",
            "access-method": "none",
            "username": "user4",
            "current-playing": "",
            "last-online": "2019 1 8 11 0",
          },
          {
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
          {
            "friend_id": "2",
            "session_id": "12345",
            "profile-pic-url": "../img/user1-profile-pic.jpg",
            "online": "true",
            "streaming": "true",
            "access-method": "none",
            "username": "user1",
            "current-playing": "Rockstar - Post Malone, 21 Savage",
            "last-online": "",
          },
          {
            "friend_id": "4",
            "session_id": "54321",
            "profile-pic-url": "../img/user2-profile-pic.jpg",
            "online": "true",
            "streaming": "true",
            "access-method": "code",
            "username": "user2",
            "current-playing": "Old Scottish Bullshit",
            "last-online": "",
          },
        ];
        const songs = [{
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
        }];
        const settings = {
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
        const recs = [{
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
        }];
        const user = {
          "user_id": "0",
          "session_id": "",
          "profile-pic-url": "../img/quexington-profile-pic.jpg",
          "online": "true",
          "streaming": "true",
          "access-method": "none",
          "username": "quexington",
          "current-playing": "If you got the money - Jamie T",
          "last-online": "1 16 18 14 0",
        };
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
            ],
            "title": "Great day!",
            "description": "What a great day I had!",
            "time": "1 24 19 16 54",
          },
        ];
        dispatch({
          type: ACTIONS.INITIALIZE_QUEUE_STATE,
          songs,
          settings,
          recs,
        });
        dispatch({
          type: ACTIONS.INITIALIZE_FRIEND_STATE,
          friends,
        });
        dispatch({
          type: ACTIONS.INITIALIZE_SOCIAL_STATE,
          user,
          posts,
        });
        dispatch({
          type: ACTIONS.TOGGLE_LOADING,
          loading: false,
        });
      }, 1000);
    }
  },
}

export default actionCreators;
