// URL to fetch the JSON file
let galleryDataUrl = "https://raw.githubusercontent.com/spag-site/spag-site.github.io/main/gallery.json";

// Fetch the JSON data
fetch(galleryDataUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
    // Get the gallery div
    const gallery = document.getElementById('gallery');

    // Clear the gallery content
    gallery.innerHTML = '';

    // Iterate through the data and create <details> sections
    data.employees.forEach(employee => {
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      const detailsContent = document.createElement('div');

      // Set the summary text (e.g., employee's name)
      summary.textContent = `${employee.firstName} ${employee.lastName}`;

      // Set the details content (e.g., additional info about the employee)
      detailsContent.innerHTML = `
        <p>Position: ${employee.position}</p>
        <p>Email: ${employee.email}</p>
      `;

      // Append summary and content to details
      details.appendChild(summary);
      details.appendChild(detailsContent);

      // Append the details element to the gallery div
      gallery.appendChild(details);
    });
  })
  .catch(error => {
    console.error('Error fetching or processing gallery data:', error);
  });
