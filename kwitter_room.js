const config = {
    apiKey: "AIzaSyAidaRGGqa_4atzVFBtSi6xHWRkCdR76J4",
    authDomain: "let-s-chat-web-app-d3f76.firebaseapp.com",
    projectId: "let-s-chat-web-app-d3f76",
    storageBucket: "let-s-chat-web-app-d3f76.appspot.com",
    messagingSenderId: "158430845220",
    appId: "1:158430845220:web:9d216cc0f5b6935502bbb1",
    measurementId: "G-ZBWSG1YZ15"
  };
  
  // Initialize Firebase
  const app = initializeApp(config);
  
  user_name =localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML ="Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.localStorage = "kwitter_room.html";
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                   console.log("Room Name -" + Room_names);
                   row= "<div class=room_name id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
                   document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}
