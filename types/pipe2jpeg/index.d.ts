// Type definitions for pipe2jpeg 0.3
// Project: https://github.com/kevinGodell/pipe2jpeg#readme
// Definitions by: Jacek Nowacki <https://github.com/dzek69>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

/// <reference types="node" />

import { Transform, ReadableOptions } from 'stream';

declare class Pipe2Jpeg extends Transform {
    constructor(options?: ReadableOptions);

    get jpeg(): Buffer;

    get timestamp(): number;

    resetCache(): undefined;
}

export = Pipe2Jpeg;
