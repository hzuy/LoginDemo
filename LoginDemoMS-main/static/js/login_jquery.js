$(document).ready(function () {
  // Xử lý đăng nhập
  $("#loginForm").on("submit", function (e) {
    e.preventDefault();
    const formData = {
      username: $("#username").val(),
      password: $("#password").val(),
    };
    $.ajax({
      url: "/",
      method: "POST",
      data: formData,
      success: function (response) {
        if (response.success) {
          $("#responseMessage").text(response.message).css("color", "green");
        } else {
          $("#responseMessage").text(response.message).css("color", "red");
        }
      },
      error: function () {
        $("#responseMessage")
          .text("Đã xảy ra lỗi trong quá trình gửi yêu cầu.")
          .css("color", "red");
      },
    });
  });

  // Hiển thị form đăng ký
  $("#showRegister").click(function (e) {
    e.preventDefault();
    $("#loginForm").hide();
    $("#registerForm").show();
  });

  // Quay lại form đăng nhập
  $("#showLogin").click(function (e) {
    e.preventDefault();
    $("#registerForm").hide();
    $("#loginForm").show();
  });

  // Xử lý đăng ký
  $("#registerForm").on("submit", function (e) {
    e.preventDefault();
    const username = $("#regUsername").val();
    const password = $("#regPassword").val();
    const confirm = $("#regConfirm").val();

    if (password !== confirm) {
      $("#registerMessage")
        .text("Mật khẩu xác nhận không khớp!")
        .css("color", "red");
    } else {
      // Tùy chọn: Gửi dữ liệu đăng ký về server
      $("#registerMessage").text("Đăng ký thành công!").css("color", "green");
    }
  });
});
