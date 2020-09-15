using UnityEngine;
using Puerts;
using System;

namespace PuertsTest
{
    public delegate void ModuleInit(JsBehaviour monoBehaviour);

    //只是演示纯用js实现MonoBehaviour逻辑的可能，
    //但从性能角度这并不是最佳实践，会导致过多的跨语言调用
    public class JsBehaviour : MonoBehaviour
    {
        public string ModuleName;//可配置加载的js模块

        public Action JsAwake;
        public Action JsStart;
        public Action JsUpdate;
        public Action JsOnDestroy;

        public static JsEnv jsEnv;

        private void Awake()
        {
            if (jsEnv == null) jsEnv = new JsEnv(new CustomLoader());

            var init = jsEnv.Eval<ModuleInit>("const m = require('" + ModuleName + "'); m.init;");

            init?.Invoke(this);
            
            JsAwake?.Invoke();
        }

        private void Start()
        {
            JsStart?.Invoke();
        }

        private void Update()
        {
            JsUpdate?.Invoke();
        }

        private void OnDestroy()
        {
            JsOnDestroy?.Invoke();
            JsStart = null;
            JsUpdate = null;
            JsOnDestroy = null;
        }
    }
}