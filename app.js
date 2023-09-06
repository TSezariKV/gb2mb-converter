const gbInput = document.getElementById('gb')
const mbInput = document.getElementById('mb')
const convertButton = document.getElementById('convert-btn')

const gbValue = gbInput.value
const mbValue = mbInput.value

setInterval(() => {
    if(gbInput != gbValue) {
        mbInput.value = gbInput.value * 1024
    } else {
        if(mbInput != mbInput) {
            gbInput.value = mbInput.value / 1024
        }
    }
}, 500);
