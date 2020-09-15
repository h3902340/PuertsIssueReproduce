"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.ClassA = void 0;
class ClassA {
    constructor(bindTo) {
        this.bindTo = bindTo;
        this.bindTo.JsAwake = () => this.Awake();
        this.bindTo.JsStart = () => this.Start();
    }
    Awake() {
        ClassA.Instance = this;
        this.MyName = "Puer";
    }
    Start() {
    }
}
exports.ClassA = ClassA;
ClassA.Instance = null;
function init(bindTo) {
    new ClassA(bindTo);
}
exports.init = init;
