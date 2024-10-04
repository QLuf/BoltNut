using System;
using System.Collections.Generic;
using UnityEngine;

public class CameraDistanceConfig : MonoBehaviour
{
    public Camera mainCamera;
    public List<ConfigCameraSize> configCameraSizes;

    private void Awake()
    {
        ResizeCamera();
    }

    public void SaveData()
    {
        var ratio = Screen.height / Screen.width;
        configCameraSizes.Add(new ConfigCameraSize()
        {
            ratio = ratio,
            size = mainCamera.orthographicSize
        });
    }

    public void ResizeCamera()
    {
        var ratio = Screen.height / Screen.width;
        foreach (var item in configCameraSizes)
        {
            if (item.ratio == ratio)
            {
                mainCamera.orthographicSize = item.size;
                return;
            }
        }
    }

}

[Serializable]
public class ConfigCameraSize
{
    public float ratio;
    public float size;
}