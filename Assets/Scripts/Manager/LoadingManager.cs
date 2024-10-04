using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class LoadingManager : MonoBehaviour
{
    public Image loadingImg;
    public GameObject vfx;
    public GameObject loadingObj;
   

    public void Start()
    {
#if UNITY_EDITOR
        UnityEngine.Debug.unityLogger.logEnabled = true;
#else
        UnityEngine.Debug.unityLogger.logEnabled = false;
#endif
        Application.targetFrameRate = 60;
        Screen.sleepTimeout = SleepTimeout.NeverSleep;

        loadingObj.SetActive(false);
        vfx.SetActive(true);

        // Config Init
        UserConfig.Instance.Init();

        // Ui Loading
        LoadData();

        // IAP initialize
        RegisterPurchaseComplete();
        /*IAPManager.Instance.Initialize(new ProductDefinition(IAPManager.kRemoveAds, ProductType.NonConsumable));*/
    }

    void RegisterPurchaseComplete()
    {
        /*IAPManager.Instance.OnPurchaseCompleted += (product) =>
        {
            if (product.definition.id == IAPManager.kRemoveAds)
            {
                UserConfig.Instance.HasAds = false;
                CGTeamBridge.instance.HideBanner();
                EventManager.EmitEvent(EventVariables.BuyRemoveAds);
            }
        };*/
    }

    IEnumerator LoadSceneStart()
    {
        yield return new WaitForSeconds(6f);
        if (UserConfig.Instance.HasTurnOffInternet())
        {
            vfx.SetActive(false);
        }
        else
        {
            loadingObj.SetActive(true);
            vfx.SetActive(false);

            /*if (UserConfig.Instance.isNewUser)
            {
                CGTeamBridge.instance.SetPropertyLevel("1");
                CGTeamBridge.instance.SetPropertyAppVersion();
            }
            /*CGTeamBridge.instance.LogEvent("open_app");#1#

            UserConfig.Instance.isNewDay = UserConfig.Instance.CanShowDailyBonus();

            RemoteConfig.Instance.LoadLevelData();
            StartCoroutine(LoadAsyncGame(1));*/
        }
    }

    void LoadData()
    {
        // Ui Loading
        StartCoroutine(LoadSceneStart());
    }

    IEnumerator LoadAsyncGame(int scene)
    {
        AsyncOperation operation = SceneManager.LoadSceneAsync(scene);
        operation.allowSceneActivation = false;
        while (!operation.isDone)
        {
            float progress = operation.progress;

            if (progress == 0.9f)
            {
                loadingImg.DOFillAmount(1.0f, 2.0f).SetEase(Ease.Linear).OnComplete(() =>
                {
                    loadingImg.fillAmount = 1.0f;
                    operation.allowSceneActivation = true;
                });
            }

            yield return null;
        }
    }

    public void PressedRetryBtn()
    {
        vfx.SetActive(true);
        LoadData();
    }
}
