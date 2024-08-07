"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var contactSchema = new _mongoose["default"].Schema({
  fname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  message: {
    type: String,
    required: true
  }
});

var contactModel = _mongoose["default"].model('contactform', contactSchema);

var _default = contactModel;
exports["default"] = _default;
//# sourceMappingURL=contactUsForm.dev.js.map
