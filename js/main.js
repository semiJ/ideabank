$(function(){
    // visual 웹퍼블리셔, 이름 노출
    $(".v_job span:nth-child(1)").stop().animate({"opacity":"1", "transform": "translateX(-5px)"}, 200, function(){
        $(".v_job span:nth-child(2)").stop().animate({"opacity":"1", "transform": "translateX(-5px)"}, 200, function(){
            $(".v_job span:nth-child(3)").stop().animate({"opacity":"1", "transform": "translateX(-5px)"}, 200, function(){
                $(".v_job span:nth-child(4)").stop().animate({"opacity":"1", "transform":"translateX(-5px)"}, 200, function(){
                    $(".v_job span:nth-child(5)").stop().animate({"opacity":"1", "transform":"translateX(-5px)"}, 200, function(){
                        $("#visual h3 > span").stop().animate({"opacity":"1"}, 500);
                    })
                });
            });
        });
    });

    // offset
    let baseline = -200;

    let aBoutme = $("#container .aBoutme").offset().top + baseline;
    let bi = $("#container .bi").offset().top + baseline;
    let portfolio = $("#container .portfolio").offset().top + baseline;
    let design = $("#container .design").offset().top + baseline;

    

    //aboutme

    $(window).on("scroll", function(){
        let abou = $(this).scrollTop();
        // console.log(abou); // 스크롤 위치 확인

        if(abou >= aBoutme && abou < bi) {
            $(".myInfo").addClass("infoview");
        } else {
            $(".myInfo").removeClass("infoview");
        };
    });

    $(window).on("scroll", function(){
        let abou = $(this).scrollTop();
        // console.log(abou); // 스크롤 위치 확인

        if(abou >= aBoutme && abou < bi) {
            $(".diligent").addClass("diligentani");
        } else {
            $(".diligent").removeClass("diligentani");
        };
    });

    // bi 노출

    $(window).on("scroll", function(){
        let viewimg = $(this).scrollTop();
        // console.log(viewimg); // 스크롤 위치 확인

        if(viewimg >= bi && viewimg < portfolio) {
            $(".bi_detail").addClass("biview");
        } else {
            $(".bi_detail").removeClass("biview");
        };
    });

    $(window).on("scroll", function(){
        let viewimg = $(this).scrollTop();
        // console.log(viewimg); // 스크롤 위치 확인

        if(viewimg >= bi && viewimg < portfolio) {
            $(".bi_img_main").addClass("imgview");
        } else {
            $(".bi_img_main").removeClass("imgview");
        };
    });

    //coding 영역
    // 숫자 클릭 시 해당하는 포폴 보이기

    $(window).on("scroll", function(){

        let pofolTop = $(this).scrollTop();
        // console.log(pofolTop);

        // if(pofolTop >= portfolio && pofolTop < design){
        //     $(".portfolio .pofol_one").addClass("pofol_active");
        //     $(".portfolio .pofol_one").removeClass("pofol_active");
        // } else if(pofolTop >= portfolio && pofolTop < design){
        //     $(".portfolio .pofol_one").addClass("pofol_active");
        // }

        if(pofolTop >= 2150) {
            $(".portfolio .pofol_one").addClass("pofol_active");   
        } else {
            $(".portfolio .pofol_one").removeClass("pofol_active");
        };

        if(pofolTop >= 2350) {
            $(".portfolio .pofol_tow").addClass("pofol_active");   
        } else {
            $(".portfolio .pofol_tow").removeClass("pofol_active");
        };

        if(pofolTop >= 2550) {
            $(".portfolio .pofol_three").addClass("pofol_active");   
        } else {
            $(".portfolio .pofol_three").removeClass("pofol_active");
        };

        if(pofolTop >= 2750) {
            $(".portfolio .pofol_four").addClass("pofol_active");   
        } else {
            $(".portfolio .pofol_four").removeClass("pofol_active");
        };

    });

    $(".portfolio .pofol_num li").on("click", function(){
        i = $(this).index();

        $(".portfolio .pofol").removeClass("pofol_active");
        $(".portfolio .pofol").eq(i).addClass("pofol_active");
    });

    $(".pofol_num li").on("click", function(){
        i = $(this).index();

        $(".pofol_num li span").removeClass("pofol_title");
        $(".pofol_num li span").eq(i).addClass("pofol_title");
    })


    // design 영역 벌집 자리 잡기

    $(window).on("scroll", function(){

        let sixTop = $(this).scrollTop();
        // console.log(sixTop);

        if(sixTop >= 2800) {
            $(".hexagon").addClass("dsgview");   
        } else {
            $(".hexagon").removeClass("dsgview");
        };

        if(sixTop >= 2900) {
            $(".hexagon2").addClass("dsgview");   
        } else {
            $(".hexagon2").removeClass("dsgview");
        };

        if(sixTop >= 3000) {
            $(".hexagon3").addClass("dsgview");   
        } else {
            $(".hexagon3").removeClass("dsgview");
        };

        if(sixTop >= 3100) {
            $(".hexagon4").addClass("dsgview");   
        } else {
            $(".hexagon4").removeClass("dsgview");
        };

        if(sixTop >= 3200) {
            $(".hexagon5").addClass("dsgview");   
        } else {
            $(".hexagon5").removeClass("dsgview");
        };

        if(sixTop >= 3300) {
            $(".hexagon6").addClass("dsgview");   
        } else {
            $(".hexagon6").removeClass("dsgview");
        };

        if(sixTop >= 3400) {
            $(".hexagon7").addClass("dsgview");   
        } else {
            $(".hexagon7").removeClass("dsgview");
        };
    })

    //클릭 시 이미지 띄우기
    $(".six .honey").on("click", function(){
        $(".designSlide").show();
        i = $(this).index();
        $(".designDetail li").removeClass("designOn");
        $(".designDetail li").eq(i).addClass("designOn");
    });

    $(".designSlide .pofol_close").on("click", function(){
        $(".designSlide").hide();
        i = $(this).index();
        $(".designDetail li").removeClass("designOn");
        $(".designDetail li").eq(i).addClass("designOn");
    });

    // 스크롤 시 top 버튼 노출

    $(window).on("scroll", function(){
        let viewTop = $(this).scrollTop();
        // console.log(viewTop); // 스크롤 위치 확인

        if(viewTop >= 100) {
            $(".ftTop").addClass("ftTopbtn");
        } else {
            $(".ftTop").removeClass("ftTopbtn");
        };
    });
    
});