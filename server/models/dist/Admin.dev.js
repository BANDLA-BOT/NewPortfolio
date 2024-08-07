"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var adminSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    required: true,
    min: 6,
    type: String
  }
});

var Admin = _mongoose["default"].model('Admin', adminSchema);

var _default = Admin;
exports["default"] = _default;
//# sourceMappingURL=Admin.dev.js.map
