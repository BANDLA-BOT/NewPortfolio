"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = void 0;

var _Admin = _interopRequireDefault(require("../models/Admin.js"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var register = function register(req, res) {
  var _req$body, email, password, userExist, hashedPassword, newAdmin;

  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_Admin["default"].findOne({
            email: email
          }));

        case 4:
          userExist = _context.sent;

          if (!userExist) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            Message: "User already exists"
          }));

        case 7:
          hashedPassword = _bcryptjs["default"].hashSync(password, 10);
          newAdmin = new _Admin["default"]({
            email: email,
            password: hashedPassword
          });
          _context.next = 11;
          return regeneratorRuntime.awrap(newAdmin.save());

        case 11:
          res.status(201).json({
            message: "Registered successfully"
          });
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            message: "Intrenal server error",
            error: _context.t0.message
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

exports.register = register;

var login = function login(req, res) {
  var _req$body2, email, password, userExist, validPassword, token;

  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_Admin["default"].findOne({
            email: email
          }));

        case 4:
          userExist = _context2.sent;

          if (userExist) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: "User not found"
          }));

        case 7:
          validPassword = _bcryptjs["default"].compareSync(password, userExist.password);

          if (validPassword) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: "Incorrect password"
          }));

        case 12:
          token = _jsonwebtoken["default"].sign({
            user: userExist.email,
            id: userExist._id
          }, process.env.JWT_KEY, {
            expiresIn: '1d'
          });
          res.status(200).json({
            message: "Logged in",
            token: token
          });

        case 14:
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            Message: "Internal server error",
            Error: _context2.t0.message
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 16]]);
};

exports.login = login;
//# sourceMappingURL=AuthController.dev.js.map
