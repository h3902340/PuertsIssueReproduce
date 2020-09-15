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
        string filepathModified = parts[parts.Length - 1];
        var found = Downloader.JsDictionary.ContainsKey(filepathModified);
        Debug.Log($"Original name: {filepath}, Try to load {filepathModified} by Addressbles, result: {found}");
        if (found) return true;
        Debug.Log($"Original name: {filepath}, Try to load {filepathModified} by Resources, result: {textAsset != null}");
        if (textAsset == null) return false;
        if (!Downloader.JsDictionary.ContainsKey(filepathModified))
        {
            Downloader.JsDictionary.Add(filepathModified,textAsset.text);
        }
        return true;
    }

    public string ReadFile(string filepath, out string debugpath)
    {
        debugpath = filepath;
        string[] parts = filepath.Split('/');
        filepath = parts[parts.Length - 1];
        return Downloader.JsDictionary[filepath];
    }
}
