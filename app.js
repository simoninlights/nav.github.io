document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.querySelector('#num1')
    const num2 = document.querySelector('#num2')
    const addBtn = document.querySelector('#add')
    const subBtn = document.querySelector('#sub')
    const output = document.querySelector('#output')

    function getInputValues() {
        const value1 = +num1.value // value here gives us the result in input (realted to DOM node)
        const value2 = +num2.value

        return [value1, value2] // returning two elements of this array where value1 for 
    }                           //num1 input stands for index 0 and value2 which is element of the second input stands for 1

    function addHandler() { //funtion for Adddition
        const values = getInputValues() //getting array 'values' callinng the function getInputValues()
        console.log(values)
        const result = values[0] + values[1]
        displayResult(result)
    }

    function subHandler() { //function for Substraction 
        const values = getInputValues()
        const result = values[0] - values[1]
        displayResult(result)
    }

    function displayResult(result) {
        output.closest('.card').style.display = 'block'
        output.innerHTML = `Результат ${result}`
        console.trace()
    }
    

    //console.log(addBtn)

    addBtn.addEventListener('click', addHandler)
    subBtn.addEventListener('click', subHandler)

})


console.table(document)
