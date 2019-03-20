(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{720:function(e,t,n){"use strict";n.r(t);var r=n(86),a=n.n(r),i=n(87),o=n.n(i),s=n(88),c=n.n(s),l=n(89),u=n.n(l),d=n(142),p=n.n(d),m=n(14),f=n.n(m),E=n(1),h=n.n(E),y=n(91),g=n(55),S=n(199),P=n(356),b=n(0),v=n.n(b),w=n(74),x=n(682),O=n(144),R=n(292),q=n(284),C=n(285),T=n(286),A=n(16),j=n.n(A),I=n(143),k=n.n(I),B=n(354),F=n(714),N=n(715),z=n(361),H=n(384),D=n.n(H),J=n(197),L=n.n(J),M=n(689),V=n(685),G=function(e){return h.a.createElement(M.a,k()({height:20,width:480},e),h.a.createElement("rect",{x:"30",y:"0",rx:"3",ry:"3",width:"250",height:"7"}),h.a.createElement("rect",{x:"300",y:"0",rx:"3",ry:"3",width:"70",height:"7"}),h.a.createElement("rect",{x:"385",y:"0",rx:"3",ry:"3",width:"95",height:"7"}),h.a.createElement("rect",{x:"50",y:"12",rx:"3",ry:"3",width:"80",height:"7"}),h.a.createElement("rect",{x:"150",y:"12",rx:"3",ry:"3",width:"200",height:"7"}),h.a.createElement("rect",{x:"360",y:"12",rx:"3",ry:"3",width:"120",height:"7"}),h.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"20",height:"20"}))},K=function(e){function t(e){var n;return a()(this,t),n=o()(this,c()(t).call(this,e)),f()(p()(p()(n)),"componentDidMount",function(){return n.props.loadEntities()}),f()(p()(p()(n)),"onItemSelect",function(e,t,r){return n.props.selectEntity(t,r)}),f()(p()(p()(n)),"onSort",function(e,t,r){n.props.sortEntities(n.filteredColumns[t].value,r),n.setState({sortBy:{index:t,direction:r}})}),f()(p()(p()(n)),"onExpandClick",function(e,t,r){return n.props.expandEntity(r,!0)}),f()(p()(p()(n)),"sourceIndexToId",function(e){return n.props.entities[e].id}),f()(p()(p()(n)),"renderActions",function(){return[{title:"Remove Source",onClick:function(e,t){n.props.removeSource(n.sourceIndexToId(t)).then(function(){n.props.loadEntities()})}}]}),f()(p()(p()(n)),"render",function(){var e=n.props,t=e.entities,r=e.loaded,a=D()(t.map(function(e){return[j()({},e,{cells:n.filteredColumns.map(function(t){return e[t.value]||""})})]}));return r?h.a.createElement(B.b,{"aria-label":"List of Sources",onCollapse:n.onCollapse,onSort:n.onSort,sortBy:n.state.sortBy,rows:a,cells:n.headers,actions:n.renderActions()},h.a.createElement(F.a,null),h.a.createElement(N.a,null)):h.a.createElement("table",{className:"sources-placeholder-table pf-m-compact ins-entity-table"},h.a.createElement("tbody",null,h.a.createElement("tr",null,h.a.createElement("td",null,h.a.createElement(G,null))),h.a.createElement("tr",null,h.a.createElement("td",null,h.a.createElement(G,null)))))}),n.filteredColumns=L()(V.a.columns,function(e){return e.title}),n.headers=n.filteredColumns.map(function(e){return{title:e.title,transforms:[z.a]}}),n.state={sortBy:{}},n}return u()(t,e),t}(h.a.Component);K.propTypes={columns:v.a.arrayOf(v.a.shape({value:v.a.string,title:v.a.string})).isRequired,loadEntities:v.a.func.isRequired,selectEntity:v.a.func.isRequired,expandEntity:v.a.func.isRequired,removeSource:v.a.func.isRequired,sortEntities:v.a.func.isRequired,entities:v.a.arrayOf(v.a.any),numberOfEntities:v.a.number.isRequired,loaded:v.a.bool.isRequired,history:v.a.any.isRequired},K.defaultProps={entities:[],numberOfEntities:0,loaded:!1};var Q=Object(g.connect)(function(e){var t=e.providers;return{entities:t.entities,numberOfEntities:t.numberOfEntities,loaded:t.loaded}},function(e){return Object(y.bindActionCreators)({loadEntities:x.e,selectEntity:x.i,expandEntity:x.c,sortEntities:x.j,removeSource:x.h},e)})(Object(P.a)(K)),U=n(692),W=n(693),X=n(695),Y=function(e){function t(e){var n;return a()(this,t),n=o()(this,c()(t).call(this,e)),f()(p()(p()(n)),"componentDidMount",function(){n.props.loadSourceTypes()}),f()(p()(p()(n)),"submitProvider",function(e,t){n.props.createSource(e).then(function(){n.props.history.replace("/"),n.props.loadEntities()}).catch(function(e){console.log("CATCH:"),console.log(e),n.props.history.replace("/")})}),f()(p()(p()(n)),"onFilter",function(e,t){console.log("onFilter",e,t),n.props.filterProviders(e,t)}),f()(p()(p()(n)),"onSetPage",function(e){n.setState({onPage:e}),n.props.pageAndSize(e,n.state.itemsPerPage)}),f()(p()(p()(n)),"onPerPageSelect",function(e){n.setState({onPage:1,itemsPerPage:e}),n.props.pageAndSize(1,e)}),f()(p()(p()(n)),"render",function(){var e=Object(W.a)(n.props.sourceTypes||[]);return h.a.createElement(h.a.Fragment,null,h.a.createElement(R.a,{className:"add-source",isLarge:!0,title:"Add a New Source",isOpen:"/new"===n.props.location.pathname,onClose:n.props.history.goBack},h.a.createElement(X.a,{initialValues:e.initialValues,schemaType:e.schemaType,schema:e.schema,uiSchema:e.uiSchema,showFormControls:e.showFormControls,onSubmit:n.submitProvider})),h.a.createElement(w.PageHeader,null,h.a.createElement(w.PageHeaderTitle,{title:"Sources"}),h.a.createElement(S.a,{to:"/new"},h.a.createElement(O.c,{className:"pull-right",variant:"secondary"}," Add a New Source "))),h.a.createElement(w.Section,{type:"content"},h.a.createElement(q.a,null,h.a.createElement(C.a,null,h.a.createElement(Q,{columns:U.a})),h.a.createElement(T.a,null,h.a.createElement(w.Pagination,{itemsPerPage:n.state.itemsPerPage,page:n.state.onPage,direction:"up",onSetPage:n.onSetPage,onPerPageSelect:n.onPerPageSelect,numberOfItems:n.props.numberOfEntities||0})))))}),n.state={itemsPerPage:10,onPage:1},n}return u()(t,e),t}(E.Component);f()(Y,"propTypes",{addProvider:v.a.func.isRequired,createSource:v.a.func.isRequired,filterProviders:v.a.func.isRequired,loadEntities:v.a.func.isRequired,loadSourceTypes:v.a.func.isRequired,pageAndSize:v.a.func.isRequired,numberOfEntities:v.a.number.isRequired,sourceTypes:v.a.arrayOf(v.a.any),location:v.a.any.isRequired,history:v.a.any.isRequired});t.default=Object(g.connect)(function(e){var t=e.providers;return{numberOfEntities:t.numberOfEntities,sourceTypes:t.sourceTypes}},function(e){return Object(y.bindActionCreators)({addProvider:x.a,createSource:x.b,filterProviders:x.d,loadEntities:x.e,loadSourceTypes:x.f,pageAndSize:x.g},e)})(Object(P.a)(Y))}}]);
//# sourceMappingURL=../sourcemaps/SourcesPage.js.map