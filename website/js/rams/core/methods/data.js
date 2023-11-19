function setDataAttr() {
    Element.prototype.setDataAttr = function (dataName, value = '') {
        return this.setAttribute(`data-${dataName}`, value);
    };
}

function removeDataAttr() {
    Element.prototype.removeDataAttr = function (dataName) {
        return this.removeAttribute(`data-${dataName}`);
    };
}

function getDataAttr() {
    Element.prototype.getDataAttr = function (dataName, value) {
        if (value) {
            return this.getAttribute(`data-${dataName}="${value}"`);
        } else {
            return this.getAttribute(`data-${dataName}`);
        }
    };
}

function hasDataAttr() {
    Element.prototype.hasDataAttr = function (dataName, value) {
        if (value) {
            return this.hasAttribute(`data-${dataName}="${value}"`);
        } else {
            return this.hasAttribute(`data-${dataName}`);
        }
    };
}

function closestDataAttr() {
    Element.prototype.closestDataAttr = function (dataName, value) {
        if (value) {
            return this.closest(`[data-${dataName}="${value}"]`);
        } else {
            return this.closest(`[data-${dataName}]`);
        }
    };
}

function matchDataAttr() {
    Element.prototype.matchDataAttr = function (dataName, value) {
        if (value) {
            return this.matches(`[data-${dataName}="${value}"]`);
        } else {
            return this.matches(`[data-${dataName}]`);
        }
    };
}

function toggleDataAttr() {
    Element.prototype.toggleDataAttr = function (dataName, value) {
        return this.hasDataAttr(dataName)
            ? this.removeDataAttr(dataName)
            : this.setDataAttr(dataName, value);
    };
}

export {
    setDataAttr,
    removeDataAttr,
    getDataAttr,
    hasDataAttr,
    closestDataAttr,
    matchDataAttr,
    toggleDataAttr,
};
