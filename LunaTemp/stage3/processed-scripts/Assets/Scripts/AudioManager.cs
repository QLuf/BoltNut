using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class AudioManager : MonoBehaviour
{
    public static AudioManager instance;

    public AudioSource win;
    public AudioSource contifie;
    public AudioSource broken;
    public GameObject winui;
    private void Awake()
    {
        if (instance == null)
        {
            instance = this;
            /*DontDestroyOnLoad(gameObject);*/
        }
        else
        {
            /*Destroy(gameObject);*/
        }
    }

    // Rest of your AudioManager code...

    public void PlayWinSound()
    {
        win.Play();
    }

    public void PlayContifieSound()
    {
        contifie.Play();
    }

    public void winUI()
    {
        winui.SetActive(true);
    }

    public void PlayWoodDestroySound()
    {
        broken.Play();
    }
}
