for(let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', 'square');
    document.getElementById('container').appendChild(square);
}

const buttonPopup = document.createElement('button');
buttonPopup.setAttribute('id', 'popup');
buttonPopup.textContent = 'Customize'
document.getElementById('button').appendChild(buttonPopup);

// let userNumber = ''
buttonPopup.onclick = function buttonChoose(){ 
        const userNumber = window.prompt("Number","4");
            if (userNumber >= 100) {
                window.confirm('Choose number less than 100');
                buttonChoose();
            } else {
                const divs = document.querySelectorAll("#square");
                divs.forEach(div => div.remove())
                for(let i = 0; i < (userNumber*userNumber); i++) {
                    const square = document.createElement('div');
                    square.setAttribute('id', 'square');
                    document.getElementById('container').appendChild(square);
                }
                //  debugger
                 document.documentElement.style.setProperty('--user-number', userNumber);
            }
    }

