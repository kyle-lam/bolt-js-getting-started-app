
const { googleAuthInitiateCallback } = require('./auth-google');

module.exports.register = (app) => {
    app.action(
      { action_id: 'auth-google-initiate', type: 'button_click' },
      googleAuthInitiateCallback,
    );
  };
  