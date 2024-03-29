const firebaseApp = require('../helper/firebase/firebase-config');

const verifyToken = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(400).json({
      message: 'Provide a Token',
      data: null,
      error: true,
    });
  }
  try {
    const response = await firebaseApp.auth().verifyIdToken(token);
    req.headers.firebaseUid = response.user_id;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: error.toString(),
      data: null,
      error: true,
    });
  }
};

module.exports = verifyToken;
