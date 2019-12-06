import React from 'react'; // Import React. We can import React all the times that we want

class StorePicker extends React.Component {

    render(){
        // return React.createElement('p', {className: 'hey'}, 'Heyooo'); // Otra forma de añadir elementos
        // return <form action={""} className={"store-selector"}></form>;
        return (
            <React.Fragment>
                {/* Example comment */}
                <p>Fish!</p>
                <form action={""} className={"store-selector"}>
                    <h1>Please Enter A Store</h1>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker; // Export component