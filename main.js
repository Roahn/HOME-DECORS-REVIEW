// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBZsXh-x1k1tV10bYxbpQwbd03xrgcQcaI",
  authDomain: "home-e3960.firebaseapp.com",
  databaseURL: "https://home-e3960.firebaseio.com",
  projectId: "home-e3960",
  storageBucket: "home-e3960.appspot.com",
  messagingSenderId: "299206188768",
  appId: "1:299206188768:web:825a0fe89e0871ed66ba85",
  measurementId: "G-1HKWFE6008"
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}