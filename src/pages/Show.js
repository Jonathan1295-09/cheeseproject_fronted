import {Link, useLoaderData, Form} from 'react-router-dom';

function Show (props) {
    const post = useLoaderData()

    const div = {
        textAlign: "center",
        border: "3px solid yellow",
        width: "80%",
        margin: "30px auto"
    }

    return (
        <div style={div}>
            <h1>{post.name}</h1>
            <h2>{post.countryoforigin}</h2>
            <h2>{post.type}</h2>
            <div style={{ textAlign: "center" }}>
                <h2>Update Cheese</h2>
                <Form method="post" action= {`/update/${post.id}`}>
                    <input type="text" name="name" defaultValue={post.name}/>
                    <input type="text" name="countryoforigin" defaultValue={post.countryoforigin}/>
                    <input type="text" name="type" defaultValue={post.type}/>
                    <button>Update Cheese</button>
                </Form>
            </div>
        <Link to="/">Back to Index</Link>
        <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete Cheese</button>
        </Form>
    </div>
    );
}

export default Show;