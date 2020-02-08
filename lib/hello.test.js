const hello = require('./hello.js');

describe('hello', () => {
    test('shou;d say hi', () => {
        expect(hello(" bap")).toBe("hello bap");
    });
});


