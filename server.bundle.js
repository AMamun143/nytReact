/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(19);
	var path = __webpack_require__(20);
	var compression = __webpack_require__(21);
	var mongoose = __webpack_require__(18);
	mongoose.connect('mongodb://localhost:27017/NYTimes');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function () {
		console.log('Connected!');
	});

	var app = express();

	app.use(compression());
	app.use(express.static(__dirname));

	//send all requests to index.html so browserHistory in React Router works
	app.get('*', function (req, res) {
		(0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
			if (err) {
				// there was an error somewhere during route matching
				res.status(500).send(err.message);
			} else if (redirect) {

				res.redirect(redirect.pathname + redirect.search);
			} else if (props) {

				var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
				res.send(renderPage(appHtml));
			} else {

				res.status(404).send('Not Found');
			}
		});
	});

	function renderPage(appHtml) {
		return '\n\t\t<!DOCTYPE html>\n\t\t<html lang="en">\n\t\t<meta charset="UTF-8">\n\t\t<title>Github Profile Viewer</title>\n\t\t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">\n\t\t<div id="app">' + appHtml + '</div>\n\t\t<script src="bundle.js"></script>\n\t';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
		console.log('Server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _Header = __webpack_require__(5);

	var _Header2 = _interopRequireDefault(_Header);

	var _Saved = __webpack_require__(8);

	var _Saved2 = _interopRequireDefault(_Saved);

	var _Search = __webpack_require__(9);

	var _Search2 = _interopRequireDefault(_Search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function myfunc(nextState, transition) {
		replace({
			state: 'my dudes!'
		});
	}

	module.exports = _react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _Header2.default, database: false },
		_react2.default.createElement(_reactRouter.Route, { path: 'saved', component: _Search2.default, database: true }),
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Search2.default })
	);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Nav = __webpack_require__(6);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Jumbotron = __webpack_require__(7);

	var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
		_inherits(Header, _React$Component);

		function Header() {
			_classCallCheck(this, Header);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
		}

		_createClass(Header, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'main-container' },
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(_Nav2.default, null),
						_react2.default.createElement(_Jumbotron2.default, null),
						this.props.children
					)
				);
			}
		}]);

		return Header;
	}(_react2.default.Component);

	exports.default = Header;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Nav = function (_React$Component) {
		_inherits(Nav, _React$Component);

		function Nav() {
			_classCallCheck(this, Nav);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).apply(this, arguments));
		}

		_createClass(Nav, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'nav',
					{ className: 'navbar navbar-default', role: 'navigation' },
					_react2.default.createElement(
						'div',
						{ className: 'container-fluid' },
						_react2.default.createElement(
							'div',
							{ className: 'navbar-header' },
							_react2.default.createElement(
								'button',
								{ className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-ex1-collapse' },
								_react2.default.createElement(
									'span',
									{ className: 'sr-only' },
									'Toggle navigation'
								),
								_react2.default.createElement('span', { className: 'icon-bar' }),
								_react2.default.createElement('span', { className: 'icon-bar' }),
								_react2.default.createElement('span', { className: 'icon-bar' })
							),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/', className: 'navbar-brand' },
								'NYT-React'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'collapse navbar-collapse navbar-ex1-collapse' },
							_react2.default.createElement(
								'ul',
								{ className: 'nav navbar-nav navbar-right' },
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '/' },
										'Search'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '/saved' },
										'Saved Articles'
									)
								)
							)
						)
					)
				);
			}
		}]);

		return Nav;
	}(_react2.default.Component);

	exports.default = Nav;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Jumbotron = function (_React$Component) {
		_inherits(Jumbotron, _React$Component);

		function Jumbotron() {
			_classCallCheck(this, Jumbotron);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Jumbotron).apply(this, arguments));
		}

		_createClass(Jumbotron, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "jumbotron" },
					_react2.default.createElement(
						"h2",
						{ className: "text-center" },
						_react2.default.createElement(
							"strong",
							null,
							"(ReactJS) New York Times Article Scrubber"
						)
					),
					_react2.default.createElement(
						"h3",
						{ className: "text-center" },
						"Search for and save Articles of interest"
					)
				);
			}
		}]);

		return Jumbotron;
	}(_react2.default.Component);

	exports.default = Jumbotron;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Saved = function (_React$Component) {
		_inherits(Saved, _React$Component);

		//This is the es6 way of getInitialState

		function Saved(props) {
			_classCallCheck(this, Saved);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Saved).call(this, props));

			_this.handleSubmit = _this.handleSubmit.bind(_this);
			_this.state = {
				results: [],
				action: 'balls deep my dude'
			};
			return _this;
		}

		_createClass(Saved, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement('div', null);
			}
		}]);

		return Saved;
	}(_react2.default.Component);

	exports.default = Saved;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Query = __webpack_require__(10);

	var _Query2 = _interopRequireDefault(_Query);

	var _Results = __webpack_require__(11);

	var _Results2 = _interopRequireDefault(_Results);

	var _helpers = __webpack_require__(13);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _database = __webpack_require__(16);

	var _database2 = _interopRequireDefault(_database);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search = function (_React$Component) {
		_inherits(Search, _React$Component);

		//This is the es6 way of getInitialState

		function Search(props) {
			_classCallCheck(this, Search);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));

			_this.handleSubmit = _this.handleSubmit.bind(_this);
			_this.dataPull = _this.dataPull.bind(_this);
			_this.state = {
				results: [],
				action: ''
			};
			return _this;
		}

		_createClass(Search, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log('yassss');
			}
		}, {
			key: 'handleSubmit',
			value: function handleSubmit(body) {
				_helpers2.default.getInfo(body).then(function (res) {
					console.log(res);
					this.setState({
						results: res
					});
				}.bind(this));
			}
		}, {
			key: 'dataPull',
			value: function dataPull() {
				_database2.default.get();
			}
		}, {
			key: 'render',
			value: function render() {
				var database = this.props.route.database;

				if (database) {
					this.dataPull();
				}

				return _react2.default.createElement(
					'div',
					{ className: 'main-container' },
					!database ? _react2.default.createElement(_Query2.default, { submit: this.handleSubmit }) : null,
					_react2.default.createElement(_Results2.default, { results: this.state.results })
				);
			}
		}]);

		return Search;
	}(_react2.default.Component);

	exports.default = Search;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Query = function (_React$Component) {
		_inherits(Query, _React$Component);

		function Query(props) {
			_classCallCheck(this, Query);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Query).call(this, props));

			_this.handleSubmit = _this.handleSubmit.bind(_this); //!!!important for future uses
			return _this;
		}

		_createClass(Query, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.props.updateTask('query');
			}
		}, {
			key: 'handleSubmit',
			value: function handleSubmit(event) {
				event.preventDefault();

				var body = {
					q: event.target.elements[0].value,
					s: event.target.elements[1].value,
					e: event.target.elements[2].value
				};

				this.props.submit(body);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'main-container' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-lg-12' },
							_react2.default.createElement(
								'div',
								{ className: 'panel panel-primary' },
								_react2.default.createElement(
									'div',
									{ className: 'panel-heading' },
									_react2.default.createElement(
										'h1',
										{ className: 'panel-title' },
										_react2.default.createElement(
											'strong',
											null,
											_react2.default.createElement('i', { className: 'fa fa-newspaper-o', 'aria-hidden': 'true' }),
											' ' /*...Adds a space*/,
											' Query'
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'panel-body' },
									_react2.default.createElement(
										'form',
										{ onSubmit: this.handleSubmit },
										_react2.default.createElement(
											'div',
											{ className: 'form-group' },
											_react2.default.createElement(
												'h4',
												null,
												_react2.default.createElement(
													'strong',
													null,
													'Topic'
												)
											),
											_react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'search' }),
											_react2.default.createElement(
												'h4',
												null,
												_react2.default.createElement(
													'strong',
													null,
													'Start Year'
												)
											),
											_react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'start' }),
											_react2.default.createElement(
												'h4',
												null,
												_react2.default.createElement(
													'strong',
													null,
													'End Year'
												)
											),
											_react2.default.createElement('input', { placeholder: '...Today', type: 'text', className: 'form-control', id: 'end' })
										),
										_react2.default.createElement(
											'div',
											{ className: 'pull-right' },
											_react2.default.createElement(
												'button',
												{ type: 'submit', className: 'btn btn-danger' },
												_react2.default.createElement(
													'h4',
													null,
													'Search'
												)
											)
										)
									)
								)
							)
						)
					)
				);
			}
		}]);

		return Query;
	}(_react2.default.Component);

	exports.default = Query;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Result = __webpack_require__(12);

	var _Result2 = _interopRequireDefault(_Result);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Results = function (_React$Component) {
		_inherits(Results, _React$Component);

		function Results() {
			_classCallCheck(this, Results);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Results).apply(this, arguments));
		}

		_createClass(Results, [{
			key: 'render',
			value: function render() {
				var rows = [];
				this.props.results.forEach(function (article) {
					rows.push(_react2.default.createElement(_Result2.default, { title: article.headline, date: article.published, url: article.url, key: Math.random() }));
				});
				if (rows.length == 0) {
					rows = _react2.default.createElement(
						'li',
						{ className: 'list-group-item' },
						_react2.default.createElement(
							'h3',
							null,
							_react2.default.createElement(
								'span',
								null,
								_react2.default.createElement(
									'em',
									null,
									'Enter Search Terms to Begin...'
								)
							)
						)
					);
				}
				return _react2.default.createElement(
					'div',
					{ className: 'main-container' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-lg-12' },
							_react2.default.createElement(
								'div',
								{ className: 'panel panel-primary' },
								_react2.default.createElement(
									'div',
									{ className: 'panel-heading' },
									_react2.default.createElement(
										'h1',
										{ className: 'panel-title' },
										_react2.default.createElement(
											'strong',
											null,
											_react2.default.createElement('i', { className: 'fa fa-list-alt' }),
											' ' /*...Adds a space*/,
											' Results'
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'panel-body' },
									_react2.default.createElement(
										'ul',
										{ className: 'list-group' },
										rows
									)
								)
							)
						)
					)
				);
			}
		}]);

		return Results;
	}(_react2.default.Component);

	exports.default = Results;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Result = function (_React$Component) {
		_inherits(Result, _React$Component);

		function Result() {
			_classCallCheck(this, Result);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Result).apply(this, arguments));
		}

		_createClass(Result, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"li",
					{ className: "list-group-item" },
					_react2.default.createElement(
						"h3",
						null,
						_react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								"em",
								null,
								this.props.title
							)
						),
						_react2.default.createElement(
							"span",
							{ className: "btn-group pull-right" },
							_react2.default.createElement(
								"a",
								{ href: this.props.url, target: "_blank" },
								_react2.default.createElement(
									"button",
									{ className: "btn btn-default" },
									"View Article"
								)
							),
							_react2.default.createElement(
								"button",
								{ className: "btn btn-primary", onClick: this.handleClick, "data-toggle": "modal" },
								"Save"
							)
						)
					),
					_react2.default.createElement(
						"p",
						null,
						"Date Published: ",
						this.props.date.substring(0, 10)
					)
				);
			}
		}]);

		return Result;
	}(_react2.default.Component);

	exports.default = Result;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*Axios is a convenient NPM package for performing HTTP requests*/
	var axios = __webpack_require__(14);
	var moment = __webpack_require__(15);
	// var mongoose = require('mongoose');

	function buildURL(body) {
		var today = moment().format('YYYYMMDD');
		if (!body.s) {
			body.s = '20000101';
		} else {
			body.s = moment(body.s).format('YYYYMMDD');
		}
		if (!body.e) {
			body.e = moment().format('YYYYMMDD');
		} else if (body.e > today) {
			body.e = today;
		} else {
			body.e = moment(body.e).format('YYYYMMDD');
		}

		return 'http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a6585d19c1744f52b9ccdfab9ced0521&q=' + body.q + '&begin_date=' + body.s + '&end_date=' + body.e;
	}

	var helpers = {
		getInfo: function getInfo(body) {
			var urlQuery = buildURL(body);
			return axios.get(urlQuery).then(function (res) {
				return res.data.response.docs.map(function (doc) {
					return {
						headline: doc.headline.main,
						published: doc.pub_date,
						url: doc.web_url
					};
				});
			});
		},
		getData: function getData(body) {
			console.log('yasssss yasssss');
		}
	};

	module.exports = helpers;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var savedArticles = __webpack_require__(17);

	var obj = {
		get: function get() {
			savedArticles.find().then(function (articles) {
				console.log(articles);
			});
		}
	};

	module.exports = obj;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mongoose = __webpack_require__(18);
	var Schema = mongoose.Schema;

	var dbSchema = new Schema({
		headline: {
			type: String,
			trim: true,
			required: 'headline is Required'
		},
		published: {
			type: String,
			trim: true,
			required: 'published date is Required'
		},
		url: {
			type: String,
			trim: true,
			required: 'url is Required'
		}
	});

	var NYT = mongoose.model('NYTimes', dbSchema);
	module.exports = NYT;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);