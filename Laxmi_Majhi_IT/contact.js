document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Uncomment the section you need or use both if necessary
  
    // Save data to local storage
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactMessage', message);
    alert('Data saved locally.');
  
    // Create a string with the form data
    var data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  
    // Create a Blob from the data
    var blob = new Blob([data], { type: 'text/plain' });
  
    // Create an anchor element and use it to download the blob
    var downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'contactData.txt';
  
    // Append the link, trigger the download, and remove the link
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  
    // Notify user of the text file download
    alert('Data saved as a text file.');
  
    // Clear the form after submission
    document.getElementById('contactForm').reset();
  });
  