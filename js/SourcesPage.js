(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SourcesPage"],{

/***/ "./src/components/SourcesSimpleView.js":
/*!*********************************************!*\
  !*** ./src/components/SourcesSimpleView.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../redux/actions/providers */ "./src/redux/actions/providers.js");
/* harmony import */ var _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/sourcesViewDefinition */ "./src/views/sourcesViewDefinition.js");




















var RowLoader = function RowLoader(props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_16__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({
    height: 20,
    width: 480
  }, props), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "30",
    y: "0",
    rx: "3",
    ry: "3",
    width: "250",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "300",
    y: "0",
    rx: "3",
    ry: "3",
    width: "70",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "385",
    y: "0",
    rx: "3",
    ry: "3",
    width: "95",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "50",
    y: "12",
    rx: "3",
    ry: "3",
    width: "80",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "150",
    y: "12",
    rx: "3",
    ry: "3",
    width: "200",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "360",
    y: "12",
    rx: "3",
    ry: "3",
    width: "120",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "20",
    height: "20"
  }));
};

var SourcesSimpleView =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SourcesSimpleView, _React$Component);

  function SourcesSimpleView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SourcesSimpleView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SourcesSimpleView).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "componentDidMount", function () {
      return _this.props.loadEntities();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onItemSelect", function (_event, key, checked) {
      return _this.props.selectEntity(key, checked);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onSort", function (_event, key, direction) {
      _this.props.sortEntities(_this.filteredColumns[key].value, direction);

      _this.setState({
        sortBy: {
          index: key,
          direction: direction
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onExpandClick", function (_event, _row, rowKey) {
      return _this.props.expandEntity(rowKey, true);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "sourceIndexToId", function (i) {
      return _this.props.entities[i].id;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "renderActions", function () {
      return [{
        title: 'Remove Source',
        onClick: function onClick(_ev, i) {
          _this.props.removeSource(_this.sourceIndexToId(i)).then(function () {
            _this.props.loadEntities();
          });
        }
      }];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "render", function () {
      var _this$props = _this.props,
          entities = _this$props.entities,
          loaded = _this$props.loaded;
      var rowData = lodash_flatten__WEBPACK_IMPORTED_MODULE_14___default()(entities.map(function (item) {
        return [_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
          cells: _this.filteredColumns.map(function (col) {
            return item[col.value] || '';
          })
        })];
      }));

      if (loaded) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["Table"], {
          "aria-label": "List of Sources",
          onCollapse: _this.onCollapse,
          onSort: _this.onSort,
          sortBy: _this.state.sortBy,
          rows: rowData,
          cells: _this.headers,
          actions: _this.renderActions()
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["TableHeader"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["TableBody"], null));
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        className: "sources-placeholder-table pf-m-compact ins-entity-table"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RowLoader, null))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RowLoader, null)))));
    });

    _this.filteredColumns = lodash_filter__WEBPACK_IMPORTED_MODULE_15___default()(_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_18__["sourcesViewDefinition"].columns, function (c) {
      return c.title;
    });
    _this.headers = _this.filteredColumns.map(function (col) {
      return {
        title: col.title,
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["sortable"]]
      };
    });
    _this.state = {
      sortBy: {}
    };
    return _this;
  }

  return SourcesSimpleView;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

;
SourcesSimpleView.propTypes = {
  columns: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
  })).isRequired,
  loadEntities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  selectEntity: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  expandEntity: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  removeSource: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  sortEntities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  entities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any),
  numberOfEntities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any.isRequired
};
SourcesSimpleView.defaultProps = {
  entities: [],
  numberOfEntities: 0,
  loaded: false
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])({
    loadEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_17__["loadEntities"],
    selectEntity: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_17__["selectEntity"],
    expandEntity: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_17__["expandEntity"],
    sortEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_17__["sortEntities"],
    removeSource: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_17__["removeSource"]
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(SourcesSimpleView)));

/***/ }),

/***/ "./src/pages/SourcesPage.js":
/*!**********************************!*\
  !*** ./src/pages/SourcesPage.js ***!
  \**********************************/
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
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/providers */ "./src/redux/actions/providers.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _components_SourcesSimpleView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SourcesSimpleView */ "./src/components/SourcesSimpleView.js");
/* harmony import */ var _SmartComponents_ProviderPage_providerColumns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../SmartComponents/ProviderPage/providerColumns */ "./src/SmartComponents/ProviderPage/providerColumns.js");
/* harmony import */ var _SmartComponents_ProviderPage_providerForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../SmartComponents/ProviderPage/providerForm */ "./src/SmartComponents/ProviderPage/providerForm.js");
/* harmony import */ var _Utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Utilities/SourcesFormRenderer */ "./src/Utilities/SourcesFormRenderer.js");











 //import './provider-page.scss';




 //import SourcesFilter from '../components/SourcesFilter';





/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */

var SourcesPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SourcesPage, _Component);

  function SourcesPage(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SourcesPage);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(SourcesPage).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "componentDidMount", function () {
      _this.props.loadSourceTypes();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "submitProvider", function (values, _formState) {
      _this.props.createSource(values).then(function () {
        _this.props.history.replace('/');

        _this.props.loadEntities();
      }).catch(function (error) {
        console.log('CATCH:');
        console.log(error);

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
      // const filterColumns = filter(providerColumns, c => c.value);
      var form = Object(_SmartComponents_ProviderPage_providerForm__WEBPACK_IMPORTED_MODULE_16__["wizardForm"])(_this.props.sourceTypes || []);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
        title: "Add a New Source",
        isOpen: _this.props.location.pathname === '/new',
        onClose: _this.props.history.goBack,
        isLarge: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_17__["default"], {
        initialValues: form.initialValues,
        schemaType: form.schemaType,
        schema: form.schema,
        uiSchema: form.uiSchema,
        showFormControls: form.showFormControls,
        onSubmit: _this.submitProvider
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["PageHeaderTitle"], {
        title: "Sources"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/new"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        className: "pull-right",
        variant: "secondary"
      }, " Add a New Source "))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Section"], {
        type: "content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SourcesSimpleView__WEBPACK_IMPORTED_MODULE_14__["default"], {
        columns: _SmartComponents_ProviderPage_providerColumns__WEBPACK_IMPORTED_MODULE_15__["providerColumns"]
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Pagination"], {
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

  return SourcesPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(SourcesPage, "propTypes", {
  addProvider: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  createSource: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  filterProviders: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  loadEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  loadSourceTypes: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  pageAndSize: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  numberOfEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
  sourceTypes: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any),
  location: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    addProvider: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["addProvider"],
    createSource: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["createSource"],
    filterProviders: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["filterProviders"],
    loadEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["loadEntities"],
    loadSourceTypes: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["loadSourceTypes"],
    pageAndSize: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["pageAndSize"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$providers = _ref.providers,
      numberOfEntities = _ref$providers.numberOfEntities,
      sourceTypes = _ref$providers.sourceTypes;
  return {
    numberOfEntities: numberOfEntities,
    sourceTypes: sourceTypes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(SourcesPage)));

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/SourcesPage.js.map