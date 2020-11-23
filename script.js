// Unsplash API
const count = 10;
const apiKey = '3kzmu_2ai29B0PJk8HvP_5eYWkYntBWqmKZoJCAwy8A';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos From Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch error here
    }
}

// On Load
getPhotos();