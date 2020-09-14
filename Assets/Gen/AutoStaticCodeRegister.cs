namespace PuertsStaticWrap
{
    public static class AutoStaticCodeRegister
    {
        public static void Register(Puerts.JsEnv jsEnv)
        {
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Type), System_Type_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(TestClass), TestClass_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.JsBehaviour), PuertsTest_JsBehaviour_Wrap.GetRegisterInfo);
            
        }
    }
}