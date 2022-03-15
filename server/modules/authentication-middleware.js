// ======<VALIDATES IF A USER IS AUTHENTICATED BEFORE SURFACING DATA FROM A SPECIFIC ENDPOINT>==========

const rejectUnauthenticated = (req, res, next) => {
  // Checking to see if 'req.isAuthenticated' is true or false
  if (req.isAuthenticated()) {
    // If true: user is authenticated and may proceed
        // Note! They may not be Authorized to do all things
    next(); // * In user route *
  } else {
    // If false: user does not have access, will receive a 403 error message
    res.sendStatus(403);
  }
};

module.exports = { rejectUnauthenticated };
