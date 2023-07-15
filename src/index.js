const form = document.querySelector('form');
    const showList = document.getElementById('show-list');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const inputShow = document.getElementById('input-show');
      const query = inputShow.value.trim();

      if (query !== '') {
        const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

        fetch(url)
          .then(response => response.json())
          .then(data => {
            showList.innerHTML = '';

            data.forEach(item => {
              const show = item.show;
              const showData = `
                <div>
                  <img src="${show.image && show.image.medium}">
                  <div>
                    <h1>${show.name}</h1>
                    <p>${show.summary}</p>
                  </div>
                </div>
              `;
              showList.insertAdjacentHTML('beforeend', showData);
            });
          })
      }
    });