var name1 = document.getElementById("name1");
var name2 = document.getElementById("name2");
var cont = document.querySelector('#second-cont');
var out_name1 = document.getElementById("r_name1");
var out_name2 = document.getElementById("r_name2");
var out_per = document.getElementById("per");
var out_back = document.getElementById("back");

function result() {
    var random_number = Math.round(Math.random()* (100 - 21) + 20);
    if (name1.value!="" && name2.value!="") {
                var random_number = Math.round(Math.random()* (100 - 1) + 0);
                cont.style.top = 0;
                out_name1.innerText = name1.value;
                out_name2.innerText = name2.value;
                out_per.innerText = random_number + "%";           
    }

out_back.onclick = () =>{
    cont.style.top = "-100%";
}
}
