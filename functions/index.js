const {onCall} = require("firebase-functions/v2/https");
const {defineString} = require("firebase-functions/params");
const {logger} = require("firebase-functions");
const emailjs = require("@emailjs/nodejs");

// Define placeholders for your secret keys from the .env file
const SERVICE_ID = defineString("EMAILJS_SERVICE_ID");
const TEMPLATE_ID = defineString("EMAILJS_TEMPLATE_ID");
const PUBLIC_KEY = defineString("EMAILJS_PUBLIC_KEY"); // Added Public Key
const PRIVATE_KEY = defineString("EMAILJS_PRIVATE_KEY");

exports.sendContactEmail = onCall(async (request) => {
  const {name, email, message} = request.data;

  if (!name || !email || !message) {
    logger.error("Missing required fields:", {data: request.data});
    throw new Error("Missing required fields: name, email, or message.");
  }

  try {
    // The EmailJS library can accept both keys in its options object
    await emailjs.send(
      SERVICE_ID.value(),
      TEMPLATE_ID.value(),
      { from_name: name, from_email: email, message: message },
      // Pass both the public and private keys
      { 
        publicKey: PUBLIC_KEY.value(),
        privateKey: PRIVATE_KEY.value()
      }
    );

    logger.info("Email sent successfully!", {toEmail: email, fromName: name});
    return {success: true, message: "Email sent successfully!"};
  } catch (error) {
    logger.error("Error sending email via EmailJS:", error, { fromEmail: email });
    throw new Error("Failed to send email. Please try again later.");
  }
});

