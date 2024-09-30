const Events = () => {
    const handleMyEvent = () => {
        console.log('hello console.log')
    };

    const conditionalReturnOfJsx = (x) => {
        if(x){
            return(
                <h1>X = TRUE</h1>
            )
        } else {
            return(
                <h1>X = FALSE</h1>
            )
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Event Button</button>
                <button onClick={() => console.log('It works but it is not a good practice')}>Event Button 02</button>
            </div>

            <div>
                {conditionalReturnOfJsx(true)}
                {conditionalReturnOfJsx(false)}
            </div>
        </div>
    );
}

export default Events