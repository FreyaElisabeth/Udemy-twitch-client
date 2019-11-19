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

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button
          className="ui red google button "
          onClick={this.changeAuthStatus}
        >
          <i className="google icon" />
          Sign out
        </button>
      );
    }
    return (
      <button
        className="ui green google button "
        onClick={this.changeAuthStatus}
      >
        <i className="google icon" />
        Sign in
      </button>
    );
  }

  changeAuthStatus = () => {
    this.auth.isSignedIn.get() ? this.auth.signOut() : this.auth.signIn();
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  render() {
    return <>{this.renderAuthButton()}</>;
  }
}
