using UnityEditor;
using UnityEngine;

[CustomEditor(typeof(CameraDistanceConfig))]
public class CameraDistanceConfigEditor : Editor
{
    public override void OnInspectorGUI()
    {
        DrawDefaultInspector();

        CameraDistanceConfig script = (CameraDistanceConfig)target;

        if (GUILayout.Button("Save Data Camera"))
        {
            script.SaveData();
        }
    }
}