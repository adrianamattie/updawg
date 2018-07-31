var config = {
    apiKey: "AIzaSyBdKKNfe0cwgREyNhcvn7rxBG2-SxvRGh4",
    authDomain: "updawg-e1145.firebaseapp.com",
    databaseURL: "https://updawg-e1145.firebaseio.com",
    projectId: "updawg-e1145",
    storageBucket: "updawg-e1145.appspot.com",
    messagingSenderId: "23565913569"
  };
  firebase.initializeApp(config);



  // Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/add',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      
      firebase.auth.EmailAuthProvider.PROVIDER_ID
      
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  // The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

//get users uid on sign in

