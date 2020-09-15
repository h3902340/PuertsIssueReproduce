using System;
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

    private void Start()
    {
        GetMessage();
    }

    public void GetMessage()
    {
        JsBehaviour.jsEnv.Eval($"require('{module}')");
    }
}
