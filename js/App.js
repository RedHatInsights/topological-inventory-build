!function(e){function t(t){for(var r,i,l=t[0],u=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,l=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"js/"+({0:"DetailPage~ProviderPage",2:"ProviderPage",3:"ListingPage",4:"DetailPage",5:"TopologyPage"}[e]||e)+".js"}(e),a=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,l.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/insights/platform/topological-inventory/",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;a.push([765,6]),n()}({181:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={container_projects:{displayName:"Container Projects",url:"/r/insights/platform/topological-inventory/v0.0/1/sources/container_projects/",columns:[{title:"ID",value:"id"},{title:null,value:"source_id"},{title:null,value:"source_ref"},{title:"Resource version",value:"resource_version"},{title:"Name",value:"name"},{title:null,value:"display_name"},{title:"Created at",value:"created_at"},{title:"Updated at",value:"updated_at"},{title:null,value:"source_deleted_at"},{title:null,value:"tenant_id"},{title:null,value:"source_created_at"},{title:"Archived on",value:"archived_on"}]},container_groups:{displayName:"Container Groups",url:"/r/insights/platform/topological-inventory/v0.0/sources/1/container_groups/",columns:[{title:"ID",value:"id"},{title:null,value:"source_id"},{title:null,value:"source_ref"},{title:"Resource version",value:"resource_version"},{title:"Name",value:"name"},{title:"Container project",value:"container_project_id"},{title:"IP address",value:"ipaddress"},{title:"Created at",value:"created_at"},{title:"Updated at",value:"updated_at"},{title:null,value:"source_deleted_at"},{title:null,value:"tenant_id"},{title:null,value:"source_created_at"},{title:"Archived on",value:"archived_on"}]},container_nodes:{displayName:"Container Nodes",url:"/r/insights/platform/topological-inventory/v0.0/sources/1/container_nodes/",columns:[{title:"ID",value:"id"},{title:null,value:"source_id"},{title:null,value:"source_ref"},{title:"Resource version",value:"resource_version"},{title:"Name",value:"name"},{title:"# of CPUs",value:"cpus"},{title:"Memory",value:"memory"},{title:"Created at",value:"created_at"},{title:"Updated at",value:"updated_at"},{title:null,value:"source_deleted_at"},{title:null,value:"tenant_id"},{title:null,value:"source_created_at"},{title:"Archived on",value:"archived_on"}]},container_templates:{displayName:"Container Templates",url:"/r/insights/platform/topological-inventory/v0.0/1/sources/container_templates/",columns:[{title:"ID",value:"id"},{title:null,value:"source_id"},{title:null,value:"source_ref"},{title:"Resource version",value:"resource_version"},{title:"Name",value:"name"},{title:"Container project",value:"container_project_id"},{title:"# of CPUs",value:"cpus"},{title:"Memory",value:"memory"},{title:"Created at",value:"created_at"},{title:"Updated at",value:"updated_at"},{title:null,value:"source_deleted_at"},{title:null,value:"tenant_id"},{title:null,value:"source_created_at"},{title:"Archived on",value:"archived_on"}]}}},211:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r="LOAD_TOPOLOGY",o="NODE_CLICK_TOPOLOGY"},37:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"h",function(){return l}),n.d(t,"e",function(){return u}),n.d(t,"i",function(){return c}),n.d(t,"g",function(){return s}),n.d(t,"c",function(){return d}),n.d(t,"f",function(){return p}),n.d(t,"d",function(){return f}),n.d(t,"b",function(){return v});var r=n(65),o=n.n(r),a=["LOAD_ENTITIES","CREATE_SOURCE"].reduce(function(e,t){return[].concat(o()(e),[t,"".concat(t,"_PENDING"),"".concat(t,"_FULFILLED"),"".concat(t,"_REJECTED")])},[]),i=o()(a).reduce(function(e,t){return e[t]=t,e},{}),l="SELECT_ENTITY",u="EXPAND_ENTITY",c="SORT_ENTITIES",s="PAGE_AND_SIZE",d="ADD_PROVIDER",p="FILTER_PROVIDERS",f="CLOSE_ALERT",v="ADD_ALERT"},617:function(e,t,n){var r=n(618);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(395)(r,o);r.locals&&(e.exports=r.locals)},618:function(e,t,n){var r=n(83);(t=e.exports=n(38)(!1)).i(n(619),""),t.i(n(620),""),t.i(n(631),""),t.i(n(644),""),t.i(n(646),""),t.i(n(720),""),t.push([e.i,'button:focus {\n  outline: none; }\n\n.pf-l-gallery {\n  padding-bottom: 20px; }\n\n.ins-l-content {\n  background-color: var(--pf-global--BackgroundColor--300); }\n\n/* styling for "Add source" modal */\n.add-source {\n  border: none !important;\n  min-width: 500px;\n  min-height: 800px !important; }\n  .add-source .pf-c-modal-box__header {\n    background-image: url('+r(n(721))+"); }\n    .add-source .pf-c-modal-box__header .pf-c-modal-box__header-title {\n      color: white; }\n  .add-source .pf-c-modal-box__footer {\n    display: none; }\n\n/* styling for sources placeholder table */\n.sources-placeholder-table {\n  background: white;\n  width: 100%;\n  border: 1px solid #cccccc;\n  border-collapse: collapse; }\n  .sources-placeholder-table td {\n    display: block;\n    padding: 10px; }\n",""])},721:function(e,t,n){e.exports=n.p+"fonts/pfbg_576.jpg"},765:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(6),i=n.n(a),l=n(291),u=n(49),c=n(55),s=n(136),d=n(86),p=n.n(d),f=n(91),v=n.n(f),g=n(87),m=n.n(g),h=n(88),_=n.n(h),y=n(89),b=n.n(y),E=n(0),D=n.n(E),N=n(370),T=n(76),I=n(139),O=n(386),w=n.n(O),P=n(369),A=n(178),R=n(368),L=n(217),C=n.n(L),x=n(387),S=n.n(x);function j(e){return function(t){function n(e){var t;return p()(this,n),(t=m()(this,_()(n).call(this,e))).state={component:null},t}return b()(n,t),v()(n,[{key:"componentDidMount",value:function(){var t=S()(C.a.mark(function t(){var n,r;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?o.a.createElement(e,this.props):o.a.createElement("div",null,"Loading...")}}]),n}(r.Component)}var k=n(210),z=n.n(k),G=n(292),U=n.n(G),M=n(181),F=j(function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,781))}),B=j(function(){return n.e(3).then(n.bind(null,782))}),V=j(function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,780))}),Y=j(function(){return n.e(5).then(n.bind(null,783))}),J={providers:"/sources",provider_new:"/sources/new",vms:"/source/:id/vms",provider_detail:"/source/:id",topology:"/source/:id/topology"},H=function(e){var t=e.component,n=e.rootClass,r=w()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n)),o.a.createElement(t,r)};H.propTypes={component:D.a.func,rootClass:D.a.string};var K=function(e){var t=e.childProps.location.pathname;return o.a.createElement(P.a,null,o.a.createElement(H,{path:J.providers,component:F,rootClass:"providers"}),o.a.createElement(H,{path:J.vms,component:B,rootClass:"listing"}),o.a.createElement(H,{exact:!0,path:J.provider_detail,component:V,rootClass:"provider"}),o.a.createElement(H,{path:J.topology,component:Y,rootClass:"provider"}),function(e){return U()(Object.keys(e),function(e,t){return e.push(o.a.createElement(H,{path:"/source/:id/".concat(t),key:t,component:B,rootClass:"listing"}))&&e},[])}(M.a),o.a.createElement(A.a,{render:function(){return z()(J,function(e){return e===t})?null:o.a.createElement(R.a,{to:J.providers})}}))};K.propTypes={childProps:D.a.any.isRequired};n(617);var q,Z,W=n(17),X=n.n(W),Q=n(19),$=n.n(Q),ee=n(37),te=n(218),ne=n.n(te),re=n(388),oe=n.n(re),ae=n(389),ie=n.n(ae),le=n(390),ue=n.n(le),ce=n(391),se=n.n(ce),de=n(176),pe=n.n(de),fe=n(392),ve=n.n(fe),ge=function(e,t,n){return t?ue()(e,[function(e){return se()(""+ne()(e,t))}],["up"===n?"desc":"asc"]):e},me=function(e,t,n){return ie()(oe()(e,n*(t-1)),n)},he=function(e,t){var n=function(e,t,n){return n&&t?pe()(e,function(e){return ne()(e,t).match(RegExp(n))}):e}(e,t.filterColumn,t.filterValue);return{length:n.length,list:ve()(function(e){return ge(e,t.sortBy,t.sortDirection)},function(e){return me(e,t.pageNumber,t.pageSize)})(n)}},_e={loaded:!1,pageSize:10,pageNumber:1,numberOfEntities:0},ye=function(e){var t=he(e.rows,e),n=t.length,r=t.list;return $()({},e,{entities:r,numberOfEntities:n})},be=(q={},X()(q,ee.a.LOAD_ENTITIES_PENDING,function(e){return $()({},e,{loaded:!1,expanded:null})}),X()(q,ee.a.LOAD_ENTITIES_FULFILLED,function(e,t){var n=t.payload;return ye($()({},e,{loaded:!0,rows:n}))}),X()(q,ee.h,function(e,t){var n=t.payload,r=n.id,o=n.selected;return $()({},e,{entities:e.entities.map(function(e){return e.id===r?$()({},e,{selected:o}):e})})}),X()(q,ee.e,function(e,t){var n=t.payload,r=n.id;n._expanded;return $()({},e,{entities:e.entities.map(function(e){return e.id===r?$()({},e,{expanded:!e.expanded}):e})})}),X()(q,ee.i,function(e,t){var n=t.payload,r=n.column,o=n.direction;return ye($()({},e,{sortBy:r,sortDirection:o}))}),X()(q,ee.g,function(e,t){var n=t.payload,r=n.page,o=n.size;return ye($()({},e,{pageSize:o,pageNumber:r}))}),X()(q,ee.c,function(e,t){var n=t.payload.formData;return console.log("R: addProvider",n),$()({},e,{alert:{message:"New source was succesfully added.",type:"success"}})}),X()(q,ee.f,function(e,t){var n=t.payload,r=n.column,o=n.value;return ye($()({},e,{filterColumn:r,filterValue:o,pageNumber:1}))}),q),Ee=n(85),De={loaded:!1,pageSize:10,pageNumber:1};var Ne,Te=(Z={},X()(Z,Ee.a.LOAD_LISTING_DATA_FULFILLED,function(e,t){var n=t.payload;return $()({},e,{loaded:!0,listingRows:me(ge(n,e.sortBy,e.sortDirection),e.pageNumber,e.pageSize),rawRows:n,pageNumber:1,pageSize:10})}),X()(Z,Ee.a.LOAD_LISTING_DATA_PENDING,function(e){return $()({},e,{loaded:!1})}),X()(Z,Ee.c,function(e,t){var n=t.payload,r=n.column,o=n.direction;return console.log("sortListingData"),console.log(r),$()({},e,{listingRows:me(ge(e.rawRows,r,o),e.pageNumber,e.pageSize),sortBy:r,sortDirection:o})}),X()(Z,Ee.b,function(e,t){var n=t.payload,r=n.page,o=n.size;return $()({},e,{listingRows:me(ge(e.rawRows,e.sortBy,e.sortDirection),r,o),pageSize:o,pageNumber:r})}),Z),Ie=n(211),Oe={nodes:[{id:3,title:"Yang",size:24,fonticon:"fa fa-cloud",depth:3,status:"valid",highlight:!1,x:600,y:161.60000000000002},{id:4,title:"Gray",size:24,fonticon:"fa fa-cloud",depth:3,status:"valid",highlight:!1,x:600,y:161.60000000000002},{id:5,title:"Maddox",size:24,fileicon:"https://www.svgrepo.com/show/5386/speedometer.svg",depth:3,status:"warning",highlight:!1,x:600,y:161.60000000000002},{id:0,title:"Levy",size:24,fonticon:"fa fa-cog",depth:1,status:"valid",highlight:!1,x:50,y:161.60000000000002,fx:61,fy:null},{id:1,title:"Celina",size:24,fonticon:"fa fa-cloud",depth:2,status:"warning",highlight:!1,x:400,y:161.60000000000002},{id:2,title:"Nancy",size:24,fonticon:"fa fa-cloud",depth:2,status:"critical",highlight:!1,x:400,y:161.60000000000002}],edges:[{source:1,target:4},{source:2,target:5},{source:0,target:1},{source:0,target:2},{source:1,target:3}]};var we,Pe=(Ne={},X()(Ne,Ie.a,function(e){console.log("R: loadTopologyData");var t=Oe.nodes,n=Oe.edges;return $()({},e,{nodes:t,edges:n})}),X()(Ne,Ie.b,function(e,t){var n=t.payload.node;return console.log("R: nodeClickTopology",n),$()({},e,{activeNode:n})}),Ne),Ae=n(393),Re=n.n(Ae),Le=function(e){function t(e){return p()(this,t),m()(this,_()(t).call(this,e))}return b()(t,e),v()(t,[{key:"componentDidMount",value:function(){var e=this;console.log("getStore()"),console.log(t.getRegistry().getStore()),t.getRegistry().register({providers:Object(T.applyReducerHash)(be,_e)}),t.getRegistry().register({listing:Object(T.applyReducerHash)(Te,De)}),t.getRegistry().register({topology:Object(T.applyReducerHash)(Pe,{})}),t.getRegistry().register({notifications:I.notifications}),insights.chrome.init(),insights.chrome.identifyApp("topological-inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.NotificationsPortal,null),o.a.createElement(K,{childProps:this.props}))}}],[{key:"getRegistry",value:function(){return we||(we=new T.ReducerRegistry({},[Object(s.a)(),Object(I.notificationsMiddleware)({errorTitleKey:"error",errorDescriptionKey:"error"}),Re.a])),we}}]),t}(r.Component);Le.propTypes={history:D.a.object};var Ce=Object(N.a)(Object(c.connect)()(Le));var xe=Object(u.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return e.concat([t.text]);default:return e}},Object(u.applyMiddleware)(Object(s.a)()));i.a.render(o.a.createElement(c.Provider,{store:xe},o.a.createElement(l.a,null,o.a.createElement(Ce,null))),document.getElementById("root"))},85:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return u});var r=n(65),o=n.n(r),a=["LOAD_LISTING_DATA"].reduce(function(e,t){return[].concat(o()(e),[t,"".concat(t,"_PENDING"),"".concat(t,"_FULFILLED"),"".concat(t,"_REJECTED")])},[]),i=o()(a).reduce(function(e,t){return e[t]=t,e},{}),l="SORT_LISTING_DATA",u="PAGE_AND_SIZE_LISTING_DATA"}});
//# sourceMappingURL=../sourcemaps/App.js.map