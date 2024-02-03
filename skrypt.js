
function loadServiceDetails(serviceName) {
    return fetch('services_data.json')
        .then(response => response.json())
        .then(data => {
            const service = data.services.find(s => s.name === serviceName);
            if (service) {
                return service;
            } else {
                throw new Error('Dane o usłudze nie znalezione');
            }
        });
    }
            

    
        document.getElementById('prices').addEventListener('click', function(event) {
    if (event.target.className.includes('price')) {
        const serviceName = event.target.textContent.trim();
        loadServiceDetails(serviceName)
            .then(details => {
                const userChoice = confirm('Usługa: ' + serviceName + '\nCzas Trwania: ' + details.duration + '\nCena: ' + details.cost + '\n\nCzy chcesz zobaczyć więcej szczegółów?');
                if (userChoice) {
                
                    window.open('service_page.html?service=' + encodeURIComponent(serviceName), '_blank');
                }
            })
            .catch(error => {
                alert(error);
            });
    }
});

