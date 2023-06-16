export const generateId = () => {
    return String(Math.floor(Math.random() * 100)) + String(Date.now())
}