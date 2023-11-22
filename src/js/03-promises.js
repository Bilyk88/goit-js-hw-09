const btnCreatePromises = document.querySelector("button");
const delayInput = document.querySelector('input[name="delay"]');
const delayStepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
console.log(delayStepInput);

btnCreatePromises.addEventListener('click', createPromise);

function createPromise(position, delay) {

  return promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
  });
  
};

function handleSubmit() {
  
  const amount = parseInt(amountInput.value);
  const delay = parseInt(delayInput.value);
  const step = parseInt(delayStepInput.value);

  for (let i = 0; i < amount; i += 1) {
    const position = i + 1;
    const currentDelay = delay + i * step;
                
    createPromise(position, currentDelay);
  }
};

   


createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

