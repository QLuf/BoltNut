using System;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    [SerializeField] private AnimatedButton storeButton;
    [SerializeField] private Button storePanel;

    private void Awake()
    {
        NotificationCenter.Instance.Add(EventType.EventCount20, OnEvent20Handle);
        NotificationCenter.Instance.Add(EventType.EventCount21, OnHideButton);
        NotificationCenter.Instance.Add(EventType.EventCount25, OnEvent25Handle);

        OnHideButton();
    }
    
    private void OnDestroy()
    {
        NotificationCenter.Instance.Remove(EventType.EventCount20, OnEvent20Handle);
        NotificationCenter.Instance.Remove(EventType.EventCount21, OnHideButton);
        NotificationCenter.Instance.Remove(EventType.EventCount25, OnEvent25Handle);
    }
    
    private void OnEvent20Handle()
    {
        storeButton.gameObject.SetActive(true);
    }

    private void OnHideButton()
    {
        storeButton.gameObject.SetActive(false);
        storePanel.gameObject.SetActive(false);
    }
    
    private void OnEvent25Handle()
    {
        storeButton.gameObject.SetActive(true);
        storePanel.gameObject.SetActive(true);
    }

    public void GoToStore()
    {
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.Analytics.LogEvent("Store", 0);
    }
}
