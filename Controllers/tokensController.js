const Token = require('../models/token');
const storeRefreshToken = async (userId, refreshToken) => {
  const token = await Token.findOneAndUpdate(
    { userId },
    { refreshToken },
    { upsert: true, new: true }
  );
  return token;
};
const getRefreshToken = async (userId) => {
  const token = await Token.findOne({ userId });
  return token ? token.refreshToken : null;
};
module.exports = {
  storeRefreshToken,
  getRefreshToken,
};