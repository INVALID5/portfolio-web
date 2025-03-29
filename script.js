document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scroll-button').addEventListener('click', function () {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbz1dtna6RJMo1kB13WNWJ-GgPYKt4VmflxtDmpyE2WY9l1x4uIvCexAsK49is2WHScK/exec'

const form = document.forms['Contact_Us']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


