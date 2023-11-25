const form = document.querySelector(".form");
// const delayInput = document.querySelector('input[name="delay"]');
// const delayStepInput = document.querySelector('input[name="step"]');
// const amountInput = document.querySelector('input[name="amount"]');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { amount, delay, step } = evt.currentTarget.elements;

  for (let i = 0; i < Number(amount.value); i += 1) {

    const position = i + 1;
    const currentDelay = Number(delay.value) + i * Number(step.value);
                      
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });;
  };
  // form.reset();

}
  
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  
    setTimeout(() => {
        
        const shouldResolve = Math.random() > 0.3;

        if (shouldResolve) {
          resolve({position, delay});
        } else {
          reject({position, delay});
        }
    }, delay);
    
    });

}