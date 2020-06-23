"use strict"
define("version-performance/app",["exports","ember-resolver","ember-load-initializers","version-performance/config/environment"],(function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:t.default});(0,n.default)(r,o.default.modulePrefix)
var a=r
e.default=a})),define("version-performance/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("version-performance/components/modern-t-d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:"",cellValue:Ember.computed("column","columnIndex","rowIndex",(function(){return this.get("column")}))})
e.default=t})),define("version-performance/components/modern-t-r",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:""})
e.default=t})),define("version-performance/components/octane-t-d",["exports","@glimmer/component"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=u(e)
if(t){var r=u(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return l(this,n)}}function l(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(f,e)
var t,n,l,u=i(f)
function f(){return o(this,f),u.apply(this,arguments)}return t=f,(n=[{key:"cellValue",get:function(){return this.args.column}}])&&r(t.prototype,n),l&&r(t,l),f}(t.default)
e.default=f})),define("version-performance/components/t-d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:"",cellValue:Ember.computed("column","columnIndex","rowIndex",(function(){return this.get("column")}))})
e.default=t})),define("version-performance/components/t-r",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:""})
e.default=t})),define("version-performance/helpers/app-version",["exports","version-performance/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function o(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.default.APP.version,a=o.versionOnly||o.hideSha,i=o.shaOnly||o.hideVersion,l=null
return a&&(o.showExtended&&(l=r.match(n.versionExtendedRegExp)),l||(l=r.match(n.versionRegExp))),i&&(l=r.match(n.shaRegExp)),l?l[0]:r}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o,e.default=void 0
var r=Ember.Helper.helper(o)
e.default=r})),define("version-performance/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","version-performance/config/environment"],(function(e,t,n){var o,r
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(o=n.default.APP.name,r=n.default.APP.version)
var a={name:"App Version",initialize:(0,t.default)(o,r)}
e.default=a})),define("version-performance/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("version-performance/initializers/export-application-global",["exports","version-performance/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var o,r=t.default.exportApplicationGlobal
o="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var o={name:"export-application-global",initialize:n}
e.default=o})),define("version-performance/router",["exports","version-performance/config/environment"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map((function(){this.route("classic"),this.route("modern"),this.route("octane")}))
var o=n
e.default=o})),define("version-performance/routes/application",["exports","lodash"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Route.extend({rowsCount:300,columnsCount:20,model:function(){var e=this
return{items:t.default.map(t.default.range(0,this.rowsCount),(function(n){return t.default.map(t.default.range(0,e.columnsCount),(function(t){return n*e.columnsCount+t}))}))}},afterModel:function(){performance.mark("after-model"),-1!==document.location.href.indexOf("?tracing")&&requestAnimationFrame((function(){performance.mark("begin-first-paint"),requestAnimationFrame((function(){document.location.href="about:blank"}))}))}})
e.default=n})),define("version-performance/routes/classic",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.modelFor("application")}})
e.default=t})),define("version-performance/routes/modern",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.modelFor("application")}})
e.default=t})),define("version-performance/routes/octane",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.modelFor("application")}})
e.default=t})),define("version-performance/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"bhq8b0O0",block:'{"symbols":[],"statements":[[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"version-performance/templates/application.hbs"}})
e.default=t})),define("version-performance/templates/classic",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"RgkNDYXG",block:'{"symbols":["row","index"],"statements":[[6,"table"],[7],[0,"\\n"],[6,"tbody"],[7],[0,"\\n"],[4,"each",[[20,["model","items"]]],null,{"statements":[[0,"    "],[1,[25,"t-r",null,[["row","rowIndex"],[[19,1,[]],[20,["rowIndex"]]]]],false],[0,"\\n"]],"parameters":[1,2]},null],[0,"  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"version-performance/templates/classic.hbs"}})
e.default=t})),define("version-performance/templates/components/t-d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"M5zrV8Y3",block:'{"symbols":[],"statements":[[6,"td"],[7],[0,"\\n"],[1,[18,"cellValue"],false],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"version-performance/templates/components/t-d.hbs"}})
e.default=t})),define("version-performance/templates/components/t-r",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"L2nUPFwN",block:'{"symbols":["column","index"],"statements":[[6,"tr"],[7],[0,"\\n"],[4,"each",[[20,["row"]]],null,{"statements":[[0,"\\t"],[1,[25,"t-d",null,[["column","columnIndex","rowIndex"],[[19,1,[]],[19,2,[]],[20,["rowIndex"]]]]],false],[0,"\\n"]],"parameters":[1,2]},null],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"version-performance/templates/components/t-r.hbs"}})
e.default=t})),define("version-performance/config/environment",[],(function(){try{var e="version-performance/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(o){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("version-performance/app").default.create({name:"version-performance",version:"0.0.0+453414f1"})
