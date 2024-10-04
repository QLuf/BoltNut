using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraResize : Singleton<CameraResize>
{
    private void Start()
    {
        ResizeCamera(Camera.main.orthographicSize);
    }

    void ResizeCamera(float defaultSize)
    {
        float height = (float)Screen.height;
        float width = (float)Screen.width;

        float ratio = width / height;
        float ratioDefault = 720.0f / 1280.0f;
        if (ratio < ratioDefault)
        {
            Camera.main.orthographicSize = defaultSize / (ratio / ratioDefault);
        }
    }
}
