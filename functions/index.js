const {onCall} = require("firebase-functions/v2/https");
const {defineString} = require("firebase-functions/params");
const {logger} = require("firebase-functions");
const emailjs = require("@emailjs/nodejs");

// Define placeholders for your secret keys from the .env file
const SERVICE_ID = defineString("EMAILJS_SERVICE_ID");
const TEMPLATE_ID = defineString("EMAILJS_TEMPLATE_ID");
// CORRECTED: Use a variable that clearly represents the private key
const PRIVATE_KEY = defineString("EMAILJS_PRIVATE_KEY");

exports.sendContactEmail = onCall(async (request) => {
  const {name, email, message} = request.data;

  if (!name || !email || !message) {
    logger.error("Missing required fields:", {data: request.data});
    throw new Error("Missing required fields: name, email, or message.");
  }

  try {
    // The EmailJS library expects the key in a property named 'privateKey'
    await emailjs.send(
      SERVICE_ID.value(),
      TEMPLATE_ID.value(),
      { from_name: name, from_email: email, message: message },
      // CORRECTED: Pass the private key correctly
      { privateKey: PRIVATE_KEY.value() }
    );

    logger.info("Email sent successfully!", {toEmail: email, fromName: name});
    return {success: true, message: "Email sent successfully!"};
  } catch (error) {
    logger.error("Error sending email via EmailJS:", error, { fromEmail: email });
    throw new Error("Failed to send email. Please try again later.");
  }
});