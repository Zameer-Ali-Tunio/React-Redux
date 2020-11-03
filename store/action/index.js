import Firebase from '../../config/firebase';
import firebase from 'firebase'
const set=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:"SetData",
            data:data
        })}
}
const fb_login=()=>{
    return (dispatch)=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log("user",user)
      })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log("err",errorMessage)
      });
    }
}
// Google login  start


const google_login=()=>{
  return(dispatch)=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log("user",user)
      })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log("err",errorMessage)
      });
    }
}

// Google login  end
// github login  start
let github_login=()=>{
    return(dispatch)=>{
  var provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log("user",user)
  })
.catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log("err",errorMessage)
  });
}
}
// github login  end
export {
    set,
    fb_login,
    google_login,
    github_login,
}