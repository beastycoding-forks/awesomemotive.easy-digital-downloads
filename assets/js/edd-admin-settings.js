!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=209)}({1:function(e,t){e.exports=jQuery},175:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var a=function(){e.post(ajaxurl,{action:"edd_recapture_remote_install"},(function(e){e.success||!confirm(e.data.error)?window.location.href="https://recapture.io/register":location.reload()}))}}).call(this,n(1))},209:function(e,t,n){"use strict";n.r(t),function(e,t){var a=n(175),o=(n(210),{init:function(){this.general(),this.misc(),this.gateways(),this.emails()},general:function(){var n=e(".edd-color-picker");if(n.length&&n.wpColorPicker(),"undefined"==typeof wp||"1"!==edd_vars.new_media_ui){var a=e(".edd_settings_upload_button");a.length>0&&(window.formfield="",e(document.body).on("click",a,(function(n){n.preventDefault(),window.formfield=e(this).parent().prev(),window.tbframe_interval=setInterval((function(){t("#TB_iframeContent").contents().find(".savesend .button").val(edd_vars.use_this_file).end().find("#insert-gallery, .wp-post-thumbnail").hide()}),2e3),tb_show(edd_vars.add_new_download,"media-upload.php?TB_iframe=true")})),window.edd_send_to_editor=window.send_to_editor,window.send_to_editor=function(t){window.formfield?(imgurl=e("a","<div>"+t+"</div>").attr("href"),window.formfield.val(imgurl),window.clearInterval(window.tbframe_interval),tb_remove()):window.edd_send_to_editor(t),window.send_to_editor=window.edd_send_to_editor,window.formfield="",window.imagefield=!1})}else{var o;window.formfield="",e(document.body).on("click",".edd_settings_upload_button",(function(t){t.preventDefault();var n=e(this);window.formfield=e(this).parent().prev(),o||((o=wp.media.frames.file_frame=wp.media({title:n.data("uploader_title"),library:{type:"image"},button:{text:n.data("uploader_button_text")},multiple:!1})).on("menu:render:default",(function(e){e.unset("library-separator"),e.unset("gallery"),e.unset("featured-image"),e.unset("embed"),e.set({})})),o.on("select",(function(){o.state().get("selection").each((function(e,t){e=e.toJSON(),window.formfield.val(e.url)}))}))),o.open()})),window.formfield=""}},misc:function(){var t=e('select[name="edd_settings[download_method]"]'),n=t.parent().parent().next();"direct"===t.val()&&(n.css("opacity","0.4"),n.find("input").prop("checked",!1).prop("disabled",!0)),t.on("change",(function(){"direct"===e(this).val()?(n.css("opacity","0.4"),n.find("input").prop("checked",!1).prop("disabled",!0)):(n.find("input").prop("disabled",!1),n.css("opacity","1"))}))},gateways:function(){e('#edd-payment-gateways input[type="checkbox"]').on("change",(function(){var t=e(this).data("gateway-key"),n=e("#edd_settings\\[default_gateway\\]"),a=n.find('option[value="'+t+'"]');a.prop("disabled",(function(e,t){return!t})),a.prop("selected")&&a.prop("selected",!1),n.trigger("chosen:updated")}))},emails:function(){e("#edd-recapture-connect").on("click",(function(t){t.preventDefault(),e(this).html(edd_vars.wait+' <span class="edd-loading"></span>'),document.body.style.cursor="wait",Object(a.a)()}));var t=e('select[name="edd_settings[email_summary_recipient]"]'),n=t.val(),o=e('textarea[name="edd_settings[email_summary_custom_recipients]"]').parents("tr"),d=e("#edd-send-test-summary-save-changes-notice"),i=e("#edd-send-test-summary"),r=e("#edd-send-test-summary-notice");t.on("change",(function(){o.toggleClass("hidden"),i.removeClass("hidden updated-message"),r.empty(),d.empty(),n!==t.val()&&(i.addClass("hidden"),d.html('<div class="notice notice-info"><p>'+edd_vars.test_email_save_changes+"</p></div>"))})),i.on("click",(function(t){t.preventDefault(),e.ajax({type:"GET",dataType:"json",url:ajaxurl,data:{action:"edd_send_test_email_summary"},beforeSend:function(){r.empty(),i.addClass("updating-message").prop("disabled",!0)},success:function(e){"error"==e.status?r.html('<div class="updated '+e.status+'"><p>'+e.message+"</p></div>"):(i.addClass("updated-message"),setTimeout((function(){i.removeClass("updated-message")}),3e3))}}).fail((function(e){window.console&&window.console.log&&console.log(e)})).done((function(e){i.removeClass("updating-message").prop("disabled",!1)}))}))}});t(document).ready((function(e){o.init()}))}.call(this,n(1),n(1))},210:function(e,t,n){(function(e){e(document).ready((function(e){function t(){var t=document.getElementById("edd-paypal-commerce-connect-wrap");t&&e.post(ajaxurl,{action:"edd_paypal_commerce_get_account_info",_ajax_nonce:t.getAttribute("data-nonce")},(function(e){var n="<p>"+eddPayPalConnectVars.defaultError+"</p>";e.success?(n=e.data.account_status,e.data.actions&&e.data.actions.length&&(n+='<p class="edd-paypal-connect-actions">'+e.data.actions.join(" ")+"</p>")):e.data&&e.data.message&&(n=e.data.message),t.innerHTML=n,t.classList.remove("notice-success","notice-warning","notice-error");var a=e.success&&e.data.status?"notice-"+e.data.status:"notice-error";t.classList.add(a)}))}e("#edd-paypal-commerce-connect").on("click",(function(t){t.preventDefault();var n=e("#edd-paypal-commerce-errors");n.empty().removeClass("notice notice-error");var a=document.getElementById("edd-paypal-commerce-connect");a.classList.add("updating-message"),a.disabled=!0,e.post(ajaxurl,{action:"edd_paypal_commerce_connect",_ajax_nonce:e(this).data("nonce")},(function(e){if(!e.success)return console.log("Connection failure",e.data),a.classList.remove("updating-message"),a.disabled=!1,void n.html("<p>"+e.data+"</p>").addClass("notice notice-error");var t=document.getElementById("edd-paypal-commerce-link");t.href=e.data.signupLink+"&displayMode=minibrowser",t.click()}))})),t(),e(document).on("click",".edd-paypal-connect-action",(function(n){n.preventDefault();var a=e(this);a.prop("disabled",!0),a.addClass("updating-message");var o=e("#edd-paypal-commerce-connect-wrap").find(".edd-paypal-actions-error-wrap");o.length&&o.remove(),e.post(ajaxurl,{action:a.data("action"),_ajax_nonce:a.data("nonce")},(function(e){a.prop("disabled",!1),a.removeClass("updating-message"),e.success?(a.addClass("updated-message"),t()):a.parent().after('<p class="edd-paypal-actions-error-wrap">'+e.data+"</p>")}))}))})),window.eddPayPalOnboardingCallback=function(t,n){var a=document.getElementById("edd-paypal-commerce-connect"),o=document.getElementById("edd-paypal-commerce-errors");e.post(ajaxurl,{action:"edd_paypal_commerce_get_access_token",auth_code:t,share_id:n,_ajax_nonce:a.getAttribute("data-nonce")},(function(e){if(a.classList.remove("updating-message"),!e.success)return a.disabled=!1,o.innerHTML="<p>"+e.data+"</p>",void o.classList.add("notice notice-error");a.classList.add("updated-message"),window.location.reload()}))}}).call(this,n(1))}});