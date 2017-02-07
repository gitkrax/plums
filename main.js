// Libraries used
var tracery = require('tracery-grammar');
var Twitter = require('twitter');

// Login to Twitter
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

// Grammars used
var grammar = require('./grammar.json');

// Create Tracery grammar
var grammar = tracery.createGrammar(grammar);
grammar.addModifiers(tracery.baseEngModifiers);

// Write one instance from grammar
var output = grammar.flatten('#poem#');
//console.log(output);

// Post to Twitter
client.post('statuses/update', { status: output }, function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object.
});
