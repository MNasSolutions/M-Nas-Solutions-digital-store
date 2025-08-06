const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.setAdmin = functions.https.onCall(async (data, context) => {
  // Ensure only admins can assign roles
  if (!context.auth || !context.auth.token.admin) {
    throw new functions.https.HttpsError('permission-denied', 'Only admins can assign roles.');
  }

  const { uid } = data;
  await admin.auth().setCustomUserClaims(uid, { admin: true });
  return { success: true };
});