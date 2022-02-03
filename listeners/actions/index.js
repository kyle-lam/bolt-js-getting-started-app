
const { googleAuthInitiateCallback } = require('./auth-google');

// module.exports.register = (app) => {
//   app.action('auth-google-initiate', async ({ body, ack, say }) => {
//     // Acknowledge the action
//     await ack();
//     await say(`<@${body.user.id}> clicked the google auth button`);
//   });
// }


module.exports.register = (app) => {
    app.action(
      { action_id: 'auth-google-initiate', type: 'button_click' },
      googleAuthInitiateCallback,
    );
  };
  