"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _uuid = _interopRequireDefault(require("uuid"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;

_mongoose["default"].connection.on('connected', function () {
  console.log('connected!');
});

_mongoose["default"].connect("mongodb+srv://".concat(process.env.MONGO_USER, ":").concat(process.env.MONGO_PASSWORD, "@cluster0-taijg.mongodb.net/frontendproject?retryWrites=true&w=majority"), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.set('trust proxy', 1);
app.use((0, _expressSession["default"])({
  genid: function genid(req) {
    return (0, _uuid["default"])();
  },
  secret: process.env.SESSION_SECRET,
  resave: true,
  rolling: true,
  saveUninitialized: true,
  cookie: process.env.MODE == 'development' ? {
    httpOnly: false
  } : {
    secure: true
  }
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use(_router["default"]);
app.listen(port, function (err) {
  if (err) throw err;else console.log('server started in ES6!');
});
