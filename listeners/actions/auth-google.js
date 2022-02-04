
const googleAuthInitiateCallback = async ({ ack, action, client, body }) => {
  await ack();
  await say(`<@${body.user.id}> Google auth initiated`);
};

module.exports = {
    googleAuthInitiateCallback,
};
