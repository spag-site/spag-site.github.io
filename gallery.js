let galleryData = `https://raw.githubusercontent.com/spag-site/spag-site.github.io/refs/heads/main/gallery.json`;
const obj = JSON.parse(galleryData);

const gallery = getElementById('gallery');

gallery.innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName;
