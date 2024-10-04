using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class store : MonoBehaviour
{
    // Start is called before the first frame update
    public void click()
    {
       Luna.Unity.LifeCycle.GameEnded();
      Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.Analytics.LogEvent("Store", 0);
        LevelController.Instance.store.SetActive(true);
    }
}