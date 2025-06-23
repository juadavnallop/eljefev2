// ... existing code ...

// Función para mostrar/ocultar el mapa
document.addEventListener('DOMContentLoaded', function() {
    const mapToggleButtons = document.querySelectorAll('.toggle-map-btn');
    
    mapToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mapContainer = this.closest('.location-box').querySelector('.map-container');
            
            if (mapContainer.style.display === 'none' || mapContainer.style.display === '') {
                mapContainer.style.display = 'block';
                this.textContent = 'Ocultar Mapa';
            } else {
                mapContainer.style.display = 'none';
                this.textContent = 'Mostrar Mapa';
            }
        });
    });
});

// ... existing code ...