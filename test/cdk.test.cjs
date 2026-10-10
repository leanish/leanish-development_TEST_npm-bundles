const assert = require('node:assert/strict');
const test = require('node:test');
const { App, Stack } = require('aws-cdk-lib');

test('creates a CDK stack without synthesis or network lookups', () => {
  const app = new App({ autoSynth: false });
  const stack = new Stack(app, 'Fixture');

  assert.equal(stack.stackName, 'Fixture');
});
