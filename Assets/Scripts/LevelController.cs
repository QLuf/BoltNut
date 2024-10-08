using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;
using Random = UnityEngine.Random;

public class LevelController : MonoBehaviour
{
    BoardHole currentHoleRw;
    public int numScrewOnBar;
    public bool fullSlot = false;
    private float timer = 0, timeLim = 5;
    public GameObject reset;
    public static LevelController Instance;
    public Bolt currentBolt;
    int target;
    public AudioSource select, place, confetti;
    int amountBarScrewed;
    bool gameOn = true;
    BoardHole[] boardHoles;
    Bolt[] bolts;
    Bar[] bars;
    public bool isUsingItem, won = false;
    int idItem;
    //public GameObject tutorial, tutotialLandscape;
    private int count = 0;
    private int countToOpenStore = 0;
    public GameObject store;
    public bool isLv2 = false;
    public bool firstTouch = false;
    // public List<BugMove> bugs = new List<BugMove>();
    // public List<Bolt> buggedBolt = new List<Bolt>();
    // public int numBugs = 2;
    // [FormerlySerializedAs("shuffelBolts")] public Bolt[] shufflableBolts;

    private void Awake()
    {
        // If there is an instance, and it's not me, delete myself.

        if (Instance != null && Instance != this)
        {
            Destroy(this);
        }
        else
        {
            Instance = this;
        }
    }
    private void Start()
    {
        bars = GetComponentsInChildren<Bar>();
        bolts = GetComponentsInChildren<Bolt>();
        boardHoles = GetComponentsInChildren<BoardHole>();
        target = bars.Length;
        amountBarScrewed = 0;
    }

    private class StateBar
    {
        public Vector2 pos;
        public Vector3 rotate;
        public bool actived;

        public StateBar(Vector2 pos, Vector3 rotate, bool actived)
        {
            this.pos = pos;
            this.rotate = rotate;
            this.actived = actived;
        }
    }

    public class StateBolt
    {
        public Vector2 pos;
        public bool isLocked;
        public bool actived;

        public StateBolt(Vector2 pos, bool isLocked, bool actived)
        {
            this.pos = pos;
            this.isLocked = isLocked;
            this.actived = actived;
        }
    }

    public class StateBoardHole
    {
        public bool isLocked;

        public StateBoardHole(bool isLocked)
        {
            this.isLocked = isLocked;
        }
    }
    public void ScrewBar()
    {
        amountBarScrewed++;
        if (amountBarScrewed == target)
        {
            confetti.Play();
            GameObject vfx = GameManager.Instance.InstantiatePrefab("VFX/VFX_Confetti");
            /*vfx.transform.position = Vector3.zero;*/
            GameManager.Instance.EndGame(true);
            won = true;
        }
    }
    public void CheckOutMove()
    {
        for (int i = 0; i < boardHoles.Length; i++)
        {
            if (!boardHoles[i].isReward)
            {
                Collider2D collider2D = Physics2D.OverlapCircle(boardHoles[i].transform.position, 0.01f, GameManager.Instance.layerBolt);
                if (collider2D == null)
                {
                    Collider2D[] tempBars = Physics2D.OverlapCircleAll(boardHoles[i].transform.position, GameManager.RADIUS_CHECK_BAR, GameManager.Instance.layerBar);
                    Collider2D[] tempBarHoles = Physics2D.OverlapCircleAll(boardHoles[i].transform.position, 0.01f, GameManager.Instance.layerBarHole);

                    if (tempBars.Length <= tempBarHoles.Length)
                    {
                        int count = 0;
                        for (int k = 0; k < tempBarHoles.Length; k++)
                        {
                            if (Vector3.Distance(boardHoles[i].transform.position, tempBarHoles[k].transform.position) <= 0.4f - GameManager.RADIUS_CHECK_BAR)
                            {
                                BarHole barHole = tempBarHoles[k].GetComponent<BarHole>();
                                int tempCount = 0;
                                for (int j = 0; j < tempBars.Length; j++)
                                {
                                    if (barHole.Match(tempBars[j].GetComponent<Bar>()))
                                    {
                                        break;
                                    }
                                    else
                                    {
                                        tempCount++;
                                    }
                                }

                                if (tempCount == tempBars.Length)
                                {
                                    count++;
                                    break;
                                }
                            }
                            else
                            {
                                count++;
                                break;
                            }
                        }

                        if (count == 0)
                        {
                            return;
                        }
                    }
                }
            }
        }
        Debug.Log("Go to store!!!!");
         Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
         Luna.Unity.Analytics.LogEvent("Store", 0);
        store.SetActive(true);
        //UIManager.Instance.ingameMenu.ShowCaution();
    }


    void Update()
    {
        if (isLv2 && numScrewOnBar == 1)
        {
            store.SetActive(true);
            GameManager.Instance.canControl = false;
        }
        if (GameManager.Instance.canControl)
        {
            if (Input.GetMouseButtonDown(0) && firstTouch == false)
            {
                firstTouch = true;
            }
            if (Input.GetMouseButtonDown(0))
            {
                Vector2 worldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);

                GameObject vfxClick = GameManager.Instance.InstantiatePrefab("VFX/VFX_Tap");
                vfxClick.transform.position = new Vector3(worldPos.x, worldPos.y, -5);

                Collider2D collider2D = Physics2D.OverlapCircle(worldPos, 0.5f, GameManager.Instance.layerBoardHole);
                if (collider2D != null)
                {
                    BoardHole boardHole = collider2D.GetComponent<BoardHole>();
                    Collider2D temp = Physics2D.OverlapCircle(collider2D.transform.position, 0.35f, GameManager.Instance.layerBar);
                    if (temp == null)
                    {
                        fullSlot = false;
                        if (!boardHole.isReward)
                        {
                            Collider2D temp2 = Physics2D.OverlapCircle(collider2D.transform.position, 0.35f, GameManager.Instance.layerBarHole);
                            if (temp2 == null) fullSlot = false;
                            else fullSlot = true;
                        }
                    }
                    else
                    {
                        fullSlot = true;
                    }
                }

                if (!isUsingItem)
                {
                    collider2D = Physics2D.OverlapCircle(worldPos, 0.5f, GameManager.Instance.layerBolt);
                    if (collider2D != null)
                    {
                        Bolt bolt = collider2D.GetComponent<Bolt>();
                        if(bolt == null)
                        {
                            return;
                        }
                        select.Play();
                        if (currentBolt == null)
                        {
                            currentBolt = bolt;
                            currentBolt.Screw();
                        }
                        else
                        {
                            if (currentBolt == bolt)
                            {
                                if (currentBolt.isScrewed)
                                {
                                    bolt.UnScrew();
                                }
                                else
                                {
                                    bolt.Screw();
                                }
                            }
                            else
                            {
                                currentBolt.UnScrew();
                                currentBolt = bolt;
                                currentBolt.Screw();
                            }
                        }

                        if (currentBolt != null && currentBolt.isFallingScrew)
                        {
                            UpdateState();
                            place.Play();
                            Collider2D[] temps = Physics2D.OverlapCircleAll(currentBolt.transform.position, GameManager.RADIUS_CHECK_BAR, GameManager.Instance.layerBar);
                            for (int i = 0; i < temps.Length; i++)
                            {
                                //Debug.Log(temps[i]);
                                temps[i].GetComponent<Bar>().RemoveBolt(currentBolt);
                            }
                            countToOpenStore++;
                            // if (countToOpenStore == 15)
                            // {
                            //     Luna.Unity.LifeCycle.GameEnded();
                            //     Luna.Unity.Playable.InstallFullGame();
                            //     Luna.Unity.Analytics.LogEvent("Store", 0);
                            //     store.SetActive(true);
                            // }
                            currentBolt.MoveTo(null);
                            currentBolt = null;

                            return;
                        }
                    }
                    else
                    {
                        Collider2D[] colliderBolts = Physics2D.OverlapCircleAll(worldPos, 0.5f, GameManager.Instance.layerBolt);
                        Collider2D[] colliderBoardHoles = Physics2D.OverlapCircleAll(worldPos, 0.5f, GameManager.Instance.layerBoardHole);

                        float minDist = float.MaxValue;
                        int stateCollider = 0;
                        for (int i = 0; i < colliderBolts.Length; i++)
                        {
                            float dist = Vector3.Distance(colliderBolts[i].transform.position, worldPos);
                            if (dist < minDist)
                            {
                                minDist = dist;
                                collider2D = colliderBolts[i];
                                stateCollider = 1;
                            }
                        }

                        for (int i = 0; i < colliderBoardHoles.Length; i++)
                        {
                            float dist = Vector3.Distance(colliderBoardHoles[i].transform.position, worldPos);
                            if (dist < minDist)
                            {
                                minDist = dist;
                                collider2D = colliderBoardHoles[i];
                                stateCollider = 2;
                            }
                        }

                        /*if (stateCollider == 1)
                        {
                            Bolt bolt = collider2D.GetComponent<Bolt>();
                            if (bolt == currentBolt)
                            {
                                currentBolt.UnScrew();
                                currentBolt = null;
                            }
                            
                            else if (!bolt.locked && bolt != currentBolt)
                            {
                                select.Play();
                                currentBolt.UnScrew();
                                currentBolt = bolt;
                                currentBolt.Screw();
                                Debug.LogError(select);
                            }
                            return;
                        }*/

                        if (stateCollider == 2)
                        {
                            if (count == 12)
                            {
                                Luna.Unity.LifeCycle.GameEnded();
                                Luna.Unity.Playable.InstallFullGame();
                                 Luna.Unity.Analytics.LogEvent("Store", 0);
                                store.SetActive(true);
                            }
                            BoardHole boardHole = collider2D.GetComponent<BoardHole>();
                            Collider2D[] tempBars = Physics2D.OverlapCircleAll(collider2D.transform.position, GameManager.RADIUS_CHECK_BAR, GameManager.Instance.layerBar);

                            if (tempBars.Length == 0)
                            {
                                if (!boardHole.isReward && !boardHole.locked)
                                {
                                    UpdateState();
                                    place.Play();
                                    Collider2D[] temps = Physics2D.OverlapCircleAll(currentBolt.transform.position, GameManager.RADIUS_CHECK_BAR, GameManager.Instance.layerBar);
                                    for (int i = 0; i < temps.Length; i++)
                                    {
                                        //Debug.Log(temps[i]);
                                        temps[i].GetComponent<Bar>().RemoveBolt(currentBolt);
                                    }

                                    temps = Physics2D.OverlapCircleAll(boardHole.transform.position, GameManager.RADIUS_CHECK_BAR, GameManager.Instance.layerBar);
                                    for (int i = 0; i < temps.Length; i++)
                                    {
                                        temps[i].GetComponent<Bar>().AddBolt(currentBolt, boardHole.transform.position);
                                    }
                                    currentBolt.MoveTo(boardHole);
                                    currentBolt = null;
                                }
                                return;
                            }
                            else
                            {
                                int count = 0;
                                Collider2D[] tempBarHoles = Physics2D.OverlapCircleAll(collider2D.transform.position, 0.01f, GameManager.Instance.layerBarHole);
                                if (tempBars.Length <= tempBarHoles.Length)
                                {
                                    for (int i = 0; i < tempBarHoles.Length; i++)
                                    {
                                        if (Vector3.Distance(collider2D.transform.position, tempBarHoles[i].transform.position) <= 0.4f - GameManager.RADIUS_CHECK_BAR)
                                        {
                                            BarHole barHole = tempBarHoles[i].GetComponent<BarHole>();
                                            int tempCount = 0;
                                            for (int j = 0; j < tempBars.Length; j++)
                                            {
                                                if (barHole.Match(tempBars[j].GetComponent<Bar>()))
                                                {
                                                    break;
                                                }
                                                else
                                                {
                                                    tempCount++;
                                                }
                                            }

                                            if (tempCount == tempBars.Length)
                                            {
                                                count++;
                                                break;
                                            }
                                        }
                                        else
                                        {
                                            count++;
                                            break;
                                        }
                                    }

                                    if (count == 0)
                                    {
                                        UpdateState();
                                        place.Play();

                                        Collider2D[] temps = Physics2D.OverlapCircleAll(currentBolt.transform.position, GameManager.RADIUS_CHECK_BAR, GameManager.Instance.layerBar);
                                        for (int i = 0; i < temps.Length; i++)
                                        {
                                            //Debug.Log(temps[i].gameObject.name + " va " + temps[i].transform.parent.gameObject);
                                            //Debug.Log(temps[i].GetComponent<Bar>());
                                            temps[i].GetComponent<Bar>().RemoveBolt(currentBolt);
                                        }

                                        temps = Physics2D.OverlapCircleAll(boardHole.transform.position, GameManager.RADIUS_CHECK_BAR, GameManager.Instance.layerBar);
                                        for (int i = 0; i < temps.Length; i++)
                                        {
                                            temps[i].GetComponent<Bar>().AddBolt(currentBolt, boardHole.transform.position);
                                        }
                                        currentBolt.MoveTo(boardHole);

                                        currentBolt = null;
                                        return;
                                    }
                                }
                            }
                        }
                        // currentBolt.UnScrew();
                        // currentBolt = null;
                    }
                }
                else
                {
                    collider2D = null;
                    switch (idItem)
                    {
                        case 0:
                            // Screwdrive
                            collider2D = Physics2D.OverlapCircle(worldPos, 0.5f, GameManager.Instance.layerBolt);
                            if (collider2D != null)
                            {
                                UpdateState();

                                collider2D.GetComponent<Bolt>().Explosion();
                                //SoundManager.instance.PlaySound("BoltExplosion");
                                GameObject obj = GameManager.Instance.InstantiatePrefab("VFX/VFX_BoltExplosion");
                                obj.transform.position = worldPos;
                                if (UserConfig.Instance.AmountScrewdrive > 0)
                                {
                                    UserConfig.Instance.AmountScrewdrive--;
                                }
                            }
                            else
                            {
                                if (UserConfig.Instance.AmountScrewdrive == 0)
                                {
                                    UserConfig.Instance.AmountScrewdrive++;

                                }
                            }

                            break;
                    }

                    isUsingItem = false;
                }
            }
        }

        if (isLv2 && numScrewOnBar == 1)
        {
            store.SetActive(true);
            //Debug.Log("toStore");
            GameManager.Instance.canControl = false;
        }
    }

    void UpdateState()
    {
        StateBar[] stateBars = new StateBar[bars.Length];
        for (int i = 0; i < bars.Length; i++)
        {
            stateBars[i] = new StateBar(bars[i].transform.localPosition, bars[i].transform.localEulerAngles, bars[i].gameObject.activeInHierarchy);
        }

        StateBolt[] stateBolts = new StateBolt[bolts.Length];
        for (int i = 0; i < bolts.Length; i++)
        {
            stateBolts[i] = new StateBolt(bolts[i].transform.localPosition, bolts[i].locked, bolts[i].gameObject.activeInHierarchy);
        }

        StateBoardHole[] stateBoardHoles = new StateBoardHole[boardHoles.Length];
        for (int i = 0; i < boardHoles.Length; i++)
        {
            stateBoardHoles[i] = new StateBoardHole(boardHoles[i].locked);
        }

        //stateLevels.Add(new StateLevel(stateBars, stateBolts, stateBoardHoles));
    }

    public void RecycleLevel()
    {
        gameObject.Recycle();
    }
}
