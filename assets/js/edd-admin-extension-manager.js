!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=226)}({1:function(e,t){e.exports=jQuery},226:function(e,t,n){(function(e){!function(e,t){"use strict";t(".edd-extension-manager__action").on("click",(function(e){e.preventDefault();var n=t(this),a=n.attr("data-action"),i=n.attr("data-plugin"),r=n.attr("data-type"),o="";if(!n.attr("disabled")){switch(a){case"activate":o="edd_activate_extension",n.text(EDDExtensionManager.activating);break;case"install":o="edd_install_extension",n.text(EDDExtensionManager.installing);break;default:return}n.removeClass("button-primary").attr("disabled",!0).addClass("updating-message");var s={action:o,nonce:EDDExtensionManager.extension_manager_nonce,plugin:i,type:r,pass:n.attr("data-pass"),id:n.attr("data-id"),product:n.attr("data-product")};t.post(ajaxurl,s).done((function(e){console.log(e);var t=n.closest(".edd-extension-manager__step");if(e.success){var a=t.next();a.length&&(t.fadeOut(),a.prepend('<div class="notice inline-notice notice-success"><p>'+e.data.message+"</p></div>"),a.fadeIn())}else{t.fadeOut();var i=e.data.message;i||(i="plugin"!==r?EDDExtensionManager.extension_install_failed:EDDExtensionManager.plugin_install_failed),t.after('<div class="notice inline-notice notice-warning"><p>'+i+"</p></div>")}}))}}))}(document,e)}).call(this,n(1))}});