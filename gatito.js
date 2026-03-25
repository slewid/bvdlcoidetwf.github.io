var pet = 0;

function gatito() {
    console.log("gatito");
    let val = prompt("gatito?");

    if (val.toLowerCase().startsWith("y"))
        window.location = "https://drewfitzgerald.co.nz";
}

function pet_getty() {
    pet+=1;

    document.getElementById('c').innerHTML =  pet;
}