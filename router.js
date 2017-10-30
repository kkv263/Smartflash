var Router = require('express').Router;
// Import index action from movies controller
var index = require('./controllers/scores');

// Initialize the router
const router = Router();

// Handle /scores route with index action from movies controller
router.route('/scores')
  .get(index);

module.exports = router;