Package.describe({
  name: 'wiseplat:accounts',
  summary: 'Provides and updates the wiseplat accounts in the Accounts collection',
  version: '0.4.0',
  git: 'http://github.com/wiseplat/meteor-package-accounts'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);

  api.use('frozeman:persistent-minimongo@0.1.8', 'client');
  api.use('wiseplat:web3@0.15.1', ['client', 'server']);

  api.export(['WshAccounts'], ['client', 'server']);

  api.addFiles('accounts.js', ['client', 'server']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('wiseplat:accounts');
//   api.addFiles('accounts-tests.js');
// });

