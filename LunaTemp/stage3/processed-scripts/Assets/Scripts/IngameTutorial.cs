using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class IngameTutorial : MonoBehaviour
{
    public static IngameTutorial Instance;
    [SerializeField] RectTransform tutorialRect;
    private void Awake() 
    { 
        // If there is an instance, and it's not me, delete myself.
    
        if (Instance != null && Instance != this) 
        { 
            Destroy(this); 
        } 
        else 
        { 
            Instance = this; 
        } 
    }
    // Start is called before the first frame update
    void Start()
    {
        
    }
    public void SetTutorial(bool active, [Bridge.Ref] Vector3 anchorPos)
    {
        tutorialRect.gameObject.SetActive(active);
        if (active)
        {
            tutorialRect.anchoredPosition = anchorPos;
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
