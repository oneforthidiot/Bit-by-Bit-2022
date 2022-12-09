const firebaseConfig = {
    apiKey: "AIzaSyAjRo5jTP2YilKN3mYmJuqLgHv8lAOqV1o",
    authDomain: "cashflowcheck-b2e88.firebaseapp.com",
    databaseURL: "https://cashflowcheck-b2e88-default-rtdb.firebaseio.com",
    projectId: "cashflowcheck-b2e88",
    storageBucket: "cashflowcheck-b2e88.appspot.com",
    messagingSenderId: "940058521539",
    appId: "1:940058521539:web:4211e0b1ddd2bc8ef01776"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("login", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("user-name");
    var emailid = getElementVal("user-pass");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    // document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    // setTimeout(() => {
    //   document.querySelector(".alert").style.display = "none";
    // }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };