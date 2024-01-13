let checkboxs = document.querySelectorAll('#check input');
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
    checkboxs.forEach(checkbox =>{
        if(checkbox.checked){
             type = checkbox.id;
        }
    })
     console.log(type);

     if(type == "moyen"){
        let poid = parseInt(lng.value) - 100 + (parseInt(age.value) / 10)* 0.9 ;
        let large = parseInt(lng.value) - 100 + (parseInt(age.value) / 10)* 0.9 * 0.9 ;
        let res = `<span class="span">${poid}</span> Kg : Votre poidS idéal selon la formule de creff <br> <span class="span">${large}</span> Kg : Votre oids limite à partir duquel il devient excessif`;
        localStorage.setItem("poid", res);
        result.innerHTML = res;
     }else if(type == "mince"){
        let poid = parseInt(lng.value) - 100 + (parseInt(age.value) / 10)* 0.9 * 0.9 ;
        let large = parseInt(lng.value) - 100 + (parseInt(age.value) / 10)* 0.9 * 1.1 ;
        let res = `<span class="span">${poid}</span> Kg : Votre poidS idéal selon la formule de creff <br> <span class="span">${large}</span> Kg : Votre oids limite à partir duquel il devient excessif`;
        localStorage.setItem("poid", res);
        result.innerHTML = res;
     }else if(type == "large"){
        let poid = parseInt(lng.value) - 100 + (parseInt(age.value) / 10)* 0.9 * 1.1 ;
        let res = `<span class="span">${poid}</span> Kg : Votre poidS idéal selon la formule de creff `;
        localStorage.setItem("poid", res);
        result.innerHTML = res;
     }

});
