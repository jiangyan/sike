//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            reg.js
// Defines:
// Dependencies:
// Description:     this is the document ready functions for reg page
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Document Ready.
jQuery(function($) {

    ZM.UI.Form.init();

});

// Window Onload.
ZM.windowOnload = window.onload;
window.onload = function() {
    if (ZM.windowOnload) {
        ZM.windowOnload();
    }
    // Your code here
};