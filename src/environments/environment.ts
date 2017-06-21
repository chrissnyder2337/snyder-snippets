// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDhA_VNOvcD5k27LaSf8UZ3s0guNNEoGmk',
    authDomain: 'snydersnippets-dd1f9.firebaseapp.com',
    databaseURL: 'https://snydersnippets-dd1f9.firebaseio.com',
    projectId: 'snydersnippets-dd1f9',
    storageBucket: 'snydersnippets-dd1f9.appspot.com',
    messagingSenderId: '8956036046'
  }
};
