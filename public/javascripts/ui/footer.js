//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            footer.js
// Defines:
// Dependencies:
// Description:     JS UI functions for Zhuomi footer
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function($) {

    var AboutUs = {

        _click: function() {

            $("#au-next").click(function() {
                $("#aboutus .au-links").animate(
                    { width: 140 },
                    {
                        duration: 400
                    }
                );
                $(this).hide();
                $("#au-prev").show();
            });
            $("#au-prev").click(function() {
                $("#aboutus .au-links").animate(
                    { width: 0 },
                    {
                        duration: 400
                    }
                );
                    $(this).hide();
                    $("#au-next").show();
                });

        },

        init: function() {

            this._click();

        }
    };

    ZM.UI.Footer = {

        init: function() {

            AboutUs.init();

        }

    };

})(jQuery);

// Document Ready.
jQuery(function($) {

ZM.UI.Footer.init();

});