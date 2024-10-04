using UnityEngine;
using System.Collections;

public class Hint : MonoBehaviour
{
    // Đối tượng bạn muốn kích hoạt và vô hiệu hóa
    public GameObject targetObject;

    // Biến để theo dõi xem người chơi đã nhấn chuột hay không
    public bool hasClicked = false;
    public GameObject tutorial;

    void Start()
    {
        // Bắt đầu coroutine khi scene bắt đầu
        StartCoroutine(ActivateDeactivateObject());
    }

    IEnumerator ActivateDeactivateObject()
    {
        while (true)
        {
            // Kiểm tra xem người dùng đã nhấn chuột chưa
            if (!hasClicked)
            {
                // Vô hiệu hóa đối tượng
                targetObject.SetActive(false);
                //tutorial.SetActive(false);

                // Chờ 5 giây
                yield return new WaitForSeconds(5f);

                // Kiểm tra lại xem người chơi đã nhấn chuột chưa
                if (!hasClicked)
                {
                    // Kích hoạt đối tượng
                    targetObject.SetActive(true);
                    tutorial.SetActive(false);
                    //tutorialLandscape.SetActive(false);

                    // Chờ 2 giây trước khi bắt đầu lại
                    yield return new WaitForSeconds(2f);
                    //tutorial.SetActive(true);
                }
            }
            else
            {
                // Nếu người chơi đã nhấn chuột, đặt lại biến hasClicked và chờ kiểm tra lại
                hasClicked = false;
                yield return new WaitForSeconds(0.1f);
            }
        }
    }

    void Update()
    {
        // Kiểm tra xem người chơi đã nhấn chuột trái hay không
        if (Input.GetMouseButtonDown(0))
        {
            // Đặt biến hasClicked thành true khi người chơi nhấn chuột
            hasClicked = true;
        }
    }
}
