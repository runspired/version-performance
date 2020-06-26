"use strict"
define("version-performance/app",["exports","ember-resolver","ember-load-initializers","version-performance/config/environment"],(function(e,n,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default});(0,t.default)(o,r.default.modulePrefix)
var a=o
e.default=a})),define("version-performance/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})})),define("version-performance/components/t-d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Component.extend({tagName:"",cellValue:Ember.computed("column",(function(){return this.get("column")}))})
e.default=n})),define("version-performance/components/t-r",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Component.extend({tagName:""})
e.default=n})),define("version-performance/helpers/app-version",["exports","version-performance/config/environment","ember-cli-app-version/utils/regexp"],(function(e,n,t){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.default.APP.version,a=r.versionOnly||r.hideSha,i=r.shaOnly||r.hideVersion,l=null
return a&&(r.showExtended&&(l=o.match(t.versionExtendedRegExp)),l||(l=o.match(t.versionRegExp))),i&&(l=o.match(t.shaRegExp)),l?l[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var o=Ember.Helper.helper(r)
e.default=o})),define("version-performance/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","version-performance/config/environment"],(function(e,n,t){var r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.default.APP&&(r=t.default.APP.name,o=t.default.APP.version)
var a={name:"App Version",initialize:(0,n.default)(r,o)}
e.default=a})),define("version-performance/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=t})),define("version-performance/initializers/export-application-global",["exports","version-performance/config/environment"],(function(e,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var r,o=n.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(n.default.modulePrefix),t[r]||(t[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default=void 0
var r={name:"export-application-global",initialize:t}
e.default=r})),define("version-performance/router",["exports","version-performance/config/environment"],(function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
t.map((function(){this.route("classic")}))
var r=t
e.default=r})),define("version-performance/routes/application",["exports","lodash"],(function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({rowsCount:300,columnsCount:20,model:function(){var e=this
return{items:n.default.map(n.default.range(0,this.rowsCount),(function(t){return n.default.map(n.default.range(0,e.columnsCount),(function(n){return t*e.columnsCount+n}))}))}},afterModel:function(){performance.mark("after-model"),-1!==document.location.href.indexOf("?tracing")&&requestAnimationFrame((function(){performance.mark("begin-first-paint"),requestAnimationFrame((function(){document.location.href="about:blank"}))}))}})
e.default=t})),define("version-performance/routes/classic",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Route.extend({model:function(){return this.modelFor("application")}})
e.default=n})),define("version-performance/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.HTMLBars.template({id:"bhq8b0O0",block:'{"symbols":[],"statements":[[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"version-performance/templates/application.hbs"}})
e.default=n})),define("version-performance/templates/classic",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.HTMLBars.template({id:"siyUJ35I",block:'{"symbols":["row"],"statements":[[6,"table"],[7],[0,"\\n  "],[6,"tbody"],[7],[0,"\\n"],[4,"each",[[19,0,["model","items"]]],null,{"statements":[[0,"    "],[1,[25,"t-r",null,[["row"],[[19,1,[]]]]],false],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{moduleName:"version-performance/templates/classic.hbs"}})
e.default=n})),define("version-performance/templates/components/t-d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.HTMLBars.template({id:"lXD9cKMJ",block:'{"symbols":[],"statements":[[6,"td"],[7],[0,"\\n  "],[1,[19,0,["cellValue"]],false],[0,"\\n"],[8]],"hasEval":false}',meta:{moduleName:"version-performance/templates/components/t-d.hbs"}})
e.default=n})),define("version-performance/templates/components/t-r",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.HTMLBars.template({id:"nRJEEgj/",block:'{"symbols":["column"],"statements":[[6,"tr"],[7],[0,"\\n"],[4,"each",[[19,0,["row"]]],null,{"statements":[[0,"  "],[1,[25,"t-d",null,[["column"],[[19,1,[]]]]],false],[0,"\\n"]],"parameters":[1]},null],[8]],"hasEval":false}',meta:{moduleName:"version-performance/templates/components/t-r.hbs"}})
e.default=n})),define("version-performance/config/environment",[],(function(){try{var e="version-performance/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(decodeURIComponent(n))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("version-performance/app").default.create({name:"version-performance",version:"0.0.0+b1bbbbd9"})
