// Smooth scrolling to section when clicking on navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const sectionId = this.getAttribute('href');
      const targetSection = document.querySelector(sectionId);
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Display a confirmation message when the form is submitted
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Simulate form submission (replace with actual submission code)
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
  
    // Create an XMLHttpRequest object to send the form data to the server
    const xhr = new XMLHttpRequest();
    const url = form.action;
    const params = `name=${name}&email=${email}&message=${message}`;
  
    // Send a POST request to the server
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Display confirmation message
        alert('Thank you for your message!');
        form.reset();
      }
    };
  
    // Send the form data to the server
    xhr.send(params);
  });