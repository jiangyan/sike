//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            footer.js
// Defines:
// Dependencies:
// Description:     JS UI functions for Zhuomi footer
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function($) {

    var Plan = {

        _click: function() {

            $("#planhour > a").click(function() {
                $("#planhour-txt").text($(this).find("span.ph-val").text());
                $("#planhour > a").removeClass("active");
                $(this).addClass("active");
            });

        },

        init: function() {

            this._click();

        }
    };

    ZM.UI.Plan = {

        init: function() {

            Plan.init();

        }

    };

})(jQuery);