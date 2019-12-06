var crypto = require("crypto");

class SessionGenerator {
  constructor() {}

  generateSessionId() {
    return crypto.randomBytes(16).toString("base64");
  }
}

module.exports = new SessionGenerator();
