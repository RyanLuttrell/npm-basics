const unsecurePlainTextPassword = 'TestPassword';
const bcrypt = require('bcrypt');
const colors = require('colors');

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
        console.log(hash.blue);
    });
}); 