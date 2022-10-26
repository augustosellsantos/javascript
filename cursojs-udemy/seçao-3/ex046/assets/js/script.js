function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        start() {
            this.clickButton();
            this.pressionaEnter();
            this.pressionaBackSpace();
        },
        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if(e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.resultado();
                }
            });
        },
        clearDisplay() {
            this.display.value = '';
        },
        clearOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        resultado() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            }   catch(e) {
                alert('Conta inválida');
                return;
            } 
        },
        clickButton() {
            document.addEventListener('click', e => {
                const eleme = e.target;
                if(eleme.classList.contains('btn-numb')) {
                    this.btnToDisplay(eleme.innerText);
                }
                if(eleme.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(eleme.classList.contains('btn-del')) {
                    this.clearOne();
                }
                if(eleme.classList.contains('btn-eq')) {
                    this.resultado();
                }
            });
        },
        btnToDisplay(valor) {
            this.display.value += valor;
        }
    };
}
const calculadora = criaCalculadora();
calculadora.start();