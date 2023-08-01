const gbInput = document.getElementById('gb')
const mbDisplay = document.getElementById('mb-display')
const convertButton = document.getElementById('convert-btn')

function convert() {
    let gbInputValue = gbInput.value
    let mb = gbInputValue * 1024

    mbDisplay.innerHTML = mb
}

convertButton.addEventListener('click', convert)