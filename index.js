const test = document.getElementById("test");
const result = document.getElementById("result-num");
const resultSection = document.getElementById("result");

const mainTitle = document.getElementById("main-title");

document.getElementById("submit-button").addEventListener("click", function(event){
    event.preventDefault()
  });

function calculate() {     

    let resultAmount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    test.style.display = "none";
    resultSection.style.display = "block";
    result.innerHTML = 100 - resultAmount;

}

mainTitle.addEventListener("click", function() {
    location.reload();    
})