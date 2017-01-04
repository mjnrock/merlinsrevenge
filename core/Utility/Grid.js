var Utility = Utility || {};

class Grid {
    constructor(x, y, filler = null) {
        this.grid = new Array(y);
        this.all_nodes = new Utility.List();
        for (var j = 0; j < y; j++) {
            this.grid[j] = new Utility.List();
            for (var i = 0; i < x; i++) {
                this.grid[j].add(filler);
                this.all_nodes.add([i, j]);
            }
        }
        this.x = x;
        this.y = y;
    }
    size() {
        return this.x * this.y;
    }
    rows() {
        return this.y;
    }
    columns() {
        return this.x;
    }
    allNodes() {
        return this.all_nodes;
    }
    get(x, y) {
        if (!!this.grid[y]) {
            return this.grid[y].get(x);
        }
        else {
            return null;
        }
    }
    set(x, y, item) {
        if (!!this.grid[y]) {
            this.grid[y].set(x, item);
            return true;
        }
        return false;
    }
}

Utility.Grid = Grid;