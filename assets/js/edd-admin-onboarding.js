!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=189)}({1:function(t,e){t.exports=jQuery},166:function(t,e){function n(t,e,n,o,r,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(o,r)}t.exports=function(t){return function(){var e=this,o=arguments;return new Promise((function(r,i){var a=t.apply(e,o);function c(t){n(a,r,i,c,u,"next",t)}function u(t){n(a,r,i,c,u,"throw",t)}c(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},189:function(t,e,n){"use strict";n.r(e),function(t,e){var o=n(2),r=n.n(o),i=n(166),a=n.n(i),c=n(30),u=n.n(c);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d,f={vars:{},init:function(){this.init_step_buttons(),this.init_upload_buttons(),this.start_onboarding(),console.log(EDDExtensionManager);var e=f.get_step_class(t(".edd-onboarding_current-step").val());e&&f[e].init()},loading_state:function(e){t(".edd-onboarding__loading").toggle(e)},init_step_buttons:function(){t(document.body).on("click",".edd-onboarding__button-back, .edd-onboarding__button-skip-step",(function(e){e.preventDefault(),f.load_step(t(this).data("step"))})),t(document.body).on("click",".edd-onboarding__button-save-step",(function(e){e.preventDefault();var n=f.get_step_class(t(".edd-onboarding_current-step").val());n&&f[n].save()}))},init_upload_buttons:function(){var e;window.form_upload_field=!1,t(document.body).on("click",".edd_settings_upload_button",(function(n){n.preventDefault();var o=t(this);window.form_upload_field=t(this).parent().prev(),e||((e=wp.media.frames.file_frame=wp.media({title:o.data("uploader_title"),library:{type:"image"},button:{text:o.data("uploader_button_text")},multiple:!1})).on("menu:render:default",(function(t){t.unset("library-separator"),t.unset("gallery"),t.unset("featured-image"),t.unset("embed"),t.set({})})),e.on("select",(function(){e.state().get("selection").each((function(e,n){e=e.toJSON(),window.form_upload_field.val(e.url),window.form_upload_field.data("attachment-id-field")&&t(window.form_upload_field.data("attachment-id-field")).val(e.id)}))}))),e.open()}))},start_onboarding:function(){t(document.body).on("click",".edd-onboarding__welcome-screen-get-started",(function(e){e.preventDefault(),t(".edd-onboarding__welcome-screen-get-started").html("LOADING..."),f.loading_state(!0),t.post(ajaxurl,{action:"edd_onboarding_started",page:"edd-onboarding-wizard"},(function(){t(".edd-onboarding__welcome-screen").fadeOut(),t(".edd-onboarding__steps").slideDown(),t(".edd-onboarding__steps, .edd-onboarding__after-welcome-screen, .edd-onboarding__close-and-exit").slideDown(),f.loading_state(!1)}))}))},load_step:function(e){f.loading_state(!0),t.ajax({type:"GET",dataType:"html",url:ajaxurl,data:{action:"edd_onboarding_load_step",page:"edd-onboarding-wizard",current_step:e},success:function(n){t(".edd-onboarding__current-step").html(n);var o=f.get_step_class(e);o&&f[o].init(),setTimeout((function(){t("html, body").animate({scrollTop:t(".edd-onboarding__wrapper").offset().top-45},800)}),150);var r=new URLSearchParams(window.location.search);r.set("current_step",e),history.replaceState(null,null,"?"+r.toString())}}).fail((function(t){window.console&&window.console.log&&console.log(t)})).done((function(t){f.loading_state(!1)}))},next_step:function(){var e=t(".edd-onboarding__button-save-step").data("step");f.load_step(e)},get_step_class:function(t){var e="EDD_Onboarding_"+t.split("_").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join("_");return void 0!==f[e]&&e},EDD_Onboarding_Business_Info:{init:function(){},save:function(){t.ajax({type:"POST",url:t(".edd-settings-form").attr("action"),data:t(".edd-settings-form").serialize(),beforeSend:function(){f.loading_state(!0)},success:function(t){f.next_step()}}).fail((function(t){window.console&&window.console.log&&console.log(t)}))}},EDD_Onboarding_Payment_Methods:{init:function(){var e=t("#edds-stripe-connect-account"),n=t("#edds-stripe-disconnect-reconnect");e&&t.ajax({type:"POST",url:ajaxurl,data:{action:"edds_stripe_connect_account_info",accountId:e.data("account-id"),nonce:e.data("nonce")},success:function(t){t.success?(e.html(t.data.message),e.addClass("notice-".concat(t.data.status)),t.data.actions&&n.html(t.data.actions)):(e.html(t.data.message),e.addClass("notice-error"))}}).fail((function(t){}))},save:function(){f.next_step()}},EDD_Onboarding_Configure_Emails:{init:function(){},save:function(){t.ajax({type:"POST",url:t(".edd-settings-form").attr("action"),data:t(".edd-settings-form").serialize(),beforeSend:function(){f.loading_state(!0)},success:function(t){f.next_step()}}).fail((function(t){window.console&&window.console.log&&console.log(t)}))}},EDD_Onboarding_Tools:{init:function(){this.get_selected_plugins(),t(document.body).on("change",".edd-onboarding__plugin-install",(function(){f.EDD_Onboarding_Tools.get_selected_plugins()}))},get_selected_plugins:function(){var e=[];t(".edd-onboarding__plugin-install:checked:not(:disabled)").each((function(){e.push(t(this).data("plugin-name"))})),t(".edd-onboarding__selected-plugins-text").html(e.join(", "))},save:(d=a()(u.a.mark((function e(){var n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.loading_state(!0),n=[],o=[],t(".edd-onboarding__plugin-install:checked:not(:disabled)").each((function(){n.push({plugin_url:t(this).val(),plugin_name:t(this).data("plugin-name")})})),n.forEach((function(e){o.push(new Promise((function(n,o){var r={action:"edd_install_extension",nonce:EDDExtensionManager.extension_manager_nonce,plugin:e.plugin_url,type:"plugin"};t.post(ajaxurl,r).done((function(t){console.log(t),t.success,n()}))})))})),e.abrupt("return",Promise.all(o).then((function(){f.loading_state(!1)})));case 6:case"end":return e.stop()}}),e)}))),function(){return d.apply(this,arguments)})},EDD_Onboarding_Products:{init:function(){},save:function(){var e=t(".edd-onboarding__create-product-form");if(e[0].reportValidity()){var n=Object.fromEntries(new FormData(e[0]));t.ajax({type:"POST",url:ajaxurl,data:l({action:"edd_onboarding_create_product",page:"edd-onboarding-wizard"},n),beforeSend:function(){f.loading_state(!0)},success:function(t){t.success?window.location=decodeURI(t.redirect_url.replace(/&amp;/g,"&")):f.loading_state(!1)}}).fail((function(t){window.console&&window.console.log&&console.log(t)}))}}}};e(document).ready((function(t){f.init()}))}.call(this,n(1),n(1))},190:function(t,e,n){var o=n(22).default;function r(){"use strict";t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function d(t,e,n,o){var r=e&&e.prototype instanceof h?e:h,i=Object.create(r.prototype),a=new L(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return{value:void 0,done:!0}}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var u=f(t,e,n);if("normal"===u.type){if(o=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var p={};function h(){}function g(){}function _(){}var y={};l(y,c,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(P([])));m&&m!==n&&i.call(m,c)&&(y=m);var b=_.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(r,a){function c(){return new e((function(n,c){!function n(r,a,c,u){var s=f(t[r],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==o(d)&&i.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}(r,a,n,c)}))}return n=n?n.then(c,c):c()}}function O(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:D}}function D(){return{value:void 0,done:!0}}return g.prototype=_,l(b,"constructor",_),l(_,"constructor",g),g.displayName=l(_,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new x(d(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,s,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},e.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],a=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var c=i.call(r,"catchLoc"),u=i.call(r,"finallyLoc");if(c&&u){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;E(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},2:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},22:function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},30:function(t,e,n){var o=n(190)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}});