let radios = document.querySelectorAll('#check input');
let lng = document.querySelector("#lng");
let age = document.querySelector("#age");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");


if(localStorage.length>0){
let data = localStorage.getItem("poid");
console.log(data);
result.innerHTML = data;
}

btn.addEventListener("click", function () {
    let type = "";
    radios.forEach(radio =>{
        if(radio.checked){
             type = radio.id;
        }
    })
     console.log(type);

     if(type == "moyen"){
        let poid = parseInt(lng.value) - 100 + (parseInt(age.value) / 10)* 0.9 ;
        let large = parseInt(lng.value) - 100 + (parseInt(age.value) / 10)* 0.9 * 0.9 ;
        let res = ` votre poid moyenne : ${poid} <br> votre poid large est : ${large}`;
        localStorage.setItem("poid", res);
        result.innerHTML = res;
     }else if(type == "mince"){
        let poid = parseInt(lng.value) - 100 + (parseInt(age.value) / 10)* 0.9 * 0.9 ;
        let large = parseInt(lng.value) - 100 + (parseInt(age.value) / 10)* 0.9 * 1.1 ;
        let res = ` votre poid moyenne : ${poid} <br> votre poid large est : ${large}`;
        localStorage.setItem("poid", res);
        result.innerHTML = res;
     }else if(type == "large"){
        let poid = parseInt(lng.value) - 100 + (parseInt(age.value) / 10)* 0.9 * 1.1 ;
        let res = ` votre poid moyenne : ${poid}`;
        localStorage.setItem("poid", res);
        result.innerHTML = res;
     }

});
