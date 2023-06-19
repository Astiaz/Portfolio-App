export const getENV = () => {
    return {
        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_SERVICE_ID: import.meta.env.VITE_SERVICE_ID
    }
}