document.addEventListener("DOMContentLoaded", function() {
    const listTypeSelect = document.getElementById('listType');
    const listContainer = document.getElementById('list');

    listTypeSelect.addEventListener('change', function() {
        fetchData(listTypeSelect.value);
    });

    fetchData('people');

    function fetchData(type) {
        fetch(`https://swapi.py4e.com/api/${type}/`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                displayData(data.results, type);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function displayData(data, type) {
        listContainer.innerHTML = '';
        data.forEach(item => {
            const listItem = document.createElement('li');
            let displayInfo = '';
            if (type === 'people') {
                displayInfo = `
                    <span>Name:</span> ${item.name}<br>
                    <span>Gender:</span> ${item.gender}<br>
                    <span>Height:</span> ${item.height}<br>
                    <span>Weight:</span> ${item.mass}<br>
                `;
            } else if (type === 'films') {
                displayInfo = `
                    <span>Title:</span> ${item.title}<br>
                    <span>Director:</span> ${item.director}<br>
                    <span>Release Date:</span> ${item.release_date}<br>
                    <span>Opening Crawl:</span> ${item.opening_crawl}<br>
                `;
            } else if (type === 'vehicles') {
                displayInfo = `
                    <span>Name:</span> ${item.name}<br>
                    <span>Model:</span> ${item.model}<br>
                    <span>Manufacturer:</span> ${item.manufacturer}<br>
                    <span>Cost in credits:</span> ${item.cost_in_credits}<br>
                `;
            }
            listItem.innerHTML = displayInfo;
            listContainer.appendChild(listItem);
        });
    }
});
