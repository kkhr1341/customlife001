var smartphoneFlg = false;
if( ( navigator.userAgent.indexOf('iPhone') > 0
   || navigator.userAgent.indexOf('Android') > 0)) {
   smartphoneFlg = true;
}

$(function($) {

    var speed = "急いでない";
    $('.nstSlider').nstSlider({
        "left_grip_selector": ".leftGrip",
        "value_changed_callback": function(cause, leftValue, rightValue) {
            switch(leftValue){
                case 1: speed = "いつでも" ; break;
                case 2: speed = "急いでいない"; break;
                case 3: speed = "普通"; break;
                case 4: speed = "すこし急いでいる"; break;
                case 5: speed = "超急いでいる"; break;
                default: speed = "普通"; break;
            }
            $(".leftLabel img").attr("src","/assets/image/contact/speed-"+leftValue+".png");
            $(".leftLabel span").text(speed);
            $("input[name=speed]").val(speed);
        }
    });

    var yosanFlg = false;
    $("[type=checkbox]").on("click",function(){
        if( $(this).val() == "採用について" ){
            $(this).attr("checked",false);
            showModalWindow("sorry-view");
        }

        yosanFlg = false;
        $("[type=checkbox]:checked").map(function() {
            if( 
                $(this).val() == "特設サイトの依頼" ||
                $(this).val() == "記事広告の依頼" ||
                $(this).val() == "プロモーション全般のご相談" ||
                $(this).val() == "地獄のミサワへの依頼" ||
                $(this).val() == "小野ほりでいへの依頼"           
                ){
                if( smartphoneFlg ){
                    $(".yosan").css({
                        display: "block"
                    });                    
                }else{
                    $(".yosan").css({
                        display: "inline-block"
                    });                    
                }
                yosanFlg = true;
                return false;
            }
        });

        if( !yosanFlg ){
            $(".yosan").hide();
        }

    });

});
