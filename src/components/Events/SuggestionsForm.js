import React from "react";
import "./SuggestionsForm.css"

const SuggestionsForm = () => {
    return (
        <div className="events-suggestionsform-wrapper">
            <form>
                <fieldset>
                    <label>
                        <div className="events-suggestionsform-name">
                            <h4>Name</h4>
                            <input type="text" id="name" name="name"/>
                        </div>
                        <div className="events-suggestionsform-email">
                            <h4>Email</h4>
                            <input type="email" id="email" email="email"/>
                        </div>
                        <div className="events-suggestionsform-suggestion">
                            <h4>Suggestion</h4>
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