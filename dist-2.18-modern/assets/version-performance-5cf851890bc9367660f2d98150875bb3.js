"use strict"
define("version-performance/app",["exports","ember-resolver","ember-load-initializers","version-performance/config/environment"],(function(e,n,t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:n.default});(0,t.default)(r,o.default.modulePrefix)
var a=r
e.default=a})),define("version-performance/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})})),define("version-performance/components/modern-t-d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Component.extend({tagName:"",cellValue:Ember.computed("column","columnIndex","rowIndex",(function(){return this.get("column")}))})
e.default=n})),define("version-performance/components/modern-t-r",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Component.extend({tagName:""})
e.default=n})),define("version-performance/components/octane-t-d",["exports","@glimmer/component"],(function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class t extends n.default{get cellValue(){return this.args.column}}e.default=t})),define("version-performance/components/t-d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Component.extend({tagName:"",cellValue:Ember.computed("column","columnIndex","rowIndex",(function(){return this.get("column")}))})
e.default=n})),define("version-performance/components/t-r",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Component.extend({tagName:""})
e.default=n})),define("version-performance/helpers/app-version",["exports","version-performance/config/environment","ember-cli-app-version/utils/regexp"],(function(e,n,t){function o(e,o={}){const r=n.default.APP.version
let a=o.versionOnly||o.hideSha,i=o.shaOnly||o.hideVersion,l=null
return a&&(o.showExtended&&(l=r.match(t.versionExtendedRegExp)),l||(l=r.match(t.versionRegExp))),i&&(l=r.match(t.shaRegExp)),l?l[0]:r}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o,e.default=void 0
var r=Ember.Helper.helper(o)
e.default=r})),define("version-performance/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","version-performance/config/environment"],(function(e,n,t){let o,r
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.default.APP&&(o=t.default.APP.name,r=t.default.APP.version)
var a={name:"App Version",initialize:(0,n.default)(o,r)}
e.default=a})),define("version-performance/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"container-debug-adapter",initialize(){let e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=t})),define("version-performance/initializers/export-application-global",["exports","version-performance/config/environment"],(function(e,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var o,r=n.default.exportApplicationGlobal
o="string"==typeof r?r:Ember.String.classify(n.default.modulePrefix),t[o]||(t[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default=void 0
var o={name:"export-application-global",initialize:t}
e.default=o})),define("version-performance/router",["exports","version-performance/config/environment"],(function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const t=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
t.map((function(){this.route("classic"),this.route("modern"),this.route("octane")}))
var o=t
e.default=o})),define("version-performance/routes/application",["exports","lodash"],(function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({rowsCount:300,columnsCount:20,model(){return{items:n.default.map(n.default.range(0,this.rowsCount),e=>n.default.map(n.default.range(0,this.columnsCount),n=>e*this.columnsCount+n))}},afterModel(){performance.mark("after-model"),-1!==document.location.href.indexOf("?tracing")&&requestAnimationFrame(()=>{performance.mark("begin-first-paint"),requestAnimationFrame(()=>{document.location.href="about:blank"})})}})
e.default=t})),define("version-performance/routes/classic",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Route.extend({model(){return this.modelFor("application")}})
e.default=n})),define("version-performance/routes/modern",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Route.extend({model(){return this.modelFor("application")}})
e.default=n})),define("version-performance/routes/octane",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Route.extend({model(){return this.modelFor("application")}})
e.default=n})),define("version-performance/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.HTMLBars.template({id:"bhq8b0O0",block:'{"symbols":[],"statements":[[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"version-performance/templates/application.hbs"}})
e.default=n})),define("version-performance/templates/classic",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.HTMLBars.template({id:"RgkNDYXG",block:'{"symbols":["row","index"],"statements":[[6,"table"],[7],[0,"\\n"],[6,"tbody"],[7],[0,"\\n"],[4,"each",[[20,["model","items"]]],null,{"statements":[[0,"    "],[1,[25,"t-r",null,[["row","rowIndex"],[[19,1,[]],[20,["rowIndex"]]]]],false],[0,"\\n"]],"parameters":[1,2]},null],[0,"  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"version-performance/templates/classic.hbs"}})
e.default=n})),define("version-performance/templates/components/t-d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.HTMLBars.template({id:"M5zrV8Y3",block:'{"symbols":[],"statements":[[6,"td"],[7],[0,"\\n"],[1,[18,"cellValue"],false],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"version-performance/templates/components/t-d.hbs"}})
e.default=n})),define("version-performance/templates/components/t-r",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.HTMLBars.template({id:"L2nUPFwN",block:'{"symbols":["column","index"],"statements":[[6,"tr"],[7],[0,"\\n"],[4,"each",[[20,["row"]]],null,{"statements":[[0,"\\t"],[1,[25,"t-d",null,[["column","columnIndex","rowIndex"],[[19,1,[]],[19,2,[]],[20,["rowIndex"]]]]],false],[0,"\\n"]],"parameters":[1,2]},null],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"version-performance/templates/components/t-r.hbs"}})
e.default=n})),define("version-performance/config/environment",[],(function(){try{var e="version-performance/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(decodeURIComponent(n))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(o){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("version-performance/app").default.create({name:"version-performance",version:"0.0.0+453414f1"})
