import React from "react";

const SuggestionsForm = () => {
  return (
    <div className="events-suggestionsform-wrapper">
      <form onsubmit="return false;">
        <fieldset>
          <label>
            <div className="events-suggestionsform-title">
              <h2>What event would you like to see?</h2>
            </div>
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
            <button>Submit</button>
          </label>
          
        </fieldset>
      </form>
    </div>
  );
};
export default SuggestionsForm;

//add modal after the user clicks submit
