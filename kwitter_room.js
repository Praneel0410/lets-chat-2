
  const firebaseConfig = {
      apiKey: "AIzaSyC6WqJfOpG-f6i0hlFRaTZEYXmT9XkoS8Q",
      authDomain: "lets-chat-1-91503.firebaseapp.com",
      databaseURL: "https://lets-chat-1-91503-default-rtdb.firebaseio.com",
      projectId: "lets-chat-1-91503",
      storageBucket: "lets-chat-1-91503.appspot.com",
      messagingSenderId: "140037818771",
      appId: "1:140037818771:web:67f07505375a174121c066"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "welcome "+user_name+"!";

function add_room() {
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("roomname",room_name);
  
      window.location="kwitter_page.html"

      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      })
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
