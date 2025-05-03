/*
1.if error is their then how to add transistion
2.using transistion increase height 
*/

const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")



async function generateQR() {

    if(qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img")
    }
    else{
        qrText.classList.add('error')
        setTimeout(()=>{
            qrText.classList.remove('error')
        },1000)
    }
    
}