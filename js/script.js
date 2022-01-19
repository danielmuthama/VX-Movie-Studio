let price ;
let format_price;
let tooping_price ;
let total = 0

function GetPizza (name,size,format,topping,total){
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
        c_price = 400;
        case "Grind":
        c_price = 400; 
        case "The Woman":
        c_price = 400;
        default:
        console.log("error");
}
      let topping_value = pTopping.length * 100;

      if((pFormat == "0") && (pTrending == "0")){
        $("button.proceed").show();
        $("#information").show();
        $("div.choice").hide();
        alert("Please select the Pizza size and format");
      }
      else {
    
        $("button.proceed").hide();
        $("#information").hide();
        $("div.choice").slideDown(1200);
      }
    
      total = price + c_price + topping_value;
      let checkoutTotal = 0;
      checkoutTotal = checkoutTotal + total;

      $("#pizzaname").html($(".name option:selected").val());
      $("#pizzasize").html( $("#size option:selected").val());
      $("#pizzaformat").html($("#format option:selected").val());
      $("#pizzatopping").html(pTopping.join(", "));
      $("#totals").html(total);

      $("button.addPizza").click(function(){
        let pName = $(".name option:selected").val();
        let pFormat = $("#size option:selected").val();
        let pTrending = $("#format option:selected").val();
        let pTopping = []; 
    
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
        }
              
        switch(pTrending){
             case "0":
             c_price = 0;
              break;
             case "Ondine":
             c_price = 400;
             case "Grind":
             c_price = 400; 
             case "The Woman":
             c_price = 400;
             default:
             console.log("error");
    }
    

    let topping_value = pTopping.length * 100;
    total = price + c_price + topping_value;


    checkoutTotal = checkoutTotal + total;
   

    newOrder = new GetPizza(pName,pFormat,pTrending,pTopping,total);
    $("#ordersmade").append(`<tr><td id="pizzaname">`+newOrder.name +`</td><td id="pizzasize"> `+ newOrder.size +`</td><td id="pizzasize"> `+ newOrder.format +`</td><td id="pizzasize"> `+ newOrder.topping +`</td><td id="pizzasize"> `+ newOrder.total +`</td></tr>`);
  })

  $("button#checkout").click(function(){
    $("button#checkout").hide();
    $("button.addPizza").hide();
    $("button#deliver").slideDown(1000);
    $("#pizzatotal").append("Your bill is ksh. " +  checkoutTotal);
  })
  $("button.deliver").click(function(){
    $(".pizzatable").hide();
    $(".choice h2").hide();
    $(".delivery").slideDown(1000);
    $("#addedprice").hide();
    $("button.deliver").hide();
    $("#pizzatotal").hide();

    let deliveryAmount = checkoutTotal + 150;
    $("#totalbill").append("Your bill plus delivery fee is: "+ deliveryAmount);
  })

  $("button#final-order").click(function(event){
    event.preventDefault();
    $("#pizzatotal").hide();
    $(".delivery").hide();
    $("button#final-order").hide();
    let deliceryAmount = checkoutTotal+ 150;

    let person = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();

    if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
      $("#finallmessage").append(person+", We have received your request will send to  "+location+ " ASAP. Please ensure you pay ksh. "+ deliceryAmount);
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