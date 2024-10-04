using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BoardHole : MonoBehaviour
{
    [SerializeField] GameObject lockObj;
    [SerializeField] GameObject rewardObj;

    public bool locked;
    public bool isReward;

    private void Start()
    {
        if (locked)
        {
            lockObj.SetActive(true);
        }
        else
        {
            lockObj.SetActive(false);
        }

        /*if (RemoteConfig.Instance.AllowRewardHole)
        {
            if (isReward)
            {
                rewardObj.SetActive(true);
            }
            else
            {
                rewardObj.SetActive(false);
            }
        }
        else
        {
            gameObject.SetActive(false);
        }*/
    }

    public void Unlock()
    {
        locked = false;
        lockObj.SetActive(false);
    }

    public void Reward()
    {
        isReward = false;
        rewardObj.SetActive(false);
    }
}
