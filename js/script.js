let amountElement = document.querySelector(".js-form__fieldAmount");
let currencyElement = document.querySelector(".js-form__fieldCurrency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-form__result");
let usd = 4.23;
let eur = 4.71;
let nok = 0.45;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "USD":
            result = amount / usd;
            break;

        case "EUR":
            result = amount / eur;
            break;

        case "NOK":
            result = amount / nok;
            break;
    }
    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
});














// let heightElelement = document.querySelector(".js-height");
// let formElelement = document.querySelector(".js-form");
// let weightElelement = document.querySelector(".js-weight");
// let bmiElelement = document.querySelector(".js-bmi");

// formElelement.addEventListener("submit", (event) => {
//     event.preventDefault();


//     let height = heightElelement.value;
//     let weight = weightElelement.value;

//     let bmi = weight / ((height / 100) ** 2);

//     bmiElelement.innerText = bmi.toFixed(2);

//     console.log(bmi);
// });







// heightElelement.focus()

// heightElelement.addEventListener("input", () => {
//     console.log(`Aktualny wzrost: ${heightElelement.value}`)
// });

// formElelement.addEventListener("reset", () => {
//     console.log("Formularz został zresetowany")
// });

// formElelement.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log("Formularz został wysłany")
// });



