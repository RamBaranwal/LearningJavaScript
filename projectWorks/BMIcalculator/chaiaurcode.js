const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  // const height = parseInt(document.querySelector('#height').value;
  // const weight = parseInt(document.querySelector('#weight').value);
  const heightInput = document.querySelector('#height');
  const weightInput = document.querySelector('#weight');

  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);
  const result = document.querySelector('#results');

  document.querySelectorAll('.error').forEach( function (error) {
    error.remove();
  });

  let valid = true;

  if (height === '' || isNaN(height) || height <= 0) {
    // directly affect the results
    // results.innerHTML = `Please give valid height: ${height}`;
    const p = document.createElement('p');
    p.className = 'error';
    const text = document.createTextNode(`Please give valid height: ${heightInput.value}`);
    p.append(text);
    // Add error after height input'
    console.log(heightInput.parentElement);
    heightInput.parentElement.append(p);
    valid = false;
  }


  if (weight === '' || isNaN(weight) || weight <= 0) {
    const p = document.createElement('p');
    p.className = 'error';
    p.textContent = `Please give valid weight: ${weightInput.value}`;
    // Add error after weight input
    weightInput.parentElement.append(p);
    valid = false;
  }


  
  if(!valid){
    return;
  }

  let final = (weight / ((height * height) / 10000)).toFixed(2);
  final = parseFloat(final);

  if(final < 18.6){
    result.innerHTML = `
    <p>BMI: ${final}</p>
    <p>!You are underWeigth</p>
    `;
  }
  else if(final >= 18.6 && final <= 24.9){
    result.textContent = `BMI: ${final} You have into normal Category`;
  }
  else{
    result.innerHTML = `
      <p>BMI: ${final}</p>
      <p>!You are overWeigth</p>
    `
  }

});
