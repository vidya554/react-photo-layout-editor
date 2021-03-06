"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SideNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavigation, _React$Component);

  function SideNavigation(props) {
    var _this;

    _classCallCheck(this, SideNavigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavigation).call(this, props));
    _this.comps = {
      inputFile: null
    };
    _this.state = {
      timestamp: Date.now()
    };
    return _this;
  }
  /**
   * Upload images
   *
   * @param {Event} e
   */


  _createClass(SideNavigation, [{
    key: "upload",
    value: function upload(e) {
      this.props.onUpload(e.target.files);
      this.setState({
        timestamp: Date.now()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state,
          comps = this.comps;
      return _react["default"].createElement("nav", {
        className: "ple-sideNavigation ple-side__navigation"
      }, _react["default"].createElement("div", {
        className: "ple-sideNavigation__wrap"
      }, _react["default"].createElement("button", {
        type: "button",
        title: "attach images",
        onClick: props.onAttach
      }, _react["default"].createElement("i", {
        className: "ple-sp-ico ple-ico-reply ple-abs"
      }, "Moving the image to grid block")), _react["default"].createElement("button", {
        type: "button",
        title: "toggle select",
        onClick: props.onToggleSelect
      }, _react["default"].createElement("i", {
        className: "ple-sp-ico ple-ico-select ple-abs"
      }, "Toggle all select")), _react["default"].createElement("span", {
        title: "upload images",
        key: state.timestamp
      }, _react["default"].createElement("input", {
        ref: function ref(r) {
          comps.inputFile = r;
        },
        type: "file",
        onChange: function onChange(e) {
          return _this2.upload(e);
        },
        multiple: true
      }), _react["default"].createElement("i", {
        className: "ple-sp-ico ple-ico-upload ple-abs"
      }, "upload images")), _react["default"].createElement("button", {
        type: "button",
        title: "remove images",
        onClick: props.onRemove
      }, _react["default"].createElement("i", {
        className: "ple-sp-ico ple-ico-trash ple-abs"
      }, "remove images"))));
    }
  }]);

  return SideNavigation;
}(_react["default"].Component);

SideNavigation.displayName = 'Navigation';
SideNavigation.defaultProps = {
  onRemove: function onRemove() {},
  onToggleSelect: function onToggleSelect() {},
  onAttach: function onAttach() {},
  onUpload: function onUpload() {}
};
var _default = SideNavigation;
exports["default"] = _default;