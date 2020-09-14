"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.ClassA = void 0;
const csharp_1 = require("csharp");
class ClassA {
    constructor(bindTo) {
        this.bindTo = bindTo;
        this.bindTo.JsStart = () => this.Start();
    }
    Start() {
        ClassA.Instance = this;
        this.MyName = "Puer";
        csharp_1.TestClass.Instance.GetMessage();
    }
}
exports.ClassA = ClassA;
ClassA.Instance = null;
function init(bindTo) {
    new ClassA(bindTo);
}
exports.init = init;
