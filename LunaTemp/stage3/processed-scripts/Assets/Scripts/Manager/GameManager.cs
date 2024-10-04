using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.SceneManagement;

public class GameManager : Singleton<GameManager>
{
    public const float RADIUS_CHECK_BAR = 0.34f;
    public const int MAX_LEVEL = 25;
    [HideInInspector]
    public bool canControl = true;
    [HideInInspector]
    public GameObject currentLevel;

    [Header("Scriptable Object")]
    /*public ScriptableObjectLevel dataLevel;*/

    [Header("Layer Mask")]
    public LayerMask layerBolt;
    public LayerMask layerBar;
    public LayerMask layerBoardHole;
    public LayerMask layerBarHole;
    
    [HideInInspector]
    public float startTime;
    [HideInInspector] public int count = 0;

   
    private void Start()
    {
        /*SoundManager.InitInstance(transform);*/
        canControl = true;
    }

    /*public GameObject LoadLevel()
    {
        canControl = true;
        startTime = Time.time;

        EventManager.EmitEvent(EventVariables.LoadLevel);
        CGTeamBridge.instance.LogLevelStartWithParameter(UserConfig.Instance.CurLevel);
        int prefab = RemoteConfig.Instance.levelConfig.levels[UserConfig.Instance.CurLevel - 1].prefab % MAX_LEVEL;

        if (prefab == 0)
        {
            prefab = MAX_LEVEL;
        }
        RecycleLevel();

        string assetPath = "Levels/" + prefab;
        currentLevel = InstantiatePrefab(assetPath);
        return currentLevel;
    }*/

    public void EndGame(bool win, float delay = 1.5f)
    {
        
        if (win)
        {
            AudioManager.instance.PlayContifieSound();
            Invoke(nameof(OnWin), delay);
        }
        else
        {
            //SoundManager.instance.PlaySound("Lose");
        }
    }
    void OnWin()
    {
        AudioManager.instance.PlayWinSound();
        Luna.Unity.LifeCycle.GameEnded();
         Luna.Unity.Playable.InstallFullGame();
         Luna.Unity.Analytics.LogEvent("Store", 0);
        LevelController.Instance.store.SetActive(true);
    }
    private GameObject LoadAsset(string assetName)
    {
        GameObject gameObject = null;
        gameObject = Resources.Load<GameObject>(assetName);

        if (gameObject != null)
        {
            return gameObject;
        }
        return null;
    }

    public GameObject InstantiatePrefab(string assetName)
    {
        if (string.IsNullOrEmpty(assetName))
        {
            return null;
        }
        GameObject gameObject = LoadAsset(assetName);
        if (gameObject != null)
        {
            GameObject gameObject2 = gameObject.Spawn();
            return gameObject2;
        }
        return gameObject;
    }
}

[Serializable]
public class RopeMaterial
{
    public Material[] materials;
}
