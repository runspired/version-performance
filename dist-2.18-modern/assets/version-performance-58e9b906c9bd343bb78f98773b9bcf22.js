"use strict"
define("version-performance/app",["exports","ember-resolver","ember-load-initializers","version-performance/config/environment"],(function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:t.default});(0,n.default)(r,o.default.modulePrefix)
var a=r
e.default=a})),define("version-performance/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("version-performance/components/t-d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:"",cellValue:Ember.computed("column",(function(){return this.get("column")}))})
e.default=t})),define("version-performance/components/t-r",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:""})
e.default=t})),define("version-performance/helpers/app-version",["exports","version-performance/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function o(e,o={}){const r=t.default.APP.version
let a=o.versionOnly||o.hideSha,i=o.shaOnly||o.hideVersion,l=null
return a&&(o.showExtended&&(l=r.match(n.versionExtendedRegExp)),l||(l=r.match(n.versionRegExp))),i&&(l=r.match(n.shaRegExp)),l?l[0]:r}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o,e.default=void 0
var r=Ember.Helper.helper(o)
e.default=r})),define("version-performance/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","version-performance/config/environment"],(function(e,t,n){let o,r
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(o=n.default.APP.name,r=n.default.APP.version)
var a={name:"App Version",initialize:(0,t.default)(o,r)}
e.default=a})),define("version-performance/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize(){let e=arguments[1]||arguments[0]
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
const n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map((function(){this.route("classic")}))
var o=n
e.default=o})),define("version-performance/routes/application",["exports","lodash"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Route.extend({rowsCount:300,columnsCount:20,model(){return{items:t.default.map(t.default.range(0,this.rowsCount),e=>t.default.map(t.default.range(0,this.columnsCount),t=>e*this.columnsCount+t))}},afterModel(){performance.mark("after-model"),-1!==document.location.href.indexOf("?tracing")&&requestAnimationFrame(()=>{performance.mark("begin-first-paint"),requestAnimationFrame(()=>{document.location.href="about:blank"})})}})
e.default=n})),define("version-performance/routes/classic",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model(){return this.modelFor("application")}})
e.default=t})),define("version-performance/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"bhq8b0O0",block:'{"symbols":[],"statements":[[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"version-performance/templates/application.hbs"}})
e.default=t})),define("version-performance/templates/classic",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"siyUJ35I",block:'{"symbols":["row"],"statements":[[6,"table"],[7],[0,"\\n  "],[6,"tbody"],[7],[0,"\\n"],[4,"each",[[19,0,["model","items"]]],null,{"statements":[[0,"    "],[1,[25,"t-r",null,[["row"],[[19,1,[]]]]],false],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{moduleName:"version-performance/templates/classic.hbs"}})
e.default=t})),define("version-performance/templates/components/t-d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"lXD9cKMJ",block:'{"symbols":[],"statements":[[6,"td"],[7],[0,"\\n  "],[1,[19,0,["cellValue"]],false],[0,"\\n"],[8]],"hasEval":false}',meta:{moduleName:"version-performance/templates/components/t-d.hbs"}})
e.default=t})),define("version-performance/templates/components/t-r",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"nRJEEgj/",block:'{"symbols":["column"],"statements":[[6,"tr"],[7],[0,"\\n"],[4,"each",[[19,0,["row"]]],null,{"statements":[[0,"  "],[1,[25,"t-d",null,[["column"],[[19,1,[]]]]],false],[0,"\\n"]],"parameters":[1]},null],[8]],"hasEval":false}',meta:{moduleName:"version-performance/templates/components/t-r.hbs"}})
e.default=t})),define("version-performance/config/environment",[],(function(){try{var e="version-performance/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(o){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("version-performance/app").default.create({name:"version-performance",version:"0.0.0+b1bbbbd9"})
