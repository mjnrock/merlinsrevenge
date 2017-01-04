var Utility = Utility || {};

class UUID {
    constructor() {
        this.uuid = UUID.generateUUID();
    }
    reseed() {
        this.uuid = UUID.generateUUID();
    }
    set(uuid) {
        this.uuid = uuid.toUpperCase();
    }
    get() {
        return this.uuid;
    }
    static generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.floor((Math.random() * 17))) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid.toUpperCase();
    }
}

Utility.UUID = UUID;