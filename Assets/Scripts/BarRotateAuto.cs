using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BarRotateAuto : MonoBehaviour
{
    [SerializeField] Transform endTF;

    private void OnValidate()
    {
        Debug.Log("keke: " + gameObject);

        if (endTF != null)
        {
            Vector3 diff = endTF.position - transform.position;
            float angle = Mathf.Atan2(diff.y, diff.x) * Mathf.Rad2Deg;

            Debug.Log(angle);
            transform.localEulerAngles = new Vector3(0, 0, angle);

            Transform tempTF = transform.GetChild(transform.childCount - 1);
            tempTF.position = (endTF.position + transform.position) / 2.0f;
            tempTF.localEulerAngles = Vector3.zero;

            float dist = Vector3.Distance(endTF.position, transform.position);
            tempTF.GetChild(1).localPosition = new Vector3(-dist / 2.0f, 0, 0);
            tempTF.GetChild(2).localPosition = new Vector3(dist / 2.0f, 0, 0);

            tempTF.parent = transform.parent;
            tempTF.SetSiblingIndex(transform.GetSiblingIndex());
            transform.localEulerAngles = Vector3.zero;
        }
    }
}
