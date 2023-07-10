const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { storeRefreshToken } = require('./tokensController');
passport.use(
  new GoogleStrategy(
    {
      clientID: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      // Find or create user in your database based on profile.id
      const user = { id: profile.id, name: profile.displayName };
      // Store the refresh token in your database
      await storeRefreshToken(user.id, refreshToken);
      // Call the done function to complete the authentication flow
      done(null, user);
    }
  )
);