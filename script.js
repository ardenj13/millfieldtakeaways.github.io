const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')
  
 /* portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover',() => {
      portfolioItem.childNodes[1].classList.add('img-darken');
    })
  

    portfolioItem.addEventListener('mouseout',() => {
      portfolioItem.childNodes[1].classList.remove('img-darken');
    })
  })*/

function popup(){
    var name = document.getElementById("name").value;
    var order = document.getElementById("order").value;
    var drink = document.getElementById("drink").value;
    alert("Thank you "+name+", your order has been confirmed.");
    console.log(name);
    
}

function display(){
return name;
}

