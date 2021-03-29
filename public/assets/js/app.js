// $(window).scroll(function () {
//     var a = $(window).scrollTop();
//     if (a >= 50) {
//         $(".sticky").addClass("nav-sticky")
//     } else {
//         $(".sticky").removeClass("nav-sticky")
//     }
// });
// $(".nav-item a, .mouse-down a").on("click", function (b) {
//     var a = $(this);
//     $("html, body").stop().animate({scrollTop: $(a.attr("href")).offset().top - 0}, 1500, "easeInOutExpo");
//     b.preventDefault()
// });
// $(".navbar-nav").scrollspy({offset: 70});
// $(window).scroll(function () {
//     var a = $(window).scrollTop();
//     if (a >= 50) {
//         $(".nav-btn").addClass("active")
//     } else {
//         $(".nav-btn").removeClass("active")
//     }
// });

function validateForm() {
    var c = document.forms.myForm["name"].value;
    var b = document.forms.myForm["email"].value;
    var d = document.forms.myForm["subject"].value;
    var a = document.forms.myForm["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById("error-msg").innerHTML = "";
    if (c == "" || c == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-warning error_message'>请输入姓名</div>";
        fadeIn();
        return false
    }
    if (b == "" || b == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-warning error_message'>请输入邮箱</div>";
        fadeIn();
        return false
    }
    if (d == "" || d == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-warning error_message'>请输入主题</div>";
        fadeIn();
        return false
    }
    if (a == "" || a == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-warning error_message'>请输入留言信息</div>";
        fadeIn();
        return false
    }
    var e = new XMLHttpRequest();
    e.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("simple-msg").innerHTML = this.responseText;
            document.forms.myForm["name"].value = "";
            document.forms.myForm["email"].value = "";
            document.forms.myForm["subject"].value = "";
            document.forms.myForm["comments"].value = ""
        }
    };
    e.open("POST", "php/contact.php", true);
    e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    e.send("name=" + c + "&email=" + b + "&subject=" + d + "&comments=" + a);
    return false
}

function fadeIn() {
    var a = document.getElementById("error-msg");
    var c = 0;
    var b = setInterval(function () {
        if (c < 1) {
            c = c + 0.5;
            a.style.opacity = c
        } else {
            clearInterval(b)
        }
    }, 200)
};