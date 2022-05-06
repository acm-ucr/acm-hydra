import React from "react";

const SuggestionsForm = () => {
    return (
        <div className="eventsForm">
            <form>
                <fieldset>
                    <label>
                        <h4>Name</h4>
                        <input name="name " />
                        <h4>Email</h4>
                        <input email="email " />
                        <h4>Suggestion</h4>
                        <input feedback="suggestion " />
                    </label>
                </fieldset>
            </form>
        </div>
    )
}
export default SuggestionsForm