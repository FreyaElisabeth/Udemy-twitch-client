import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>
          {label}
          <input {...input} />
          <div>{meta.error}</div>
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

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a title.';
  }
  if (!formValues.description) {
    errors.description = 'Please enter a description.';
  }
  return errors;
};

export default reduxForm({
  form: 'createStream',
  validate
})(StreamCreate);
