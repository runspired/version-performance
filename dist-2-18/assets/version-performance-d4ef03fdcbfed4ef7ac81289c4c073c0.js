"use strict"
define("version-performance/app",["exports","version-performance/resolver","ember-load-initializers","version-performance/config/environment"],function(e,n,r,t){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:t.default.modulePrefix,podModulePrefix:t.default.podModulePrefix,Resolver:n.default});(0,r.default)(o,t.default.modulePrefix),e.default=o}),define("version-performance/components/t-d",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:"",cellValue:Ember.computed("column","columnIndex","rowIndex",function(){return this.get("column")})})}),define("version-performance/components/t-r",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:""})}),define("version-performance/controllers/application",["exports","lodash"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({appName:"Ember Twiddle",rowsCount:300,columnsCount:20,shouldRenderItems:!1,items:Ember.computed("rowsCount","columnsCount",function(){var e=this
return n.default.map(n.default.range(0,this.get("rowsCount")),function(r){return n.default.map(n.default.range(0,e.get("columnsCount")),function(n){return r*e.get("columnsCount")+n})})})})}),define("version-performance/helpers/app-version",["exports","version-performance/config/environment","ember-cli-app-version/utils/regexp"],function(e,n,r){function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.default.APP.version,i=t.versionOnly||t.hideSha,a=t.shaOnly||t.hideVersion,l=null
return i&&(t.showExtended&&(l=o.match(r.versionExtendedRegExp)),l||(l=o.match(r.versionRegExp))),a&&(l=o.match(r.shaRegExp)),l?l[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=t,e.default=Ember.Helper.helper(t)}),define("version-performance/helpers/console-time-end",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.consoleTimeEnd=r
var n=function(){return function(e,n){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,n){var r=[],t=!0,o=!1,i=void 0
try{for(var a,l=e[Symbol.iterator]();!(t=(a=l.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(s){o=!0,i=s}finally{try{!t&&l.return&&l.return()}finally{if(o)throw i}}return r}(e,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()
function r(e){var r=n(e,1)[0]
return console.timeEnd(r),""}e.default=Ember.Helper.helper(r)}),define("version-performance/helpers/console-time",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.consoleTime=r
var n=function(){return function(e,n){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,n){var r=[],t=!0,o=!1,i=void 0
try{for(var a,l=e[Symbol.iterator]();!(t=(a=l.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(s){o=!0,i=s}finally{try{!t&&l.return&&l.return()}finally{if(o)throw i}}return r}(e,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()
function r(e){var r=n(e,1)[0]
return console.time(r),""}e.default=Ember.Helper.helper(r)}),define("version-performance/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("version-performance/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("version-performance/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","version-performance/config/environment"],function(e,n,r){Object.defineProperty(e,"__esModule",{value:!0})
var t=void 0,o=void 0
r.default.APP&&(t=r.default.APP.name,o=r.default.APP.version),e.default={name:"App Version",initialize:(0,n.default)(t,o)}}),define("version-performance/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("version-performance/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("version-performance/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:n.default}}),define("version-performance/initializers/export-application-global",["exports","version-performance/config/environment"],function(e,n){function r(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var t,o=n.default.exportApplicationGlobal
t="string"==typeof o?o:Ember.String.classify(n.default.modulePrefix),r[t]||(r[t]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[t]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("version-performance/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("version-performance/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("version-performance/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("version-performance/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:n.default}}),define("version-performance/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("version-performance/router",["exports","version-performance/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
r.map(function(){}),e.default=r}),define("version-performance/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("version-performance/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"aFRl+wWV",block:'{"symbols":["row","index"],"statements":[[1,[25,"console-time",["render_ended"],null],false],[0,"\\n"],[6,"table"],[7],[0,"\\n"],[6,"tbody"],[7],[0,"\\n"],[4,"each",[[20,["items"]]],null,{"statements":[[0,"    "],[1,[25,"t-r",null,[["row","rowIndex"],[[19,1,[]],[20,["rowIndex"]]]]],false],[0,"\\n"]],"parameters":[1,2]},null],[0,"  "],[8],[0,"\\n  "],[8],[0,"\\n"],[1,[25,"console-time-end",["render_ended"],null],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"version-performance/templates/application.hbs"}})}),define("version-performance/templates/components/t-d",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"M5zrV8Y3",block:'{"symbols":[],"statements":[[6,"td"],[7],[0,"\\n"],[1,[18,"cellValue"],false],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"version-performance/templates/components/t-d.hbs"}})}),define("version-performance/templates/components/t-r",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"L2nUPFwN",block:'{"symbols":["column","index"],"statements":[[6,"tr"],[7],[0,"\\n"],[4,"each",[[20,["row"]]],null,{"statements":[[0,"\\t"],[1,[25,"t-d",null,[["column","columnIndex","rowIndex"],[[19,1,[]],[19,2,[]],[20,["rowIndex"]]]]],false],[0,"\\n"]],"parameters":[1,2]},null],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"version-performance/templates/components/t-r.hbs"}})}),define("version-performance/config/environment",[],function(){try{var e="version-performance/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(unescape(n))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("version-performance/app").default.create({name:"version-performance",version:"0.0.0+43ea2c0a"})
