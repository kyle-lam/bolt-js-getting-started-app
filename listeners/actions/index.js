
// const { googleAuthInitiateCallback } = require('./auth-google');

// const {google} = require('googleapis');
// const calendar = google.calendar('v3');

// const REDIRECT_URL =  'https://slack-sample-starter.herokuapp.com/auth/callback';
// const oauth2Client = new google.auth.OAuth2(
//   YOUR_CLIENT_ID,
//   YOUR_CLIENT_SECRET,
//   REDIRECT_URL
// );

// // generate a url that asks permissions for Blogger and Google Calendar scopes
// const scopes = [
//   'https://www.googleapis.com/auth/calendar'
// ];

// const url = oauth2Client.generateAuthUrl({
//   // 'online' (default) or 'offline' (gets refresh_token)
//   access_type: 'offline',

//   // If you only need one scope you can pass it as a string
//   scope: scopes
// });


// module.exports.register = (app) => {
//   app.action('auth-google-initiate', async ({ body, ack, say }) => {
//     // Acknowledge the action
//     await ack();
//     await oauth_start_flow
//     await say(`<@${body.user.id}> clicked the google auth button`);
//   });
// }

// async function oauth_start_flow(req, res) {
//   req.session.slack_team_id = req.params.slack_team_id
//   req.session.slack_user_id = req.params.slack_user_id
//   req.session.state = Math.floor(Math.random() * Math.pow(2,25)).toString()
//   res.redirect(`${process.env.OAUTH2_AUTHORIZE_URL}?client_id=${process.env.OAUTH2_CLIENT_ID}&response_type=code&redirect_uri=${process.env.OAUTH2_REDIRECT_URI}&state=${req.session.state}`)
// }


// // module.exports.register = (app) => {
// //     app.action(
// //       { action_id: 'auth-google-initiate', type: 'button_click' },
// //       googleAuthInitiateCallback,
// //     );
// //   };
  