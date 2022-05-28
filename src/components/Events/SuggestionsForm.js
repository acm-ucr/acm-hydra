import React from "react";
import "./SuggestionsForm.css"

const SuggestionsForm = () => {
    return (
        <div className="events-suggestionsform-wrapper">
            <form>
                <fieldset>
                    <label id="events-suggestionsform-gridwrapper">
                        <div className="events-suggestionsform-name">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name"/>
                        </div>
                        <div className="events-suggestionsform-email">
                            <label for="email">Email</label>
                            <input type="email" id="email" email="email"/>
                        </div>
                        <div className="events-suggestionsform-suggestion">
                            <label for="suggestion">Suggestion</label>
                            <textarea id="suggestion" suggestion="suggestion"/>
                        </div>
                        <div className="events-suggestionsform-submit">
                            <button type="button">Submit</button>
                        </div>
                    </label>
                </fieldset>
            </form>

        </div>
    )
}
export default SuggestionsForm
