var Utility = Utility || {};

class Helper {
    static clamp(value, min, max, precision = 0) {
        if (value < min) {
            return min;
        }
        else if (value > max) {
            return max;
        }
        if (precision != null) {
            value = +value.toFixed(precision);
        }
        return value;
    }
    
    static concat(delimiter, ...value) {
        return value.join(delimiter);
    }
}

Utility.Helper = Helper;