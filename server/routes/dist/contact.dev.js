"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _contactController = require("../controllers/contactController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/', _contactController.contact);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=contact.dev.js.map
