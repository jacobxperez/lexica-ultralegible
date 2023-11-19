function selector() {
    Node.prototype.selector = function (selector) {
        return this.querySelector(selector);
    };
}

function selectorAll() {
    Node.prototype.selectorAll = function (selector) {
        return this.querySelectorAll(selector);
    };
}

export {selector, selectorAll};
