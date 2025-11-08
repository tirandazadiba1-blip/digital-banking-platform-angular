const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'accountsApp',
  filename: 'remoteEntry.js',
  exposes: {
    './HomeComponent': './projects/accounts-app/src/app/dashboard/home/home.component.ts'
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    })
  },
});
