const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall(async (data, context) => {
  // Verify the requester is an existing admin
  if (!context.auth || !context.auth.token.admin) {
    throw new functions.https.HttpsError(
      'permission-denied', 
      'Only admins can assign roles.'
    );
  }

  const { uid } = data;
  await admin.auth().setCustomUserClaims(uid, { admin: true });
  return { message: `Success! User ${uid} is now an admin.` };
});