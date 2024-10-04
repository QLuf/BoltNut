
using UnityEngine;
using UnityEngine.SceneManagement;


public class LoadEndcard : MonoBehaviour
{
    public static LoadEndcard ins;
    private void Awake()
    {
        ins = this;
    }
    public void loadscene77()
    {
        SceneManager.LoadScene("Lv77");
        Luna.Unity.Analytics.LogEvent("Reset level 1", 0);
    }
}
