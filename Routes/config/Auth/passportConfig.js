const mongoose = require('mongoose');
const TokenSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  refreshToken: { type: String, required: true },
});
const Token = mongoose.model('Token', TokenSchema);
module.exports = Token;

passport.js

const { google } = require('googleapis');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const { storeRefreshToken } = require('./controllers/tokensController');
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'http://localhost:3000/auth/google/callback';
const SCOPE = 'https://www.googleapis.com/auth/userinfo.profile';
const auth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
const strategy = new GoogleStrategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    scope: SCOPE,
    accessType: 'offline',
    prompt: 'consent',
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const userId = profile.id;
      await storeRefreshToken(userId, refreshToken);
      done(null, profile);
    } catch (error) {
      console.error(error);
      done(error);
    }
  }
);
auth.on('tokens', (tokens) => {
  if (tokens.refresh_token) {
    console.log('Received a refresh token.');
  }
  auth.setCredentials(tokens);
});
module.exports = {
  strategy,
  auth,
};