using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UserConfig
{
    private static UserConfig _instance;

    public static UserConfig Instance
    {
        get
        {
            if (UserConfig._instance == null)
            {
                UserConfig._instance = new UserConfig();
            }
            return UserConfig._instance;
        }
    }

    public int CurLevel
    {
        get
        {
            return curLevel;
        }
        set
        {
            curLevel = value;
            if (curLevel > BestLevel)
            {
                BestLevel = value;
            }
        }
    }
 
    private int curLevel;

    public int RetendDay
    {
        get
        {
            return PlayerPrefs.GetInt(GameplayVariables.retendDay, 0);
        }
        set
        {
            PlayerPrefs.SetInt(GameplayVariables.retendDay, value);
        }
    }

    public int DayPlayed
    {
        get
        {
            return PlayerPrefs.GetInt(GameplayVariables.dayPlayed, 0);
        }
        set
        {
            PlayerPrefs.SetInt(GameplayVariables.dayPlayed, value);
        }
    }

    public bool Sound
    {
        get
        {
            return sound;
        }
        set
        {
            sound = value;
            PlayerPrefs.SetInt(GameplayVariables.sound, value ? 1 : 0);
        }
    }

    public bool Music
    {
        get
        {
            return music;
        }
        set
        {
            music = value;
            PlayerPrefs.SetInt(GameplayVariables.music, value ? 1 : 0);
        }
    }

    public bool Vibrate
    {
        get
        {
            return vibrate;
        }
        set
        {
            vibrate = value;
            PlayerPrefs.SetInt(GameplayVariables.vibrate, value ? 1 : 0);
        }
    }

    public int BestLevel
    {
        get
        {
            return bestLevel;
        }
        set
        {
            bestLevel = value;
            /*CGTeamBridge.instance.SetPropertyLevel((bestLevel - 1).ToString());*/
            PlayerPrefs.SetInt(GameplayVariables.bestLevel, value);
        }
    }

    public int Coin
    {
        get
        {
            return coin;
        }
        set
        {
            coin = value;
            PlayerPrefs.SetInt(GameplayVariables.coin, value);
        }
    }

    public bool Rate
    {
        get
        {
            return rate;
        }
        set
        {
            rate = value;
            PlayerPrefs.SetInt(GameplayVariables.rate, value ? 1 : 0);
        }
    }

    public bool HasAds
    {
        get
        {
            return hasAds;
        }
        set
        {
            hasAds = value;
            PlayerPrefs.SetInt(GameplayVariables.hasAds, value ? 1 : 0);
        }
    }

    public int DailyLogin
    {
        get
        {
            return dailyLogin;
        }
        set
        {
            dailyLogin = value;
            PlayerPrefs.SetInt(GameplayVariables.dailyLogin, value);
        }
    }

    public int TotalSpend
    {
        get
        {
            return totalSpend;
        }
        set
        {
            totalSpend = value;
            /*CGTeamBridge.instance.SetPropertyCoinEarn(totalSpend.ToString());*/
            PlayerPrefs.SetInt(GameplayVariables.totalSpend, value);
        }
    }

    public int TotalEarn
    {
        get
        {
            return totalEarn;
        }
        set
        {
            totalEarn = value;
            /*CGTeamBridge.instance.SetPropertyCoinEarn(totalEarn.ToString());*/
            PlayerPrefs.SetInt(GameplayVariables.totalEarn, value);
        }
    }

    public int WinLevel
    {
        get
        {
            return winLevel;
        }
        set
        {
            winLevel = value;
            PlayerPrefs.SetInt(GameplayVariables.winLevel, value);
        }
    }

    public int AmountInter
    {
        get
        {
            return amountInter;
        }
        set
        {
            amountInter = value;
            PlayerPrefs.SetInt(GameplayVariables.amountInter, value);
        }
    }

    public int AmountBomb
    {
        get
        {
            return amountBomb;
        }
        set
        {
            amountBomb = value;
            PlayerPrefs.SetInt(GameplayVariables.amountBomb, value);
        }
    }

    public int AmountScrewdrive
    {
        get
        {
            return amountScrewdrive;
        }
        set
        {
            amountScrewdrive = value;
            PlayerPrefs.SetInt(GameplayVariables.amountScrewdrive, value);
        }
    }

    public int LevelShowRemoveAds
    {
        get
        {
            return levelShowRemoveAds;
        }
        set
        {
            levelShowRemoveAds = value;
            PlayerPrefs.SetInt(GameplayVariables.levelShowRemoveAds, value);
        }
    }

    private int bestLevel;
    private int coin;
    private bool rate;
    private bool music;
    private bool sound;
    private bool vibrate;
    private bool hasAds;
    private int dailyLogin;
    private int totalSpend;
    private int totalEarn;
    private int winLevel;
    private int levelShowRemoveAds;
    private int amountScrewdrive;
    private int amountBomb;
    private int amountInter;
    public int amountPlay = 0;
    [HideInInspector]
    public bool isLoading = true;
    [HideInInspector]
    public bool isNewDay = false;
    [HideInInspector]
    public bool isNewUser = false;

    public void Init()
    {
        if (PlayerPrefs.GetInt("IsFirstPlay") == 0)
        {
            PlayerPrefs.SetInt("IsFirstPlay", 1);
            isNewUser = true;
        }

        isLoading = true;

        bestLevel = PlayerPrefs.GetInt(GameplayVariables.bestLevel, 1);
        coin = PlayerPrefs.GetInt(GameplayVariables.coin, 0);
        amountInter = PlayerPrefs.GetInt(GameplayVariables.amountInter, 0);
        dailyLogin = PlayerPrefs.GetInt(GameplayVariables.dailyLogin, 0);
        totalSpend = PlayerPrefs.GetInt(GameplayVariables.totalSpend, 0);
        totalEarn = PlayerPrefs.GetInt(GameplayVariables.totalEarn, 0);
        winLevel = PlayerPrefs.GetInt(GameplayVariables.winLevel, 0);
        amountScrewdrive = PlayerPrefs.GetInt(GameplayVariables.amountScrewdrive, 2);
        amountBomb = PlayerPrefs.GetInt(GameplayVariables.amountBomb, 2);
        levelShowRemoveAds = PlayerPrefs.GetInt(GameplayVariables.levelShowRemoveAds, 0);
        rate = PlayerPrefs.GetInt(GameplayVariables.rate, 0) == 1 ? true : false;
        music = PlayerPrefs.GetInt(GameplayVariables.music, 1) == 1 ? true : false;
        sound = PlayerPrefs.GetInt(GameplayVariables.sound, 1) == 1 ? true : false;
        vibrate = PlayerPrefs.GetInt(GameplayVariables.vibrate, 1) == 1 ? true : false;
        hasAds = PlayerPrefs.GetInt(GameplayVariables.hasAds, 1) == 1 ? true : false;

        curLevel = bestLevel;
    }

    public bool CanShowDailyBonus()
    {
        bool canShowDaily = false;
        if (DailyLogin == 0)
        {
            /*CGTeamBridge.instance.SetPropertyDayPlayed((DailyLogin + 1).ToString());
            CGTeamBridge.instance.SetPropertyRetendDay("0");*/
            PlayerPrefs.SetInt("retent_type", 0);
            return true;
        }

        System.DateTime lastTimeOpen = System.DateTime.Parse(PlayerPrefs.GetString(GameplayVariables.lastTimeOpen, System.DateTime.Now.ToString()));
        Debug.Log(PlayerPrefs.GetString(GameplayVariables.lastTimeOpen, System.DateTime.Now.ToString()));
        System.DateTime currentTimeDate = System.DateTime.Now.Date;
        int dayOpen = (currentTimeDate - lastTimeOpen).Days;
        if (dayOpen > 0)
        {
            int retend_type = PlayerPrefs.GetInt("retent_type");
            retend_type += dayOpen;
            PlayerPrefs.SetInt("retent_type", retend_type);
            /*CGTeamBridge.instance.SetPropertyRetendDay(retend_type.ToString());

            CGTeamBridge.instance.SetPropertyDayPlayed((DailyLogin + 1).ToString());*/
            canShowDaily = true;
        }
        return canShowDaily;
    }

    public bool HasTurnOffInternet()
    {
        return Application.internetReachability == NetworkReachability.NotReachable;
    }
}
