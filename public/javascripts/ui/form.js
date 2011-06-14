//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            form.js
// Defines:
// Dependencies:
// Description:     JS UI functions for forms
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function($) {

    var Form = {

        hint: function() {
            //ZM.Dom.textHint('#sb-mail', '#sb-mail-hint');
        },

        valid: function() {
            var $el = $("#fb-mail");

            $el.blur(function() {
                var txt = this.value;
                if (txt !== "") {
                    if (!ZM.Dom.mailValid(txt)) {
                        $(this).next().show();
                    }
                    else {
                        $(this).next().hide();
                    }
                }
                else {
                    $(this).next().hide();
                }
            });

        },

        reset: function() {

        },

        init: function() {

        }
    };

    ZM.UI.Form = {

        init: function() {

            Form.valid();

        }

    };

})(jQuery);