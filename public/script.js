fetch('http://localhost:5000/api/gifts')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('gifts');
    data.forEach(gift => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${gift.name}</h2>
        <img src="${gift.image}" alt="${gift.name}" width="200"/>
        <p>${gift.desc}</p>
      `;
      container.appendChild(div);
    });
  });