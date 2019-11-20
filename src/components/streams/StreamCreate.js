import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>
          {label}
          <input {...input} />
        </label>
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" label="Enter title" component={this.renderInput} />
        <Field
          name="description"
          label="Enter description"
          component={this.renderInput}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'createStream'
})(StreamCreate);
