$(function(){
    // 페이지 변경

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

    // bi 노출

    $(window).on("scroll", function(){
        let viewimg = $(this).scrollTop();
        // console.log(viewimg); // 스크롤 위치 확인

        if(viewimg >= 1200 && viewimg < 2600) {
            $(".bi_detail").addClass("biview");
        } else {
            $(".bi_detail").removeClass("biview");
        };
    });

    //coding 영역 자리 잡기



    // design 영역 벌집 자리 잡기

    $(window).on("scroll", function(){

        let sixTop = $(this).scrollTop();
        // console.log(sixTop);

        if(sixTop >= 2700) {
            $(".hexagon").addClass("dsgview");   
        } else {
            $(".hexagon").removeClass("dsgview");
        };

        if(sixTop >= 2800) {
            $(".hexagon2").addClass("dsgview");   
        } else {
            $(".hexagon2").removeClass("dsgview");
        };

        if(sixTop >= 2900) {
            $(".hexagon3").addClass("dsgview");   
        } else {
            $(".hexagon3").removeClass("dsgview");
        };

        if(sixTop >= 3000) {
            $(".hexagon4").addClass("dsgview");   
        } else {
            $(".hexagon4").removeClass("dsgview");
        };

        if(sixTop >= 3100) {
            $(".hexagon5").addClass("dsgview");   
        } else {
            $(".hexagon5").removeClass("dsgview");
        };

        if(sixTop >= 3200) {
            $(".hexagon6").addClass("dsgview");   
        } else {
            $(".hexagon6").removeClass("dsgview");
        };

        if(sixTop >= 3300) {
            $(".hexagon7").addClass("dsgview");   
        } else {
            $(".hexagon7").removeClass("dsgview");
        };
    })

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