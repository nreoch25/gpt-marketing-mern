module.exports = {
  port: process.env.API_PORT || 3000,
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/gpt-marketing"
};
