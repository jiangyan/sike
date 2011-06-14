//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            common.js
// Defines:
// Dependencies:
// Description:     this is the common JavaScript Functions for Zhuomi
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Namespace: ZM
window.ZM = window.ZM || {};

ZM.UI = {};
ZM.DI = {};

/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ */
/* Base - Begin */

ZM.Base = {

    DataType: {
        // ZM.Base.DataType.isNumber();
        isNumber: function(s) {
            return !isNaN(s);
        },

        // ZM.Base.DataType.isString();
        isString: function(s) {
            return typeof s === "string";
        },

        // ZM.Base.DataType.isBoolean();
        isBoolean: function(s) {
            return typeof s === "boolean";
        },

        // ZM.Base.DataType.isFunction();
        isFunction: function(s) {
            return typeof s === "function";
        },

        // ZM.Base.DataType.isNull();
        isNull: function(s) {
            return s === null;
        },

        // ZM.Base.DataType.isUndefined();
        isUndefined: function(s) {
            return typeof s === "undefined";
        },

        // ZM.Base.DataType.isEmpty();
        isEmpty: function(s) {
            return /^\s*$/.test(s);
        },

        // ZM.Base.DataType.isArray();
        isArray: function(s) {
            return s instanceof Array;
        }
    },

    Browser: {
        getIEVer: function() {
            var ua = $.browser,
                iVer = -1;
            if (ua.msie) {
                iVer = Math.floor(ua.version);
            }
            return iVer;
        }
    },

    // Get Request from URL
    // ZM.Base.getRequest();
    getRequest: function() {
        var url = location.search;
        var theRequest = new Object();
        if (url.indexOf("?") !== -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },

    //ZM.Base.Time
    Time: {
        /* Get Month (Full name/Grammalogue)*/
        getMonthName: function(num, isShort) {

            num = (ZM.Base.DataType.isNumber(num) && (num < 12)) ? num : 0;
            isShort = isShort ? true : false;

            var i = isShort ? 1 : 0;
            var arrMonthName = [
			        ["January", "Jan"],
			        ["February", "Feb"],
			        ["March", "Mar"],
			        ["April", "Apr"],
			        ["May", "May"],
			        ["June", "Jun"],
			        ["July", "Jul"],
			        ["August", "Aug"],
			        ["September", "Sep"],
			        ["October", "Oct"],
			        ["November", "Nov"],
			        ["December", "Dec"]
		        ];

            return arrMonthName[num][i];
        },

        /* Get Week (Full name/Grammalogue)*/
        getWeekName: function(num, isShort) {

            num = (ZM.Base.DataType.isNumber(num) && (num < 7)) ? num : 0;
            isShort = isShort ? true : false;

            var i = isShort ? 1 : 0;
            var arrMonthName = [
			        ["Sunday", "Sun"],
			        ["Monday", "Mon"],
			        ["Tuesday", "Tue"],
			        ["Wednesday", "Wed"],
			        ["Thusday", "Thu"],
			        ["Friday", "Fri"],
			        ["Saterday", "Sat"]
		        ];

            return arrMonthName[num][i];
        },

        addDay: function(d, n) {
            var temp = new Date(d);
            return new Date(temp.setDate(temp.getDate() + n));
        },

        // Get Hour by Seconds
        getHourBySec: function(sec) {
            if (!this.isNumber(sec)) {
                return;
            }
            return sec >= 3600 ? Math.floor(sec / 3600) : 0;
        },

        // Get Minute by Seconds
        getMinuteBySec: function(sec) {
            if (!this.isNumber(sec)) {
                return;
            }
            var remainder = sec >= 3600 ? sec % 3600 : sec;
            return remainder >= 60 ? Math.floor(remainder / 60) : 0;
        },

        // Get remain Seconds
        getRemainSeconds: function(sec) {
            if (!this.isNumber(sec)) {
                return;
            }
            return sec % 60;
        },

        // Get popular time
        getPopularTime: function(sec) {

            if (isNaN(sec)) {
                return;
            }

            var arrTime = [];
            var remainder = sec >= 3600 ? sec % 3600 : sec;

            arrTime[0] = sec >= 3600 ? Math.floor(sec / 3600) : 0;
            arrTime[1] = remainder >= 60 ? Math.floor(remainder / 60) : 0;
            arrTime[2] = sec % 60;

            return arrTime;
        },

        getElectronicTime: function(sec) {

            if (isNaN(sec)) {
                return;
            }

            var arrPopularTime = this.getPopularTime(sec);
            var _hour = arrPopularTime[0],
                _min = arrPopularTime[1],
                _sec = arrPopularTime[2];

            var arrTime = [];

            // Get Timer Dial Number
            arrTime[0] = Math.floor(_hour / 10);
            arrTime[1] = _hour % 10;
            arrTime[2] = Math.floor(_min / 10);
            arrTime[3] = _min % 10;
            arrTime[4] = Math.floor(_sec / 10);
            arrTime[5] = _sec % 10;

            return arrTime;
        },

        getCarryByUnit: function(unit) {

            var carry = 10;

            switch (unit) {
                case 5:
                case 3:
                case 1:
                    carry = 10;
                    break;
                case 4:
                case 2:
                    carry = 6;
                    break;
                case 0:
                    carry = 3;
                    break;
                default:
                    carry = 10;
                    break;
            }

            return carry;

        }

    }

};

/* Base - End */

/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ */
/* Dom - Begin */

ZM.Dom = {

    /* Input Text Hint */
    textHint: function(elObj, elHint, isLabelHint) {

        isLabelHint = typeof isLabelHint !== "undefined" ? isLabelHint : false;

        var $elObj = $(elObj),
            $elHint = $(elHint);

        $elObj.val('');

        $elHint.bind({
            'focus click': function() {
                $(this).hide();
                $elObj.show().focus();
            },
            blur: function() {
                if ($.trim($elObj.val()) === "") {
                    if (!isLabelHint) {
                        $elObj.hide();
                    }
                    $(this).show();
                }
            }
        });
        $elObj.bind({
            focus: function() {
                $elHint.hide();
            },
            blur: function() {
                if ($.trim($(this).val()) === "") {
                    if (!isLabelHint) {
                        $elObj.hide();
                    }
                    $elHint.show();
                }
            }
        });
    },

    /* Mail Validate */
    mailValid: function(mail) {
        var regx = /^([a-zA-Z0-9]|[._])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        if (!regx.test(mail)) {
            return false;
        }
        return true;
    }

};

/* Dom - End */
