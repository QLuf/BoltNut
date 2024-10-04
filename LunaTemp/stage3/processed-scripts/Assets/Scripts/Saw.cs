using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;
using Spine.Unity;

public class Saw : MonoBehaviour
{
    int countTrigger;
    bool active;

    [SerializeField] Transform visualTrans;
    [SerializeField] SpriteRenderer graphic;
    [SerializeField] SkeletonAnimation animation;

    private void Start()
    {
        countTrigger = 0;
        graphic.sortingOrder = 0;

        animation.gameObject.SetActive(false);
        visualTrans.DORotate(Vector3.forward * -360, 0.5f).SetRelative(true).SetEase(Ease.Linear).SetLoops(-1);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {

        collision.gameObject.SetActive(false);

        this.animation.gameObject.transform.position = collision.transform.position;
        this.animation.gameObject.SetActive(true);
        this.animation.AnimationState.SetAnimation(0, "attack", false);
        Invoke(nameof(DeactiveAnimation), 1.1f);

        AudioManager.instance.PlayWoodDestroySound();
        if (!active)
        {
            active = true;
            graphic.sortingOrder = 10;
            // transform.DOMoveY(-0.5f, 0.5f).SetRelative(true).SetEase(Ease.Linear).OnComplete(() =>
            // {
            //     transform.DOMoveY(0.5f, 1.0f).SetRelative(true).SetEase(Ease.Linear).OnComplete(() =>
            //     {
            //         active = false;
            //     });
            // });
        }
    }

    private void DeactiveAnimation()
    {
        this.animation.gameObject.SetActive(false);
    }
    private void OnTriggerExit2D(Collider2D collision)
    {

    }

    /* OLD
    private void OnTriggerExit2D(Collider2D collision)
    {
        if (!active)
        {
            countTrigger--;
            if (countTrigger <= 0)
            {
                active = true;

                graphic.sortingOrder = 10;
                transform.DOMoveY(-0.5f, 0.5f).SetRelative(true).SetEase(Ease.Linear).OnComplete(() =>
                {
                    SoundManager.instance.PlaySoundMedium("Sawing");
                    explosion.Play();
                    transform.DOMoveY(0.5f, 1.0f).SetRelative(true).SetEase(Ease.Linear).OnComplete(() =>
                    {
                        explosion.Stop();
                        SoundManager.instance.StopSoundMedium();
                        SoundManager.instance.PlaySound("Cut");
                        evt?.Invoke();
                        gameObject.Recycle();
                    });
                    Debug.Log("Completed");
                    active = false;
                });

            }
        }
    }
    */
}
