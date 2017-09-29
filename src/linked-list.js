const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = new Node();
        this._head = new Node();
        this._head.next = this._tail;
        this._tail.prev = this._head;


    }

    append(data) {
        var last = this._tail.prev;
        var x = new Node();
        x.data = data;
        x.next = this._tail;
        x.prev = last;
        this._tail.prev = x;
        last.next = x;
        this.length++;

        return this;

    }

    head() {
        return this._head.next.data;
    }

    tail() {
        return this._tail.prev.data;
    }

    at(index) {
        var current = this._head.next;
        var i = 0;

        while (i < this.length) {
            if (i == index) {
                return current.data;
            } else {
                current = current.next;
            }
            i++;
        }
        return null;
    }

    insertAt(index, data) {
        var current = this._head.next;
        var i = 0;

        if (index == 0 || index == this.length) {
            return false;
        }

        while (i < this.length) {
            if (i == index){
                var last = current.prev;
                var x = new Node();
                x.data = data;
                last.next = x;
                x.next = current;
                x.prev = last;
                current.prev = x;
                this.length++;
            } else {
                current = current.next;
            }
            i++;
        }
        return this;
    }

    isEmpty() {
        if (this.length) {
            return false;
        } else {
            return true;
        }
    }

    clear() {
        this.length = 0;
        this._head.next = new Node();
        this._tail.prev = new Node();
        return this;
    }

    deleteAt(index) {
        var current = this._head.next;
        var i = 0;

        while (i < this.length) {
            if (i == index) {
                if (i == 0) {
                    this.clear();
                } else {
                    current.next.prev = current.prev;
                    current.prev.next = current.next;
                }
            } else {
                current = current.next;
            }
            i++;
        }
        return this;
    }

    reverse() {
        var head = this._head.next, x;
        var i = 0;
        while (i < this.length) {
            if (i == 0) {
                x = null;
            } else {
                x = head.prev;
            }
            head.prev = head.next;
            head.next = x;
            if (i == 0) {
                this._tail.prev = this._head.next;
            }
            if (i != this.length - 1) {
                head = head.prev;
            } else {
                this._head.next = head;
            }
            i++;
        }
        return this;
    }

    indexOf(data) {
        var current = this._head.next;
        var i = 0;

        while (i < this.length) {
            if (current.data == data){
                return i;
            } else {
                current = current.next;
            }
            i++;
        }

        return -1;
    }
}



module.exports = LinkedList;
