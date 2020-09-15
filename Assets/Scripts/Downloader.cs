using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.SceneManagement;
using UnityEngine.Serialization;

public class Downloader : MonoBehaviour
{
    public static Dictionary<string, string> JsDictionary;
    public AssetLabelReference javaScriptLabelReference;
    // Start is called before the first frame update
    private void Start()
    {
        JsDictionary = new Dictionary<string, string>();
        Addressables.LoadAssetsAsync<TextAsset>(javaScriptLabelReference, js =>
        {
            JsDictionary.Add(js.name,js.text);
        }).Completed += handle =>
        {
            Addressables.LoadSceneAsync("SampleScene");
        };
    }
}
