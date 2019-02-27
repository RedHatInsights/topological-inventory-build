(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProviderPage"],{

/***/ "./src/PresentationalComponents/SourcesListView/SourcesFilter.js":
/*!***********************************************************************!*\
  !*** ./src/PresentationalComponents/SourcesListView/SourcesFilter.js ***!
  \***********************************************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__);










var SourcesFilter =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SourcesFilter, _Component);

  function SourcesFilter(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SourcesFilter);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(SourcesFilter).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onFilterButtonClick", function (filterValue, column) {
      console.log('filter click', column.value, filterValue);

      _this.props.onFilter(column.value, filterValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["SimpleTableFilter"], {
        options: {
          title: 'Filter By',
          items: _this.props.columns
        },
        onButtonClick: _this.onFilterButtonClick
      });
    });

    return _this;
  }

  return SourcesFilter;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SourcesFilter.propTypes = {
  columns: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
  })).isRequired,
  onFilter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SourcesFilter);

/***/ }),

/***/ "./src/PresentationalComponents/SourcesListView/SourcesListView.js":
/*!*************************************************************************!*\
  !*** ./src/PresentationalComponents/SourcesListView/SourcesListView.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../redux/actions/providers */ "./src/redux/actions/providers.js");
/* harmony import */ var _PresentationalComponents_DetailView_DetailView__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../PresentationalComponents/DetailView/DetailView */ "./src/PresentationalComponents/DetailView/DetailView.js");
/* harmony import */ var _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../views/sourcesViewDefinition */ "./src/views/sourcesViewDefinition.js");
/* harmony import */ var _views_viewDefinitions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../views/viewDefinitions */ "./src/views/viewDefinitions.js");

























var RowLoader = function RowLoader(props) {
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_19__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({
    height: 20,
    width: 480
  }, props), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "30",
    y: "0",
    rx: "3",
    ry: "3",
    width: "250",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "300",
    y: "0",
    rx: "3",
    ry: "3",
    width: "70",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "385",
    y: "0",
    rx: "3",
    ry: "3",
    width: "95",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "50",
    y: "12",
    rx: "3",
    ry: "3",
    width: "80",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "150",
    y: "12",
    rx: "3",
    ry: "3",
    width: "200",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "360",
    y: "12",
    rx: "3",
    ry: "3",
    width: "120",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "20",
    height: "20"
  }));
};

var SourcesListView =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SourcesListView, _React$Component);

  function SourcesListView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SourcesListView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SourcesListView).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "componentDidMount", function () {
      return _this.props.loadEntities();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onItemSelect", function (_event, key, checked) {
      return _this.props.selectEntity(key, checked);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onSort", function (_event, key, direction) {
      // -1 for the expander column
      _this.props.sortEntities(_this.filteredColumns[key - 1].value, direction);

      _this.setState({
        sortBy: {
          index: key,
          direction: direction
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onExpandClick", function (_event, _row, rowKey) {
      return _this.props.expandEntity(rowKey, true);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onCollapse", function (_event, i, isOpen) {
      return _this.props.expandEntity(_this.sourceIndexToId(i), isOpen);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "sourceIndexToId", function (i) {
      return _this.props.entities[i / 2].id;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "renderActions", function () {
      return [{
        title: 'Show Details',
        onClick: function onClick(_ev, i) {
          return _this.props.history.push("/".concat(_this.sourceIndexToId(i)));
        }
      }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this.renderViewLinks()));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "renderViewLinks", function () {
      return lodash_reduce__WEBPACK_IMPORTED_MODULE_18___default()(Object.keys(_views_viewDefinitions__WEBPACK_IMPORTED_MODULE_23__["viewDefinitions"]), function (acc, viewName) {
        return acc.push({
          title: "Show ".concat(_views_viewDefinitions__WEBPACK_IMPORTED_MODULE_23__["viewDefinitions"][viewName].displayName),
          onClick: function onClick(_ev, i) {
            return _this.props.history.push("/".concat(_this.sourceIndexToId(i), "/").concat(viewName));
          }
        }) && acc;
      }, []);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "render", function () {
      var _this$props = _this.props,
          entities = _this$props.entities,
          loaded = _this$props.loaded;
      var rowData = lodash_flatten__WEBPACK_IMPORTED_MODULE_16___default()(entities.map(function (item, index) {
        return [_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
          isOpen: !!item.expanded,
          cells: _this.filteredColumns.map(function (col) {
            return item[col.value] || '';
          }).concat({
            title: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
              key: "bar",
              to: "/".concat(item.id, "/topology")
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_14__["TopologyIcon"], null))
          })
        }), {
          id: item.id + '_detail',
          parent: index,
          cells: [{
            title: item.expanded ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_DetailView_DetailView__WEBPACK_IMPORTED_MODULE_21__["default"], {
              sourceId: item.id
            }) : 'collapsed content',
            colSpan: 6
          }]
        }];
      })); // console.log(rowData);

      if (loaded) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["Table"], {
          "aria-label": "List of Sources",
          onCollapse: _this.onCollapse,
          onSort: _this.onSort,
          sortBy: _this.state.sortBy,
          rows: rowData,
          cells: _this.headers,
          actions: _this.renderActions()
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["TableHeader"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["TableBody"], null));
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", {
        className: "sources-placeholder-table pf-m-compact ins-entity-table"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(RowLoader, null))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(RowLoader, null)))));
    });

    _this.filteredColumns = lodash_filter__WEBPACK_IMPORTED_MODULE_17___default()(_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_22__["sourcesViewDefinition"].columns, function (c) {
      return c.title;
    });
    _this.headers = _this.filteredColumns.map(function (col) {
      return {
        title: col.title,
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["sortable"]]
      };
    }).concat('');
    _this.state = {
      sortBy: {}
    };
    return _this;
  }

  return SourcesListView;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

;
SourcesListView.propTypes = {
  columns: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
  })).isRequired,
  loadEntities: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  selectEntity: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  expandEntity: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  sortEntities: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  entities: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any),
  numberOfEntities: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired
};
SourcesListView.defaultProps = {
  entities: [],
  numberOfEntities: 0,
  loaded: false
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])({
    loadEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_20__["loadEntities"],
    selectEntity: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_20__["selectEntity"],
    expandEntity: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_20__["expandEntity"],
    sortEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_20__["sortEntities"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$providers = _ref.providers,
      entities = _ref$providers.entities,
      numberOfEntities = _ref$providers.numberOfEntities,
      loaded = _ref$providers.loaded;
  return {
    entities: entities,
    numberOfEntities: numberOfEntities,
    loaded: loaded
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(SourcesListView)));

/***/ }),

/***/ "./src/SmartComponents/ProviderPage/ProviderPage.js":
/*!**********************************************************!*\
  !*** ./src/SmartComponents/ProviderPage/ProviderPage.js ***!
  \**********************************************************/
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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _provider_page_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./provider-page.scss */ "./src/SmartComponents/ProviderPage/provider-page.scss");
/* harmony import */ var _provider_page_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_provider_page_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions/providers */ "./src/redux/actions/providers.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _PresentationalComponents_SourcesListView_SourcesListView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../PresentationalComponents/SourcesListView/SourcesListView */ "./src/PresentationalComponents/SourcesListView/SourcesListView.js");
/* harmony import */ var _PresentationalComponents_SourcesListView_SourcesFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../PresentationalComponents/SourcesListView/SourcesFilter */ "./src/PresentationalComponents/SourcesListView/SourcesFilter.js");
/* harmony import */ var _SmartComponents_ProviderPage_providerColumns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../SmartComponents/ProviderPage/providerColumns */ "./src/SmartComponents/ProviderPage/providerColumns.js");
/* harmony import */ var _providerForm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./providerForm */ "./src/SmartComponents/ProviderPage/providerForm.js");
/* harmony import */ var _Utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../Utilities/SourcesFormRenderer */ "./src/Utilities/SourcesFormRenderer.js");























/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */

var ProviderPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ProviderPage, _Component);

  function ProviderPage(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProviderPage);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ProviderPage).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "submitProvider", function (values, formState) {
      console.log('submitProvider', values, formState); //this.props.addProvider(values);

      _this.props.createSource(values).then(function () {
        //this.props.addAlert('Source added', 'success');
        _this.props.history.replace('/');
      }).catch(function (error) {
        console.debug('CATCH:');
        console.debug(error); //this.props.addAlert('Source adding failed', 'danger');

        _this.props.history.replace('/');
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onFilter", function (filterColumn, filterValue) {
      console.log('onFilter', filterColumn, filterValue);

      _this.props.filterProviders(filterColumn, filterValue);
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
      var filterColumns = lodash_filter__WEBPACK_IMPORTED_MODULE_13___default()(_SmartComponents_ProviderPage_providerColumns__WEBPACK_IMPORTED_MODULE_18__["providerColumns"], function (c) {
        return c.value;
      });
      var form = _providerForm__WEBPACK_IMPORTED_MODULE_19__["wizardForm"];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Modal"], {
        className: "add-source",
        isLarge: true,
        title: "Add New Provider",
        isOpen: _this.props.location.pathname === '/new',
        onClose: _this.props.history.goBack
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        initialValues: form.initialValues,
        schemaType: form.schemaType,
        schema: form.schema,
        uiSchema: form.uiSchema,
        showFormControls: form.showFormControls,
        onSubmit: _this.submitProvider
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["PageHeaderTitle"], {
        title: "Providers"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Section"], {
        type: "content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Gallery"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardHeader"], null, "Karta"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Donut"], {
        withLegend: true,
        identifier: "orech",
        values: [['Red Hat', 100], ['Google', 10]]
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardFooter"], null, "Footer")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "5 Cloud"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "2 Virtual Infrastructure"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "1 Physical Infrastructure"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "1 Network"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "0 Storage"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "0 Automation"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Section"], {
        type: "button-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/new"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        variant: "primary"
      }, " Add a New Source ")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PresentationalComponents_SourcesListView_SourcesFilter__WEBPACK_IMPORTED_MODULE_17__["default"], {
        columns: filterColumns,
        onFilter: _this.onFilter
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PresentationalComponents_SourcesListView_SourcesListView__WEBPACK_IMPORTED_MODULE_16__["default"], {
        columns: _SmartComponents_ProviderPage_providerColumns__WEBPACK_IMPORTED_MODULE_18__["providerColumns"]
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Pagination"], {
        itemsPerPage: _this.state.itemsPerPage,
        page: _this.state.onPage,
        direction: "up",
        onSetPage: _this.onSetPage,
        onPerPageSelect: _this.onPerPageSelect,
        numberOfItems: _this.props.numberOfEntities || 0
      })))));
    });

    _this.state = {
      itemsPerPage: 10,
      onPage: 1
    };
    return _this;
  }

  return ProviderPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ProviderPage, "propTypes", {
  addProvider: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  createSource: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  filterProviders: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  pageAndSize: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  numberOfEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    addProvider: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_14__["addProvider"],
    createSource: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_14__["createSource"],
    filterProviders: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_14__["filterProviders"],
    pageAndSize: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_14__["pageAndSize"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var numberOfEntities = _ref.providers.numberOfEntities;
  return {
    numberOfEntities: numberOfEntities
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(ProviderPage)));

/***/ }),

/***/ "./src/SmartComponents/ProviderPage/provider-page.scss":
/*!*************************************************************!*\
  !*** ./src/SmartComponents/ProviderPage/provider-page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/ProviderPage.js.map