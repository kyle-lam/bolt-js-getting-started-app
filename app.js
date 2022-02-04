const { App, ExpressReceiver } = require('@slack/bolt');
/* 
This sample slack application uses SocketMode
For the companion getting started setup guide, 
see: https://slack.dev/bolt-js/tutorial/getting-started 
*/
const { registerListeners } = require('./listeners');

// const { customRoutes } = require('./customRoutes');

// const expressReceiver = new ExpressReceiver({
//   signingSecret: process.env.SLACK_SIGNING_SECRET,
//   endpoints: "/slack/events"
// });

// Initializes your app with your bot token and app token
// process.env.SLACK_SIGNING_SECRET
const app = new App({
  token: 'xoxb-2996799963989-3028172472469-zPBVJotv2whx3ZrgF4t13sWi',
  signingSecret:'f27b1aa9dde4c34cc525c3f881354c83',
  appToken: 'xapp-1-A030U513T37-3033762715479-96b3a30e1900e0c2d8d87f2ba3b997387318519b3ced8125bc11957377b8abdd',
  customRoutes: [
    {
      path: '/health-check',
      method: ['GET'],
      handler: (req, res) => {
        res.writeHead(200);
        console.log("health check endpoint reached")
        res.end('Health check information displayed here!');
      },
    },    
    {
      path: '/auth/callback',
      method: ['GET', 'POST'],
      handler: (req, res) => {
        res.writeHead(200);
        console.log("google redirect to /auth/callback sucess");
        console.log("JSON of REQ : ");
        console.log(JSON.stringify(req));
        console.log('---------------');
        console.log('---------------');
        console.log('---------------');
        console.log("JSON of RES : ");
        console.log(JSON.stringify(res));
        // auth.oauth_code_callback();
        // res.end('Health check information displayed here!');
      },
    },
]
});

registerListeners(app);

// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN
// });

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Hey there <@${message.user}>!`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Google OAuth Flow",
            "emoji": true
          },
          "value": "click_me_123",
          // "url": "https://google.com",
          "action_id": "auth-google-initiate"
        }
      }
    ],
    text: `Hey there <@${message.user}>!`
  });
});

app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log(`⚡️ Slack Bolt app is running on port ${process.env.PORT || 3000 }!`);
  console.log('socket mode details : ' + JSON.stringify(app.PORT))
})();

// app.get('/auth/callback', auth.oauth_code_callback);

// app.post('/auth/callback', (err, res) => {
// 	res.status(200);
// 	res.send('working');
// 	res.end();
// });