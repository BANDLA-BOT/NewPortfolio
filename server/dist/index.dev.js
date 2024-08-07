"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _contact = _interopRequireDefault(require("./routes/contact.js"));

var _AuthRoutes = _interopRequireDefault(require("./routes/AuthRoutes.js"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var PORT = process.env.PORT || 8000;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());

_mongoose["default"].connect(process.env.MONGO_URI).then(function (res) {
  console.log('DB Connected');
})["catch"](function (err) {
  console.log("Error While connecting DB ".concat(err));
});

app.use('/contact', _contact["default"]);
app.use('/auth', _AuthRoutes["default"]);
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});
//# sourceMappingURL=index.dev.js.map
