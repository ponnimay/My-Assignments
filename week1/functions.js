
//userprofile
function userProfile(name) {
  console.log("Hello" +name);
  userProfile("Ponni");
}

//double
 let double = (A) => A*A
 console.log(double(5))

 //time out
 setTimeout(function(){
    console.log("This message is delayed by 2 seconds")
},20000)

//callback
function getUserData(callback) {
  setTimeout(() => {
    const user = {
      name: "Ponni",
      age: 30
    };

    // Call callback AFTER data is ready
    callback(user);
  }, 3000);
}
getUserData(function (user) {
  console.log("User Name:", user.name);
  console.log("User Age:", user.age);
});