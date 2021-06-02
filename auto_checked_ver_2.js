//請在選擇評量系統的頁面中使用(https://ecare.nfu.edu.tw/aaiqry/poll)
$('a').each(function (index) {
    if ($(this).html() == '點此進入期末評量') {
        console.log($(this).attr("href"));
        var xhr = new XMLHttpRequest();
        xhr.open("GET", $(this).attr("href"), true);
        xhr.responseType = "document";
        xhr.onload = function () {
            console.log('onload:' + xhr.responseURL);
            var arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1];
            for (var i = 1; i < 20; i++) {
                var rad = xhr.responseXML.getElementsByClassName("ans" + i)[arr[i - 1]].checked = true;
            }
            xhr.responseXML.getElementsByClassName("ansA")[1].checked = true;
            xhr.responseXML.getElementsByClassName("ansB")[1].checked = true;
            xhr.responseXML.getElementsByClassName("ansC")[0].checked = true;
            xhr.responseXML.getElementsByClassName("ansD")[1].checked = true;
            xhr.responseXML.getElementsByClassName("ansE")[1].checked = true;
            xhr.responseXML.getElementsByClassName("ansF")[1].checked = true;
            var formElement = xhr.responseXML.querySelector("form");
            var request = new XMLHttpRequest();
            request.open("POST", xhr.responseXML.querySelector("form").action);
            request.send(new FormData(formElement));
            var form = $('form');
            $.ajax({
                url: form.attr('action'),
                type: "POST",
                data: $('form').serialize(),
                contentType: false,
                cache: false,
                processData: false,
                success: function (data) {
                    console.log(data);
                }, error: function (data) {
                    console.log('無法送出');
                }
            });
        }
        xhr.send();
    }
});
location.reload();