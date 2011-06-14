//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            base.js
// Defines:
// Dependencies:
// Description:     this is the base framework module.
// Auther:          vince.liu@ef.com
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Add method for Function/Object */
Function.prototype.method = function(name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
};

/* String help function */
// Format: ({0}{1},objA,objB)
String.method('format', function() {
    var s = this;
    for (var i = 0; i < arguments.length; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i]);
    }
    return s;
});

// Trim: "Hello, Mr. DJ  :" --> "Hello, Mr. DJ"
String.method('trim', function() {
    return this.replace(/^\s+/g, "").replace(/\s+$/g, "");
});

/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ */
