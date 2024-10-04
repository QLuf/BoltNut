using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class wall : MonoBehaviour
{
    [SerializeField] private ParticleSystem exploreParticle;

    // Start is called before the first frame update
    public void OnTriggerEnter2D(Collider2D other)
    {
        other.gameObject.SetActive(false);
        //LevelController.Instance.ScrewBar();

        if (this.exploreParticle != null)
        {
            this.exploreParticle.transform.position = other.transform.position;
            exploreParticle.gameObject.SetActive(true);
            exploreParticle.Play();
        }
    }
}
