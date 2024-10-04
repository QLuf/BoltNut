using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;

public class AutoConfigBar : MonoBehaviour
{
    HingeJoint2D hingleJoint2D;
    Rigidbody2D rigid2D;
    PolygonCollider2D polygonCollider;

    private void OnValidate()
    {
#if UNITY_EDITOR
        Debug.Log("auto config bar: " + gameObject + " va " + transform.parent);

        hingleJoint2D = GetComponent<HingeJoint2D>();
        rigid2D = GetComponent<Rigidbody2D>();

        rigid2D.bodyType = RigidbodyType2D.Static;
        if (hingleJoint2D == null)
        {
            hingleJoint2D = gameObject.AddComponent<HingeJoint2D>();
        }
        hingleJoint2D.autoConfigureConnectedAnchor = false;
        hingleJoint2D.enabled = false;

        polygonCollider = GetComponent<PolygonCollider2D>();

        if (polygonCollider != null)
        {
            polygonCollider.pathCount = 1;
            SpriteRenderer spriteRenderer = transform.GetChild(0).GetComponent<SpriteRenderer>();
            if (spriteRenderer != null && spriteRenderer.drawMode == SpriteDrawMode.Sliced)
            {
                string lastChildName = transform.GetChild(transform.childCount - 1).name;
                Debug.Log(lastChildName + " va " + lastChildName.Contains("Hole"));

                string spriteName = spriteRenderer.sprite.name;
                Debug.Log(spriteName);
                int layer = int.Parse(spriteName);

                SortingGroup sortingGroup = GetComponent<SortingGroup>();
                sortingGroup.sortingOrder = layer;

                gameObject.layer = LayerMask.NameToLayer("Bar" + spriteName);
            }

            for (int i = 0; i < transform.childCount; i++)
            {
                string tempName = transform.GetChild(i).name;
                if (tempName.Contains("Hole"))
                {
                    transform.GetChild(i).localScale = Vector3.one * 0.9f;
                }
            }
        }
#endif
    }

    private void Reset()
    {
#if UNITY_EDITOR
        Debug.Log("auto config bar: " + gameObject + " va " + transform.parent);

        hingleJoint2D = GetComponent<HingeJoint2D>();
        rigid2D = GetComponent<Rigidbody2D>();

        rigid2D.bodyType = RigidbodyType2D.Static;
        if (hingleJoint2D == null)
        {
            hingleJoint2D = gameObject.AddComponent<HingeJoint2D>();
        }
        hingleJoint2D.autoConfigureConnectedAnchor = false;
        hingleJoint2D.enabled = false;

        polygonCollider = GetComponent<PolygonCollider2D>();

        if (polygonCollider != null)
        {
            polygonCollider.pathCount = 1;
            SpriteRenderer spriteRenderer = transform.GetChild(0).GetComponent<SpriteRenderer>();
            if (spriteRenderer != null && spriteRenderer.drawMode == SpriteDrawMode.Sliced)
            {
                string lastChildName = transform.GetChild(transform.childCount - 1).name;
                Debug.Log(lastChildName + " va " + lastChildName.Contains("Hole"));
            }

            for (int i = 0; i < transform.childCount; i++)
            {
                string tempName = transform.GetChild(i).name;
                if (tempName.Contains("Hole"))
                {
                    transform.GetChild(i).localScale = Vector3.one * 0.9f;
                }
            }
        }
#endif
    }
}
