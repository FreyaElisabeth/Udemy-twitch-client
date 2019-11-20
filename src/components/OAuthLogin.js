import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class OAuthLogin extends React.Component {
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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch(err => {
          console.log('something went wrong:', err);
        });
    });
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={this.changeAuthStatus}
        >
          <i className="google icon" />
          Sign out
        </button>
      );
    }
    return (
      <button
        className="ui green google button"
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

  onAuthChange = isSignedIn => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  render() {
    return <>{this.renderAuthButton()}</>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(OAuthLogin);
