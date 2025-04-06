(function($) {

    $.anwidget("an.TextInput", {
        options: {
            'visible': true,
            'disabled': false,
            'text': "",
            'position': 'absolute',
            'rows': 5,
            'cols': 30,
            'fontSize': '1.5rem' // Valor base, puede cambiar si es móvil
        },
        _props: ["left", "top", "width", "height", "position", "transform-origin", "transform", "rows", "cols", "fontSize"],
        _attrs: ["id", "disabled", "class", "rows", "cols"],

        getCreateOptions: function() {
            // Detectar si es un dispositivo móvil
            if (window.innerWidth < 768) {
                this.options.fontSize = '2rem'; // Más grande en móviles
            }
            return $.extend(this.options, { 'id': "textinput" + _widgetID++ });
        },

        getCreateString: function() {
            return "<textarea id='" + this.options.id + "' rows='" + this.options.rows + "' cols='" + this.options.cols +
                   "' style='resize: none; border: none; outline: none; background: transparent; font-size: " + this.options.fontSize + ";'></textarea>";
        },

        getProperties: function() {
            return this._props;
        },

        getAttributes: function() {
            return this._attrs;
        }
    });

})(jQuery);

