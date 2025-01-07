export const getLoginDetails = (userObj) => {
  let userDisplayName = '';
  let isLoggedIn = false;

  if (typeof userObj === 'object' && Object.keys(userObj).length !== 0) {
    userDisplayName = userObj.email;
    isLoggedIn = true;
  }

  return {
    userDisplayName,
    isLoggedIn,
  };
};
