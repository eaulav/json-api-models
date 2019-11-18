var JsonApiModels=function(t){"use strict";var e=function(){function t(t,e){this.store=e,this.attributes={},this.relationships={},this.meta={},this.links={},this.merge(t)}return t.prototype.identifier=function(){return{id:this.id,type:this.type}},t.prototype.merge=function(t){var e=this;if("type"in t&&(this.type=t.type),"id"in t&&(this.id=t.id),"attributes"in t&&(Object.assign(this.attributes,t.attributes),Object.keys(t.attributes).forEach((function(t){Object.defineProperty(e,t,{configurable:!0,get:function(){return e.attributes[t]}})}))),"relationships"in t)for(var i=function(t,i){n.relationships[t]=n.relationships[t]||{},Object.assign(n.relationships[t],i),Object.defineProperty(n,t,{configurable:!0,get:function(){return e.store.find(e.relationships[t].data)}})},n=this,r=0,s=Object.entries(t.relationships);r<s.length;r++){var o=s[r];i(o[0],o[1])}"links"in t&&(this.links=t.links),"meta"in t&&(this.meta=t.meta)},t}(),i=function(){function t(t){void 0===t&&(t={}),this.models=t,this.graph={}}return t.prototype.model=function(t,e){this.models[t]=e},t.prototype.find=function(t,e){var i=this;return null===t?null:Array.isArray(t)?t.map((function(t){return i.find(t)})):"object"==typeof t?this.find(t.type,t.id):this.graph[t]&&this.graph[t][e]||null},t.prototype.findAll=function(t){var e=this;return this.graph[t]?Object.keys(this.graph[t]).map((function(i){return e.graph[t][i]})):[]},t.prototype.sync=function(t){var e=this.syncResource.bind(this);return"included"in t&&t.included.map(e),Array.isArray(t.data)?t.data.map(e):e(t.data)},t.prototype.syncResource=function(t){var e=t.type,i=t.id;return this.graph[e]=this.graph[e]||{},this.graph[e][i]?this.graph[e][i].merge(t):this.graph[e][i]=this.createModel(t),this.graph[e][i]},t.prototype.createModel=function(t){return new(this.models[t.type]||this.models["*"]||e)(t,this)},t.prototype.forget=function(t){delete this.graph[t.type][t.id]},t.prototype.reset=function(){this.graph={}},t}(),n=function(){function t(t){void 0===t&&(t={}),this.query=Object.assign({},t)}return t.prototype.push=function(t,e){var i=this;return"object"==typeof t?Object.entries(t).map((function(t){return i.push.apply(i,t)})):this.appendable(t)?this.query[t]=(this.query[t]?this.query[t]+",":"")+e:this.query[t]=e,this},t.prototype.appendable=function(t){return"include"===t||/fields\[[^\]]+]/i.test(t)},t.prototype.toString=function(){return Object.entries(this.query).sort((function(t,e){return t[0].localeCompare(e[0])})).map((function(t){var e=t[0],i=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(i)})).join("&")},t}();return t.Model=e,t.Query=n,t.Store=i,t}({});
