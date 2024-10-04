using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIFollowObject : MonoBehaviour
{
    public GameObject target;
    private void Update()
    {
        transform.position = Camera.main.WorldToScreenPoint(target.transform.position);
    }
}
