import Pipe2Jpeg from 'pipe2jpeg';

const instance = new Pipe2Jpeg();

// $ExpectType Buffer
const jpg = instance.jpeg;

// $ExpectType number
const ts = instance.timestamp;

instance.on('close', () => {});

// $ExpectType undefined
instance.resetCache();

// $ExpectError
new Pipe2Jpeg(3);
