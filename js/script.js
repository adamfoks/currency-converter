{
    const calculateResult = (amount, currency) => {
        const usd = 4.23;
        const eur = 4.71;
        const nok = 0.45;

        switch (currency) {
            case "USD":
                return amount / usd;

            case "EUR":
                return amount / eur;

            case "NOK":
                return amount / nok;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-form__result");

        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-form__fieldAmount");
        const currencyElement = document.querySelector(".js-form__fieldCurrency");


        const amount = +amountElement.value;
        const currency = currencyElement.value;


        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}














// const heightElelement = document.querySelector(".js-height");
// const formElelement = document.querySelector(".js-form");
// const weightElelement = document.querySelector(".js-weight");
// const bmiElelement = document.querySelector(".js-bmi");

// formElelement.addEventListener("submit", (event) => {
//     event.preventDefault();


//     const height = heightElelement.value;
//     const weight = weightElelement.value;

//     const bmi = weight / ((height / 100) ** 2);

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



