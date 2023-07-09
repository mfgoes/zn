// Replace 'YOUR_ACCESS_TOKEN' with your actual access token
const accessToken = 'YOUR_ACCESS_TOKEN';
const dribbbleGallery = document.getElementById('dribbble-gallery');

// Make a request to the Dribbble API
fetch('https://api.dribbble.com/v2/user/shots?access_token=' + accessToken)
  .then(response => response.json())
  .then(data => {
    // Loop through the shots and create HTML elements to display them
    data.forEach(shot => {
      const shotElement = document.createElement('a');
      shotElement.href = shot.html_url;
      shotElement.target = '_blank';

      const imageElement = document.createElement('img');
      imageElement.src = shot.images.normal;

      shotElement.appendChild(imageElement);
      dribbbleGallery.appendChild(shotElement);
    });
  })
  .catch(error => {
    console.log('Error retrieving Dribbble shots:', error);
  });
