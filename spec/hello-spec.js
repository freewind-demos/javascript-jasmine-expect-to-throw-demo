var hello = require('../src/hello');

describe("Jasmine", function () {
  it("can handle error thrown", function () {
    // Notice: passing a function not calling it!
    expect(hello).toThrow(new Error('test-error'));
  });
});
