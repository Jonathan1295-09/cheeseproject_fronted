import url from "./url";
import { redirect } from "react-router-dom"

//create Action for Creating a new cheese
export const createAction = async({request}) => {
    const formData = await request.formData();
    const newCheese = {
        name: formData.get("name"),
        countryorigin: formData.get("country origin"),
        type: formData.get("type")
    }
    await fetch(url, {
        method:"post",
        headers: {
            "Content-Type": "applications/json"
        },
        body:JSON.stringify(newCheese)
    })
    return redirect("/")
}

// update action 
export const updateAction = async({request,params}) => {
    const id = params.id
    const formData = await request.formData();
    const updatedCheese = {
        name: formData.get("name"),
        countryorigin: formData.get("contry origin"),
        type: formData.get("type")
    }

    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheese)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}

export const deleteAction = async({params}) => {
    const id = params.id
    await fetch(url + id, {
        method: "delete"
    })
    return redirect("/")
}