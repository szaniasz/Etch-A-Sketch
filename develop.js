for(let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', 'square');
    square.setAttribute('class', 'square');
    document.getElementById('container').appendChild(square);
}

document.querySelectorAll('.square').forEach(el => el.addEventListener("mouseover", e => {
    el.classList.toggle("square-black");
})
);

let square = document.querySelectorAll('.square');

const buttonPopup = document.createElement('button');
buttonPopup.setAttribute('id', 'popup');
buttonPopup.textContent = 'Customize'
document.getElementById('button').appendChild(buttonPopup);

buttonPopup.onclick = function buttonChoose(){ 
        const userNumber = window.prompt("Choose a number of squares per side","4");
            if (userNumber > 100) {
                window.confirm('100 is the maximum amount of squares per side');
                buttonChoose();
                document.querySelectorAll('.square').forEach(el => el.addEventListener("mouseover", e => {
                    el.classList.toggle("square-black");
                })
                );
            } else {
                const divs = document.querySelectorAll("#square");
                divs.forEach(div => div.remove())
                for(let i = 0; i < (userNumber*userNumber); i++) {
                    const square = document.createElement('div');
                    square.setAttribute('id', 'square');
                    square.setAttribute('class', 'square');
                    document.getElementById('container').appendChild(square);
                }
                 document.documentElement.style.setProperty('--user-number', userNumber);
                 square = document.querySelectorAll('.square');     
                }
                document.querySelectorAll('.square').forEach(el => el.addEventListener("mouseover", e => {
                    el.classList.toggle("square-black");
                })
                );
    }
