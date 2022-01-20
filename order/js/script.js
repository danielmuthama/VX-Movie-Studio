let price ;
let format_price;
let tooping_price ;
let total = 0

function GetMovie (name,size,format,topping,total){
    this.name = name;
    this.size = size;
    this.format= format;
    this.topping = topping;
    this.total = total;
  };
  $(document).ready(function(){
    $("button.proceed").click(function(event){
      
      let pName = $(".name option:selected").val();
      let pFormat = $("#size option:selected").val();
      let pTrending = $("#format option:selected").val();
      let pTopping = [];
  
      $.each($("input[name='toppings']:checked"),function(){
        pTopping.push($(this).val());
      })

      switch(pFormat){
        case "0":
          price= 0;
          break;
        case 'mp4':
          price = 1200;
          break;
        case "mov":
          price = 900;
          break;
        case "wmv":
          price = 600;
        default:
          console.log("error");
      }
  
      switch(pTrending){
        case "0":
        c_price = 0;
         break;
        case "Ondine":
        c_price = 40;
        case "Grind":
        c_price = 40; 
        case "The Woman":
        c_price = 40;
        default:
        console.log("error");
}
      let topping_value = pTopping.length * 100;

      if((pFormat == "0") && (pTrending == "0")){
        $("button.proceed").show();
        $("#information").show();
        $("div.choice").hide();
        alert("Please select the Movie size and format");
      }
      else {
    
        $("button.proceed").show();
        $("#information").hide();
        $("div.choice").slideDown(1200);
      }
    
      total = price + c_price + topping_value;
      let checkoutTotal = 0;
      checkoutTotal = checkoutTotal + total;

      $("#Moviename").html($(".name option:selected").val());
      $("#Moviesize").html( $("#size option:selected").val());
      $("#Movieformat").html($("#format option:selected").val());
      $("#Movietopping").html(pTopping.join(", "));
      $("#totals").html(total);

  $("button#checkout").click(function(){
    $("button#checkout").hide();
    $("button.addMovie").hide();
    $("button#deliver").slideDown(1000);
    $("#Movietotal").append("Your bill is ksh. " +  checkoutTotal);
  })
  $("button.deliver").click(function(){
    $(".Movietable").hide();
    $(".choice h2").hide();
    $(".delivery").slideDown(1000);
    $("#addedprice").hide();
    $("button.deliver").hide();
    $("#Movietotal").hide();

    let deliveryAmount = checkoutTotal;
    $("#totalbill").append("Your bill plus delivery fee is: "+ deliveryAmount);
  })

  $("button#final-order").click(function(event){
    event.preventDefault();
    $("#Movietotal").hide();
    $(".delivery").hide();
    $("button#final-order").hide();
    let deliceryAmount = checkoutTotal;

    let person = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();

    if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
      $("#finallmessage").append(person+", We have received your request we will send the feedback at  "+location+ " ASAP. Please ensure you pay ksh. "+ deliceryAmount);
      $("#totalbill").hide();
      $("#finallmessage").slideDown(1200); 
    }else{
      alert("Please fill in the delivery details");
      $(".delivery").show();
      $("button#final-order").show();
    }

  })
  event.preventDefault();
  })
})