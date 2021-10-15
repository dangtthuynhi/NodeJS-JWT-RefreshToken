const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");

module.exports = {
  authJwt,//verify token, is admin, is moderator
  verifySignUp//check duplicate and role
};