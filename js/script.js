let price;
let format_price;
let tooping_price;
let total = 0

function GetMovie(name, size, format, reg, total) {
    this.name = name;
    this.size = size;
    this.format = format;
    this.reg = reg;
    this.total = total;
};
$(document).ready(function() {
    $("button.proceed").click(function(event) {

        let pName = $(".name option:selected").val();
        let pFormat = $("#size option:selected").val();
        let pTrending = $("#format option:selected").val();
        let preg = [];

        $.each($("input[name='regs']:checked"), function() {
            preg.push($(this).val());
        })

        switch (pFormat) {
            case "0":
                price = 0;
                break;
            case 'Movies_plan':
                price = 1500;
                break;
            case "Series_plan":
                price = 2500;
                break;

            case "Animations_plan":
                price = 1200;
                break;
            case "All_Genre_plan":
                price = 3500;
            default:
                console.log("error")
                _
        }

        switch (pTrending) {
            case "0":
                c_price = 0;
                break;
            case "Movie":
                c_price = 40;
            case "Serie":
                c_price = 30;
            case "Animation":
                c_price = 20;
            default:
                console.log("error");
        }
        let reg_value = preg.length * 100;

        if ((pFormat == "0") && (pTrending == "0")) {
            $("button.proceed").show();
            $("#information").hide();
            $("div.choice").hide();
            alert("Please select the Movie size and format");
        } else {

            $("button.proceed").show();
            $("#information").hide();
            $("div.choice").slideDown(1200);
        }

        total = price + c_price + reg_value;
        let checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;

        $("#Moviename").html($(".name option:selected").val());
        $("#Moviesize").html($("#size option:selected").val());
        $("#Movieformat").html($("#format option:selected").val());
        $("#Moviereg").html(preg.join(", "));
        $("#totals").html(total);

        $("a#ccheckout").click(function() {
            $("a#ccheckout").hide();
            $("a#stream").show();
            $(".wrapper").hide();
            $("#Movietotal").append("Amount Paid: ksh. " + checkoutTotal).show();
            alert("Transaction Successful!!!")
        })
        $("a#stream").click(function() {
            $("a#stream").show();
            $(".wrapper").show();
            $("#Movietotal").hide();

        })



        $("a#refresh").click(function() {
            window.location.reload();
            $("a#refresh").hide();
        })
        $("a#pay").click(function() {
            $("a#pay").hide();
        })


    })
})