export const fetchCurrentPhoto = () => {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY/')
}