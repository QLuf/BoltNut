using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NotificationCenter
{
    private static NotificationCenter _instance;

    public static NotificationCenter Instance
    {
        get { return _instance ??= new NotificationCenter(); }
    }

    public delegate void UpdateDelegator();
    public delegate void Delegator(Hashtable data);
    
    public delegate void DelegatorBadge(int count);

    private readonly Dictionary<EventType, UpdateDelegator> _delegateMap;
    private readonly Dictionary<EventType, Delegator> _maps;

    private NotificationCenter()
    {
        _delegateMap = new Dictionary<EventType, UpdateDelegator>();
        _maps = new Dictionary<EventType, Delegator>();
    }

    public void Add(EventType subject, UpdateDelegator delegator)
    {
        _delegateMap.TryAdd(subject, delegate() { });
        _delegateMap[subject] += delegator;
    }

    public void Add(EventType subject, Delegator delegator)
    {
        _maps.TryAdd(subject, data => { });
        _maps[subject] += delegator;
    }

    public void Remove(EventType subject, UpdateDelegator delegator)
    {
        if (_delegateMap.TryGetValue(subject ,out var value) == false) return;
        _delegateMap[subject] -= delegator;
    }

    public void Remove(EventType subject, Delegator delegator)
    {
        if (_maps.ContainsKey(subject) == false) return;
        _maps[subject] -= delegator;
    }

    public void Post(EventType subject)
    {
        if (_delegateMap.TryGetValue(subject, out var value))
        {
            if (value != null)
                foreach (var @delegate in value.GetInvocationList())
                {
                    var delegator = (UpdateDelegator)@delegate;
                    try
                    {
                        delegator();
                    }
                    catch (Exception e)
                    {
                        Debug.LogException(e);
                    }
                }
        }
    }

    public void Post(EventType subject, Hashtable data)
    {
        Post(subject);
        if (_maps.TryGetValue(subject, out var map))
        {
            if (map != null)
                foreach (var @delegate in map.GetInvocationList())
                {
                    var delegator = (Delegator)@delegate;
                    try
                    {
                        delegator.Invoke(data);
                    }
                    catch (Exception e)
                    {
                        Debug.LogException(e);
                    }
                }
        }
    }
}
