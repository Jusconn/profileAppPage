// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD96Xvk5aTKFxXRDpc98cYrcO7u3vf2Uds",
    authDomain: "profile-app-40546.firebaseapp.com",
    databaseURL: "https://profile-app-40546-default-rtdb.firebaseio.com",
    projectId: "profile-app-40546",
    storageBucket: "profile-app-40546.appspot.com",
    messagingSenderId: "338265182110",
    appId: "1:338265182110:web:05848b795ffec73e5c108f",
    measurementId: "G-6SXF9JGYPX"
  };

fetch('https://us-central1-profile-app-40546.cloudfunctions.net/userInfo1')
    .then(response => response.json())
    .then(data => {
        {cors: true}
        // Handle the API response data here
        object1 = data;
        console.log(object1);
        document.getElementById("name1").textContent = object1.name;
        document.getElementById("picture1").src = object1.image;
        document.getElementById("bday1").textContent = object1.bday;
        document.getElementById("emoji1").textContent = object1.emoji;
        document.getElementById("desc1").textContent = object1.desc;
    })
    .catch(error => {
        // Handle any errors that occurred during the API call
        console.error('Error:', error);
    });

    fetch('https://us-central1-profile-app-40546.cloudfunctions.net/userInfo2')
    .then(response => response.json())
    .then(data => {
        {cors: true}
        // Handle the API response data here
        object1 = data;
        console.log(object1);
        document.getElementById("name2").textContent = object1.name;
        document.getElementById("picture2").src = object1.image;
        document.getElementById("bday2").textContent = object1.bday;
        document.getElementById("emoji2").textContent = object1.emoji;
        document.getElementById("desc2").textContent = object1.desc;
    })
    .catch(error => {
        // Handle any errors that occurred during the API call
        console.error('Error:', error);
    });
