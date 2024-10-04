using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using TMPro;
using UnityEngine.Serialization;

public class StartandScore : MonoBehaviour
{
    public static StartandScore Instance;
    [Header("Responsive")] 
    public GameObject Portrait;
    public GameObject CanvasPortrait, CanvasLandscape;
    public GameObject hintPortrait, hintLandscape;
    public TextMeshProUGUI title, titleLandscape;
    public RectTransform newtitle, newtitleLandscape;
    public Camera cam;
    
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
    public void HideTitle()
    {
        title.DOFade(0, 0.5f);
        titleLandscape.DOFade(0, 0.5f);
        StartCoroutine(ShownewTitle());
        StartCoroutine(Iq());
    }

    IEnumerator ShownewTitle()
    {
        newtitle.DOLocalMoveY(-950f, 0.5f).SetEase(Ease.Flash);
        newtitleLandscape.DOLocalMoveY(-2200f, 0.5f).SetEase(Ease.Flash);
        yield return new WaitForSeconds(0f);
    }

    public int score = 70, score1 = 2; 
    public TextMeshProUGUI scoreText, scoreTextLandscape;

    IEnumerator Iq()
    {
        while (score1 != score)
        {
            score1 += 2;
            if (scoreText != null)      
            {
                scoreText.text = score1.ToString();
                scoreTextLandscape.text = score1.ToString();
            }
            yield return new WaitForSeconds(0.0175f); 
        }
    }
    public GameObject prefabToInstantiate;
    public RectTransform Score, ScoreLandscape;
    public Canvas canvas;

    public void SinhPrefab()
    {
        // GameObject newPrefabInstance = Instantiate(prefabToInstantiate, canvas.transform);
        // RectTransform rectTransform = newPrefabInstance.GetComponent<RectTransform>();
        // rectTransform.localPosition = Vector3.zero;
        // rectTransform.localRotation = Quaternion.identity;
        StartCoroutine(ScaleScore());
        StartCoroutine(UpdateScore());
    }

    IEnumerator ScaleScore()
    {
        yield return new WaitForSeconds(0.5f);
        Score.DOScale(1.5f, 0.2f).SetEase(Ease.Flash).OnComplete(() 
            =>Score.DOScale(1f, 0.1f).SetEase(Ease.Flash)); 
        ScoreLandscape.DOScale(1.5f, 0.2f).SetEase(Ease.Flash).OnComplete(() 
            =>ScoreLandscape.DOScale(1f, 0.1f).SetEase(Ease.Flash)); 
        
    }

    IEnumerator UpdateScore()
    {
        yield return new WaitForSeconds(0.5f);
        score1 += 5;
        if (scoreText != null)      
        {
            scoreText.text = score1.ToString();
            scoreTextLandscape.text = score1.ToString();
        }
    }

    private void Update()
    {
        if (Screen.height > Screen.width)
        {
            //Portrait.transform.DOMoveX(0, 0);
            cam.transform.DOMoveX(0, 0);
            CanvasPortrait.SetActive(true);
            CanvasLandscape.SetActive(false);
            hintPortrait.SetActive(true);
            hintLandscape.SetActive(false);
        }
        else
        {
            // Portrait.transform.DOMoveX(-7.5f, 0);
            cam.transform.DOMoveX(7.5f, 0);
            CanvasPortrait.SetActive(false);
            CanvasLandscape.SetActive(true);
            hintPortrait.SetActive(false);
            hintLandscape.SetActive(true);
        }
    }
}
