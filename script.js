// alert("loading");
function addNewField() {
    // console.log("Adding new field")
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder','Enter here');
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder','Enter here');
    let aqOb=document.getElementById("aq"); 
    let aqAddButtonOb=document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}


// Genrating cv
function generateCv(){
    // console.log("Genrating Cv")
    let nameField = document.getElementById('nameField').value;

    let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML=nameField;

    //direct 

    document.getElementById('nameT2').innerHTML=nameField;
    //CONTACT
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    //address
    document.getElementById('addressT').innerHTML=document.getElementById('AddressFiled').value;

    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;
    document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;


    //objective
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;


    //work experince
    let wes=document.getElementsByClassName('weField');
    let str = "";

    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //acadmic qualification
    let aqs=document.getElementsByClassName('aqField'); 
    let str1 = "";

    for(let e of aqs){
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    //selecct img
    let file=document.getElementById('imgField').files[0];

    console.log(file);

    let reader=new FileReader()

    reader.readAsDataURL(file);
    console.log(reader.result);

    // set the image
    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    };


    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

//print cv
function printCV(){
    window.print();
}


