"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var styled_1 = require("../../../styled");

var TopBar_1 = require("../TopBar/TopBar");

var createSDL_1 = require("../util/createSDL");

var SDLHeader =
/** @class */
function (_super) {
  __extends(SDLHeader, _super);

  function SDLHeader(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClick = function (e) {
      if (_this.node.contains(e.target)) {
        return;
      }

      return _this.setState({
        open: false
      });
    };

    _this.showOptions = function () {
      _this.setState({
        open: !_this.state.open
      });
    };

    _this.printSDL = function () {
      return createSDL_1.downloadSchema(_this.props.schema, 'sdl');
    };

    _this.printIntrospection = function () {
      return createSDL_1.downloadSchema(_this.props.schema, 'json');
    };

    _this.setRef = function (ref) {
      _this.node = ref;
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  SDLHeader.prototype.UNSAFE_componentWillMount = function () {
    document.addEventListener('mousedown', this.handleClick, false);
  };

  SDLHeader.prototype.componentWillUnmount = function () {
    document.removeEventListener('mousedown', this.handleClick, false);
  };

  SDLHeader.prototype.render = function () {
    var open = this.state.open;
    return /*#__PURE__*/React.createElement(SchemaHeader, {
      ref: this.setRef
    }, /*#__PURE__*/React.createElement(Title, null, "Schema"), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Download, {
      onClick: this.showOptions,
      open: open
    }, "Download"), open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Option, {
      onClick: this.printIntrospection
    }, "JSON"), /*#__PURE__*/React.createElement(Option, {
      onClick: this.printSDL
    }, "SDL"))));
  };

  return SDLHeader;
}(React.Component);

exports["default"] = SDLHeader;
var SchemaHeader = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  height: 64px;\n  width: 100%;\n  margin-right: 108px;\n  align-items: center;\n  justify-content: flex-start;\n  outline: none;\n  user-select: none;\n"], ["\n  display: flex;\n  flex-direction: row;\n  height: 64px;\n  width: 100%;\n  margin-right: 108px;\n  align-items: center;\n  justify-content: flex-start;\n  outline: none;\n  user-select: none;\n"])));
var Box = styled_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 16px;\n  right: 2em;\n  width: 108px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n"], ["\n  position: absolute;\n  top: 16px;\n  right: 2em;\n  width: 108px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n"])));
var Title = styled_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  cursor: default;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase !important;\n  font-family: 'Open Sans', sans-serif !important;\n  letter-spacing: 1px;\n  user-select: none !important;\n  padding: 16px;\n  padding-right: 5px;\n"], ["\n  color: ", ";\n  cursor: default;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase !important;\n  font-family: 'Open Sans', sans-serif !important;\n  letter-spacing: 1px;\n  user-select: none !important;\n  padding: 16px;\n  padding-right: 5px;\n"])), function (p) {
  return styleHelper(p).title;
});
var Download = styled_1.styled(TopBar_1.Button)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  color: ", ";\n  background: ", ";\n  height: 32px;\n  border-radius: 2px;\n  &:hover {\n    color: ", ";\n    background-color: ", ";\n  }\n"], ["\n  flex: 1;\n  color: ", ";\n  background: ", ";\n  height: 32px;\n  border-radius: 2px;\n  &:hover {\n    color: ", ";\n    background-color: ", ";\n  }\n"])), function (p) {
  return styleHelper(p).download['text'];
}, function (p) {
  return styleHelper(p).download['button'];
}, function (p) {
  return styleHelper(p).buttonTextHover;
}, function (p) {
  return styleHelper(p).buttonHover;
});
var Option = styled_1.styled(Download)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  text-align: left;\n  width: 100%;\n  margin-left: 0px;\n  border-radius: 0px;\n  z-index: 2000;\n  background: ", ";\n"], ["\n  text-align: left;\n  width: 100%;\n  margin-left: 0px;\n  border-radius: 0px;\n  z-index: 2000;\n  background: ", ";\n"])), function (p) {
  return styleHelper(p).button;
});

var styleHelper = function styleHelper(p) {
  if (p.theme.mode === 'dark') {
    return {
      title: 'white',
      subtitle: '#8B959C',
      download: {
        text: p.open ? '#8B959C' : 'white',
        button: p.theme.colours.darkBlue
      },
      buttonText: 'white',
      button: p.theme.colours.darkBlue,
      buttonHover: '#2B3C48',
      buttonTextHover: 'white'
    };
  }

  return {
    title: p.theme.colours.darkBlue,
    subtitle: 'rgba(61, 88, 102, 0.5)',
    download: {
      text: p.open ? 'rgba(61, 88, 102, 0.5)' : p.theme.colours.darkBlue,
      button: '#f6f6f6'
    },
    buttonText: p.theme.colours.darkBlue,
    button: '#f6f6f6',
    buttonHover: '#EDEDED',
    buttonTextHover: p.theme.colours.darkBlue
  };
};

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;