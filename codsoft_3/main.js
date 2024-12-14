
const input = document.getElementById('myinput');

        function clearInput() {
            input.value = '';
        }
        function btnOne() { input.value += '1'; }
        function btnTwo() { input.value += '2'; }
        function btnThree() { input.value += '3'; }
        function btnFour() { input.value += '4'; }
        function btnFive() { input.value += '5'; }
        function btnSix() { input.value += '6'; }
        function btnSeven() { input.value += '7'; }
        function btnEight() { input.value += '8'; }
        function btnNine() { input.value += '9'; }
        function btnZero() { input.value += '0'; }
        function btnPlus() { input.value += '+'; }
        function btnMinus() { input.value += '-'; }
        function btnMultiply() { input.value += '*'; }
        function btnDivide() { input.value += '/'; }
        function btnResult() {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = 'Error';
            }
        }


