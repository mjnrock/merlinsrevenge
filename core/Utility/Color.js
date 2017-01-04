var Utility = Utility || {};

class Color {
    constructor(R = null, G = null, B = null, A = 1.0) {
        this.randomize(R, G, B);
        this.A = Utility.Helper.clamp(A, 0.0, 1.0, 2);
    }
    RGB() {
        return `rgb(${this.R}, ${this.G}, ${this.B})`;
    }
    RGBA(A = this.A) {
        return `rgb(${this.R}, ${this.G}, ${this.B}, ${A})`;
    }
    Hex(uppercase = true) {
        var hex = "#" + ((1 << 24) + (this.R << 16) + (this.G << 8) + this.B).toString(16).slice(1);
        return uppercase ? hex.toUpperCase() : hex;
    }
    fromHex(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            this.R = parseInt(result[1], 16);
            this.G = parseInt(result[2], 16);
            this.B = parseInt(result[3], 16);
        }
        return this;
    }
    randomize(R = null, G = null, B = null) {
        this.R = Utility.Helper.clamp(R != null ? R : (Math.random() * 255 + 1), 0, 255, 0);
        this.G = Utility.Helper.clamp(G != null ? G : (Math.random() * 255 + 1), 0, 255, 0);
        this.B = Utility.Helper.clamp(B != null ? B : (Math.random() * 255 + 1), 0, 255, 0);
        return this;
    }
}

Utility.Color = Color;