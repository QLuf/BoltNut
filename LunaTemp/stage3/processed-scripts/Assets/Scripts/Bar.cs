using System;
using System.Collections;
using System.Collections.Generic;

using UnityEngine;

public class Bar : MonoBehaviour
{
    [SerializeField] bool configCenterOfMass;
    [SerializeField] bool minusgravity = false;
    [SerializeField] Vector3 centerOfMass;

    bool screwed;
    bool ready;
    BarHole[] barHoles;
    [SerializeField] List<Bolt> bolts = new List<Bolt>();

    Collider2D col2D;
    Rigidbody2D rigid2D;
    HingeJoint2D hingleJoint2D;

    int state = -1;
    float timeCount = 0;

    private bool hasDone;

    public bool HasDone { get => hasDone; set => hasDone = value; }

    private void Start()
    {
        col2D = GetComponent<Collider2D>();
        rigid2D = GetComponent<Rigidbody2D>();
        barHoles = GetComponentsInChildren<BarHole>();
        hingleJoint2D = GetComponent<HingeJoint2D>();


        if (configCenterOfMass)
        {
            rigid2D.centerOfMass = centerOfMass;
        }
        else
        {
            if (transform.localEulerAngles.z == 90)
            {
                if (transform.localPosition.x > 0)
                {
                    rigid2D.centerOfMass = new Vector2(0, -0.1f);
                }
                else
                {
                    rigid2D.centerOfMass = new Vector2(0, 0.1f);
                }
            }
            else if (transform.localEulerAngles.z == 270)
            {
                if (transform.localPosition.x > 0)
                {
                    rigid2D.centerOfMass = new Vector2(0, 0.1f);
                }
                else
                {
                    rigid2D.centerOfMass = new Vector2(0, -0.1f);
                }
            }
        }

        rigid2D.bodyType = RigidbodyType2D.Static;
        rigid2D.gravityScale = 1;
        this.state = -1;

        Invoke(nameof(Simulate), 0.1f);
    }

    private void SetState(int amountBolt, Rigidbody2D connectedRigid2D)
    {
        switch (amountBolt)
        {
            case 0:
                if (this.state != 0)
                {
                    ready = true;
                    this.state = 0;
                    rigid2D.bodyType = RigidbodyType2D.Dynamic;
                    if (!minusgravity)
                    {
                        rigid2D.gravityScale = 2f;
                    }
                    else
                    {
                        rigid2D.gravityScale = -0.5f;
                    }
                    this.hingleJoint2D.enabled = false;
                }
                break;
            case 1:
                ready = true;
                this.state = 1;
                rigid2D.bodyType = RigidbodyType2D.Dynamic;
                if (!minusgravity)
                {
                    rigid2D.gravityScale = 2f;
                }
                else
                {
                    rigid2D.gravityScale = -0.5f;
                }
                rigid2D.WakeUp();
                this.hingleJoint2D.enabled = true;

                Vector3 anchorPos = transform.InverseTransformPoint(connectedRigid2D.transform.position);
                SpriteRenderer spriteRenderer = transform.GetChild(0).GetComponent<SpriteRenderer>();
                if (spriteRenderer != null && spriteRenderer.drawMode == SpriteDrawMode.Sliced)
                {
                    if (anchorPos.magnitude < 0.1f && transform.localEulerAngles.z != 90 && transform.localEulerAngles.z != 270)
                    {
                        if (transform.localEulerAngles.z > 0 && transform.localEulerAngles.z < 180)
                        {
                            rigid2D.centerOfMass = new Vector2(-0.1f, 0);
                        }
                        else
                        {
                            rigid2D.centerOfMass = new Vector2(0.1f, 0);
                        }
                    }
                }

                this.hingleJoint2D.connectedBody = connectedRigid2D;
                hingleJoint2D.anchor = anchorPos;
                this.hingleJoint2D.connectedAnchor = Vector2.zero;
                break;
            default:
                ready = false;
                if (this.state != 2)
                {
                    this.state = 2;
                    rigid2D.bodyType = RigidbodyType2D.Static;
                    if (!minusgravity)
                    {
                        rigid2D.gravityScale = 2f;
                    }
                    else
                    {
                        rigid2D.gravityScale = -0.5f;
                    }
                    this.hingleJoint2D.enabled = false;
                }
                break;
        }
    }

    private void SetState(int amountBolt, Rigidbody2D connectedRigid2D, [Bridge.Ref] Vector3 newPos)
    {
        switch (amountBolt)
        {
            case 0:
                if (this.state != 0)
                {
                    ready = true;
                    this.state = 0;
                    rigid2D.bodyType = RigidbodyType2D.Dynamic;
                    if (!minusgravity)
                    {
                        rigid2D.gravityScale = 2f;
                    }
                    else
                    {
                        rigid2D.gravityScale = -0.5f;
                    }
                    this.hingleJoint2D.enabled = false;
                }
                break;
            case 1:
                ready = true;
                this.state = 1;
                rigid2D.bodyType = RigidbodyType2D.Dynamic;
                if (!minusgravity)
                {
                    rigid2D.gravityScale = 2f;
                }
                else
                {
                    rigid2D.gravityScale = -0.5f;
                }
                this.hingleJoint2D.enabled = true;

                this.hingleJoint2D.connectedBody = connectedRigid2D;
                hingleJoint2D.anchor = transform.InverseTransformPoint(newPos);
                this.hingleJoint2D.connectedAnchor = Vector2.zero;
                break;
            default:
                if (this.state != 2)
                {
                    ready = false;
                    this.state = 2;
                    rigid2D.bodyType = RigidbodyType2D.Static;
                    if (!minusgravity)
                    {
                        rigid2D.gravityScale = 2f;
                    }
                    else
                    {
                        rigid2D.gravityScale = -0.5f;
                    }
                    this.hingleJoint2D.enabled = false;
                }
                break;
        }
    }

    public void AddBolt(Bolt bolt, [Bridge.Ref] Vector3 newPos)
    {
        //Debug.Log("AddBolt");
        if (bolts.Count == 0)
        {
            bolts.Add(bolt);
            SetState(1, bolt.transform.GetComponent<Rigidbody2D>(), newPos);
        }
        else if (bolts.Count == 1)
        {
            if (bolts[0] != bolt)
            {
                bolts.Add(bolt);
                SetState(2, null);
            }
        }
        else
        {
            bolts.Add(bolt);
        }
    }

    public void RemoveBolt(Bolt bolt)
    {
        //Debug.Log("RemoveBolt");

        if (!bolts.Contains(bolt))
        {
            return;
        }

        if (bolts.Count == 2)
        {
            bolts.Remove(bolt);
            SetState(1, bolts[0].transform.GetComponent<Rigidbody2D>());
        }
        else if (bolts.Count == 1)
        {
            bolts.Remove(bolt);
            SetState(0, null);
        }
        else
        {
            bolts.Remove(bolt);
        }
    }

    private void FixedUpdate()
    {
        if (state == 0)
        {
            if (Mathf.Abs(transform.localEulerAngles.z) < 0.05f || Mathf.Abs(Mathf.Abs(transform.localEulerAngles.z) - 180f) < 0.05f || Mathf.Abs(Mathf.Abs(transform.localEulerAngles.z) - 360) < 0.05f)
            {
                float velocity = rigid2D.velocity.magnitude;
                if (velocity > 0.05f)
                {
                    if (timeCount < 2)
                    {
                        timeCount += Time.fixedDeltaTime;
                    }
                    else
                    {
                        if (velocity < 1f)
                        {
                            rigid2D.velocity = Vector2.Lerp(rigid2D.velocity, rigid2D.velocity.normalized, Time.fixedDeltaTime);
                        }
                    }
                }
            }
            else
            {
                timeCount = 0;
            }
        }
        else
        {
            timeCount = 0;
        }
    }

    public void Done()
    {
        hasDone = true;
        gameObject.SetActive(false);
    }

    int GetAmountBolt()
    {
        bolts.Clear();
        int count = 0;
        for (int i = 0; i < barHoles.Length; i++)
        {
            Collider2D temp = Physics2D.OverlapCircle(barHoles[i].transform.position, 0.1f, GameManager.Instance.layerBolt);
            if (temp != null)
            {
                count++;
                bolts.Add(temp.GetComponent<Bolt>());
            }
        }
        return count;
    }

    public void Explosion()
    {
        for (int i = 0; i < barHoles.Length; i++)
        {
            Collider2D temp = Physics2D.OverlapCircle(barHoles[i].transform.position, 0.1f, GameManager.Instance.layerBolt);
            if (temp != null)
            {
                temp.GetComponent<Bolt>().Explosion();
            }
        }
    }

    //public AudioSource kengg;
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (ready && rigid2D.velocity.sqrMagnitude > 0.5f)
        {
            int amount = 0;
            Collider2D[] collider2Ds = Physics2D.OverlapCircleAll(collision.transform.position, 0.5f, GameManager.Instance.layerBar);
            for (int i = 0; i < collider2Ds.Length; i++)
            {
                if (collider2Ds[i].gameObject != this.gameObject)
                {
                    amount++;
                }
            }

            if (amount == collider2Ds.Length)
            {
                //kengg.Play();
            }
        }

    }

    public void Init([Bridge.Ref] Vector2 position, [Bridge.Ref] Vector3 angle, bool actived)
    {
        transform.localPosition = position;
        transform.localEulerAngles = angle;
        gameObject.SetActive(actived);
        if (actived)
        {
            hasDone = false;
        }

        Invoke(nameof(Simulate), 0.02f);
    }

    /*public void UnSimulate()
    {
        rigid2D.bodyType = RigidbodyType2D.Static;
        this.state = -1;
        bolts.Clear();
        hingleJoint2D.enabled = false;

        for (int i = 0; i < barHoles.Length; i++)
        {
            barHoles[i].ActiveGraphic(true);
        }
    }*/

    public void Simulate()
    {
        int amountBolt = GetAmountBolt();
        if (bolts.Count == 1)
        {
            SetState(amountBolt, bolts[0].GetComponent<Rigidbody2D>());
        }
        else
        {
            SetState(amountBolt, null);
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Wall"))
        {
            if (!screwed)
            {
                screwed = true;
                LevelController.Instance.ScrewBar();
                Invoke(nameof(Destroy), 0.5f);
            }
        }
        else if (collision.CompareTag("Key"))
        {
            collision.GetComponent<Key>().Active();
        }
    }

    private void Destroy()
    {
        this.gameObject.SetActive(false);
    }
}
