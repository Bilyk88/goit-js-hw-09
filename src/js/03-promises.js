const btnCreatePromises = document.querySelector("button");
const delayInput = document.querySelector('input[name="delay"]');
const delayStepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');

btnCreatePromises.addEventListener('click', createPromise);

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
    
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
  });
  
};


const delay = delayInput.value;
const step = Number(delayStepInput.value);
const amount = Number(amountInput.value);
console.log(delay);
  
  for (let i = 0; i < amount; i += 1) {
    const  currentPosition = i + 1;
    const currentDelay = delay + (i - 1) * step;
                    
    createPromise(currentPosition, currentDelay).then(result => {
    console.log(result);
  })
  .catch(result => {
    console.log(result);
  })
  }


   


// createPromise(position, currentDelay)
//   .then(result => {
//     console.log(`✅ Fulfilled promise ${result.position} in ${result.currentDelay}ms`);
//   })
//   .catch(result => {
//     console.log(`❌ Rejected promise ${result.position} in ${result.currentDelay}ms`);
//   });

