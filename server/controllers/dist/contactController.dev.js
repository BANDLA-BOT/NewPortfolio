"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contact = void 0;

var _contactUsForm = _interopRequireDefault(require("../models/contactUsForm.js"));

var _mailer = require("../utils/mailer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var contact = function contact(req, res) {
  var _req$body, fname, email, message, newContact;

  return regeneratorRuntime.async(function contact$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, fname = _req$body.fname, email = _req$body.email, message = _req$body.message;
          _context.prev = 1;
          newContact = new _contactUsForm["default"]({
            fname: fname,
            email: email,
            message: message
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(newContact.save());

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap((0, _mailer.sendEmail)(process.env.EMAIL_USER, 'New Newsletter Subscription', "A new user has subscribed to the newsletter with email: ".concat(email)));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap((0, _mailer.sendConfirmationEmail)(email, fname));

        case 9:
          res.json({
            Message: "Thank you for contacting us",
            formData: newContact
          });
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            message: 'Internal server error',
            Error: _context.t0.message
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12]]);
};

exports.contact = contact;
//# sourceMappingURL=contactController.dev.js.map
