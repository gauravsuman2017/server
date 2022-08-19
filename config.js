module.exports = {

  // MongoDB Connection URI
  //MONGODB_URI: 'mongodb://localhost:27017',
  MONGODB_URI: 'mongodb+srv://scholar:KKjournals@cluster0.38yti.mongodb.net',
  // Database Name
  DATABASE_NAME: 'reactcms',

  // Client URL
  CLIENT_ROOT_URL: 'http://localhost:3000',
    //CLIENT_ROOT_URL: 'http://cms.kkjournals.com',


  TRANSPORT: {

    // Hostname or IP address of your server that will send the email
    host: 'smtpout.secureserver.net',
    // Port to connect to (defaults to 587 if secure is false or 465 if true)
    port: 587,
    // Use TLS (true for 465, false for other ports)
    secure: false,

    auth: {
      // The email address for your application
      user: "admin@kkjournals.com",
      // Your app email password
      pass: "0651@kkjournals2014g#$"
    },

    tls: {
      // Set to true to fail sending on invalid certificates
      rejectUnauthorized: false
    }

  },


  // The salt to be used to hash the password
  SALT_ROUNDS: 10,

  // The secret key for JsonWebToken.
  JWT_SECRET: 'SECRET_KEY_FOR_JSONWEBTOKEN'

}
