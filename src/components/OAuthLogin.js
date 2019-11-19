import React from 'react';

export default class OAuthLogin extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '1034545648194-223nl6qjr3g06ds728aun672jdamdd91.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return <button>Login with Google</button>;
  }
}
