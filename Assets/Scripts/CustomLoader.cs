using System.Collections;
using System.Collections.Generic;
using System.IO;
using Puerts;
using UnityEngine;

public class CustomLoader : ILoader
{
    public bool FileExists(string filepath)
    {
        var textAsset = Resources.Load<TextAsset>(filepath);
        var parts = filepath.Split('/');
        filepath = parts[parts.Length - 1];
        var found = Downloader.JsDictionary.ContainsKey(filepath);
        Debug.Log($"Try to load {filepath} by Addressbles, result: {found}");
        if (found) return true;
        Debug.Log($"Try to load {filepath} by Resources, result: {textAsset != null}");
        if (textAsset == null) return false;
        if (!Downloader.JsDictionary.ContainsKey(filepath))
        {
            Downloader.JsDictionary.Add(filepath,textAsset.text);
        }
        return true;
    }

    public string ReadFile(string filepath, out string debugpath)
    {
        string[] parts = filepath.Split('/');
        filepath = parts[parts.Length - 1];
        debugpath = filepath;
        return Downloader.JsDictionary[filepath];
    }
}
