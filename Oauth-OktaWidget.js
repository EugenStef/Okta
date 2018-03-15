 let oktaSignIn = new OktaSignIn({
          baseUrl: 'https://atelier.oktapreview.com',
          clientId: '0oabojju8uq9Acder0h7',
          logo: '/images/logo.png',
          language: 'en',
          redirectUri: 'https://atelier.oktapreview.com',
          authParams: {
            responseType: 'code',
            scopes: ['openid']
          }
        });

        function renderWidget() {
          oktaSignIn.renderEl({
            el: '#widget-div'
          },
          function success(res) {
            console.log(res.user);
          });
        }

        window.onload = renderWidget;
