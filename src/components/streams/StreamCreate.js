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

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form">
        <Field name="title" label="Enter title" component={this.renderInput} />
        <Field
          name="description"
          label="Enter description"
          component={this.renderInput}
        />
        <button className="ui button primary">Create</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'createStream'
})(StreamCreate);
