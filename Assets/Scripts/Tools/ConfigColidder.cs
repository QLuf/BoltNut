using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum eTypeConfigPolygonCollider
{
    Add,
    Ratio
}

public class ConfigColidder : MonoBehaviour
{
    [SerializeField] PolygonCollider2D polygonCollider;
    [SerializeField] eTypeConfigPolygonCollider eTypeConfigPolygonCollider;
    [SerializeField] Vector2 diff;
    [SerializeField] float ratio;
    [SerializeField] int index;

    private void OnValidate()
    {
        if (polygonCollider != null)
        {
            Vector2[] vector2s = polygonCollider.GetPath(index);
            if (eTypeConfigPolygonCollider == eTypeConfigPolygonCollider.Add)
            {
                for (int i = 0; i < vector2s.Length; i++)
                {
                    vector2s[i] += diff;
                }
            }
            else
            {
                for (int i = 0; i < vector2s.Length; i++)
                {
                    vector2s[i] *= ratio;
                }
            }

            polygonCollider.SetPath(index, vector2s);
        }
    }
}
