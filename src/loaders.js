import url from "./url";

export const indexLoader = async () => {
    const response = await fetch(url)
    const cheese = await response.json()
    return cheese
}

export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(url+id)
    const cheese = await response.json()
    return cheese
}