!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=240)}({1:function(e,t){e.exports=jQuery},176:function(e,t,n){"use strict";(function(e){var i=n(19),o=n(177),a=n(5),r=wp.Backbone.View.extend({tagName:"tfoot",className:"add-new",template:wp.template("edd-admin-tax-rates-table-add"),events:{"click button":"addTaxRate",keypress:"maybeAddTaxRate","change #tax_rate_country":"setCountry","keyup #tax_rate_region":"setRegion","change #tax_rate_region":"setRegion",'change input[type="checkbox"]':"setGlobal","keyup #tax_rate_amount":"setAmount","change #tax_rate_amount":"setAmount"},initialize:function(){this.model=new i.a({global:!0,unsaved:!0}),this.listenTo(this.model,"change:country",this.updateRegion),this.listenTo(this.model,"change:global",this.updateRegion)},render:function(){return wp.Backbone.View.prototype.render.apply(this,arguments),this.$el.find("select").each((function(){var t=e(this);t.chosen(Object(a.a)(t))})),this},updateRegion:function(){var t=this,n={action:"edd_get_shop_states",country:this.model.get("country"),nonce:eddTaxRates.nonce,field_name:"tax_rate_region"};e.post(ajaxurl,n,(function(e){t.views.set("#tax_rate_region_wrapper",new o.a({states:e,global:t.model.get("global")}))}))},setCountry:function(e){var t=e.target.options[e.target.selectedIndex].value,n=document.getElementById("tax_rate_region_global");"all"===t?(t="*",n.checked=!0,this.model.set("region",""),this.model.set("global",!0),n.readOnly=!0,n.disabled=!0):(n.disabled=!1,n.readOnly=!1),this.model.set("country",t)},setRegion:function(e){var t;t=e.target.value?e.target.value:e.target.options[e.target.selectedIndex].value,this.model.set("region",t)},setGlobal:function(e){var t=e.target.checked;this.model.set("global",t),!0===t&&this.model.set("region","")},setAmount:function(e){this.model.set("amount",e.target.value)},maybeAddTaxRate:function(e){13===e.keyCode&&this.addTaxRate(e)},addTaxRate:function(e){e.preventDefault();var t=eddTaxRates.i18n;if(this.model.get("country")){var n=this.model.get("region"),i=this.model.get("country"),o=""===this.model.get("region");if("*"===i&&(i="",n="",o=!1),this.collection.where({region:n,country:i,global:o,status:"active"}).length>0){var a=(""===i?"*":i)+(""===n?"":": "+n);alert(t.duplicateRate.replace("%s",'"'.concat(a,'"')))}else this.model.get("amount")<0?alert(t.negativeTax):(0==this.model.get("amount")&&confirm(t.emptyTax),this.collection.add(_.extend(this.model.attributes,{id:this.model.cid})),this.render(),this.initialize())}else alert(t.emptyCountry)}});t.a=r}).call(this,n(1))},177:function(e,t,n){"use strict";(function(e){var i=n(5),o=wp.Backbone.View.extend({initialize:function(e){_.extend(this,e)},render:function(){this.global||("nostates"===this.states?this.setElement('<input type="text" id="tax_rate_region" />'):(this.$el.html(this.states),this.$el.find("select").each((function(){var t=e(this);t.chosen(Object(i.a)(t))}))))}});t.a=o}).call(this,n(1))},19:function(e,t,n){"use strict";var i=Backbone.Model.extend({defaults:{id:"",country:"",region:"",global:!0,amount:0,status:"active",unsaved:!1,selected:!1},formattedAmount:function(){var e=0;return this.get("amount")&&(e=parseFloat(this.get("amount")).toFixed(2)),"".concat(e,"%")}});t.a=i},2:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},240:function(e,t,n){"use strict";n.r(t);var i=n(19),o=Backbone.Collection.extend({model:i.a,initialize:function(){this.showAll=!1,this.selected=[]}}),a=wp.Backbone.View.extend({template:wp.template("edd-admin-tax-rates-table-meta"),events:{'change [type="checkbox"]':"selectAll"},selectAll:function(e){var t=this,n=e.target.checked;_.each(this.collection.models,(function(e){e.set("selected",n),t.collection.selected.push(e.cid)}))}}),r=wp.Backbone.View.extend({tagName:"tr",className:"edd-tax-rate-row edd-tax-rate-row--is-empty",template:wp.template("edd-admin-tax-rates-table-row-empty")}),l=n(2),c=n.n(l);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=wp.Backbone.View.extend({tagName:"tr",className:function(){return"edd-tax-rate-row edd-tax-rate-row--"+this.model.get("status")},template:wp.template("edd-admin-tax-rates-table-row"),events:{"click .remove":"removeRow","click .activate":"activateRow","click .deactivate":"deactivateRow",'change [type="checkbox"]':"selectRow"},initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){this.$el.html(this.template(d(d({},this.model.toJSON()),{},{formattedAmount:this.model.formattedAmount()}))),this.$el.attr("class",_.result(this,"className"))},removeRow:function(e){e.preventDefault(),this.collection.remove(this.model)},activateRow:function(e){e.preventDefault();var t=eddTaxRates.i18n;if(this.collection.where({region:this.model.get("region"),country:this.model.get("country"),global:""===this.model.get("region"),status:"active"}).length>0){var n=""===this.model.get("region")?"":": "+this.model.get("region"),i=this.model.get("country")+n;alert(t.duplicateRate.replace("%s",'"'.concat(i,'"')))}else this.model.set("status","active")},deactivateRow:function(e){e.preventDefault(),this.model.set("status","inactive")},selectRow:function(e){var t=this;e.target.checked?this.collection.selected.push(this.model.cid):this.collection.selected=_.reject(this.collection.selected,(function(e){return e===t.model.cid}))}}),h=wp.Backbone.View.extend({tagName:"tbody",initialize:function(){this.listenTo(this.collection,"add",this.render),this.listenTo(this.collection,"remove",this.render),this.listenTo(this.collection,"filtered change",this.filtered)},render:function(){var e=this;if(this.views.remove(),0===this.collection.models.length)return this.views.add(new r);_.each(this.collection.models,(function(t){e.views.add(new u({collection:e.collection,model:t}))}))},filtered:function(){this.collection.where({status:"inactive"}).length!==this.collection.models.length||this.collection.showAll?this.render():this.views.add(new r)}}),f=n(176),m=wp.Backbone.View.extend({tagName:"table",className:"wp-list-table widefat fixed tax-rates",id:"edd_tax_rates",render:function(){this.views.add(new a({tagName:"thead",collection:this.collection})),this.views.add(new h({collection:this.collection})),this.views.add(new f.a({collection:this.collection})),this.views.add(new a({tagName:"tfoot",collection:this.collection})),this.collection.trigger("filtered")}}),g=wp.Backbone.View.extend({template:wp.template("edd-admin-tax-rates-table-bulk-actions"),events:{"click .edd-admin-tax-rates-table-filter":"filter","change .edd-admin-tax-rates-table-hide input":"showHide"},filter:function(e){var t=this;e.preventDefault();var n=document.getElementById("edd-admin-tax-rates-table-bulk-actions");_.each(this.collection.selected,(function(e){t.collection.get({cid:e}).set("status",n.value)})),this.collection.trigger("filtered")},showHide:function(e){this.collection.showAll=e.target.checked,document.getElementById("edd_tax_rates").classList.toggle("has-inactive",this.collection.showAll),this.collection.trigger("filtered")}}),p=wp.Backbone.View.extend({el:"#edd-admin-tax-rates",initialize:function(){this.listenTo(this.collection,"add change",this.makeDirty),document.querySelector(".edd-settings-form #submit").addEventListener("click",this.makeClean)},render:function(){this.views.add(new g({collection:this.collection})),this.views.add(new m({collection:this.collection}))},makeDirty:function(){window.onbeforeunload=this.confirmUnload},makeClean:function(){window.onbeforeunload=null},confirmUnload:function(e){return e.preventDefault(),""}}),b=n(3);Object(b.a)((function(){var e=document.getElementById("edd-tax-disabled-notice");e&&(e.classList.add("notice"),e.classList.add("notice-warning"));var t=new p({collection:new o}),n=[];_.each(eddTaxRates.rates,(function(e){return n.push({id:e.id,country:e.name,region:e.description,global:"country"===e.scope,amount:e.amount,status:e.status})})),t.collection.set(n,{silent:!0}),t.render()}))},3:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var i=function(t){e(t)}}).call(this,n(1))},5:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var i=n(2),o=n.n(i);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={disable_search_threshold:13,search_contains:!0,inherit_select_classes:!0,single_backstroke_delete:!1,placeholder_text_single:edd_vars.one_option,placeholder_text_multiple:edd_vars.one_or_more_option,no_results_text:edd_vars.no_results_text},c=function(t){!t instanceof e&&(t=e(t));var n=l;return t.data("search-type")&&delete n.disable_search_threshold,r(r({},n),{},{width:t.css("width")})}}).call(this,n(1))}});