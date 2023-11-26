import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector(".form");

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { amount, delay, step } = evt.currentTarget.elements;

  for (let i = 0; i < Number(amount.value); i += 1) {

    const position = i + 1;
    const currentDelay = Number(delay.value) + i * Number(step.value);
                      
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
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