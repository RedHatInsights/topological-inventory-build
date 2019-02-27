(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListingPage"],{

/***/ "./node_modules/lodash/join.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/join.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeJoin = arrayProto.join;

/**
 * Converts all elements in `array` into a string separated by `separator`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to convert.
 * @param {string} [separator=','] The element separator.
 * @returns {string} Returns the joined string.
 * @example
 *
 * _.join(['a', 'b', 'c'], '~');
 * // => 'a~b~c'
 */
function join(array, separator) {
  return array == null ? '' : nativeJoin.call(array, separator);
}

module.exports = join;


/***/ }),

/***/ "./node_modules/lodash/times.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/times.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./src/PresentationalComponents/ListingView/ListingView.js":
/*!*****************************************************************!*\
  !*** ./src/PresentationalComponents/ListingView/ListingView.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_actions_listing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/listing */ "./src/redux/actions/listing.js");














/* FIXME */

/*eslint react/prop-types: 1*/

var ListingView =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ListingView, _Component);

  function ListingView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ListingView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ListingView).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "state", {
      itemsPerPage: 10,
      onPage: 1,
      sortBy: {}
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "componentDidMount", function () {
      return _this.props.loadListingData(_this.props.viewDefinition, _this.props.sourceId);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onSort", function (_event, key, direction) {
      _this.props.sortListingData(_this.filteredColumns[key].value, direction);

      _this.setState({
        sortBy: {
          index: key,
          direction: direction
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "mapDataToRows", function (data) {
      return data.map(function (row) {
        return {
          id: row.id,
          cells: _this.filteredColumns.map(function (col) {
            return row[col.value] || '';
          })
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onSetPage", function (number) {
      _this.setState({
        onPage: number
      });

      _this.props.pageAndSize(number, _this.state.itemsPerPage);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onPerPageSelect", function (count) {
      _this.setState({
        onPage: 1,
        itemsPerPage: count
      });

      _this.props.pageAndSize(1, count);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return _this.props.loaded ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        sortBy: _this.state.sortBy,
        header: _this.headers,
        onSort: _this.onSort,
        rows: _this.mapDataToRows(_this.props.listingRows),
        footer: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Pagination"], {
          itemsPerPage: _this.state.itemsPerPage,
          page: _this.state.onPage,
          direction: "up",
          onSetPage: _this.onSetPage,
          onPerPageSelect: _this.onPerPageSelect,
          numberOfItems: _this.props.rawRows ? _this.props.rawRows.length : 0
        })
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Loading data...");
    });

    _this.filteredColumns = lodash_filter__WEBPACK_IMPORTED_MODULE_12___default()(_this.props.viewDefinition.columns, function (c) {
      return c.title;
    });
    _this.headers = _this.filteredColumns.map(function (col) {
      return col.title;
    });
    return _this;
  }

  return ListingView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ListingView, "propTypes", {
  sourceId: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,
  viewDefinition: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any.isRequired
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({
    loadListingData: _redux_actions_listing__WEBPACK_IMPORTED_MODULE_13__["loadListingData"],
    sortListingData: _redux_actions_listing__WEBPACK_IMPORTED_MODULE_13__["sortListingData"],
    pageAndSize: _redux_actions_listing__WEBPACK_IMPORTED_MODULE_13__["pageAndSize"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$listing = _ref.listing,
      _ref$listing$loaded = _ref$listing.loaded,
      loaded = _ref$listing$loaded === void 0 ? false : _ref$listing$loaded,
      _ref$listing$listingR = _ref$listing.listingRows,
      listingRows = _ref$listing$listingR === void 0 ? [] : _ref$listing$listingR,
      _ref$listing$rawRows = _ref$listing.rawRows,
      rawRows = _ref$listing$rawRows === void 0 ? [] : _ref$listing$rawRows;
  return {
    loaded: loaded,
    listingRows: listingRows,
    rawRows: rawRows
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(ListingView)));

/***/ }),

/***/ "./src/SmartComponents/ListingPage/FilterDropdown.js":
/*!***********************************************************!*\
  !*** ./src/SmartComponents/ListingPage/FilterDropdown.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterDropdown; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");









var FilterDropdown =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(FilterDropdown, _Component);

  function FilterDropdown(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FilterDropdown);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(FilterDropdown).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onToggle", function (isOpen) {
      return _this.setState({
        isOpen: isOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onSelect", function (_event) {
      return _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "dropdownItems", function () {
      return [react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], null, "Link"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        component: "button"
      }, "Action"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        isDisabled: true
      }, "Disabled Link"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        isDisabled: true,
        component: "button"
      }, "Disabled Action"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownSeparator"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], null, "Separated Link"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        component: "button"
      }, "Separated Action")];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
        onToggle: _this.onToggle,
        onSelect: _this.onSelect,
        toggle: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
          onToggle: _this.onToggle
        }, "All"),
        isOpen: _this.state.isOpen,
        dropdownItems: _this.dropdownItems()
      });
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  return FilterDropdown;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/SmartComponents/ListingPage/ListingPage.js":
/*!********************************************************!*\
  !*** ./src/SmartComponents/ListingPage/ListingPage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _FilterDropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FilterDropdown */ "./src/SmartComponents/ListingPage/FilterDropdown.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _PresentationalComponents_ListingView_ListingView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../PresentationalComponents/ListingView/ListingView */ "./src/PresentationalComponents/ListingView/ListingView.js");
/* harmony import */ var _SimpleKebab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SimpleKebab */ "./src/SmartComponents/ListingPage/SimpleKebab.js");
/* harmony import */ var _views_viewDefinitions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../views/viewDefinitions */ "./src/views/viewDefinitions.js");
















var ListingPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ListingPage, _Component);

  function ListingPage(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ListingPage);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ListingPage).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onNavigate", function (_event, navigate, _index) {
      _this.props.history.push(navigate);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "loadDefinition", function () {
      return _views_viewDefinitions__WEBPACK_IMPORTED_MODULE_14__["viewDefinitions"][_this.props.location.pathname.split('/').pop()];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "parseSourceId", function () {
      var parts = _this.props.location.pathname.split('/');

      return parseInt(parts[parts.length - 2], 10);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "locationToState", function () {
      return {
        viewDefinition: _this.loadDefinition(),
        sourceId: _this.parseSourceId()
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "componentDidUpdate", function (prevProps, _prevState) {
      if (_this.props.location.pathname !== prevProps.location.pathname) {
        _this.setState(_this.locationToState());
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["PageHeaderTitle"], {
        title: "Providers"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Breadcrumbs"], {
        items: [{
          title: 'Sources',
          navigate: '/'
        }],
        current: _this.state.viewDefinition.displayName,
        onNavigate: _this.onNavigate
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Section"], {
        type: "content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pf-c-input-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FilterDropdown__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextInput"], {
        id: "filter_text",
        value: ""
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Button"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SimpleKebab__WEBPACK_IMPORTED_MODULE_13__["default"], {
        dropdownItems: [react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownItem"], {
          key: "foo",
          component: "div"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: '/'
        }, "Back to Sources"))]
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PresentationalComponents_ListingView_ListingView__WEBPACK_IMPORTED_MODULE_12__["default"], {
        viewDefinition: _this.state.viewDefinition,
        sourceId: _this.state.sourceId
      })));
    });

    _this.state = _this.locationToState();
    return _this;
  }

  return ListingPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ListingPage, "propTypes", {
  location: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any.isRequired
});

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(ListingPage));

/***/ }),

/***/ "./src/SmartComponents/ListingPage/SimpleKebab.js":
/*!********************************************************!*\
  !*** ./src/SmartComponents/ListingPage/SimpleKebab.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleKebab; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);











var SimpleKebab =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SimpleKebab, _Component);

  function SimpleKebab() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SimpleKebab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SimpleKebab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      isOpen: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onToggle", function (opened) {
      return _this.setState({
        isOpen: opened
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SimpleKebab, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["DropdownPosition"].right,
        toggle: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["KebabToggle"], {
          onToggle: this.onToggle
        }),
        isOpen: this.state.isOpen,
        dropdownItems: this.props.dropdownItems
      });
    }
  }]);

  return SimpleKebab;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(SimpleKebab, "propTypes", {
  dropdownItems: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired
});



/***/ }),

/***/ "./src/api/listing_view.js":
/*!*********************************!*\
  !*** ./src/api/listing_view.js ***!
  \*********************************/
/*! exports provided: generateRandomData, doLoadListingData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomData", function() { return generateRandomData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLoadListingData", function() { return doLoadListingData; });
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/times */ "./node_modules/lodash/times.js");
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/join */ "./node_modules/lodash/join.js");
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_join__WEBPACK_IMPORTED_MODULE_1__);


function generateRandomData(num) {
  var rows = [];

  for (var i = 1; i <= num; i++) {
    rows.push({
      id: i,
      name: "foobar ".concat(Math.round(Math.random() * 1000)),
      cluster: 'Default',
      host: "foo.bar.host".concat(Math.round(Math.random() * 1000)),
      ip_address: lodash_join__WEBPACK_IMPORTED_MODULE_1___default()(lodash_times__WEBPACK_IMPORTED_MODULE_0___default()(4, function () {
        return Math.round(Math.random() * 256);
      }), '.'),
      datastore: 'My store'
    });
  }

  return rows;
}
function doLoadListingData(viewDefinition, sourceId) {
  console.log('doLoadListingData', sourceId);
  var url = viewDefinition.url.replace(/:id/, sourceId);
  return fetch(url).then(function (r) {
    if (r.ok || r.type === 'opaque') {
      return r.json();
    }

    throw new Error("Unexpected response code ".concat(r.status));
  });
}

/***/ }),

/***/ "./src/redux/actions/listing.js":
/*!**************************************!*\
  !*** ./src/redux/actions/listing.js ***!
  \**************************************/
/*! exports provided: loadListingData, sortListingData, pageAndSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListingData", function() { return loadListingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortListingData", function() { return sortListingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageAndSize", function() { return pageAndSize; });
/* harmony import */ var _action_types_listing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types-listing */ "./src/redux/action-types-listing.js");
/* harmony import */ var _api_listing_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/listing_view */ "./src/api/listing_view.js");


var loadListingData = function loadListingData(viewDefinition, sourceId) {
  return {
    type: _action_types_listing__WEBPACK_IMPORTED_MODULE_0__["ASYNC_ACTION_TYPES"].LOAD_LISTING_DATA,
    payload: Object(_api_listing_view__WEBPACK_IMPORTED_MODULE_1__["doLoadListingData"])(viewDefinition, sourceId)
  };
};
var sortListingData = function sortListingData(column, direction) {
  return {
    type: _action_types_listing__WEBPACK_IMPORTED_MODULE_0__["SORT_LISTING_DATA"],
    payload: {
      column: column,
      direction: direction
    }
  };
};
var pageAndSize = function pageAndSize(page, size) {
  return {
    type: _action_types_listing__WEBPACK_IMPORTED_MODULE_0__["PAGE_AND_SIZE_LISTING_DATA"],
    payload: {
      page: page,
      size: size
    }
  };
};

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/ListingPage.js.map