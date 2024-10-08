using DG.Tweening;
using System.Collections;
using UnityEngine;


public class Bolt : MonoBehaviour
{
    [SerializeField] public bool isFallingScrew = true;
    public bool screwBoard = false;

    public GameObject hand1, hand1portrait, hand2, handlandscape, tutorial2;
    //[SerializeField] Transform graphicTF;
    //[SerializeField] Transform meshTF;
    //[SerializeField] GameObject lockObj;
    public SpriteRenderer oldspr;
    public SpriteRenderer newspr;
    public bool isScrewed = false;


    public bool locked;

    Collider2D col2D;
    Rigidbody2D rigid2D;
    MeshRenderer meshRenderer;
    private bool moveto = false;

    private void OnValidate()
    {
        // if (locked)
        // {
        //     lockObj.SetActive(true);
        // }
        // else
        // {
        //     lockObj.SetActive(false);
        // }
    }

    private void Start()
    {
        // if (locked)
        // {
        //     lockObj.SetActive(true);
        // }
        // else
        // {
        //     lockObj.SetActive(false);
        // }

        //anim.AnimationState.SetAnimation(0, "bolt_screw_idle2", true);
        col2D = GetComponent<Collider2D>();
        rigid2D = GetComponent<Rigidbody2D>();
        //meshRenderer = anim.gameObject.GetComponent<MeshRenderer>();
    }


    public void Screw()
    {
        isScrewed = true;
        Vibration.Vibrate(50);
        hand1.SetActive(false);
        if (!this.isFallingScrew)
        {
            hand2.SetActive(true);
        }
        //meshRenderer.sortingOrder = 1;
        oldspr.enabled = false;
        newspr.enabled = true;
        newspr.transform.localScale *= 2;
        GameManager.Instance.CountUpScrew();
        /*anim.AnimationState.SetAnimation(0, "bolt_screw_out", false);
        anim.AnimationState.AddAnimation(0, "bolt_screw_idle", true, 0);*/
        // graphicTF.DOLocalMove(new Vector3(0, 1, -2), 0.25f).SetEase(Ease.Linear);
        // graphicTF.DOLocalRotate(new Vector3(0, 90, -50), 0.25f).SetEase(Ease.Linear);
        // meshTF.DOLocalRotate(new Vector3(0, 359, 0), 0.25f, RotateMode.FastBeyond360).SetEase(Ease.Linear).OnComplete(() =>
        // {
        //     hand1.SetActive(false);
        //     hand1portrait.SetActive(false);
        //     hand2.SetActive(true);
        //     handlandscape.SetActive(true);
        //     meshTF.localEulerAngles = Vector3.zero;
        // });
    }

    public void UnScrew()
    {
        isScrewed = false;
        Vibration.Vibrate(50);
        //meshRenderer.sortingOrder = 0;
        hand2.SetActive(false);
        tutorial2.SetActive(false);
        oldspr.enabled = true;
        newspr.enabled = false;
        /*anim.AnimationState.SetAnimation(0, "bolt_screw_in", false);
        anim.AnimationState.AddAnimation(0, "bolt_screw_idle2", true, 0);*/
        // graphicTF.DOLocalMove(Vector3.zero, 0.25f).SetEase(Ease.Linear);
        // graphicTF.DOLocalRotate(new Vector3(0, 90, -90), 0.25f).SetEase(Ease.Linear);
        // meshTF.DOLocalRotate(new Vector3(0, -359, 0), 0.25f, RotateMode.FastBeyond360).SetEase(Ease.Linear).OnComplete(() =>
        // {
        //     hand2.SetActive(false);
        //     handlandscape.SetActive(false);
        //     hand1.SetActive(true);
        //     hand1portrait.SetActive(true);
        //     tutorial2.SetActive(false);
        //     //StartCoroutine(showFail());
        //     meshTF.localEulerAngles = Vector3.zero;
        // });
        // Debug.Log("Unscrew");
        LevelController.Instance.CheckOutMove();
    }

    private int count = 0;

    public void MoveTo(BoardHole boardHole)
    {
        count++;
        moveto = true;

        if (!this.isFallingScrew && boardHole != null)
        {
            transform.position = boardHole.transform.position;
            UnScrew();
        }
        else
        {
            this.col2D.enabled = false;
            transform.DOMoveY(-30, 1f).SetRelative(true)
                .SetEase(Ease.Linear).OnComplete(() => this.gameObject.SetActive(false))
                .SetDelay(0.1f);
        }

        if (count == 12)
        {
            LevelController.Instance.store.SetActive(true);
        }
        if (LevelController.Instance.fullSlot)
        {
            if (LevelController.Instance.currentBolt.screwBoard)
            {
                LevelController.Instance.currentBolt.screwBoard = false;
                LevelController.Instance.numScrewOnBar++;
                //Debug.Log(LevelController.Instance.numScrewOnBar);
            }
        }
        else
        {
            if (!LevelController.Instance.currentBolt.screwBoard)
            {
                LevelController.Instance.currentBolt.screwBoard = true;
                LevelController.Instance.numScrewOnBar--;
                //Debug.Log(LevelController.Instance.numScrewOnBar);
            }
        }
    }

    public IEnumerator MoveToCoroutine(GameObject boardHole)
    {
        transform.position = boardHole.transform.position;
        yield return null;
        // Đến đích
        //Debug.Log("Bolt moved to board hole: " + boardHole.name);
    }

    public Vector3 Position()
    {
        return transform.position;
    }


    public void Lock()
    {
        locked = true;
        //lockObj.SetActive(true);
    }

    public void Unlock()
    {
        locked = false;
        //lockObj.SetActive(false);
    }

    public void Explosion()
    {
        gameObject.SetActive(false);
    }
}
