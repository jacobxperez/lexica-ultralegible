function addEvent() {
    EventTarget.prototype.addEvent = function (
        eventName,
        handler,
        boolean = false
    ) {
        return this.addEventListener(eventName, handler, boolean);
    };
}

function removeEvent() {
    EventTarget.prototype.removeEvent = function (
        eventName,
        handler,
        boolean = false
    ) {
        return this.removeEventListener(eventName, handler, boolean);
    };
}

export {addEvent, removeEvent};
