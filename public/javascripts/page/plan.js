//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            plan.js
// Defines:
// Dependencies:
// Description:     this is the document ready functions for plan page
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Document Ready.
jQuery(function($) {

    ZM.UI.Plan.init();

});

// Window Onload.
ZM.windowOnload = window.onload;
window.onload = function() {
    if (ZM.windowOnload) {
        ZM.windowOnload();
    }
    // Your code here
};