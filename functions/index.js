// functions/index.js

// Import the Firebase Functions SDK and the EmailJS module
// The 'functions' object provides access to logger and https.onCall in v1.
const functions = require("firebase-functions");
const emailjs = require("@emailjs/nodejs");
// Make sure this package is installed in functions/node_modules

/**
 * sendContactEmail
 * An HTTPS Callable Cloud Function to securely send emails via EmailJS.
 * It expects 'name', 'email', and 'message' in the data payload.
 */
exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  // Validate incoming data
  const {name, email, message} = data;
  // Fixed object-curly-spacing
  if (!name || !email || !message) {
    functions.logger.error(
        "Missing required fields for sendContactEmail:",
        // Fixed quotes
        {data}, // Fixed object-curly-spacing
    ); // Line break for max-len
    throw new functions.https.HttpsError(
        "invalid-argument", // Fixed quotes
        "Missing required fields: name, email, or message.", // Fixed quotes
    );
  }

  // Access the securely stored environment variables for EmailJS
  const serviceID = functions.config().emailjs.serviceid;
  const templateID = functions.config().emailjs.templateid;
  const publicKey = functions.config().emailjs.publickey;
  // This is EmailJS User ID

  // Basic check for config presence (useful during initial setup)
  if (!serviceID || !templateID || !publicKey) {
    functions.logger.error("EmailJS API keys not configured in funcs env");
    throw new functions.https.HttpsError(
        "internal", // Fixed quotes
        "Email service not configured. Please contact support.", // Fixed quotes
    );
  }

  try {
    // Send the email using EmailJS.
    await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: name,
          from_email: email,
          message: message, // Added trailing comma
        },
        {
          publicKey: publicKey, // Added trailing comma
        },
    ); // Line break for max-len

    functions.logger.info(
        "Email sent successfully!", // Fixed quotes
        {toEmail: email, fromName: name}, // Fixed object-curly-spacing, quotes
    );
    return {success: true, message: "Email sent successfully!"};
  } catch (error) {
    // Log the detailed error for debugging in Firebase Logs
    functions.logger.error(
        "Error sending email via EmailJS:", // Fixed quotes
        error,
        {fromEmail: email, fromName: name},
    ); // Line break for max-len

    // Return a user-friendly error message to the client
    throw new functions.https.HttpsError(
        "internal", // Fixed quotes
        "Failed to send email. Please try again later.", // Fixed quotes
        error.message, // Passes only the error message string
    );
  }
});

// The boilerplate helloWorld function is commented out.
// You can remove these commented-out lines completely or leave them for ref
// exports.helloWorld = onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
