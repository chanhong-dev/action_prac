$(document).ready(function () {
    getCount();
    getFiles();
})

function save() {
    var form_data = new FormData($('#upload-file')[0]);
    $.ajax({
        type: 'POST',
        url: 'http://pythonweek-env.eba-p9tank2p.ap-northeast-2.elasticbeanstalk.com/fileupload',
        data: form_data,
        processData: false,
        contentType: false,
        success: function (data) {
            alert("파일이 업로드 되었습니다!!");
            location.reload();
        },
    });
}