import React from 'react'; // Import React. We can import React all the times that we want
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    storeName = React.createRef();

    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        console.log(this.storeName);
        // 3. Change the page to /store/whatever-they-entered
        console.log('Going to Store');
    }
    render(){
        console.log(this);
        return (
            <form action={""} className={"store-selector"} onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input ref={this.storeName} type={"text"} required placeholder={"Store name"} defaultValue={getFunName()} />
                <button type={"submit"} onClick={this.handleClick}>Visit store</button>
            </form>
        )
    }
}

export default StorePicker; // Export component