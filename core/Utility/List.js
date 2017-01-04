var Utility = Utility || {};

class List {
    constructor() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
    pop() {
        return this.items.pop();
    }
    add(value) {
        this.items.push(value);
        return this;
    }
    set(index, value) {
        this.items[index] = value;
        return this;
    }
    get(index) {
        return this.items[index];
    }
    remove(index, realignList = true) {
        if (realignList) {
            var temp = new Array(this.items.length - 1);
            for (var i = 0; i < this.items.length; i++) {
                i != index && temp.push(this.items[i]);
            }
            this.items = temp;
        }
        else {
            delete this.items[index];
        }
        return this;
    }
    contains(value) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].toString() == value.toString()) {
                return true;
            }
        }
        return false;
    }
    find(value) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i] == value) {
                return i;
            }
        }
        return -1;
    }
    stringifiedFind(value) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].toString() == value.toString()) {
                return i;
            }
        }
        return -1;
    }
    random() {
        var index = Math.floor(Math.random() * this.size());
        return this.get(index);
    }
    toArray() {
        var array = [];
        for (var i = 0; i < this.items.length; i++) {
            array.push(this.items[i]);
        }
        return array;
    }
    //Hasn't been validated for PbR / PbV protection with Objects
    /*public swap(index1: number, index2: number): void {
        var temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }*/
    shuffle() {
        var counter = this.items.length, temp, index;
        while (counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = this.items[counter];
            this.items[counter] = this.items[index];
            this.items[index] = temp;
        }
    }
}

Utility.List = List;