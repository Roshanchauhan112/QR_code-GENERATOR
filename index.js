const qrinput = document.getElementById('qr-input')
const qrimg = document.getElementById('qr-img')
const qrbutton = document.getElementById('qr_button')

console.log(qrinput,qrimg,qrbutton);

qrbutton.addEventListener('click' , function(){
debugger;
    const inputValue = qrinput.value;

    if (!inputValue){
        alert("Plese Enter a valid URL")
    }
    else{
        console.log("good job");
        var appendvalue = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.setAttribute("src",appendvalue);
        qrimg.alt = `Qr code for ${inputValue}`;
    }    
})
