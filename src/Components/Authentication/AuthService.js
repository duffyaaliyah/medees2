import Parse from "parse";

// create new user account on Parse 
export const createUser = (newUser) => {
  const user = new Parse.User();
// set user properties based on the data provided during registration
  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);
//debugging 
  console.log("User: ", user); 
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// login using existing user info
export const loginUser = (currUser) => {
  const user = new Parse.User();
//sets properties on inputs 
  user.set("password", currUser.password);
  user.set("username", currUser.email);

  console.log("User: ", user);
  console.log();
  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};
//checks if there is a current authorized user 
export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};
