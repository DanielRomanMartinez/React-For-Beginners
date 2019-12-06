import React from 'react'; // Import React. We can import React all the times that we want
import { getFunName } from "../helpers";

class StorePicker extends React.Component {

    render(){
        return (
            <form action={""} className={"store-selector"}>
                <h2>Please Enter A Store</h2>
                <input type={"text"} required placeholder={"Store name"} defaultValue={getFunName()} />
                <button type={"submit"}>Visit store</button>
            </form>
        )
    }
}

export default StorePicker; // Export component