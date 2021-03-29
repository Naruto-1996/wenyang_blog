<template>
    <div>
        <div class="landscape"></div>
        <div class="filter"></div>
        <canvas id="canvas"></canvas>
        <!--navbar start-->
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark sticky">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="assets/img/logo.png" alt="" class="logo-light" height="22"/>
                    <img src="assets/img/logo.png" alt="" class="logo-dark" height="22"/>
                </a>
                <a
                        href="/" class="navbar-toggler ml-auto" data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggle-icon">
                        <i class="ri-menu-line"></i>
                    </span>
                </a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active"><a class="nav-link" href="#home">首页</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">关于</a></li>
                        <li class="nav-item"><a class="nav-link" href="#service">展示</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">介绍</a></li>
                        <li class="nav-item"><a class="nav-link" href="#blog">博客</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">联系</a></li>
                    </ul>
                    <a href="#contact" class="btn btn-sm nav-btn btn-outline-primary my-lg-0 my-2">立即雇佣</a>
                </div>
            </div>
        </nav>
        <!--navbar end-->

        <!--Hero start-->
        <section class="hero-1 position-relative align-items-center justify-content-center d-flex"
                  id="home">
            <div class="container">
                <div class="row">
                    <div class="col"><h1 class="text-white mt-xl-5">我是李文洋</h1>
                        <h4 class="font-weight-normal text-white">全栈开发工程师</h4>
                        <div class="hero-line my-5"></div>
                        <p class="text-white-70">
                            Android程序员、Ruby程序员、全栈开发工程师、目前正在学习Rust
                        </p>
                        <a href="#about" class="btn btn-primary mt-4">查看更多</a>
                    </div>
                </div>
                <!-- end row -->
            </div>
        </section>
        <!--Hero end-->

        <!--about me start-->
        <section class="section" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-4">
                        <h2 class="title">关于我 <span class="title-border ml-4 pl-3"></span></h2>
                    </div>
                </div>
                <!-- end row -->
                <div class="row">
                    <div class="col-md-4 mt-4 pt-2">
                        <div class="about-border position-relative">
                            <img class="img-fluid rounded about-img" src="assets/img/aboutme.jpg" alt=""/>
                            <img class="img-fluid about-dot d-none d-lg-block" src="assets/img/dot.png" alt=""/>
                        </div>
                    </div>

                    <div class="col-md-7 offset-md-1 mt-4 pt-2">
                        <dl class="row align-items-center about-content">
                            <dt class="col-lg-3 col-md-4 col-6 font-weight-semibold"><i
                                    class="ri-gift-line align-middle pr-3 text-primary font-size-18"></i> 生日
                            </dt>
                            <dd class="col-lg-9 col-md-8 col-6 text-muted mb-0"><span class="mr-xl-5 mr-4 font-weight-semibold">:</span>1996.10.10
                            </dd>

                            <dt class="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><i
                                    class="ri-book-open-line align-middle pr-3 text-primary font-size-18"></i> 毕业院校
                            </dt>
                            <dd class="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span
                                    class="mr-xl-5 mr-4 font-weight-semibold">:</span>河南工程学院
                            </dd>

                            <dt class="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><i
                                    class="ri-earth-line align-middle pr-3 text-primary font-size-18"></i> 网站
                            </dt>
                            <dd class="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span
                                    class="mr-xl-5 mr-4 font-weight-semibold">:</span>www.wenyang.life
                            </dd>

                            <dt class="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><i
                                    class="ri-game-line align-middle pr-3 text-primary font-size-18"></i> 兴趣爱好
                            </dt>
                            <dd class="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span
                                    class="mr-xl-5 mr-4 font-weight-semibold">:</span>英雄联盟, 热血动漫
                            </dd>

                            <dt class="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><i
                                    class="ri-map-pin-line align-middle pr-3 text-primary font-size-18"></i> 目前地址
                            </dt>
                            <dd class="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span
                                    class="mr-xl-5 mr-4 font-weight-semibold">:</span>北京 朝阳
                            </dd>
                        </dl>

                        <div class="row">
                            <div class="col-12 pt-xl-5 pt-3">
                                <h6 class="font-weight-semibold">我是李文洋，一名软件开发工程师</h6>
                                <p class="text-muted mt-xl-3 mt-2">你好！我是李文洋，是一名软件开发工程师，我从事开发工作已经有2年了，我非常喜欢并热爱我的工作。 </p>
                                <a href="#contact" class="btn btn-primary mt-3">联系我</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
        </section>
        <!-- about me end -->

        <!-- what i do start -->
        <section class="section bg-light" id="service">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-4"><h2 class="title">我做过什么 <span class="title-border ml-4 pl-3"></span></h2></div>
                </div><!-- end row -->
                <div class="row">
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="service-box rounded position-relative">
                            <div class="service-icon rounded"><i class="ri-lightbulb-flash-fill"></i></div>
                            <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">小型企业网站</h5>
                            <p class="text-muted mt-3"> 公司的企业官网前端采用vue项目，后端使用ruby语言并配合rails框架，api接口使用restful风格并用ruby语言编写</p>
                            <a class="text-uppercase font-size-13 font-weight-medium text-muted pt-4" href="#">阅读更多</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="service-box rounded position-relative">
                            <div class="service-icon rounded"><i class="ri-lightbulb-flash-fill"></i></div>
                            <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">小型企业网站</h5>
                            <p class="text-muted mt-3"> 公司的企业官网前端采用vue项目，后端使用ruby语言并配合rails框架，api接口使用restful风格并用ruby语言编写</p>
                            <a class="text-uppercase font-size-13 font-weight-medium text-muted pt-4" href="#">阅读更多</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="service-box rounded position-relative">
                            <div class="service-icon rounded"><i class="ri-lightbulb-flash-fill"></i></div>
                            <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">小型企业网站</h5>
                            <p class="text-muted mt-3"> 公司的企业官网前端采用vue项目，后端使用ruby语言并配合rails框架，api接口使用restful风格并用ruby语言编写</p>
                            <a class="text-uppercase font-size-13 font-weight-medium text-muted pt-4" href="#">阅读更多</a>
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
        </section>
        <!-- what i do end -->

        <!-- creative works start -->
        <section class="section" id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-4"><h2 class="mb-0 title">我的生活照片<span class="title-border ml-4 pl-3"></span>
                    </h2></div>
                </div>
                <!-- end row -->
                <div class="row">
                    <ul class="col container-filter categories-filter list-unstyled mt-4 pt-2" id="filter">
                        <li class="list-inline-item cat-list mr-sm-4 mr-2"><a class="categories active" data-filter="*">全部</a>
                        </li>
                        <li class="list-inline-item cat-list mr-sm-4 mr-2"><a class="categories" data-filter=".web-design">自己</a>
                        </li>
                        <li class="list-inline-item cat-list mr-sm-4 mr-2"><a class="categories" data-filter=".graphic-design">小猫</a>
                        </li>
                        <li class="list-inline-item cat-list mr-sm-4 mr-2"><a class="categories" data-filter=".ui-ux-design">其他</a>
                        </li>
                    </ul>
                </div>
                <!-- end row -->

                <!-- Gallery -->
                <div class="row projects-wrapper">
                    <div class="col-lg-4 col-md-6 mt-4 pt-2 web-design">
                        <div class="position-relative rounded overflow-hidden img-box"><img class="img-fluid"
                                                                                            src="assets/img/work-1.jpg" alt=""/>
                            <div class="item-caption">
                                <div class="text-center text-white work-content"><p
                                        class="font-size-13 text-uppercase font-weight-medium mb-2">Photoshop</p><h4><a href="#"
                                                                                                                        class="text-white">Cerative
                                    Design</a></h4></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 pt-2 web-design graphic-design">
                        <div class="position-relative rounded overflow-hidden img-box"><img class="img-fluid"
                                                                                            src="assets/img/work-2.jpg" alt=""/>
                            <div class="item-caption">
                                <div class="text-center text-white work-content"><p
                                        class="font-size-13 text-uppercase font-weight-medium mb-2">Illustration</p><h4><a
                                        href="#" class="text-white">Icons</a></h4></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 pt-2 graphic-design ui-ux-design">
                        <div class="position-relative rounded overflow-hidden img-box"><img class="img-fluid"
                                                                                            src="assets/img/work-3.jpg" alt=""/>
                            <div class="item-caption">
                                <div class="text-center text-white work-content"><p
                                        class="font-size-13 text-uppercase font-weight-medium mb-2">Web Design</p><h4><a
                                        href="#" class="text-white">Cerative Layout</a></h4></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 pt-2 graphic-design ui-ux-design">
                        <div class="position-relative rounded overflow-hidden img-box"><img class="img-fluid"
                                                                                            src="assets/img/work-4.jpg" alt=""/>
                            <div class="item-caption">
                                <div class="text-center text-white work-content"><p
                                        class="font-size-13 text-uppercase font-weight-medium mb-2">Graphics</p><h4><a href="#"
                                                                                                                       class="text-white">UI/UX
                                    Design</a></h4></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 pt-2 ui-ux-design">
                        <div class="position-relative rounded overflow-hidden img-box"><img class="img-fluid"
                                                                                            src="assets/img/work-5.jpg" alt=""/>
                            <div class="item-caption">
                                <div class="text-center text-white work-content"><p
                                        class="font-size-13 text-uppercase font-weight-medium mb-2">Adobe XD</p><h4><a href="#"
                                                                                                                       class="text-white">App
                                    Design</a></h4></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
        </section>
        <!-- creative works end -->

        <!-- my blog -->
        <section class="section bg-light" id="blog">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-4"><h2 class="title">我的博客<span class="title-border ml-4 pl-3"></span></h2></div>
                </div><!-- end row -->
                <div class="row">
                    <div class="col-xl-5 col-md-6 col-12 mt-4 pt-2">
                        <div class="media blog-box">
                            <div class="bg-white rounded text-center date-box p-3 mr-4"><h2 class="font-weight-lighter mb-0">
                                25</h2>
                                <p class="font-size-15 text-muted text-uppercase font-weight-medium mb-0">2021/5</p></div>
                            <div class="media-body"><p class="font-size-13 text-muted text-uppercase font-weight-medium mb-2">
                                Python</p>
                                <h4 class="font-size-18 mb-3"><a class="text-dark" href="#">windows下安装Python</a></h4>
                                <p class="text-muted mt-2 mb-0">
                                 首先我们。。。。。。。。。。。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-md-6 col-12 mt-4 pt-2">
                        <div class="media blog-box">
                            <div class="bg-white rounded text-center date-box p-3 mr-4"><h2 class="font-weight-lighter mb-0">
                                25</h2>
                                <p class="font-size-15 text-muted text-uppercase font-weight-medium mb-0">2021/5</p></div>
                            <div class="media-body"><p class="font-size-13 text-muted text-uppercase font-weight-medium mb-2">
                                Python</p>
                                <h4 class="font-size-18 mb-3"><a class="text-dark" href="#">windows下安装Python</a></h4>
                                <p class="text-muted mt-2 mb-0">
                                    首先我们。。。。。。。。。。。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-md-6 col-12 mt-4 pt-2">
                        <div class="media blog-box">
                            <div class="bg-white rounded text-center date-box p-3 mr-4"><h2 class="font-weight-lighter mb-0">
                                25</h2>
                                <p class="font-size-15 text-muted text-uppercase font-weight-medium mb-0">2021/5</p></div>
                            <div class="media-body"><p class="font-size-13 text-muted text-uppercase font-weight-medium mb-2">
                                Python</p>
                                <h4 class="font-size-18 mb-3"><a class="text-dark" href="#">windows下安装Python</a></h4>
                                <p class="text-muted mt-2 mb-0">
                                    首先我们。。。。。。。。。。。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-md-6 col-12 mt-4 pt-2">
                        <div class="media blog-box">
                            <div class="bg-white rounded text-center date-box p-3 mr-4"><h2 class="font-weight-lighter mb-0">
                                25</h2>
                                <p class="font-size-15 text-muted text-uppercase font-weight-medium mb-0">2021/5</p></div>
                            <div class="media-body"><p class="font-size-13 text-muted text-uppercase font-weight-medium mb-2">
                                Python</p>
                                <h4 class="font-size-18 mb-3"><a class="text-dark" href="#">windows下安装Python</a></h4>
                                <p class="text-muted mt-2 mb-0">
                                    首先我们。。。。。。。。。。。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
        </section>
        <!-- my blog end -->
        <!-- contact me start -->
        <section class="section" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-4"><h2 class="mb-0 title">联系我<span class="title-border ml-4 pl-3"></span></h2>
                    </div>
                </div><!-- end row -->
                <div class="row">
                    <div class="col-12 mt-4 pt-2">
                        <form method="post" name="myForm" onsubmit="return validateForm()"><p id="error-msg"></p>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mb-4"><input type="text" class="form-control" placeholder="姓名"
                                                                        id="name"/></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group mb-4"><input type="email" class="form-control" placeholder="邮箱"
                                                                        id="email"/></div>
                                </div>
                            </div><!-- end row -->
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group mb-4"><input type="text" class="form-control" placeholder="主题"
                                                                        id="subject"/></div>
                                </div>
                            </div><!-- end row -->
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group mb-4"><textarea class="form-control" placeholder="留言板" rows="5"
                                                                           id="comments"></textarea></div>
                                </div>
                            </div><!-- end row --><input type="submit" id="submit" name="send" class="btn btn-primary"
                                                         value="发送信息"/></form>
                    </div>
                </div>
            </div>
        </section>
        <!-- contact me end -->

        <!-- footer start -->
        <footer class="footer" style="background-color: #000000;">
            <div class="container">
                <div class="row py-sm-5 py-3">
                    <div class="col-lg-4 col-md-3 text-white mt-4"><p class="mb-0">目前北京海淀</p>
                        <p class="mt-2"></p>老家河南</div>
                    <div class="col-lg-3 col-md-3 offset-lg-1 offset-md-1 text-white mt-4"><p class="mb-0">
                        924365319@qq.com</p>
                        <p class="mt-2">15801015924</p></div>
                    <div class="col-lg-3 col-md-4 offset-lg-1 offset-md-1 mt-4">
                        <ul class="list-unstyled">
                            <li class="list-inline d-inline-block social-list"><a
                                    class="list-inline-item rounded mr-2 social-link" href="#"><i class="ri-facebook-fill"></i></a>
                            </li>
                            <li class="list-inline d-inline-block social-list"><a
                                    class="list-inline-item rounded mr-2 social-link" href="#"><i
                                    class="ri-twitter-fill"></i></a></li>
                            <li class="list-inline d-inline-block social-list"><a
                                    class="list-inline-item rounded mr-2 social-link" href="#"><i
                                    class="ri-github-fill"></i></a></li>
                            <li class="list-inline d-inline-block social-list"><a
                                    class="list-inline-item rounded mr-2 social-link" href="#"><i class="ri-instagram-fill"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- end row -->
            </div>
        </footer>
        <!-- end footer -->
    </div>
</template>

<script>

    export default {
        name: 'Home',
        mounted() {
            // const canvas = document.getElementById('canvas');
            // const ctx = canvas.getContext('2d');
            //
            // canvas.height = window.innerHeight;
            // canvas.width = window.innerWidth;
            //
            // const texts = '0123456789'.split('');
            // const fontSize = 16;
            // const columns = canvas.width / fontSize;
            // // 用于计算输出文字时坐标，所以长度即为列数
            // const drops = [];
            // //初始值
            // for (let x = 0; x < columns; x++) {
            //     drops[x] = 1;
            // }
            //
            // function draw() {
            //     //让背景逐渐由透明到不透明
            //     ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            //     ctx.fillRect(0, 0, canvas.width, canvas.height);
            //     //文字颜色
            //     ctx.fillStyle = '#0F0';
            //     ctx.font = fontSize + 'px arial';
            //     //逐行输出文字
            //     for (let i = 0; i < drops.length; i++) {
            //         const text = texts[Math.floor(Math.random() * texts.length)];
            //         ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            //
            //         if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
            //             drops[i] = 0;
            //         }
            //
            //         drops[i]++;
            //     }
            // }
            // setInterval(draw, 45);
            $(window).scroll(function () {
                const a = $(window).scrollTop();
                if (a >= 50) {
                    $(".sticky").addClass("nav-sticky")
                } else {
                    $(".sticky").removeClass("nav-sticky")
                }
            });
            $(".nav-item a, .mouse-down a").on("click", function (b) {
                const a = $(this);
                $("html, body").stop().animate({scrollTop: $(a.attr("href")).offset().top - 0}, 1500);
                b.preventDefault()
            });
            $(".navbar-nav").scrollspy({offset: 70});
            $(window).scroll(function () {
                const a = $(window).scrollTop();
                if (a >= 50) {
                    $(".nav-btn").addClass("active")
                } else {
                    $(".nav-btn").removeClass("active")
                }
            });

            const WINDOW_WIDTH = window.innerWidth;
            const WINDOW_HEIGHT = window.innerHeight;
            let canvas, context;
            const num = 150;
            const stars = [];
            let mouseX = WINDOW_WIDTH / 2;
            let mouseY = WINDOW_HEIGHT / 2;
            let rnd;

            window.onload = function(){
                canvas = document.getElementById('canvas');
                canvas.width = WINDOW_WIDTH;
                canvas.height = WINDOW_HEIGHT;

                context = canvas.getContext('2d');

                addStar();
                setInterval(render,33);
                liuxing();

                // render();
                document.body.addEventListener('mousemove',mouseMove);
            }

            function liuxing(){
                const time = Math.round(Math.random() * 3000 + 33);
                setTimeout(function(){
                    rnd = Math.ceil(Math.random()*stars.length)
                    liuxing();
                },time)
            }

            function mouseMove(e){
                //因为是整屏背景，这里不做坐标转换
                mouseX = e.clientX;
                mouseY = e.clientY;
            }

            function render(){
                context.fillStyle = 'rgba(0,0,0,0.1)';
                context.fillRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
                // context.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT)
                for(let i =0; i<num ; i++){
                    const star = stars[i];
                    if(i === rnd){
                        star.vx = -5;
                        star.vy = 20;
                        context.beginPath();
                        context.strokeStyle = 'rgba(255,255,255,'+star.alpha+')';
                        context.lineWidth = star.r;
                        context.moveTo(star.x,star.y);
                        context.lineTo(star.x+star.vx,star.y+star.vy);
                        context.stroke();
                        context.closePath();
                    }
                    star.alpha += star.ra;
                    if(star.alpha<=0){
                        star.alpha = 0;
                        star.ra = -star.ra;
                        star.vx = Math.random()*0.2-0.1;
                        star.vy = Math.random()*0.2-0.1;
                    }else if(star.alpha>1){
                        star.alpha = 1;
                        star.ra = -star.ra
                    }
                    star.x += star.vx;
                    if(star.x>=WINDOW_WIDTH){
                        star.x = 0;
                    }else if(star.x<0){
                        star.x = WINDOW_WIDTH;
                        star.vx = Math.random()*0.2-0.1;
                        star.vy = Math.random()*0.2-0.1;
                    }
                    star.y += star.vy;
                    if(star.y>=WINDOW_HEIGHT){
                        star.y = 0;
                        star.vy = Math.random()*0.2-0.1;
                        star.vx = Math.random()*0.2-0.1;
                    }else if(star.y<0){
                        star.y = WINDOW_HEIGHT;
                    }
                    context.beginPath();
                    const bg = context.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r);
                    bg.addColorStop(0,'rgba(255,255,255,'+star.alpha+')')
                    bg.addColorStop(1,'rgba(255,255,255,0)')
                    context.fillStyle  = bg;
                    context.arc(star.x,star.y, star.r, 0, Math.PI*3, true);
                    context.fill();
                    context.closePath();
                }
            }

            function addStar(){
                for(let i = 0; i<num ; i++){
                    const aStar = {
                        x: Math.round(Math.random() * WINDOW_WIDTH),
                        y: Math.round(Math.random() * WINDOW_HEIGHT),
                        r: Math.random() * 3,
                        ra: Math.random() * 0.05,
                        alpha: Math.random(),
                        vx: Math.random() * 0.2 - 0.1,
                        vy: Math.random() * 0.2 - 0.1
                    };
                    stars.push(aStar);
                }
            }


        }
    }
</script>

<style type="text/css">
    /*body {*/
    /*    margin: 0;*/
    /*    padding: 0;*/
    /*    overflow: hidden;*/
    /*}*/


    canvas {
        position: absolute;
        z-index: -1;
    }
</style>