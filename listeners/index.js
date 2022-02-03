const actionsListener = require('./actions');

module.exports.registerListeners = (app) => {
  actionsListener.register(app);
};
