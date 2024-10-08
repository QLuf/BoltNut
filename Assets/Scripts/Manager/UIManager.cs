using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    [SerializeField] private AnimatedButton store20Button;
    [SerializeField] private GameObject store25Object;
    [SerializeField] private AnimatedButton store25Button;
    [SerializeField] private Button storePanel;
    [SerializeField] private CanvasGroup canvasGroup;

    private void Awake()
    {
        NotificationCenter.Instance.Add(EventType.EventCount20, OnEvent20Handle);
        NotificationCenter.Instance.Add(EventType.EventCount21, OnHideButton);
        NotificationCenter.Instance.Add(EventType.EventCount25, OnEvent25Handle);

        OnHideButton();
    }

    private IEnumerator Start()
    {
        yield return new WaitForSeconds(1.6f);
        canvasGroup.alpha = 1f;
    }

    private void OnDestroy()
    {
        NotificationCenter.Instance.Remove(EventType.EventCount20, OnEvent20Handle);
        NotificationCenter.Instance.Remove(EventType.EventCount21, OnHideButton);
        NotificationCenter.Instance.Remove(EventType.EventCount25, OnEvent25Handle);
    }
    
    private void OnEvent20Handle()
    {
        store20Button.gameObject.SetActive(true);
    }

    private void OnHideButton()
    {
        store20Button.gameObject.SetActive(false);
        store25Object.gameObject.SetActive(false);
        storePanel.gameObject.SetActive(false);
    }
    
    private void OnEvent25Handle()
    {
        store25Object.gameObject.SetActive(true);
        storePanel.gameObject.SetActive(true);
    }

    public void GoToStore()
    {
        Debug.Log("Go to store!!!!");
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.Analytics.LogEvent("Store", 0);
    }
}
