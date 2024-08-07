"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _AuthController = require("../controllers/AuthController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/register', _AuthController.register);
router.post('/login', _AuthController.login);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=AuthRoutes.dev.js.map
