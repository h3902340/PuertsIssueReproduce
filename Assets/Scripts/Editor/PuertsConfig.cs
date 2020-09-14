using System;
using System.Collections.Generic;
using Puerts;
using PuertsTest;

[Configure]
public class PuertsConfig
{
    [Binding]
    private static IEnumerable<Type> Bindings => new List<Type>
    {
        //System
        typeof(Type),
        
        //Custom
        typeof(TestClass),
        typeof(JsBehaviour)
    };
}
