function scoreCount() {
   let score_text = parseInt($("#score").text());
    return score_text + 10;
}
function startTimer() {
    let time =70;
    let timer;
    
    timer = setInterval(function () {
        if (time > 0) {
            time--;
            $(".timer_sec").text(time);
        } else {
            $(".question_container").hide();
            $(".result_box").show();
            $(".complete_text").text("Sorry Time Up")
            $("#score").text(scoreCount())
            time = clearInterval(timer);
        }
    }, 1000);

}

$(document).ready(function () {

    startTimer()

    $(".pick1").click(function () {
        $(".next_btn").show()
        let selectedAnswer = $(this).val();
        let index = $(".pick1").index(this);
        if (selectedAnswer === "2") {
            $(".pick1").eq(index).addClass("bg_green")
            $("#score").text(scoreCount());
         
           
            console.log(startTimer())

        } else {
            $(".pick1").eq(index).addClass("bg_red")
            $(".pick1").eq(1).addClass("bg_green")
        }
        $(".pick1").off();
    })

    $(".pick2").click(function () {
        $(".next_btn").show()
        let selectedAnswer = $(this).val();
        let index = $(".pick2").index(this);
        if (selectedAnswer === "3") {
            $(".pick2").eq(index).addClass("bg_green")
              $("#score").text(scoreCount());
            startTimer()

        } else {
            $(".pick2").eq(index).addClass("bg_red")
            $(".pick2").eq(2).addClass("bg_green")
        }
        $(".pick2").off();
    })

    $(".pick3").click(function () {
        $(".next_btn").show()
        let selectedAnswer = $(this).val();
        let index = $(".pick3").index(this);
        if (selectedAnswer === "2") {
            $(".pick3").eq(index).addClass("bg_green")
              $("#score").text(scoreCount());

        } else {
            $(".pick3").eq(index).addClass("bg_red")
            $(".pick3").eq(1).addClass("bg_green")
        }
        $(".pick3").off();
    })

    $(".pick4").click(function () {
        $(".next_btn").show()
        let selectedAnswer = $(this).val();
        let index = $(".pick4").index(this);
        if (selectedAnswer === "1") {
            $(".pick4").eq(index).addClass("bg_green")
              $("#score").text(scoreCount());

        } else {
            $(".pick4").eq(index).addClass("bg_red")
            $(".pick4").eq(0).addClass("bg_green")
        }
        $(".pick4").off();
    })

    $(".pick5").click(function () {
        $(".next_btn").show()
        let selectedAnswer = $(this).val();
        let index = $(".pick5").index(this);
        if (selectedAnswer === "3") {
            $(".pick5").eq(index).addClass("bg_green")
              $("#score").text(scoreCount());

        } else {
            $(".pick5").eq(index).addClass("bg_red")
            $(".pick5").eq(2).addClass("bg_green")
        }
        $(".pick5").off();
    })

    $(".next_btn").click(function () {
        let scores = parseInt($("#score").text());
        $(".next_btn").hide()
        let next_btn = $(this).val();
        if (next_btn === "1") {
            $(".quest_1").hide();
            $(".quest_2").show();
        } else if (next_btn === "2") {
            $(".quest_2").hide();
            $(".quest_3").show();
        } else if (next_btn === "3") {
            $(".quest_3").hide();
            $(".quest_4").show();
        } else if (next_btn === "4") {
            $(".quest_4").hide();
            $(".quest_5").show();
        } else if (next_btn === "5") {
            $(".question_container").hide();
            if(scores === 50){
                $(".result_box").show();
                $("#score").text(scores)
            }else if (scores <= 20){
                $(".result_box").show();
                $(".complete_text").text("Oh Sorry You Failed")
                $("#score").text(scores)
            }else{
                $(".result_box").show();
                $(".complete_text").text("Very Good")
                $("#score").text(scores)
                
            }
        }
    })
})