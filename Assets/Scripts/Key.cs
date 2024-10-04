using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class Key : MonoBehaviour
{
    [SerializeField] Bolt bolt;
    [SerializeField] BoardHole boardHole;
    public AudioSource getItem;
    bool actived;

    public void Active()
    {
        if (!actived)
        {
            actived = true;
            //SoundManager.instance.PlaySound("GetItem");
            getItem.Play();
            if (bolt != null)
            {
                transform.DOMove(bolt.transform.position, 0.5f).SetEase(Ease.Linear).OnComplete(() =>
                {
                    bolt.Unlock();
                    gameObject.Recycle();
                });
            }
            else
            {
                transform.DOMove(boardHole.transform.position, 0.5f).SetEase(Ease.Linear).OnComplete(() =>
                {
                    boardHole.Unlock();
                    gameObject.Recycle();
                });
            }
        }
    }
}
