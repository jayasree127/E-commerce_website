var search= document.getElementById("search");
var productLists=productContainer.querySelectorAll("div");

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()

    for(count=0;count<productLists.length;count=count+1){
        var productname=productLists[count].querySelector("p").textContent;

        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productLists[count].style.display="none";
        }
        else{
            productLists[count].style.display="block";

        }
    }

}
)