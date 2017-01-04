var Utility = Utility || {};

class HashMap {
    constructor(seed) {
        this.items = seed || {};
    }
    set(key, value) {
        this.items[key] = value;
    }
    has(key) {
        return key in this.items;
    }
    get(key) {
        return this.items[key];
    }
    remove(key) {
        delete this.items[key];
    }
    size() {
        return Object.keys(this.items).length;
    }
    getKeys() {
        return Object.keys(this.items);
    }
    getValues() {
        var values = [];
        var keys = this.getKeys();
        for (var i = 0; i < keys.length; i++) {
            values.push(this.get(keys[i]));
        }
        return values;
    }
    getKeyByValue(value) {
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                if (this.items[prop] == value) {
                    return prop;
                }
            }
        }
    }
    getItems() {
        return this.items;
    }
    copy() {
        return $.extend(true, {}, this);
    }
}

Utility.HashMap = HashMap;