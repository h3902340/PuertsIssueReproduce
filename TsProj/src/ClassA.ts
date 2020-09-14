import {PuertsTest, TestClass} from "csharp";

export class ClassA{
    bindTo:PuertsTest.JsBehaviour;
    public static Instance:ClassA = null;
    public MyName:string;
    constructor(bindTo:PuertsTest.JsBehaviour) {
        this.bindTo = bindTo;
        this.bindTo.JsStart = () => this.Start();
    }
    
    private Start():void{
        ClassA.Instance = this;
        this.MyName = "Puer";
        TestClass.Instance.GetMessage();
    }
}

export function init(bindTo:PuertsTest.JsBehaviour){
    new ClassA(bindTo);
}