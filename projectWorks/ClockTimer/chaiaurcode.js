const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

// let date = new Date();
// const curr = date.toLocaleTimeString();
// console.log(curr);

// for 24 hours this is used and next one after this is override this function so we see that only if we run the below one
// to see this comment second one and uncomment this one
// --------------------------------------------------
// setInterval(function() {
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);
// --------------------------------------------------

setInterval(function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString('en-Us', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}, 1000);

// we can do changes to 1000 -> 2000 ms