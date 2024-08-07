"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendConfirmationEmail = exports.sendEmail = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var transporter = _nodemailer["default"].createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.PASS_USER
  }
});

var sendEmail = function sendEmail(to, subject, text) {
  var mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: text
  };
  return transporter.sendMail(mailOptions);
};

exports.sendEmail = sendEmail;

var sendConfirmationEmail = function sendConfirmationEmail(to, name) {
  var mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'Subscription Confirmation',
    text: "Hello ".concat(name, ",\n\nThank you for subscribing to our newsletter! We appreciate your interest and will keep you updated with the latest news.\n\nBest regards,\nGuru prasad")
  };
  return transporter.sendMail(mailOptions);
};

exports.sendConfirmationEmail = sendConfirmationEmail;
//# sourceMappingURL=mailer.dev.js.map
