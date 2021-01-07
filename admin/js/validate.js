$(document).ready(function() {


    // Validate user
    $("#form-edit-user").validate({
        rules: {
            "email": {
                required: true,
                email: true,
            },
            "password": {
                required: true,
                minlength: 6,
            },
            "confirm_password": {
                equalTo: "#password",
            },
            "fullname": {
                required: true,
            },
        },
        messages: {
            "email": {
                required: "Nhập email đăng ký.",
                email: "Email không đúng định dạng.",
            },
            "password": {
                required: "Nhập password",
                minlength: "Password tối thiểu 6 ký tự",
            },
            "confirm_password": {
                equalTo: "Xác nhận mật khẩu không trùng khớp.",
            },
            "fullname": {
                required: "Nhập fullname",
            },
        }
    });
});