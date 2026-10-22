const test = require('node:test');
const assert = require('node:assert');
const app = require('./app');

test('GET / returns greeting', async () => {
  const server = app.listen(0);
  try {
    const { port } = server.address();
    const res = await fetch(`http://localhost:${port}/`);
    const text = await res.text();
    assert.strictEqual(res.status, 200);
    assert.match(text, /Hello/);
  } finally {
    server.close();
  }
});
