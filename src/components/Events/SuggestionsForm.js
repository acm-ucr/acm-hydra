import React from "react";

const SuggestionsForm = () => {
    return (
        <div className="events-suggestionsform-wrapper">
            <form>
                <fieldset>
                    <label>
                        <div className="events-suggestionsform-name">
                            <h4>Name</h4>
                            <input name="name " />
                        </div>
                        <div className="events-suggestionsform-email">
                            <h4>Email</h4>
                            <input email="email " />
                        </div>
                        <div className="events-suggestionsform-suggestion">
                            <h4>Suggestion</h4>
                            <input feedback="suggestion " />
                        </div>
                    </label>
                </fieldset>
            </form>
        </div>
    )
}
export default SuggestionsForm