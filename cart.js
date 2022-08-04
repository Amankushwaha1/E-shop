
cart = new Array();
cart.push("apple","redmi");

function addtocart(){
cart.push(document.getElementById("tv").value);
prompt(cart);
}

function showcart(){

    let text="<ul>";
    for(let i=0;i<cart.length;i++){
        text+="<li>" + cart[i] + "</li>";
    }
    text+="</ul>";
    document.getElementById("cartlist").innerHTML=text;
}
