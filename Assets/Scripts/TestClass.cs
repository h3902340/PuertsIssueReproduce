using PuertsTest;
using UnityEngine;

public class TestClass : MonoBehaviour
{
    public static TestClass Instance;
    public string module;
    private void Awake()
    {
        Instance = this;
    }
    
    public void GetMessage()
    {
        JsBehaviour.jsEnv.Eval($"require('{module}')");
    }
}
