import React from 'react';

export default class OAuthLogin extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '1034545648194-223nl6qjr3g06ds728aun672jdamdd91.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch(err => {
          console.log('something went wrong:', err);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButtonText() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if you're signed in.</div>;
    } else if (this.state.isSignedIn) {
      return <div>You're already signed in!</div>;
    }
    return <div>It seems you're not signed in.</div>;
  }

  render() {
    return (
      <button onClick={this.onClick}>{this.renderAuthButtonText()}</button>
    );
  }
}
