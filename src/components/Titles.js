import React from "react";

class Titles extends React.Component {

    render() {

        return (

            <div>

                <h1 className="title-container__title">Weather Forecast</h1>
                <p className="title-container__subtitle"> This app will display the weather in the chosen city</p>
            </div>
        )
    }
}

export default Titles;