using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BarHole : MonoBehaviour
{
    GameObject graphic;
    SpriteMask spriteMask;

    Bar bar;

    private void OnValidate()
    {
#if UNITY_EDITOR
        graphic = transform.GetChild(0).gameObject;
#endif
    }

    private void Start()
    {
        bar = transform.parent.GetComponent<Bar>();
    }

    public void ActiveGraphic(bool active)
    {
        if (graphic == null)
        {
            graphic = transform.GetChild(0).gameObject;
        }

        if (spriteMask == null)
        {
            spriteMask = GetComponent<SpriteMask>();
            if (spriteMask == null)
            {
                spriteMask = graphic.GetComponent<SpriteMask>();
            }
        }
        spriteMask.enabled = active;
        graphic.SetActive(active);
    }

    public bool Match(Bar bar)
    {
        return this.bar == bar;
    }
}
