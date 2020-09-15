import {PuertsTest} from "csharp";

export class ClassA{
    bindTo:PuertsTest.JsBehaviour;
    public static Instance:ClassA = null;
    public MyName:string;
    constructor(bindTo:PuertsTest.JsBehaviour) {
        this.bindTo = bindTo;
        this.bindTo.JsAwake = () => this.Awake();
        this.bindTo.JsStart = () => this.Start();
    }
    
    private Awake():void{
        ClassA.Instance = this;
        this.MyName = "Puer";
    }
    
    private Start():void{
        
    }
}

export function init(bindTo:PuertsTest.JsBehaviour){
    new ClassA(bindTo);
}