import url from "./url";

export const indexLoader = async () => {
    const response = await fetch(url)
    const cheese = await response.json()
    return cheese
}