// #############################################################################################################################
// mocha.d.ts
// #############################################################################################################################
var mocha = `
declare var describe : IMochaDescribeWithSkip;
declare var it: IMochaTestWithSkip;
declare var before : IMochaTest;
declare var after : IMochaTest;
declare var beforeEach : IMochaTest;
declare var afterEach : IMochaTest;
interface IMochaDescribe {
    (title: string, cb?: () => void) : void;
}
interface IMochaDescribeWithSkip extends IMochaDescribe {
    skip : IMochaDescribe;
    only : IMochaDescribe;
}
interface IMochaTest {
    (cb?: () => void) : void;
    (cb?: (done:(err? : Error) => void) => void) : void;
    (title: string, cb?: () => void) : void;
    (title: string, cb?: (done:(err? : Error) => void) => void) : void;
}
interface IMochaTestWithSkip extends IMochaTest {
    skip : IMochaTest;
    only : IMochaTest;
}
declare function suite(title: string, cb: () => void);
declare function test(title: string, cb: () => void);
declare function test(title: string, cb: (done:() => void) => void);
declare function setup(title: string, cb: () => void);
declare function teardown(title: string, cb: () => void);
declare function suite(cb: () => void);
declare function test(cb: () => void);
declare function test(cb: (done:() => void) => void);
declare function setup(cb: () => void);
declare function teardown(cb: () => void);`;

// #############################################################################################################################
// assert.d.ts
// #############################################################################################################################
var assert = `
declare function assert(value:any, message?:string):void;
declare module assert {
    export class AssertionError implements Error {
        name:string;
        message:string;
        actual:any;
        expected:any;
        operator:string;
        generatedMessage:boolean;
        constructor(options?:{message?: string; actual?: any; expected?: any; operator?: string; stackStartFunction?: Function});
    }
    export function fail(actual?:any, expected?:any, message?:string, operator?:string):void;
    export function ok(value:any, message?:string):void;
    export function equal(actual:any, expected:any, message?:string):void;
    export function notEqual(actual:any, expected:any, message?:string):void;
    export function deepEqual(actual:any, expected:any, message?:string):void;
    export function notDeepEqual(acutal:any, expected:any, message?:string):void;
    export function strictEqual(actual:any, expected:any, message?:string):void;
    export function notStrictEqual(actual:any, expected:any, message?:string):void;
    export var throws:{
        (block:Function, message?:string): void;
        (block:Function, error:Function, message?:string): void;
        (block:Function, error:RegExp, message?:string): void;
        (block:Function, error:(err:any) => boolean, message?:string): void;
    };
    export var doesNotThrow:{
        (block:Function, message?:string): void;
        (block:Function, error:Function, message?:string): void;
        (block:Function, error:RegExp, message?:string): void;
        (block:Function, error:(err:any) => boolean, message?:string): void;
    };
    export function ifError(value:any):void;
}
declare module "power-assert" {
    export = assert;
}`;

// #############################################################################################################################
// lib.d.ts
// #############################################################################################################################
var lib = `
declare var NaN: number;
declare var Infinity: number;
declare function eval(x: string): any;
declare function parseInt(s: string, radix?: number): number;
declare function parseFloat(string: string): number;
declare function isNaN(number: number): boolean;
declare function isFinite(number: number): boolean;
declare function decodeURI(encodedURI: string): string;
declare function decodeURIComponent(encodedURIComponent: string): string;
declare function encodeURI(uri: string): string;
declare function encodeURIComponent(uriComponent: string): string;
interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get? (): any;
    set? (v: any): void;
}
interface PropertyDescriptorMap {
    [s: string]: PropertyDescriptor;
}
interface Object {
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: string): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: string): boolean;
}
declare var Object: {
    new (value?: any): Object;
    (): any;
    (value: any): any;
    prototype: Object;
    getPrototypeOf(o: any): any;
    getOwnPropertyDescriptor(o: any, p: string): PropertyDescriptor;
    getOwnPropertyNames(o: any): string[];
    create(o: any, properties?: PropertyDescriptorMap): any;
    defineProperty(o: any, p: string, attributes: PropertyDescriptor): any;
    defineProperties(o: any, properties: PropertyDescriptorMap): any;
    seal(o: any): any;
    freeze(o: any): any;
    preventExtensions(o: any): any;
    isSealed(o: any): boolean;
    isFrozen(o: any): boolean;
    isExtensible(o: any): boolean;
    keys(o: any): string[];
}
interface Function {
    apply(thisArg: any, argArray?: any): any;
    call(thisArg: any, ...argArray: any[]): any;
    bind(thisArg: any, ...argArray: any[]): any;
    prototype: any;
    length: number;
    arguments: any;
    caller: Function;
}
declare var Function: {
    new (...args: string[]): Function;
    (...args: string[]): Function;
    prototype: Function;
}
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
interface String {
    toString(): string;
    charAt(pos: number): string;
    charCodeAt(index: number): number;
    concat(...strings: string[]): string;
    indexOf(searchString: string, position?: number): number;
    lastIndexOf(searchString: string, position?: number): number;
    localeCompare(that: string): number;
    match(regexp: string): RegExpMatchArray;
    match(regexp: RegExp): RegExpMatchArray;
    replace(searchValue: string, replaceValue: string): string;
    replace(searchValue: string, replaceValue: (substring: string, ...args: any[]) => string): string;
    replace(searchValue: RegExp, replaceValue: string): string;
    replace(searchValue: RegExp, replaceValue: (substring: string, ...args: any[]) => string): string;
    search(regexp: string): number;
    search(regexp: RegExp): number;
    slice(start?: number, end?: number): string;
    split(separator: string, limit?: number): string[];
    split(separator: RegExp, limit?: number): string[];
    substring(start: number, end?: number): string;
    toLowerCase(): string;
    toLocaleLowerCase(): string;
    toUpperCase(): string;
    toLocaleUpperCase(): string;
    trim(): string;
    length: number;
    substr(from: number, length?: number): string;
    [index: number]: string;
}
declare var String: {
    new (value?: any): String;
    (value?: any): string;
    prototype: String;
    fromCharCode(...codes: number[]): string;
}
interface Boolean {
}
declare var Boolean: {
    new (value?: any): Boolean;
    (value?: any): boolean;
    prototype: Boolean;
}
interface Number {
    toString(radix?: number): string;
    toFixed(fractionDigits?: number): string;
    toExponential(fractionDigits?: number): string;
    toPrecision(precision?: number): string;
}
declare var Number: {
    new (value?: any): Number;
    (value?: any): number;
    prototype: Number;
    MAX_VALUE: number;
    MIN_VALUE: number;
    NaN: number;
    NEGATIVE_INFINITY: number;
    POSITIVE_INFINITY: number;
}
interface Math {
    E: number;
    LN10: number;
    LN2: number;
    LOG2E: number;
    LOG10E: number;
    PI: number;
    SQRT1_2: number;
    SQRT2: number;
    abs(x: number): number;
    acos(x: number): number;
    asin(x: number): number;
    atan(x: number): number;
    atan2(y: number, x: number): number;
    ceil(x: number): number;
    cos(x: number): number;
    exp(x: number): number;
    floor(x: number): number;
    log(x: number): number;
    max(...values: number[]): number;
    min(...values: number[]): number;
    pow(x: number, y: number): number;
    random(): number;
    round(x: number): number;
    sin(x: number): number;
    sqrt(x: number): number;
    tan(x: number): number;
}
declare var Math: Math;
interface Date {
    toString(): string;
    toDateString(): string;
    toTimeString(): string;
    toLocaleString(): string;
    toLocaleDateString(): string;
    toLocaleTimeString(): string;
    valueOf(): number;
    getTime(): number;
    getFullYear(): number;
    getUTCFullYear(): number;
    getMonth(): number;
    getUTCMonth(): number;
    getDate(): number;
    getUTCDate(): number;
    getDay(): number;
    getUTCDay(): number;
    getHours(): number;
    getUTCHours(): number;
    getMinutes(): number;
    getUTCMinutes(): number;
    getSeconds(): number;
    getUTCSeconds(): number;
    getMilliseconds(): number;
    getUTCMilliseconds(): number;
    getTimezoneOffset(): number;
    setTime(time: number): number;
    setMilliseconds(ms: number): number;
    setUTCMilliseconds(ms: number): number;
    setSeconds(sec: number, ms?: number): number;
    setUTCSeconds(sec: number, ms?: number): number;
    setMinutes(min: number, sec?: number, ms?: number): number;
    setUTCMinutes(min: number, sec?: number, ms?: number): number;
    setHours(hours: number, min?: number, sec?: number, ms?: number): number;
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
    setDate(date: number): number;
    setUTCDate(date: number): number;
    setMonth(month: number, date?: number): number;
    setUTCMonth(month: number, date?: number): number;
    setFullYear(year: number, month?: number, date?: number): number;
    setUTCFullYear(year: number, month?: number, date?: number): number;
    toUTCString(): string;
    toISOString(): string;
    toJSON(key?: any): string;
}
declare var Date: {
    new (): Date;
    new (value: number): Date;
    new (value: string): Date;
    new (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
    (): string;
    prototype: Date;
    parse(s: string): number;
    UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;
    now(): number;
}
interface RegExpMatchArray extends Array<string> {
    index?: number;
    input?: string;
}
interface RegExpExecArray extends Array<string> {
    index: number;
    input: string;
}
interface RegExp {
    exec(string: string): RegExpExecArray;
    test(string: string): boolean;
    source: string;
    global: boolean;
    ignoreCase: boolean;
    multiline: boolean;
    lastIndex: number;
    compile(): RegExp;
}
declare var RegExp: {
    new (pattern: string, flags?: string): RegExp;
    (pattern: string, flags?: string): RegExp;
    $1: string;
    $2: string;
    $3: string;
    $4: string;
    $5: string;
    $6: string;
    $7: string;
    $8: string;
    $9: string;
    lastMatch: string;
}
interface Error {
    name: string;
    message: string;
}
declare var Error: {
    new (message?: string): Error;
    (message?: string): Error;
    prototype: Error;
}
interface EvalError extends Error {
}
declare var EvalError: {
    new (message?: string): EvalError;
    (message?: string): EvalError;
    prototype: EvalError;
}
interface RangeError extends Error {
}
declare var RangeError: {
    new (message?: string): RangeError;
    (message?: string): RangeError;
    prototype: RangeError;
}
interface ReferenceError extends Error {
}
declare var ReferenceError: {
    new (message?: string): ReferenceError;
    (message?: string): ReferenceError;
    prototype: ReferenceError;
}
interface SyntaxError extends Error {
}
declare var SyntaxError: {
    new (message?: string): SyntaxError;
    (message?: string): SyntaxError;
    prototype: SyntaxError;
}
interface TypeError extends Error {
}
declare var TypeError: {
    new (message?: string): TypeError;
    (message?: string): TypeError;
    prototype: TypeError;
}
interface URIError extends Error {
}
declare var URIError: {
    new (message?: string): URIError;
    (message?: string): URIError;
    prototype: URIError;
}
interface JSON {
    parse(text: string, reviver?: (key: any, value: any) => any): any;
    stringify(value: any): string;
    stringify(value: any, replacer: (key: string, value: any) => any): string;
    stringify(value: any, replacer: any[]): string;
    stringify(value: any, replacer: (key: string, value: any) => any, space: any): string;
    stringify(value: any, replacer: any[], space: any): string;
}
declare var JSON: JSON;
interface Array<T> {
    length: number;
    toString(): string;
    toLocaleString(): string;
    push(...items: T[]): number;
    pop(): T;
    concat<U extends T[]>(...items: U[]): T[];
    concat(...items: T[]): T[];
    join(separator?: string): string;
    reverse(): T[];
    shift(): T;
    slice(start?: number, end?: number): T[];
    sort(compareFn?: (a: T, b: T) => number): T[];
    splice(start: number): T[];
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    unshift(...items: T[]): number;
    indexOf(searchElement: T, fromIndex?: number): number;
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
    some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    filter(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[];
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    [n: number]: T;
}
declare var Array: {
    new (arrayLength?: number): any[];
    new <T>(arrayLength: number): T[];
    new <T>(...items: T[]): T[];
    (arrayLength?: number): any[];
    <T>(arrayLength: number): T[];
    <T>(...items: T[]): T[];
    isArray(arg: any): boolean;
    prototype: Array<any>;
}
interface ArrayBuffer {
    byteLength: number;
    slice(begin:number, end?:number): ArrayBuffer;
}
declare var ArrayBuffer: {
    prototype: ArrayBuffer;
    new (byteLength: number): ArrayBuffer;
}
interface ArrayBufferView {
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}
interface Int8Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int8Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int8Array;
}
declare var Int8Array: {
    prototype: Int8Array;
    new (length: number): Int8Array;
    new (array: Int8Array): Int8Array;
    new (array: number[]): Int8Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int8Array;
    BYTES_PER_ELEMENT: number;
}
interface Uint8Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint8Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint8Array;
}
declare var Uint8Array: {
    prototype: Uint8Array;
    new (length: number): Uint8Array;
    new (array: Uint8Array): Uint8Array;
    new (array: number[]): Uint8Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint8Array;
    BYTES_PER_ELEMENT: number;
}
interface Int16Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int16Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int16Array;
}
declare var Int16Array: {
    prototype: Int16Array;
    new (length: number): Int16Array;
    new (array: Int16Array): Int16Array;
    new (array: number[]): Int16Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int16Array;
    BYTES_PER_ELEMENT: number;
}
interface Uint16Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint16Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint16Array;
}
declare var Uint16Array: {
    prototype: Uint16Array;
    new (length: number): Uint16Array;
    new (array: Uint16Array): Uint16Array;
    new (array: number[]): Uint16Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint16Array;
    BYTES_PER_ELEMENT: number;
}
interface Int32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int32Array;
}
declare var Int32Array: {
    prototype: Int32Array;
    new (length: number): Int32Array;
    new (array: Int32Array): Int32Array;
    new (array: number[]): Int32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int32Array;
    BYTES_PER_ELEMENT: number;
}
interface Uint32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint32Array;
}
declare var Uint32Array: {
    prototype: Uint32Array;
    new (length: number): Uint32Array;
    new (array: Uint32Array): Uint32Array;
    new (array: number[]): Uint32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint32Array;
    BYTES_PER_ELEMENT: number;
}
interface Float32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Float32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Float32Array;
}
declare var Float32Array: {
    prototype: Float32Array;
    new (length: number): Float32Array;
    new (array: Float32Array): Float32Array;
    new (array: number[]): Float32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Float32Array;
    BYTES_PER_ELEMENT: number;
}
interface Float64Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Float64Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Float64Array;
}
declare var Float64Array: {
    prototype: Float64Array;
    new (length: number): Float64Array;
    new (array: Float64Array): Float64Array;
    new (array: number[]): Float64Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Float64Array;
    BYTES_PER_ELEMENT: number;
}
interface DataView extends ArrayBufferView {
    getInt8(byteOffset: number): number;
    getUint8(byteOffset: number): number;
    getInt16(byteOffset: number, littleEndian?: boolean): number;
    getUint16(byteOffset: number, littleEndian?: boolean): number;
    getInt32(byteOffset: number, littleEndian?: boolean): number;
    getUint32(byteOffset: number, littleEndian?: boolean): number;
    getFloat32(byteOffset: number, littleEndian?: boolean): number;
    getFloat64(byteOffset: number, littleEndian?: boolean): number;
    setInt8(byteOffset: number, value: number): void;
    setUint8(byteOffset: number, value: number): void;
    setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;
    setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;
    setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;
}
declare var DataView: {
    prototype: DataView;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): DataView;
}
interface Map<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V;
    has(key: K): boolean;
    set(key: K, value: V): Map<K, V>;
    size: number;
}
declare var Map: {
    new <K, V>(): Map<K, V>;
}
interface WeakMap<K, V> {
    clear(): void;
    delete(key: K): boolean;
    get(key: K): V;
    has(key: K): boolean;
    set(key: K, value: V): WeakMap<K, V>;
}
declare var WeakMap: {
    new <K, V>(): WeakMap<K, V>;
}
interface Set<T> {
    add(value: T): Set<T>;
    clear(): void;
    delete(value: T): boolean;
    forEach(callbackfn: (value: T, index: T, set: Set<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    size: number;
}
declare var Set: {
    new <T>(): Set<T>;
}
declare module Intl {
    interface CollatorOptions {
        usage?: string;
        localeMatcher?: string;
        numeric?: boolean;
        caseFirst?: string;
        sensitivity?: string;
        ignorePunctuation?: boolean;
    }
    interface ResolvedCollatorOptions {
        locale: string;
        usage: string;
        sensitivity: string;
        ignorePunctuation: boolean;
        collation: string;
        caseFirst: string;
        numeric: boolean;
    }
    interface Collator {
        compare(x: string, y: string): number;
        resolvedOptions(): ResolvedCollatorOptions;
    }
    var Collator: {
        new (locales?: string[], options?: CollatorOptions): Collator;
        new (locale?: string, options?: CollatorOptions): Collator;
        (locales?: string[], options?: CollatorOptions): Collator;
        (locale?: string, options?: CollatorOptions): Collator;
        supportedLocalesOf(locales: string[], options?: CollatorOptions): string[];
        supportedLocalesOf(locale: string, options?: CollatorOptions): string[];
    }
    interface NumberFormatOptions {
        localeMatcher?: string;
        style?: string;
        currency?: string;
        currencyDisplay?: string;
        useGrouping?: boolean;
    }
    interface ResolvedNumberFormatOptions {
        locale: string;
        numberingSystem: string;
        style: string;
        currency?: string;
        currencyDisplay?: string;
        minimumintegerDigits: number;
        minimumFractionDigits: number;
        maximumFractionDigits: number;
        minimumSignificantDigits?: number;
        maximumSignificantDigits?: number;
        useGrouping: boolean;
    }
    interface NumberFormat {
        format(value: number): string;
        resolvedOptions(): ResolvedNumberFormatOptions;
    }
    var NumberFormat: {
        new (locales?: string[], options?: NumberFormatOptions): Collator;
        new (locale?: string, options?: NumberFormatOptions): Collator;
        (locales?: string[], options?: NumberFormatOptions): Collator;
        (locale?: string, options?: NumberFormatOptions): Collator;
        supportedLocalesOf(locales: string[], options?: NumberFormatOptions): string[];
        supportedLocalesOf(locale: string, options?: NumberFormatOptions): string[];
    }
    interface DateTimeFormatOptions {
        localeMatcher?: string;
        weekday?: string;
        era?: string;
        year?: string;
        month?: string;
        day?: string;
        hour?: string;
        minute?: string;
        second?: string;
        timeZoneName?: string;
        formatMatcher?: string;
        hour12: boolean;
    }
    interface ResolvedDateTimeFormatOptions {
        locale: string;
        calendar: string;
        numberingSystem: string;
        timeZone: string;
        hour12?: boolean;
        weekday?: string;
        era?: string;
        year?: string;
        month?: string;
        day?: string;
        hour?: string;
        minute?: string;
        second?: string;
        timeZoneName?: string;
    }
    interface DateTimeFormat {
        format(date: number): string;
        resolvedOptions(): ResolvedDateTimeFormatOptions;
    }
    var DateTimeFormat: {
        new (locales?: string[], options?: DateTimeFormatOptions): Collator;
        new (locale?: string, options?: DateTimeFormatOptions): Collator;
        (locales?: string[], options?: DateTimeFormatOptions): Collator;
        (locale?: string, options?: DateTimeFormatOptions): Collator;
        supportedLocalesOf(locales: string[], options?: DateTimeFormatOptions): string[];
        supportedLocalesOf(locale: string, options?: DateTimeFormatOptions): string[];
    }
}
interface String {
    localeCompare(that: string, locales: string[], options?: Intl.CollatorOptions): number;
    localeCompare(that: string, locale: string, options?: Intl.CollatorOptions): number;
}
interface Number {
    toLocaleString(locales?: string[], options?: Intl.NumberFormatOptions): string;
    toLocaleString(locale?: string, options?: Intl.NumberFormatOptions): string;
}
interface Date {
    toLocaleString(locales?: string[], options?: Intl.DateTimeFormatOptions): string;
    toLocaleString(locale?: string, options?: Intl.DateTimeFormatOptions): string;
}
interface PositionOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}
interface ObjectURLOptions {
    oneTimeOnly?: boolean;
}
interface StoreExceptionsInformation extends ExceptionInformation {
    siteName?: string;
    explanationString?: string;
    detailURI?: string;
}
interface StoreSiteSpecificExceptionsInformation extends StoreExceptionsInformation {
    arrayOfDomainStrings?: string[];
}
interface ConfirmSiteSpecificExceptionsInformation extends ExceptionInformation {
    arrayOfDomainStrings?: string[];
}
interface AlgorithmParameters {
}
interface MutationObserverInit {
    childList?: boolean;
    attributes?: boolean;
    characterData?: boolean;
    subtree?: boolean;
    attributeOldValue?: boolean;
    characterDataOldValue?: boolean;
    attributeFilter?: string[];
}
interface PointerEventInit extends MouseEventInit {
    pointerId?: number;
    width?: number;
    height?: number;
    pressure?: number;
    tiltX?: number;
    tiltY?: number;
    pointerType?: string;
    isPrimary?: boolean;
}
interface ExceptionInformation {
    domain?: string;
}
interface DeviceAccelerationDict {
    x?: number;
    y?: number;
    z?: number;
}
interface MsZoomToOptions {
    contentX?: number;
    contentY?: number;
    viewportX?: string;
    viewportY?: string;
    scaleFactor?: number;
    animate?: string;
}
interface DeviceRotationRateDict {
    alpha?: number;
    beta?: number;
    gamma?: number;
}
interface Algorithm {
    name?: string;
    params?: AlgorithmParameters;
}
interface MouseEventInit {
    bubbles?: boolean;
    cancelable?: boolean;
    view?: Window;
    detail?: number;
    screenX?: number;
    screenY?: number;
    clientX?: number;
    clientY?: number;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
    metaKey?: boolean;
    button?: number;
    buttons?: number;
    relatedTarget?: EventTarget;
}
interface WebGLContextAttributes {
    alpha?: boolean;
    depth?: boolean;
    stencil?: boolean;
    antialias?: boolean;
    premultipliedAlpha?: boolean;
    preserveDrawingBuffer?: boolean;
}
interface NodeListOf<TNode extends Node> extends NodeList {
    length: number;
    item(index: number): TNode;
    [index: number]: TNode;
}
interface HTMLElement extends Element, ElementCSSInlineStyle, MSEventAttachmentTarget, MSNodeExtensions {
    hidden: any;
    readyState: any;
    onmouseleave: (ev: MouseEvent) => any;
    onbeforecut: (ev: DragEvent) => any;
    onkeydown: (ev: KeyboardEvent) => any;
    onmove: (ev: MSEventObj) => any;
    onkeyup: (ev: KeyboardEvent) => any;
    onreset: (ev: Event) => any;
    onhelp: (ev: Event) => any;
    ondragleave: (ev: DragEvent) => any;
    className: string;
    onfocusin: (ev: FocusEvent) => any;
    onseeked: (ev: Event) => any;
    recordNumber: any;
    title: string;
    parentTextEdit: Element;
    outerHTML: string;
    ondurationchange: (ev: Event) => any;
    offsetHeight: number;
    all: HTMLCollection;
    onblur: (ev: FocusEvent) => any;
    dir: string;
    onemptied: (ev: Event) => any;
    onseeking: (ev: Event) => any;
    oncanplay: (ev: Event) => any;
    ondeactivate: (ev: UIEvent) => any;
    ondatasetchanged: (ev: MSEventObj) => any;
    onrowsdelete: (ev: MSEventObj) => any;
    sourceIndex: number;
    onloadstart: (ev: Event) => any;
    onlosecapture: (ev: MSEventObj) => any;
    ondragenter: (ev: DragEvent) => any;
    oncontrolselect: (ev: MSEventObj) => any;
    onsubmit: (ev: Event) => any;
    behaviorUrns: MSBehaviorUrnsCollection;
    scopeName: string;
    onchange: (ev: Event) => any;
    id: string;
    onlayoutcomplete: (ev: MSEventObj) => any;
    uniqueID: string;
    onbeforeactivate: (ev: UIEvent) => any;
    oncanplaythrough: (ev: Event) => any;
    onbeforeupdate: (ev: MSEventObj) => any;
    onfilterchange: (ev: MSEventObj) => any;
    offsetParent: Element;
    ondatasetcomplete: (ev: MSEventObj) => any;
    onsuspend: (ev: Event) => any;
    onmouseenter: (ev: MouseEvent) => any;
    innerText: string;
    onerrorupdate: (ev: MSEventObj) => any;
    onmouseout: (ev: MouseEvent) => any;
    parentElement: HTMLElement;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onvolumechange: (ev: Event) => any;
    oncellchange: (ev: MSEventObj) => any;
    onrowexit: (ev: MSEventObj) => any;
    onrowsinserted: (ev: MSEventObj) => any;
    onpropertychange: (ev: MSEventObj) => any;
    filters: any;
    children: HTMLCollection;
    ondragend: (ev: DragEvent) => any;
    onbeforepaste: (ev: DragEvent) => any;
    ondragover: (ev: DragEvent) => any;
    offsetTop: number;
    onmouseup: (ev: MouseEvent) => any;
    ondragstart: (ev: DragEvent) => any;
    onbeforecopy: (ev: DragEvent) => any;
    ondrag: (ev: DragEvent) => any;
    innerHTML: string;
    onmouseover: (ev: MouseEvent) => any;
    lang: string;
    uniqueNumber: number;
    onpause: (ev: Event) => any;
    tagUrn: string;
    onmousedown: (ev: MouseEvent) => any;
    onclick: (ev: MouseEvent) => any;
    onwaiting: (ev: Event) => any;
    onresizestart: (ev: MSEventObj) => any;
    offsetLeft: number;
    isTextEdit: boolean;
    isDisabled: boolean;
    onpaste: (ev: DragEvent) => any;
    canHaveHTML: boolean;
    onmoveend: (ev: MSEventObj) => any;
    language: string;
    onstalled: (ev: Event) => any;
    onmousemove: (ev: MouseEvent) => any;
    style: MSStyleCSSProperties;
    isContentEditable: boolean;
    onbeforeeditfocus: (ev: MSEventObj) => any;
    onratechange: (ev: Event) => any;
    contentEditable: string;
    tabIndex: number;
    document: Document;
    onprogress: (ev: ProgressEvent) => any;
    ondblclick: (ev: MouseEvent) => any;
    oncontextmenu: (ev: MouseEvent) => any;
    onloadedmetadata: (ev: Event) => any;
    onafterupdate: (ev: MSEventObj) => any;
    onerror: (ev: ErrorEvent) => any;
    onplay: (ev: Event) => any;
    onresizeend: (ev: MSEventObj) => any;
    onplaying: (ev: Event) => any;
    isMultiLine: boolean;
    onfocusout: (ev: FocusEvent) => any;
    onabort: (ev: UIEvent) => any;
    ondataavailable: (ev: MSEventObj) => any;
    hideFocus: boolean;
    onreadystatechange: (ev: Event) => any;
    onkeypress: (ev: KeyboardEvent) => any;
    onloadeddata: (ev: Event) => any;
    onbeforedeactivate: (ev: UIEvent) => any;
    outerText: string;
    disabled: boolean;
    onactivate: (ev: UIEvent) => any;
    accessKey: string;
    onmovestart: (ev: MSEventObj) => any;
    onselectstart: (ev: Event) => any;
    onfocus: (ev: FocusEvent) => any;
    ontimeupdate: (ev: Event) => any;
    onresize: (ev: UIEvent) => any;
    oncut: (ev: DragEvent) => any;
    onselect: (ev: UIEvent) => any;
    ondrop: (ev: DragEvent) => any;
    offsetWidth: number;
    oncopy: (ev: DragEvent) => any;
    onended: (ev: Event) => any;
    onscroll: (ev: UIEvent) => any;
    onrowenter: (ev: MSEventObj) => any;
    onload: (ev: Event) => any;
    canHaveChildren: boolean;
    oninput: (ev: Event) => any;
    onmscontentzoom: (ev: MSEventObj) => any;
    oncuechange: (ev: Event) => any;
    spellcheck: boolean;
    classList: DOMTokenList;
    onmsmanipulationstatechanged: (ev: any) => any;
    draggable: boolean;
    dataset: DOMStringMap;
    dragDrop(): boolean;
    scrollIntoView(top?: boolean): void;
    addFilter(filter: any): void;
    setCapture(containerCapture?: boolean): void;
    focus(): void;
    getAdjacentText(where: string): string;
    insertAdjacentText(where: string, text: string): void;
    getElementsByClassName(classNames: string): NodeList;
    setActive(): void;
    removeFilter(filter: any): void;
    blur(): void;
    clearAttributes(): void;
    releaseCapture(): void;
    createControlRange(): ControlRangeCollection;
    removeBehavior(cookie: number): boolean;
    contains(child: HTMLElement): boolean;
    click(): void;
    insertAdjacentElement(position: string, insertedElement: Element): Element;
    mergeAttributes(source: HTMLElement, preserveIdentity?: boolean): void;
    replaceAdjacentText(where: string, newText: string): string;
    applyElement(apply: Element, where?: string): Element;
    addBehavior(bstrUrl: string, factory?: any): number;
    insertAdjacentHTML(where: string, html: string): void;
    msGetInputContext(): MSInputMethodContext;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var HTMLElement: {
    prototype: HTMLElement;
    new(): HTMLElement;
}
interface Document extends Node, NodeSelector, MSEventAttachmentTarget, DocumentEvent, MSResourceMetadata, MSNodeExtensions, MSDocumentExtensions, GlobalEventHandlers {
    documentElement: HTMLElement;
    compatible: MSCompatibleInfoCollection;
    onkeydown: (ev: KeyboardEvent) => any;
    onkeyup: (ev: KeyboardEvent) => any;
    implementation: DOMImplementation;
    onreset: (ev: Event) => any;
    scripts: HTMLCollection;
    onhelp: (ev: Event) => any;
    ondragleave: (ev: DragEvent) => any;
    charset: string;
    onfocusin: (ev: FocusEvent) => any;
    vlinkColor: string;
    onseeked: (ev: Event) => any;
    security: string;
    title: string;
    namespaces: MSNamespaceInfoCollection;
    defaultCharset: string;
    embeds: HTMLCollection;
    styleSheets: StyleSheetList;
    frames: Window;
    ondurationchange: (ev: Event) => any;
    all: HTMLCollection;
    forms: HTMLCollection;
    onblur: (ev: FocusEvent) => any;
    dir: string;
    onemptied: (ev: Event) => any;
    designMode: string;
    onseeking: (ev: Event) => any;
    ondeactivate: (ev: UIEvent) => any;
    oncanplay: (ev: Event) => any;
    ondatasetchanged: (ev: MSEventObj) => any;
    onrowsdelete: (ev: MSEventObj) => any;
    Script: MSScriptHost;
    onloadstart: (ev: Event) => any;
    URLUnencoded: string;
    defaultView: Window;
    oncontrolselect: (ev: MSEventObj) => any;
    ondragenter: (ev: DragEvent) => any;
    onsubmit: (ev: Event) => any;
    inputEncoding: string;
    activeElement: Element;
    onchange: (ev: Event) => any;
    links: HTMLCollection;
    uniqueID: string;
    URL: string;
    onbeforeactivate: (ev: UIEvent) => any;
    head: HTMLHeadElement;
    cookie: string;
    xmlEncoding: string;
    oncanplaythrough: (ev: Event) => any;
    documentMode: number;
    characterSet: string;
    anchors: HTMLCollection;
    onbeforeupdate: (ev: MSEventObj) => any;
    ondatasetcomplete: (ev: MSEventObj) => any;
    plugins: HTMLCollection;
    onsuspend: (ev: Event) => any;
    rootElement: SVGSVGElement;
    readyState: string;
    referrer: string;
    alinkColor: string;
    onerrorupdate: (ev: MSEventObj) => any;
    parentWindow: Window;
    onmouseout: (ev: MouseEvent) => any;
    onmsthumbnailclick: (ev: MSSiteModeEvent) => any;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onvolumechange: (ev: Event) => any;
    oncellchange: (ev: MSEventObj) => any;
    onrowexit: (ev: MSEventObj) => any;
    onrowsinserted: (ev: MSEventObj) => any;
    xmlVersion: string;
    msCapsLockWarningOff: boolean;
    onpropertychange: (ev: MSEventObj) => any;
    ondragend: (ev: DragEvent) => any;
    doctype: DocumentType;
    ondragover: (ev: DragEvent) => any;
    bgColor: string;
    ondragstart: (ev: DragEvent) => any;
    onmouseup: (ev: MouseEvent) => any;
    ondrag: (ev: DragEvent) => any;
    onmouseover: (ev: MouseEvent) => any;
    linkColor: string;
    onpause: (ev: Event) => any;
    onmousedown: (ev: MouseEvent) => any;
    onclick: (ev: MouseEvent) => any;
    onwaiting: (ev: Event) => any;
    onstop: (ev: Event) => any;
    onmssitemodejumplistitemremoved: (ev: MSSiteModeEvent) => any;
    applets: HTMLCollection;
    body: HTMLElement;
    domain: string;
    xmlStandalone: boolean;
    selection: MSSelection;
    onstalled: (ev: Event) => any;
    onmousemove: (ev: MouseEvent) => any;
    onbeforeeditfocus: (ev: MSEventObj) => any;
    onratechange: (ev: Event) => any;
    onprogress: (ev: ProgressEvent) => any;
    ondblclick: (ev: MouseEvent) => any;
    oncontextmenu: (ev: MouseEvent) => any;
    onloadedmetadata: (ev: Event) => any;
    media: string;
    onerror: (ev: ErrorEvent) => any;
    onplay: (ev: Event) => any;
    onafterupdate: (ev: MSEventObj) => any;
    onplaying: (ev: Event) => any;
    images: HTMLCollection;
    location: Location;
    onabort: (ev: UIEvent) => any;
    onfocusout: (ev: FocusEvent) => any;
    onselectionchange: (ev: Event) => any;
    onstoragecommit: (ev: StorageEvent) => any;
    ondataavailable: (ev: MSEventObj) => any;
    onreadystatechange: (ev: Event) => any;
    lastModified: string;
    onkeypress: (ev: KeyboardEvent) => any;
    onloadeddata: (ev: Event) => any;
    onbeforedeactivate: (ev: UIEvent) => any;
    onactivate: (ev: UIEvent) => any;
    onselectstart: (ev: Event) => any;
    onfocus: (ev: FocusEvent) => any;
    fgColor: string;
    ontimeupdate: (ev: Event) => any;
    onselect: (ev: UIEvent) => any;
    ondrop: (ev: DragEvent) => any;
    onended: (ev: Event) => any;
    compatMode: string;
    onscroll: (ev: UIEvent) => any;
    onrowenter: (ev: MSEventObj) => any;
    onload: (ev: Event) => any;
    oninput: (ev: Event) => any;
    onmspointerdown: (ev: any) => any;
    msHidden: boolean;
    msVisibilityState: string;
    onmsgesturedoubletap: (ev: any) => any;
    visibilityState: string;
    onmsmanipulationstatechanged: (ev: any) => any;
    onmspointerhover: (ev: any) => any;
    onmscontentzoom: (ev: MSEventObj) => any;
    onmspointermove: (ev: any) => any;
    onmsgesturehold: (ev: any) => any;
    onmsgesturechange: (ev: any) => any;
    onmsgesturestart: (ev: any) => any;
    onmspointercancel: (ev: any) => any;
    onmsgestureend: (ev: any) => any;
    onmsgesturetap: (ev: any) => any;
    onmspointerout: (ev: any) => any;
    onmsinertiastart: (ev: any) => any;
    msCSSOMElementFloatMetrics: boolean;
    onmspointerover: (ev: any) => any;
    hidden: boolean;
    onmspointerup: (ev: any) => any;
    msFullscreenEnabled: boolean;
    onmsfullscreenerror: (ev: any) => any;
    onmspointerenter: (ev: any) => any;
    msFullscreenElement: Element;
    onmsfullscreenchange: (ev: any) => any;
    onmspointerleave: (ev: any) => any;
    getElementById(elementId: string): HTMLElement;
    queryCommandValue(commandId: string): string;
    adoptNode(source: Node): Node;
    queryCommandIndeterm(commandId: string): boolean;
    getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    execCommand(commandId: string, showUI?: boolean, value?: any): boolean;
    elementFromPoint(x: number, y: number): Element;
    createCDATASection(data: string): CDATASection;
    queryCommandText(commandId: string): string;
    write(...content: string[]): void;
    updateSettings(): void;
    createElement(tagName: "a"): HTMLAnchorElement;
    createElement(tagName: "abbr"): HTMLPhraseElement;
    createElement(tagName: "acronym"): HTMLPhraseElement;
    createElement(tagName: "address"): HTMLBlockElement;
    createElement(tagName: "applet"): HTMLAppletElement;
    createElement(tagName: "area"): HTMLAreaElement;
    createElement(tagName: "article"): HTMLElement;
    createElement(tagName: "aside"): HTMLElement;
    createElement(tagName: "audio"): HTMLAudioElement;
    createElement(tagName: "b"): HTMLPhraseElement;
    createElement(tagName: "base"): HTMLBaseElement;
    createElement(tagName: "basefont"): HTMLBaseFontElement;
    createElement(tagName: "bdo"): HTMLPhraseElement;
    createElement(tagName: "bgsound"): HTMLBGSoundElement;
    createElement(tagName: "big"): HTMLPhraseElement;
    createElement(tagName: "blockquote"): HTMLBlockElement;
    createElement(tagName: "body"): HTMLBodyElement;
    createElement(tagName: "br"): HTMLBRElement;
    createElement(tagName: "button"): HTMLButtonElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "caption"): HTMLTableCaptionElement;
    createElement(tagName: "center"): HTMLBlockElement;
    createElement(tagName: "cite"): HTMLPhraseElement;
    createElement(tagName: "code"): HTMLPhraseElement;
    createElement(tagName: "col"): HTMLTableColElement;
    createElement(tagName: "colgroup"): HTMLTableColElement;
    createElement(tagName: "datalist"): HTMLDataListElement;
    createElement(tagName: "dd"): HTMLDDElement;
    createElement(tagName: "del"): HTMLModElement;
    createElement(tagName: "dfn"): HTMLPhraseElement;
    createElement(tagName: "dir"): HTMLDirectoryElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "dl"): HTMLDListElement;
    createElement(tagName: "dt"): HTMLDTElement;
    createElement(tagName: "em"): HTMLPhraseElement;
    createElement(tagName: "embed"): HTMLEmbedElement;
    createElement(tagName: "fieldset"): HTMLFieldSetElement;
    createElement(tagName: "figcaption"): HTMLElement;
    createElement(tagName: "figure"): HTMLElement;
    createElement(tagName: "font"): HTMLFontElement;
    createElement(tagName: "footer"): HTMLElement;
    createElement(tagName: "form"): HTMLFormElement;
    createElement(tagName: "frame"): HTMLFrameElement;
    createElement(tagName: "frameset"): HTMLFrameSetElement;
    createElement(tagName: "h1"): HTMLHeadingElement;
    createElement(tagName: "h2"): HTMLHeadingElement;
    createElement(tagName: "h3"): HTMLHeadingElement;
    createElement(tagName: "h4"): HTMLHeadingElement;
    createElement(tagName: "h5"): HTMLHeadingElement;
    createElement(tagName: "h6"): HTMLHeadingElement;
    createElement(tagName: "head"): HTMLHeadElement;
    createElement(tagName: "header"): HTMLElement;
    createElement(tagName: "hgroup"): HTMLElement;
    createElement(tagName: "hr"): HTMLHRElement;
    createElement(tagName: "html"): HTMLHtmlElement;
    createElement(tagName: "i"): HTMLPhraseElement;
    createElement(tagName: "iframe"): HTMLIFrameElement;
    createElement(tagName: "img"): HTMLImageElement;
    createElement(tagName: "input"): HTMLInputElement;
    createElement(tagName: "ins"): HTMLModElement;
    createElement(tagName: "isindex"): HTMLIsIndexElement;
    createElement(tagName: "kbd"): HTMLPhraseElement;
    createElement(tagName: "keygen"): HTMLBlockElement;
    createElement(tagName: "label"): HTMLLabelElement;
    createElement(tagName: "legend"): HTMLLegendElement;
    createElement(tagName: "li"): HTMLLIElement;
    createElement(tagName: "link"): HTMLLinkElement;
    createElement(tagName: "listing"): HTMLBlockElement;
    createElement(tagName: "map"): HTMLMapElement;
    createElement(tagName: "mark"): HTMLElement;
    createElement(tagName: "marquee"): HTMLMarqueeElement;
    createElement(tagName: "menu"): HTMLMenuElement;
    createElement(tagName: "meta"): HTMLMetaElement;
    createElement(tagName: "nav"): HTMLElement;
    createElement(tagName: "nextid"): HTMLNextIdElement;
    createElement(tagName: "nobr"): HTMLPhraseElement;
    createElement(tagName: "noframes"): HTMLElement;
    createElement(tagName: "noscript"): HTMLElement;
    createElement(tagName: "object"): HTMLObjectElement;
    createElement(tagName: "ol"): HTMLOListElement;
    createElement(tagName: "optgroup"): HTMLOptGroupElement;
    createElement(tagName: "option"): HTMLOptionElement;
    createElement(tagName: "p"): HTMLParagraphElement;
    createElement(tagName: "param"): HTMLParamElement;
    createElement(tagName: "plaintext"): HTMLBlockElement;
    createElement(tagName: "pre"): HTMLPreElement;
    createElement(tagName: "progress"): HTMLProgressElement;
    createElement(tagName: "q"): HTMLQuoteElement;
    createElement(tagName: "rt"): HTMLPhraseElement;
    createElement(tagName: "ruby"): HTMLPhraseElement;
    createElement(tagName: "s"): HTMLPhraseElement;
    createElement(tagName: "samp"): HTMLPhraseElement;
    createElement(tagName: "script"): HTMLScriptElement;
    createElement(tagName: "section"): HTMLElement;
    createElement(tagName: "select"): HTMLSelectElement;
    createElement(tagName: "small"): HTMLPhraseElement;
    createElement(tagName: "SOURCE"): HTMLSourceElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "strike"): HTMLPhraseElement;
    createElement(tagName: "strong"): HTMLPhraseElement;
    createElement(tagName: "style"): HTMLStyleElement;
    createElement(tagName: "sub"): HTMLPhraseElement;
    createElement(tagName: "sup"): HTMLPhraseElement;
    createElement(tagName: "table"): HTMLTableElement;
    createElement(tagName: "tbody"): HTMLTableSectionElement;
    createElement(tagName: "td"): HTMLTableDataCellElement;
    createElement(tagName: "textarea"): HTMLTextAreaElement;
    createElement(tagName: "tfoot"): HTMLTableSectionElement;
    createElement(tagName: "th"): HTMLTableHeaderCellElement;
    createElement(tagName: "thead"): HTMLTableSectionElement;
    createElement(tagName: "title"): HTMLTitleElement;
    createElement(tagName: "tr"): HTMLTableRowElement;
    createElement(tagName: "track"): HTMLTrackElement;
    createElement(tagName: "tt"): HTMLPhraseElement;
    createElement(tagName: "u"): HTMLPhraseElement;
    createElement(tagName: "ul"): HTMLUListElement;
    createElement(tagName: "var"): HTMLPhraseElement;
    createElement(tagName: "video"): HTMLVideoElement;
    createElement(tagName: "wbr"): HTMLElement;
    createElement(tagName: "x-ms-webview"): MSHTMLWebViewElement;
    createElement(tagName: "xmp"): HTMLBlockElement;
    createElement(tagName: string): HTMLElement;
    releaseCapture(): void;
    writeln(...content: string[]): void;
    createElementNS(namespaceURI: string, qualifiedName: string): Element;
    open(url?: string, name?: string, features?: string, replace?: boolean): any;
    queryCommandSupported(commandId: string): boolean;
    createTreeWalker(root: Node, whatToShow: number, filter: NodeFilter, entityReferenceExpansion: boolean): TreeWalker;
    createAttributeNS(namespaceURI: string, qualifiedName: string): Attr;
    queryCommandEnabled(commandId: string): boolean;
    focus(): void;
    close(): void;
    getElementsByClassName(classNames: string): NodeList;
    importNode(importedNode: Node, deep: boolean): Node;
    createRange(): Range;
    fireEvent(eventName: string, eventObj?: any): boolean;
    createComment(data: string): Comment;
    getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
    getElementsByTagName(name: "abbr"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "acronym"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "address"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "applet"): NodeListOf<HTMLAppletElement>;
    getElementsByTagName(name: "area"): NodeListOf<HTMLAreaElement>;
    getElementsByTagName(name: "article"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "aside"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;
    getElementsByTagName(name: "b"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "base"): NodeListOf<HTMLBaseElement>;
    getElementsByTagName(name: "basefont"): NodeListOf<HTMLBaseFontElement>;
    getElementsByTagName(name: "bdo"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "bgsound"): NodeListOf<HTMLBGSoundElement>;
    getElementsByTagName(name: "big"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "blockquote"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
    getElementsByTagName(name: "br"): NodeListOf<HTMLBRElement>;
    getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
    getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;
    getElementsByTagName(name: "caption"): NodeListOf<HTMLTableCaptionElement>;
    getElementsByTagName(name: "center"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "cite"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "code"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "col"): NodeListOf<HTMLTableColElement>;
    getElementsByTagName(name: "colgroup"): NodeListOf<HTMLTableColElement>;
    getElementsByTagName(name: "datalist"): NodeListOf<HTMLDataListElement>;
    getElementsByTagName(name: "dd"): NodeListOf<HTMLDDElement>;
    getElementsByTagName(name: "del"): NodeListOf<HTMLModElement>;
    getElementsByTagName(name: "dfn"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "dir"): NodeListOf<HTMLDirectoryElement>;
    getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;
    getElementsByTagName(name: "dl"): NodeListOf<HTMLDListElement>;
    getElementsByTagName(name: "dt"): NodeListOf<HTMLDTElement>;
    getElementsByTagName(name: "em"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "embed"): NodeListOf<HTMLEmbedElement>;
    getElementsByTagName(name: "fieldset"): NodeListOf<HTMLFieldSetElement>;
    getElementsByTagName(name: "figcaption"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "figure"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "font"): NodeListOf<HTMLFontElement>;
    getElementsByTagName(name: "footer"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
    getElementsByTagName(name: "frame"): NodeListOf<HTMLFrameElement>;
    getElementsByTagName(name: "frameset"): NodeListOf<HTMLFrameSetElement>;
    getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h2"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h3"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h4"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h5"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h6"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;
    getElementsByTagName(name: "header"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "hgroup"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "hr"): NodeListOf<HTMLHRElement>;
    getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;
    getElementsByTagName(name: "i"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;
    getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;
    getElementsByTagName(name: "input"): NodeListOf<HTMLInputElement>;
    getElementsByTagName(name: "ins"): NodeListOf<HTMLModElement>;
    getElementsByTagName(name: "isindex"): NodeListOf<HTMLIsIndexElement>;
    getElementsByTagName(name: "kbd"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "keygen"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "label"): NodeListOf<HTMLLabelElement>;
    getElementsByTagName(name: "legend"): NodeListOf<HTMLLegendElement>;
    getElementsByTagName(name: "li"): NodeListOf<HTMLLIElement>;
    getElementsByTagName(name: "link"): NodeListOf<HTMLLinkElement>;
    getElementsByTagName(name: "listing"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "map"): NodeListOf<HTMLMapElement>;
    getElementsByTagName(name: "mark"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "marquee"): NodeListOf<HTMLMarqueeElement>;
    getElementsByTagName(name: "menu"): NodeListOf<HTMLMenuElement>;
    getElementsByTagName(name: "meta"): NodeListOf<HTMLMetaElement>;
    getElementsByTagName(name: "nav"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "nextid"): NodeListOf<HTMLNextIdElement>;
    getElementsByTagName(name: "nobr"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "noframes"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "noscript"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "object"): NodeListOf<HTMLObjectElement>;
    getElementsByTagName(name: "ol"): NodeListOf<HTMLOListElement>;
    getElementsByTagName(name: "optgroup"): NodeListOf<HTMLOptGroupElement>;
    getElementsByTagName(name: "option"): NodeListOf<HTMLOptionElement>;
    getElementsByTagName(name: "p"): NodeListOf<HTMLParagraphElement>;
    getElementsByTagName(name: "param"): NodeListOf<HTMLParamElement>;
    getElementsByTagName(name: "plaintext"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "pre"): NodeListOf<HTMLPreElement>;
    getElementsByTagName(name: "progress"): NodeListOf<HTMLProgressElement>;
    getElementsByTagName(name: "q"): NodeListOf<HTMLQuoteElement>;
    getElementsByTagName(name: "rt"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "ruby"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "s"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "samp"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;
    getElementsByTagName(name: "section"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "select"): NodeListOf<HTMLSelectElement>;
    getElementsByTagName(name: "small"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "SOURCE"): NodeListOf<HTMLSourceElement>;
    getElementsByTagName(name: "span"): NodeListOf<HTMLSpanElement>;
    getElementsByTagName(name: "strike"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "strong"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "style"): NodeListOf<HTMLStyleElement>;
    getElementsByTagName(name: "sub"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "sup"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "table"): NodeListOf<HTMLTableElement>;
    getElementsByTagName(name: "tbody"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(name: "td"): NodeListOf<HTMLTableDataCellElement>;
    getElementsByTagName(name: "textarea"): NodeListOf<HTMLTextAreaElement>;
    getElementsByTagName(name: "tfoot"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(name: "th"): NodeListOf<HTMLTableHeaderCellElement>;
    getElementsByTagName(name: "thead"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(name: "title"): NodeListOf<HTMLTitleElement>;
    getElementsByTagName(name: "tr"): NodeListOf<HTMLTableRowElement>;
    getElementsByTagName(name: "track"): NodeListOf<HTMLTrackElement>;
    getElementsByTagName(name: "tt"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "u"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "ul"): NodeListOf<HTMLUListElement>;
    getElementsByTagName(name: "var"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;
    getElementsByTagName(name: "wbr"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "x-ms-webview"): NodeListOf<MSHTMLWebViewElement>;
    getElementsByTagName(name: "xmp"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: string): NodeList;
    createDocumentFragment(): DocumentFragment;
    createStyleSheet(href?: string, index?: number): CSSStyleSheet;
    getElementsByName(elementName: string): NodeList;
    queryCommandState(commandId: string): boolean;
    hasFocus(): boolean;
    execCommandShowHelp(commandId: string): boolean;
    createAttribute(name: string): Attr;
    createTextNode(data: string): Text;
    createNodeIterator(root: Node, whatToShow: number, filter: NodeFilter, entityReferenceExpansion: boolean): NodeIterator;
    createEventObject(eventObj?: any): MSEventObj;
    getSelection(): Selection;
    msElementsFromPoint(x: number, y: number): NodeList;
    msElementsFromRect(left: number, top: number, width: number, height: number): NodeList;
    clear(): void;
    msExitFullscreen(): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "msthumbnailclick", listener: (ev: MSSiteModeEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stop", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mssitemodejumplistitemremoved", listener: (ev: MSSiteModeEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "selectionchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "storagecommit", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msfullscreenerror", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msfullscreenchange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var Document: {
    prototype: Document;
    new(): Document;
}
interface Console {
    info(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    profile(reportName?: string): void;
    assert(test?: boolean, message?: string, ...optionalParams: any[]): void;
    msIsIndependentlyComposed(element: Element): boolean;
    clear(): void;
    dir(value?: any, ...optionalParams: any[]): void;
    profileEnd(): void;
    count(countTitle?: string): void;
    groupEnd(): void;
    time(timerName?: string): void;
    timeEnd(timerName?: string): void;
    trace(): void;
    group(groupTitle?: string): void;
    dirxml(value: any): void;
    debug(message?: string, ...optionalParams: any[]): void;
    groupCollapsed(groupTitle?: string): void;
    select(element: Element): void;
}
declare var Console: {
    prototype: Console;
    new(): Console;
}
interface MSEventObj extends Event {
    nextPage: string;
    keyCode: number;
    toElement: Element;
    returnValue: any;
    dataFld: string;
    y: number;
    dataTransfer: DataTransfer;
    propertyName: string;
    url: string;
    offsetX: number;
    recordset: any;
    screenX: number;
    buttonID: number;
    wheelDelta: number;
    reason: number;
    origin: string;
    data: string;
    srcFilter: any;
    boundElements: HTMLCollection;
    cancelBubble: boolean;
    altLeft: boolean;
    behaviorCookie: number;
    bookmarks: BookmarkCollection;
    type: string;
    repeat: boolean;
    srcElement: Element;
    source: Window;
    fromElement: Element;
    offsetY: number;
    x: number;
    behaviorPart: number;
    qualifier: string;
    altKey: boolean;
    ctrlKey: boolean;
    clientY: number;
    shiftKey: boolean;
    shiftLeft: boolean;
    contentOverflow: boolean;
    screenY: number;
    ctrlLeft: boolean;
    button: number;
    srcUrn: string;
    clientX: number;
    actionURL: string;
    getAttribute(strAttributeName: string, lFlags?: number): any;
    setAttribute(strAttributeName: string, AttributeValue: any, lFlags?: number): void;
    removeAttribute(strAttributeName: string, lFlags?: number): boolean;
}
declare var MSEventObj: {
    prototype: MSEventObj;
    new(): MSEventObj;
}
interface HTMLCanvasElement extends HTMLElement {
    width: number;
    height: number;
    getContext(contextId: "2d"): CanvasRenderingContext2D;
    getContext(contextId: "experimental-webgl"): WebGLRenderingContext;
    getContext(contextId: string, ...args: any[]): any;
    toDataURL(type?: string, ...args: any[]): string;
    msToBlob(): Blob;
}
declare var HTMLCanvasElement: {
    prototype: HTMLCanvasElement;
    new(): HTMLCanvasElement;
}
interface Window extends EventTarget, MSEventAttachmentTarget, WindowLocalStorage, MSWindowExtensions, WindowSessionStorage, WindowTimers, WindowBase64, IDBEnvironment, WindowConsole, GlobalEventHandlers {
    ondragend: (ev: DragEvent) => any;
    onkeydown: (ev: KeyboardEvent) => any;
    ondragover: (ev: DragEvent) => any;
    onkeyup: (ev: KeyboardEvent) => any;
    onreset: (ev: Event) => any;
    onmouseup: (ev: MouseEvent) => any;
    ondragstart: (ev: DragEvent) => any;
    ondrag: (ev: DragEvent) => any;
    screenX: number;
    onmouseover: (ev: MouseEvent) => any;
    ondragleave: (ev: DragEvent) => any;
    history: History;
    pageXOffset: number;
    name: string;
    onafterprint: (ev: Event) => any;
    onpause: (ev: Event) => any;
    onbeforeprint: (ev: Event) => any;
    top: Window;
    onmousedown: (ev: MouseEvent) => any;
    onseeked: (ev: Event) => any;
    opener: Window;
    onclick: (ev: MouseEvent) => any;
    innerHeight: number;
    onwaiting: (ev: Event) => any;
    ononline: (ev: Event) => any;
    ondurationchange: (ev: Event) => any;
    frames: Window;
    onblur: (ev: FocusEvent) => any;
    onemptied: (ev: Event) => any;
    onseeking: (ev: Event) => any;
    oncanplay: (ev: Event) => any;
    outerWidth: number;
    onstalled: (ev: Event) => any;
    onmousemove: (ev: MouseEvent) => any;
    innerWidth: number;
    onoffline: (ev: Event) => any;
    length: number;
    screen: Screen;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    onratechange: (ev: Event) => any;
    onstorage: (ev: StorageEvent) => any;
    onloadstart: (ev: Event) => any;
    ondragenter: (ev: DragEvent) => any;
    onsubmit: (ev: Event) => any;
    self: Window;
    document: Document;
    onprogress: (ev: ProgressEvent) => any;
    ondblclick: (ev: MouseEvent) => any;
    pageYOffset: number;
    oncontextmenu: (ev: MouseEvent) => any;
    onchange: (ev: Event) => any;
    onloadedmetadata: (ev: Event) => any;
    onplay: (ev: Event) => any;
    onerror: ErrorEventHandler;
    onplaying: (ev: Event) => any;
    parent: Window;
    location: Location;
    oncanplaythrough: (ev: Event) => any;
    onabort: (ev: UIEvent) => any;
    onreadystatechange: (ev: Event) => any;
    outerHeight: number;
    onkeypress: (ev: KeyboardEvent) => any;
    frameElement: Element;
    onloadeddata: (ev: Event) => any;
    onsuspend: (ev: Event) => any;
    window: Window;
    onfocus: (ev: FocusEvent) => any;
    onmessage: (ev: MessageEvent) => any;
    ontimeupdate: (ev: Event) => any;
    onresize: (ev: UIEvent) => any;
    onselect: (ev: UIEvent) => any;
    navigator: Navigator;
    styleMedia: StyleMedia;
    ondrop: (ev: DragEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    onended: (ev: Event) => any;
    onhashchange: (ev: Event) => any;
    onunload: (ev: Event) => any;
    onscroll: (ev: UIEvent) => any;
    screenY: number;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onload: (ev: Event) => any;
    onvolumechange: (ev: Event) => any;
    oninput: (ev: Event) => any;
    performance: Performance;
    onmspointerdown: (ev: any) => any;
    animationStartTime: number;
    onmsgesturedoubletap: (ev: any) => any;
    onmspointerhover: (ev: any) => any;
    onmsgesturehold: (ev: any) => any;
    onmspointermove: (ev: any) => any;
    onmsgesturechange: (ev: any) => any;
    onmsgesturestart: (ev: any) => any;
    onmspointercancel: (ev: any) => any;
    onmsgestureend: (ev: any) => any;
    onmsgesturetap: (ev: any) => any;
    onmspointerout: (ev: any) => any;
    msAnimationStartTime: number;
    applicationCache: ApplicationCache;
    onmsinertiastart: (ev: any) => any;
    onmspointerover: (ev: any) => any;
    onpopstate: (ev: PopStateEvent) => any;
    onmspointerup: (ev: any) => any;
    onpageshow: (ev: PageTransitionEvent) => any;
    ondevicemotion: (ev: DeviceMotionEvent) => any;
    devicePixelRatio: number;
    msCrypto: Crypto;
    ondeviceorientation: (ev: DeviceOrientationEvent) => any;
    doNotTrack: string;
    onmspointerenter: (ev: any) => any;
    onpagehide: (ev: PageTransitionEvent) => any;
    onmspointerleave: (ev: any) => any;
    alert(message?: any): void;
    scroll(x?: number, y?: number): void;
    focus(): void;
    scrollTo(x?: number, y?: number): void;
    print(): void;
    prompt(message?: string, _default?: string): string;
    toString(): string;
    open(url?: string, target?: string, features?: string, replace?: boolean): Window;
    scrollBy(x?: number, y?: number): void;
    confirm(message?: string): boolean;
    close(): void;
    postMessage(message: any, targetOrigin: string, ports?: any): void;
    showModalDialog(url?: string, argument?: any, options?: any): any;
    blur(): void;
    getSelection(): Selection;
    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
    msCancelRequestAnimationFrame(handle: number): void;
    matchMedia(mediaQuery: string): MediaQueryList;
    cancelAnimationFrame(handle: number): void;
    msIsStaticHTML(html: string): boolean;
    msMatchMedia(mediaQuery: string): MediaQueryList;
    requestAnimationFrame(callback: FrameRequestCallback): number;
    msRequestAnimationFrame(callback: FrameRequestCallback): number;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "devicemotion", listener: (ev: DeviceMotionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "deviceorientation", listener: (ev: DeviceOrientationEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var Window: {
    prototype: Window;
    new(): Window;
}
interface HTMLCollection extends MSHTMLCollectionExtensions {
    length: number;
    item(nameOrIndex?: any, optionalIndex?: any): Element;
    namedItem(name: string): Element;
    [index: number]: Element;
}
declare var HTMLCollection: {
    prototype: HTMLCollection;
    new(): HTMLCollection;
}
interface BlobPropertyBag {
    type?: string;
    endings?: string;
}
interface Blob {
    type: string;
    size: number;
    msDetachStream(): any;
    slice(start?: number, end?: number, contentType?: string): Blob;
    msClose(): void;
}
declare var Blob: {
    prototype: Blob;
    new (blobParts?: any[], options?: BlobPropertyBag): Blob;
}
interface NavigatorID {
    appVersion: string;
    appName: string;
    userAgent: string;
    platform: string;
    product: string;
    vendor: string;
}
interface HTMLTableElement extends HTMLElement, MSDataBindingTableExtensions, MSDataBindingExtensions, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {
    width: string;
    borderColorLight: any;
    cellSpacing: string;
    tFoot: HTMLTableSectionElement;
    frame: string;
    borderColor: any;
    rows: HTMLCollection;
    rules: string;
    cols: number;
    summary: string;
    caption: HTMLTableCaptionElement;
    tBodies: HTMLCollection;
    tHead: HTMLTableSectionElement;
    align: string;
    cells: HTMLCollection;
    height: any;
    cellPadding: string;
    border: string;
    borderColorDark: any;
    deleteRow(index?: number): void;
    createTBody(): HTMLElement;
    deleteCaption(): void;
    insertRow(index?: number): HTMLElement;
    deleteTFoot(): void;
    createTHead(): HTMLElement;
    deleteTHead(): void;
    createCaption(): HTMLElement;
    moveRow(indexFrom?: number, indexTo?: number): any;
    createTFoot(): HTMLElement;
}
declare var HTMLTableElement: {
    prototype: HTMLTableElement;
    new(): HTMLTableElement;
}
interface TreeWalker {
    whatToShow: number;
    filter: NodeFilter;
    root: Node;
    currentNode: Node;
    expandEntityReferences: boolean;
    previousSibling(): Node;
    lastChild(): Node;
    nextSibling(): Node;
    nextNode(): Node;
    parentNode(): Node;
    firstChild(): Node;
    previousNode(): Node;
}
declare var TreeWalker: {
    prototype: TreeWalker;
    new(): TreeWalker;
}
interface GetSVGDocument {
    getSVGDocument(): Document;
}
interface SVGPathSegCurvetoQuadraticRel extends SVGPathSeg {
    y: number;
    y1: number;
    x: number;
    x1: number;
}
declare var SVGPathSegCurvetoQuadraticRel: {
    prototype: SVGPathSegCurvetoQuadraticRel;
    new(): SVGPathSegCurvetoQuadraticRel;
}
interface Performance {
    navigation: PerformanceNavigation;
    timing: PerformanceTiming;
    getEntriesByType(entryType: string): any;
    toJSON(): any;
    getMeasures(measureName?: string): any;
    clearMarks(markName?: string): void;
    getMarks(markName?: string): any;
    clearResourceTimings(): void;
    mark(markName: string): void;
    measure(measureName: string, startMarkName?: string, endMarkName?: string): void;
    getEntriesByName(name: string, entryType?: string): any;
    getEntries(): any;
    clearMeasures(measureName?: string): void;
    setResourceTimingBufferSize(maxSize: number): void;
    now(): number;
}
declare var Performance: {
    prototype: Performance;
    new(): Performance;
}
interface MSDataBindingTableExtensions {
    dataPageSize: number;
    nextPage(): void;
    firstPage(): void;
    refresh(): void;
    previousPage(): void;
    lastPage(): void;
}
interface CompositionEvent extends UIEvent {
    data: string;
    locale: string;
    initCompositionEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, locale: string): void;
}
declare var CompositionEvent: {
    prototype: CompositionEvent;
    new(): CompositionEvent;
}
interface WindowTimers extends WindowTimersExtension {
    clearTimeout(handle: number): void;
    setTimeout(handler: any, timeout?: any, ...args: any[]): number;
    clearInterval(handle: number): void;
    setInterval(handler: any, timeout?: any, ...args: any[]): number;
}
interface SVGMarkerElement extends SVGElement, SVGStylable, SVGLangSpace, SVGFitToViewBox, SVGExternalResourcesRequired {
    orientType: SVGAnimatedEnumeration;
    markerUnits: SVGAnimatedEnumeration;
    markerWidth: SVGAnimatedLength;
    markerHeight: SVGAnimatedLength;
    orientAngle: SVGAnimatedAngle;
    refY: SVGAnimatedLength;
    refX: SVGAnimatedLength;
    setOrientToAngle(angle: SVGAngle): void;
    setOrientToAuto(): void;
    SVG_MARKER_ORIENT_UNKNOWN: number;
    SVG_MARKER_ORIENT_ANGLE: number;
    SVG_MARKERUNITS_UNKNOWN: number;
    SVG_MARKERUNITS_STROKEWIDTH: number;
    SVG_MARKER_ORIENT_AUTO: number;
    SVG_MARKERUNITS_USERSPACEONUSE: number;
}
declare var SVGMarkerElement: {
    prototype: SVGMarkerElement;
    new(): SVGMarkerElement;
    SVG_MARKER_ORIENT_UNKNOWN: number;
    SVG_MARKER_ORIENT_ANGLE: number;
    SVG_MARKERUNITS_UNKNOWN: number;
    SVG_MARKERUNITS_STROKEWIDTH: number;
    SVG_MARKER_ORIENT_AUTO: number;
    SVG_MARKERUNITS_USERSPACEONUSE: number;
}
interface CSSStyleDeclaration {
    backgroundAttachment: string;
    visibility: string;
    textAlignLast: string;
    borderRightStyle: string;
    counterIncrement: string;
    orphans: string;
    cssText: string;
    borderStyle: string;
    pointerEvents: string;
    borderTopColor: string;
    markerEnd: string;
    textIndent: string;
    listStyleImage: string;
    cursor: string;
    listStylePosition: string;
    wordWrap: string;
    borderTopStyle: string;
    alignmentBaseline: string;
    opacity: string;
    direction: string;
    strokeMiterlimit: string;
    maxWidth: string;
    color: string;
    clip: string;
    borderRightWidth: string;
    verticalAlign: string;
    overflow: string;
    mask: string;
    borderLeftStyle: string;
    emptyCells: string;
    stopOpacity: string;
    paddingRight: string;
    parentRule: CSSRule;
    background: string;
    boxSizing: string;
    textJustify: string;
    height: string;
    paddingTop: string;
    length: number;
    right: string;
    baselineShift: string;
    borderLeft: string;
    widows: string;
    lineHeight: string;
    left: string;
    textUnderlinePosition: string;
    glyphOrientationHorizontal: string;
    display: string;
    textAnchor: string;
    cssFloat: string;
    strokeDasharray: string;
    rubyAlign: string;
    fontSizeAdjust: string;
    borderLeftColor: string;
    backgroundImage: string;
    listStyleType: string;
    strokeWidth: string;
    textOverflow: string;
    fillRule: string;
    borderBottomColor: string;
    zIndex: string;
    position: string;
    listStyle: string;
    msTransformOrigin: string;
    dominantBaseline: string;
    overflowY: string;
    fill: string;
    captionSide: string;
    borderCollapse: string;
    boxShadow: string;
    quotes: string;
    tableLayout: string;
    unicodeBidi: string;
    borderBottomWidth: string;
    backgroundSize: string;
    textDecoration: string;
    strokeDashoffset: string;
    fontSize: string;
    border: string;
    pageBreakBefore: string;
    borderTopRightRadius: string;
    msTransform: string;
    borderBottomLeftRadius: string;
    textTransform: string;
    rubyPosition: string;
    strokeLinejoin: string;
    clipPath: string;
    borderRightColor: string;
    fontFamily: string;
    clear: string;
    content: string;
    backgroundClip: string;
    marginBottom: string;
    counterReset: string;
    outlineWidth: string;
    marginRight: string;
    paddingLeft: string;
    borderBottom: string;
    wordBreak: string;
    marginTop: string;
    top: string;
    fontWeight: string;
    borderRight: string;
    width: string;
    kerning: string;
    pageBreakAfter: string;
    borderBottomStyle: string;
    fontStretch: string;
    padding: string;
    strokeOpacity: string;
    markerStart: string;
    bottom: string;
    borderLeftWidth: string;
    clipRule: string;
    backgroundPosition: string;
    backgroundColor: string;
    pageBreakInside: string;
    backgroundOrigin: string;
    strokeLinecap: string;
    borderTopWidth: string;
    outlineStyle: string;
    borderTop: string;
    outlineColor: string;
    paddingBottom: string;
    marginLeft: string;
    font: string;
    outline: string;
    wordSpacing: string;
    maxHeight: string;
    fillOpacity: string;
    letterSpacing: string;
    borderSpacing: string;
    backgroundRepeat: string;
    borderRadius: string;
    borderWidth: string;
    borderBottomRightRadius: string;
    whiteSpace: string;
    fontStyle: string;
    minWidth: string;
    stopColor: string;
    borderTopLeftRadius: string;
    borderColor: string;
    marker: string;
    glyphOrientationVertical: string;
    markerMid: string;
    fontVariant: string;
    minHeight: string;
    stroke: string;
    rubyOverhang: string;
    overflowX: string;
    textAlign: string;
    margin: string;
    animationFillMode: string;
    floodColor: string;
    animationIterationCount: string;
    textShadow: string;
    backfaceVisibility: string;
    msAnimationIterationCount: string;
    animationDelay: string;
    animationTimingFunction: string;
    columnWidth: any;
    msScrollSnapX: string;
    columnRuleColor: any;
    columnRuleWidth: any;
    transitionDelay: string;
    transition: string;
    msFlowFrom: string;
    msScrollSnapType: string;
    msContentZoomSnapType: string;
    msGridColumns: string;
    msAnimationName: string;
    msGridRowAlign: string;
    msContentZoomChaining: string;
    msGridColumn: any;
    msHyphenateLimitZone: any;
    msScrollRails: string;
    msAnimationDelay: string;
    enableBackground: string;
    msWrapThrough: string;
    columnRuleStyle: string;
    msAnimation: string;
    msFlexFlow: string;
    msScrollSnapY: string;
    msHyphenateLimitLines: any;
    msTouchAction: string;
    msScrollLimit: string;
    animation: string;
    transform: string;
    filter: string;
    colorInterpolationFilters: string;
    transitionTimingFunction: string;
    msBackfaceVisibility: string;
    animationPlayState: string;
    transformOrigin: string;
    msScrollLimitYMin: any;
    msFontFeatureSettings: string;
    msContentZoomLimitMin: any;
    columnGap: any;
    transitionProperty: string;
    msAnimationDuration: string;
    msAnimationFillMode: string;
    msFlexDirection: string;
    msTransitionDuration: string;
    fontFeatureSettings: string;
    breakBefore: string;
    msFlexWrap: string;
    perspective: string;
    msFlowInto: string;
    msTransformStyle: string;
    msScrollTranslation: string;
    msTransitionProperty: string;
    msUserSelect: string;
    msOverflowStyle: string;
    msScrollSnapPointsY: string;
    animationDirection: string;
    animationDuration: string;
    msFlex: string;
    msTransitionTimingFunction: string;
    animationName: string;
    columnRule: string;
    msGridColumnSpan: any;
    msFlexNegative: string;
    columnFill: string;
    msGridRow: any;
    msFlexOrder: string;
    msFlexItemAlign: string;
    msFlexPositive: string;
    msContentZoomLimitMax: any;
    msScrollLimitYMax: any;
    msGridColumnAlign: string;
    perspectiveOrigin: string;
    lightingColor: string;
    columns: string;
    msScrollChaining: string;
    msHyphenateLimitChars: string;
    msTouchSelect: string;
    floodOpacity: string;
    msAnimationDirection: string;
    msAnimationPlayState: string;
    columnSpan: string;
    msContentZooming: string;
    msPerspective: string;
    msFlexPack: string;
    msScrollSnapPointsX: string;
    msContentZoomSnapPoints: string;
    msGridRowSpan: any;
    msContentZoomSnap: string;
    msScrollLimitXMin: any;
    breakInside: string;
    msHighContrastAdjust: string;
    msFlexLinePack: string;
    msGridRows: string;
    transitionDuration: string;
    msHyphens: string;
    breakAfter: string;
    msTransition: string;
    msPerspectiveOrigin: string;
    msContentZoomLimit: string;
    msScrollLimitXMax: any;
    msFlexAlign: string;
    msWrapMargin: any;
    columnCount: any;
    msAnimationTimingFunction: string;
    msTransitionDelay: string;
    transformStyle: string;
    msWrapFlow: string;
    msFlexPreferredSize: string;
    alignItems: string;
    borderImageSource: string;
    flexBasis: string;
    borderImageWidth: string;
    borderImageRepeat: string;
    order: string;
    flex: string;
    alignContent: string;
    msImeAlign: string;
    flexShrink: string;
    flexGrow: string;
    borderImageSlice: string;
    flexWrap: string;
    borderImageOutset: string;
    flexDirection: string;
    touchAction: string;
    flexFlow: string;
    borderImage: string;
    justifyContent: string;
    alignSelf: string;
    msTextCombineHorizontal: string;
    getPropertyPriority(propertyName: string): string;
    getPropertyValue(propertyName: string): string;
    removeProperty(propertyName: string): string;
    item(index: number): string;
    [index: number]: string;
    setProperty(propertyName: string, value: string, priority?: string): void;
}
declare var CSSStyleDeclaration: {
    prototype: CSSStyleDeclaration;
    new(): CSSStyleDeclaration;
}
interface SVGGElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGGElement: {
    prototype: SVGGElement;
    new(): SVGGElement;
}
interface MSStyleCSSProperties extends MSCSSProperties {
    pixelWidth: number;
    posHeight: number;
    posLeft: number;
    pixelTop: number;
    pixelBottom: number;
    textDecorationNone: boolean;
    pixelLeft: number;
    posTop: number;
    posBottom: number;
    textDecorationOverline: boolean;
    posWidth: number;
    textDecorationLineThrough: boolean;
    pixelHeight: number;
    textDecorationBlink: boolean;
    posRight: number;
    pixelRight: number;
    textDecorationUnderline: boolean;
}
declare var MSStyleCSSProperties: {
    prototype: MSStyleCSSProperties;
    new(): MSStyleCSSProperties;
}
interface Navigator extends NavigatorID, NavigatorOnLine, NavigatorContentUtils, MSNavigatorExtensions, NavigatorGeolocation, MSNavigatorDoNotTrack, NavigatorStorageUtils, MSFileSaver {
    msMaxTouchPoints: number;
    msPointerEnabled: boolean;
    msManipulationViewsEnabled: boolean;
    pointerEnabled: boolean;
    maxTouchPoints: number;
    msLaunchUri(uri: string, successCallback?: MSLaunchUriCallback, noHandlerCallback?: MSLaunchUriCallback): void;
}
declare var Navigator: {
    prototype: Navigator;
    new(): Navigator;
}
interface SVGPathSegCurvetoCubicSmoothAbs extends SVGPathSeg {
    y: number;
    x2: number;
    x: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicSmoothAbs: {
    prototype: SVGPathSegCurvetoCubicSmoothAbs;
    new(): SVGPathSegCurvetoCubicSmoothAbs;
}
interface SVGZoomEvent extends UIEvent {
    zoomRectScreen: SVGRect;
    previousScale: number;
    newScale: number;
    previousTranslate: SVGPoint;
    newTranslate: SVGPoint;
}
declare var SVGZoomEvent: {
    prototype: SVGZoomEvent;
    new(): SVGZoomEvent;
}
interface NodeSelector {
    querySelectorAll(selectors: string): NodeList;
    querySelector(selectors: string): Element;
}
interface HTMLTableDataCellElement extends HTMLTableCellElement {
}
declare var HTMLTableDataCellElement: {
    prototype: HTMLTableDataCellElement;
    new(): HTMLTableDataCellElement;
}
interface HTMLBaseElement extends HTMLElement {
    target: string;
    href: string;
}
declare var HTMLBaseElement: {
    prototype: HTMLBaseElement;
    new(): HTMLBaseElement;
}
interface ClientRect {
    left: number;
    width: number;
    right: number;
    top: number;
    bottom: number;
    height: number;
}
declare var ClientRect: {
    prototype: ClientRect;
    new(): ClientRect;
}
interface PositionErrorCallback {
    (error: PositionError): void;
}
interface DOMImplementation {
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createDocument(namespaceURI: string, qualifiedName: string, doctype: DocumentType): Document;
    hasFeature(feature: string, version?: string): boolean;
    createHTMLDocument(title: string): Document;
}
declare var DOMImplementation: {
    prototype: DOMImplementation;
    new(): DOMImplementation;
}
interface SVGUnitTypes {
    SVG_UNIT_TYPE_UNKNOWN: number;
    SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    SVG_UNIT_TYPE_USERSPACEONUSE: number;
}
declare var SVGUnitTypes: SVGUnitTypes;
interface Element extends Node, NodeSelector, ElementTraversal, GlobalEventHandlers {
    scrollTop: number;
    clientLeft: number;
    scrollLeft: number;
    tagName: string;
    clientWidth: number;
    scrollWidth: number;
    clientHeight: number;
    clientTop: number;
    scrollHeight: number;
    msRegionOverflow: string;
    onmspointerdown: (ev: any) => any;
    onmsgotpointercapture: (ev: any) => any;
    onmsgesturedoubletap: (ev: any) => any;
    onmspointerhover: (ev: any) => any;
    onmsgesturehold: (ev: any) => any;
    onmspointermove: (ev: any) => any;
    onmsgesturechange: (ev: any) => any;
    onmsgesturestart: (ev: any) => any;
    onmspointercancel: (ev: any) => any;
    onmsgestureend: (ev: any) => any;
    onmsgesturetap: (ev: any) => any;
    onmspointerout: (ev: any) => any;
    onmsinertiastart: (ev: any) => any;
    onmslostpointercapture: (ev: any) => any;
    onmspointerover: (ev: any) => any;
    msContentZoomFactor: number;
    onmspointerup: (ev: any) => any;
    onlostpointercapture: (ev: PointerEvent) => any;
    onmspointerenter: (ev: any) => any;
    ongotpointercapture: (ev: PointerEvent) => any;
    onmspointerleave: (ev: any) => any;
    getAttribute(name?: string): string;
    getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;
    hasAttributeNS(namespaceURI: string, localName: string): boolean;
    getBoundingClientRect(): ClientRect;
    getAttributeNS(namespaceURI: string, localName: string): string;
    getAttributeNodeNS(namespaceURI: string, localName: string): Attr;
    setAttributeNodeNS(newAttr: Attr): Attr;
    msMatchesSelector(selectors: string): boolean;
    hasAttribute(name: string): boolean;
    removeAttribute(name?: string): void;
    setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void;
    getAttributeNode(name: string): Attr;
    fireEvent(eventName: string, eventObj?: any): boolean;
    getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
    getElementsByTagName(name: "abbr"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "acronym"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "address"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "applet"): NodeListOf<HTMLAppletElement>;
    getElementsByTagName(name: "area"): NodeListOf<HTMLAreaElement>;
    getElementsByTagName(name: "article"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "aside"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;
    getElementsByTagName(name: "b"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "base"): NodeListOf<HTMLBaseElement>;
    getElementsByTagName(name: "basefont"): NodeListOf<HTMLBaseFontElement>;
    getElementsByTagName(name: "bdo"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "bgsound"): NodeListOf<HTMLBGSoundElement>;
    getElementsByTagName(name: "big"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "blockquote"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
    getElementsByTagName(name: "br"): NodeListOf<HTMLBRElement>;
    getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
    getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;
    getElementsByTagName(name: "caption"): NodeListOf<HTMLTableCaptionElement>;
    getElementsByTagName(name: "center"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "cite"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "code"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "col"): NodeListOf<HTMLTableColElement>;
    getElementsByTagName(name: "colgroup"): NodeListOf<HTMLTableColElement>;
    getElementsByTagName(name: "datalist"): NodeListOf<HTMLDataListElement>;
    getElementsByTagName(name: "dd"): NodeListOf<HTMLDDElement>;
    getElementsByTagName(name: "del"): NodeListOf<HTMLModElement>;
    getElementsByTagName(name: "dfn"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "dir"): NodeListOf<HTMLDirectoryElement>;
    getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;
    getElementsByTagName(name: "dl"): NodeListOf<HTMLDListElement>;
    getElementsByTagName(name: "dt"): NodeListOf<HTMLDTElement>;
    getElementsByTagName(name: "em"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "embed"): NodeListOf<HTMLEmbedElement>;
    getElementsByTagName(name: "fieldset"): NodeListOf<HTMLFieldSetElement>;
    getElementsByTagName(name: "figcaption"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "figure"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "font"): NodeListOf<HTMLFontElement>;
    getElementsByTagName(name: "footer"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
    getElementsByTagName(name: "frame"): NodeListOf<HTMLFrameElement>;
    getElementsByTagName(name: "frameset"): NodeListOf<HTMLFrameSetElement>;
    getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h2"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h3"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h4"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h5"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h6"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;
    getElementsByTagName(name: "header"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "hgroup"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "hr"): NodeListOf<HTMLHRElement>;
    getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;
    getElementsByTagName(name: "i"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;
    getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;
    getElementsByTagName(name: "input"): NodeListOf<HTMLInputElement>;
    getElementsByTagName(name: "ins"): NodeListOf<HTMLModElement>;
    getElementsByTagName(name: "isindex"): NodeListOf<HTMLIsIndexElement>;
    getElementsByTagName(name: "kbd"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "keygen"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "label"): NodeListOf<HTMLLabelElement>;
    getElementsByTagName(name: "legend"): NodeListOf<HTMLLegendElement>;
    getElementsByTagName(name: "li"): NodeListOf<HTMLLIElement>;
    getElementsByTagName(name: "link"): NodeListOf<HTMLLinkElement>;
    getElementsByTagName(name: "listing"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "map"): NodeListOf<HTMLMapElement>;
    getElementsByTagName(name: "mark"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "marquee"): NodeListOf<HTMLMarqueeElement>;
    getElementsByTagName(name: "menu"): NodeListOf<HTMLMenuElement>;
    getElementsByTagName(name: "meta"): NodeListOf<HTMLMetaElement>;
    getElementsByTagName(name: "nav"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "nextid"): NodeListOf<HTMLNextIdElement>;
    getElementsByTagName(name: "nobr"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "noframes"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "noscript"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "object"): NodeListOf<HTMLObjectElement>;
    getElementsByTagName(name: "ol"): NodeListOf<HTMLOListElement>;
    getElementsByTagName(name: "optgroup"): NodeListOf<HTMLOptGroupElement>;
    getElementsByTagName(name: "option"): NodeListOf<HTMLOptionElement>;
    getElementsByTagName(name: "p"): NodeListOf<HTMLParagraphElement>;
    getElementsByTagName(name: "param"): NodeListOf<HTMLParamElement>;
    getElementsByTagName(name: "plaintext"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "pre"): NodeListOf<HTMLPreElement>;
    getElementsByTagName(name: "progress"): NodeListOf<HTMLProgressElement>;
    getElementsByTagName(name: "q"): NodeListOf<HTMLQuoteElement>;
    getElementsByTagName(name: "rt"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "ruby"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "s"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "samp"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;
    getElementsByTagName(name: "section"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "select"): NodeListOf<HTMLSelectElement>;
    getElementsByTagName(name: "small"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "SOURCE"): NodeListOf<HTMLSourceElement>;
    getElementsByTagName(name: "span"): NodeListOf<HTMLSpanElement>;
    getElementsByTagName(name: "strike"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "strong"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "style"): NodeListOf<HTMLStyleElement>;
    getElementsByTagName(name: "sub"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "sup"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "table"): NodeListOf<HTMLTableElement>;
    getElementsByTagName(name: "tbody"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(name: "td"): NodeListOf<HTMLTableDataCellElement>;
    getElementsByTagName(name: "textarea"): NodeListOf<HTMLTextAreaElement>;
    getElementsByTagName(name: "tfoot"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(name: "th"): NodeListOf<HTMLTableHeaderCellElement>;
    getElementsByTagName(name: "thead"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(name: "title"): NodeListOf<HTMLTitleElement>;
    getElementsByTagName(name: "tr"): NodeListOf<HTMLTableRowElement>;
    getElementsByTagName(name: "track"): NodeListOf<HTMLTrackElement>;
    getElementsByTagName(name: "tt"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "u"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "ul"): NodeListOf<HTMLUListElement>;
    getElementsByTagName(name: "var"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;
    getElementsByTagName(name: "wbr"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "x-ms-webview"): NodeListOf<MSHTMLWebViewElement>;
    getElementsByTagName(name: "xmp"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: string): NodeList;
    getClientRects(): ClientRectList;
    setAttributeNode(newAttr: Attr): Attr;
    removeAttributeNode(oldAttr: Attr): Attr;
    setAttribute(name?: string, value?: string): void;
    removeAttributeNS(namespaceURI: string, localName: string): void;
    msGetRegionContent(): MSRangeCollection;
    msReleasePointerCapture(pointerId: number): void;
    msSetPointerCapture(pointerId: number): void;
    msZoomTo(args: MsZoomToOptions): void;
    setPointerCapture(pointerId: number): void;
    msGetUntransformedBounds(): ClientRect;
    releasePointerCapture(pointerId: number): void;
    msRequestFullscreen(): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var Element: {
    prototype: Element;
    new(): Element;
}
interface HTMLNextIdElement extends HTMLElement {
    n: string;
}
declare var HTMLNextIdElement: {
    prototype: HTMLNextIdElement;
    new(): HTMLNextIdElement;
}
interface SVGPathSegMovetoRel extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegMovetoRel: {
    prototype: SVGPathSegMovetoRel;
    new(): SVGPathSegMovetoRel;
}
interface SVGLineElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    y1: SVGAnimatedLength;
    x2: SVGAnimatedLength;
    x1: SVGAnimatedLength;
    y2: SVGAnimatedLength;
}
declare var SVGLineElement: {
    prototype: SVGLineElement;
    new(): SVGLineElement;
}
interface HTMLParagraphElement extends HTMLElement, DOML2DeprecatedTextFlowControl {
    align: string;
}
declare var HTMLParagraphElement: {
    prototype: HTMLParagraphElement;
    new(): HTMLParagraphElement;
}
interface HTMLAreasCollection extends HTMLCollection {
    remove(index?: number): void;
    add(element: HTMLElement, before?: any): void;
}
declare var HTMLAreasCollection: {
    prototype: HTMLAreasCollection;
    new(): HTMLAreasCollection;
}
interface SVGDescElement extends SVGElement, SVGStylable, SVGLangSpace {
}
declare var SVGDescElement: {
    prototype: SVGDescElement;
    new(): SVGDescElement;
}
interface Node extends EventTarget {
    nodeType: number;
    previousSibling: Node;
    localName: string;
    namespaceURI: string;
    textContent: string;
    parentNode: Node;
    nextSibling: Node;
    nodeValue: string;
    lastChild: Node;
    childNodes: NodeList;
    nodeName: string;
    ownerDocument: Document;
    attributes: NamedNodeMap;
    firstChild: Node;
    prefix: string;
    removeChild(oldChild: Node): Node;
    appendChild(newChild: Node): Node;
    isSupported(feature: string, version: string): boolean;
    isEqualNode(arg: Node): boolean;
    lookupPrefix(namespaceURI: string): string;
    isDefaultNamespace(namespaceURI: string): boolean;
    compareDocumentPosition(other: Node): number;
    normalize(): void;
    isSameNode(other: Node): boolean;
    hasAttributes(): boolean;
    lookupNamespaceURI(prefix: string): string;
    cloneNode(deep?: boolean): Node;
    hasChildNodes(): boolean;
    replaceChild(newChild: Node, oldChild: Node): Node;
    insertBefore(newChild: Node, refChild?: Node): Node;
    ENTITY_REFERENCE_NODE: number;
    ATTRIBUTE_NODE: number;
    DOCUMENT_FRAGMENT_NODE: number;
    TEXT_NODE: number;
    ELEMENT_NODE: number;
    COMMENT_NODE: number;
    DOCUMENT_POSITION_DISCONNECTED: number;
    DOCUMENT_POSITION_CONTAINED_BY: number;
    DOCUMENT_POSITION_CONTAINS: number;
    DOCUMENT_TYPE_NODE: number;
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    DOCUMENT_NODE: number;
    ENTITY_NODE: number;
    PROCESSING_INSTRUCTION_NODE: number;
    CDATA_SECTION_NODE: number;
    NOTATION_NODE: number;
    DOCUMENT_POSITION_FOLLOWING: number;
    DOCUMENT_POSITION_PRECEDING: number;
}
declare var Node: {
    prototype: Node;
    new(): Node;
    ENTITY_REFERENCE_NODE: number;
    ATTRIBUTE_NODE: number;
    DOCUMENT_FRAGMENT_NODE: number;
    TEXT_NODE: number;
    ELEMENT_NODE: number;
    COMMENT_NODE: number;
    DOCUMENT_POSITION_DISCONNECTED: number;
    DOCUMENT_POSITION_CONTAINED_BY: number;
    DOCUMENT_POSITION_CONTAINS: number;
    DOCUMENT_TYPE_NODE: number;
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    DOCUMENT_NODE: number;
    ENTITY_NODE: number;
    PROCESSING_INSTRUCTION_NODE: number;
    CDATA_SECTION_NODE: number;
    NOTATION_NODE: number;
    DOCUMENT_POSITION_FOLLOWING: number;
    DOCUMENT_POSITION_PRECEDING: number;
}
interface SVGPathSegCurvetoQuadraticSmoothRel extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegCurvetoQuadraticSmoothRel: {
    prototype: SVGPathSegCurvetoQuadraticSmoothRel;
    new(): SVGPathSegCurvetoQuadraticSmoothRel;
}
interface DOML2DeprecatedListSpaceReduction {
    compact: boolean;
}
interface MSScriptHost {
}
declare var MSScriptHost: {
    prototype: MSScriptHost;
    new(): MSScriptHost;
}
interface SVGClipPathElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    clipPathUnits: SVGAnimatedEnumeration;
}
declare var SVGClipPathElement: {
    prototype: SVGClipPathElement;
    new(): SVGClipPathElement;
}
interface MouseEvent extends UIEvent {
    toElement: Element;
    layerY: number;
    fromElement: Element;
    which: number;
    pageX: number;
    offsetY: number;
    x: number;
    y: number;
    metaKey: boolean;
    altKey: boolean;
    ctrlKey: boolean;
    offsetX: number;
    screenX: number;
    clientY: number;
    shiftKey: boolean;
    layerX: number;
    screenY: number;
    relatedTarget: EventTarget;
    button: number;
    pageY: number;
    buttons: number;
    clientX: number;
    initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget): void;
    getModifierState(keyArg: string): boolean;
}
declare var MouseEvent: {
    prototype: MouseEvent;
    new(): MouseEvent;
}
interface RangeException {
    code: number;
    message: string;
    name: string;
    toString(): string;
    INVALID_NODE_TYPE_ERR: number;
    BAD_BOUNDARYPOINTS_ERR: number;
}
declare var RangeException: {
    prototype: RangeException;
    new(): RangeException;
    INVALID_NODE_TYPE_ERR: number;
    BAD_BOUNDARYPOINTS_ERR: number;
}
interface SVGTextPositioningElement extends SVGTextContentElement {
    y: SVGAnimatedLengthList;
    rotate: SVGAnimatedNumberList;
    dy: SVGAnimatedLengthList;
    x: SVGAnimatedLengthList;
    dx: SVGAnimatedLengthList;
}
declare var SVGTextPositioningElement: {
    prototype: SVGTextPositioningElement;
    new(): SVGTextPositioningElement;
}
interface HTMLAppletElement extends HTMLElement, DOML2DeprecatedMarginStyle, DOML2DeprecatedBorderStyle, DOML2DeprecatedAlignmentStyle, MSDataBindingExtensions, MSDataBindingRecordSetExtensions {
    width: number;
    codeType: string;
    object: string;
    form: HTMLFormElement;
    code: string;
    archive: string;
    alt: string;
    standby: string;
    classid: string;
    name: string;
    useMap: string;
    data: string;
    height: string;
    altHtml: string;
    contentDocument: Document;
    codeBase: string;
    declare: boolean;
    type: string;
    BaseHref: string;
}
declare var HTMLAppletElement: {
    prototype: HTMLAppletElement;
    new(): HTMLAppletElement;
}
interface TextMetrics {
    width: number;
}
declare var TextMetrics: {
    prototype: TextMetrics;
    new(): TextMetrics;
}
interface DocumentEvent {
    createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
    createEvent(eventInterface: "CloseEvent"): CloseEvent;
    createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
    createEvent(eventInterface: "CustomEvent"): CustomEvent;
    createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface: "DragEvent"): DragEvent;
    createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
    createEvent(eventInterface: "Event"): Event;
    createEvent(eventInterface: "Events"): Event;
    createEvent(eventInterface: "FocusEvent"): FocusEvent;
    createEvent(eventInterface: "HTMLEvents"): Event;
    createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface: "LongRunningScriptDetectedEvent"): LongRunningScriptDetectedEvent;
    createEvent(eventInterface: "MessageEvent"): MessageEvent;
    createEvent(eventInterface: "MouseEvent"): MouseEvent;
    createEvent(eventInterface: "MouseEvents"): MouseEvent;
    createEvent(eventInterface: "MouseWheelEvent"): MouseWheelEvent;
    createEvent(eventInterface: "MSGestureEvent"): MSGestureEvent;
    createEvent(eventInterface: "MSPointerEvent"): MSPointerEvent;
    createEvent(eventInterface: "MutationEvent"): MutationEvent;
    createEvent(eventInterface: "MutationEvents"): MutationEvent;
    createEvent(eventInterface: "NavigationCompletedEvent"): NavigationCompletedEvent;
    createEvent(eventInterface: "NavigationEvent"): NavigationEvent;
    createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface: "PointerEvent"): MSPointerEvent;
    createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
    createEvent(eventInterface: "ProgressEvent"): ProgressEvent;
    createEvent(eventInterface: "StorageEvent"): StorageEvent;
    createEvent(eventInterface: "SVGZoomEvents"): SVGZoomEvent;
    createEvent(eventInterface: "TextEvent"): TextEvent;
    createEvent(eventInterface: "TrackEvent"): TrackEvent;
    createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
    createEvent(eventInterface: "UIEvent"): UIEvent;
    createEvent(eventInterface: "UIEvents"): UIEvent;
    createEvent(eventInterface: "UnviewableContentIdentifiedEvent"): UnviewableContentIdentifiedEvent;
    createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface: "WheelEvent"): WheelEvent;
    createEvent(eventInterface: string): Event;
}
interface HTMLOListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {
    start: number;
}
declare var HTMLOListElement: {
    prototype: HTMLOListElement;
    new(): HTMLOListElement;
}
interface SVGPathSegLinetoVerticalRel extends SVGPathSeg {
    y: number;
}
declare var SVGPathSegLinetoVerticalRel: {
    prototype: SVGPathSegLinetoVerticalRel;
    new(): SVGPathSegLinetoVerticalRel;
}
interface SVGAnimatedString {
    animVal: string;
    baseVal: string;
}
declare var SVGAnimatedString: {
    prototype: SVGAnimatedString;
    new(): SVGAnimatedString;
}
interface CDATASection extends Text {
}
declare var CDATASection: {
    prototype: CDATASection;
    new(): CDATASection;
}
interface StyleMedia {
    type: string;
    matchMedium(mediaquery: string): boolean;
}
declare var StyleMedia: {
    prototype: StyleMedia;
    new(): StyleMedia;
}
interface HTMLSelectElement extends HTMLElement, MSHTMLCollectionExtensions, MSDataBindingExtensions {
    options: HTMLSelectElement;
    value: string;
    form: HTMLFormElement;
    name: string;
    size: number;
    length: number;
    selectedIndex: number;
    multiple: boolean;
    type: string;
    validationMessage: string;
    autofocus: boolean;
    validity: ValidityState;
    required: boolean;
    willValidate: boolean;
    remove(index?: number): void;
    add(element: HTMLElement, before?: any): void;
    item(name?: any, index?: any): any;
    namedItem(name: string): any;
    [name: string]: any;
    checkValidity(): boolean;
    setCustomValidity(error: string): void;
}
declare var HTMLSelectElement: {
    prototype: HTMLSelectElement;
    new(): HTMLSelectElement;
}
interface TextRange {
    boundingLeft: number;
    htmlText: string;
    offsetLeft: number;
    boundingWidth: number;
    boundingHeight: number;
    boundingTop: number;
    text: string;
    offsetTop: number;
    moveToPoint(x: number, y: number): void;
    queryCommandValue(cmdID: string): any;
    getBookmark(): string;
    move(unit: string, count?: number): number;
    queryCommandIndeterm(cmdID: string): boolean;
    scrollIntoView(fStart?: boolean): void;
    findText(string: string, count?: number, flags?: number): boolean;
    execCommand(cmdID: string, showUI?: boolean, value?: any): boolean;
    getBoundingClientRect(): ClientRect;
    moveToBookmark(bookmark: string): boolean;
    isEqual(range: TextRange): boolean;
    duplicate(): TextRange;
    collapse(start?: boolean): void;
    queryCommandText(cmdID: string): string;
    select(): void;
    pasteHTML(html: string): void;
    inRange(range: TextRange): boolean;
    moveEnd(unit: string, count?: number): number;
    getClientRects(): ClientRectList;
    moveStart(unit: string, count?: number): number;
    parentElement(): Element;
    queryCommandState(cmdID: string): boolean;
    compareEndPoints(how: string, sourceRange: TextRange): number;
    execCommandShowHelp(cmdID: string): boolean;
    moveToElementText(element: Element): void;
    expand(Unit: string): boolean;
    queryCommandSupported(cmdID: string): boolean;
    setEndPoint(how: string, SourceRange: TextRange): void;
    queryCommandEnabled(cmdID: string): boolean;
}
declare var TextRange: {
    prototype: TextRange;
    new(): TextRange;
}
interface SVGTests {
    requiredFeatures: SVGStringList;
    requiredExtensions: SVGStringList;
    systemLanguage: SVGStringList;
    hasExtension(extension: string): boolean;
}
interface HTMLBlockElement extends HTMLElement, DOML2DeprecatedTextFlowControl {
    width: number;
    cite: string;
}
declare var HTMLBlockElement: {
    prototype: HTMLBlockElement;
    new(): HTMLBlockElement;
}
interface CSSStyleSheet extends StyleSheet {
    owningElement: Element;
    imports: StyleSheetList;
    isAlternate: boolean;
    rules: MSCSSRuleList;
    isPrefAlternate: boolean;
    readOnly: boolean;
    cssText: string;
    ownerRule: CSSRule;
    href: string;
    cssRules: CSSRuleList;
    id: string;
    pages: StyleSheetPageList;
    addImport(bstrURL: string, lIndex?: number): number;
    addPageRule(bstrSelector: string, bstrStyle: string, lIndex?: number): number;
    insertRule(rule: string, index?: number): number;
    removeRule(lIndex: number): void;
    deleteRule(index?: number): void;
    addRule(bstrSelector: string, bstrStyle?: string, lIndex?: number): number;
    removeImport(lIndex: number): void;
}
declare var CSSStyleSheet: {
    prototype: CSSStyleSheet;
    new(): CSSStyleSheet;
}
interface MSSelection {
    type: string;
    typeDetail: string;
    createRange(): TextRange;
    clear(): void;
    createRangeCollection(): TextRangeCollection;
    empty(): void;
}
declare var MSSelection: {
    prototype: MSSelection;
    new(): MSSelection;
}
interface HTMLMetaElement extends HTMLElement {
    httpEquiv: string;
    name: string;
    content: string;
    url: string;
    scheme: string;
    charset: string;
}
declare var HTMLMetaElement: {
    prototype: HTMLMetaElement;
    new(): HTMLMetaElement;
}
interface SVGPatternElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGTests, SVGFitToViewBox, SVGExternalResourcesRequired, SVGURIReference {
    patternUnits: SVGAnimatedEnumeration;
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    patternContentUnits: SVGAnimatedEnumeration;
    patternTransform: SVGAnimatedTransformList;
    height: SVGAnimatedLength;
}
declare var SVGPatternElement: {
    prototype: SVGPatternElement;
    new(): SVGPatternElement;
}
interface SVGAnimatedAngle {
    animVal: SVGAngle;
    baseVal: SVGAngle;
}
declare var SVGAnimatedAngle: {
    prototype: SVGAnimatedAngle;
    new(): SVGAnimatedAngle;
}
interface Selection {
    isCollapsed: boolean;
    anchorNode: Node;
    focusNode: Node;
    anchorOffset: number;
    focusOffset: number;
    rangeCount: number;
    addRange(range: Range): void;
    collapseToEnd(): void;
    toString(): string;
    selectAllChildren(parentNode: Node): void;
    getRangeAt(index: number): Range;
    collapse(parentNode: Node, offset: number): void;
    removeAllRanges(): void;
    collapseToStart(): void;
    deleteFromDocument(): void;
    removeRange(range: Range): void;
}
declare var Selection: {
    prototype: Selection;
    new(): Selection;
}
interface SVGScriptElement extends SVGElement, SVGExternalResourcesRequired, SVGURIReference {
    type: string;
}
declare var SVGScriptElement: {
    prototype: SVGScriptElement;
    new(): SVGScriptElement;
}
interface HTMLDDElement extends HTMLElement {
    noWrap: boolean;
}
declare var HTMLDDElement: {
    prototype: HTMLDDElement;
    new(): HTMLDDElement;
}
interface MSDataBindingRecordSetReadonlyExtensions {
    recordset: any;
    namedRecordset(dataMember: string, hierarchy?: any): any;
}
interface CSSStyleRule extends CSSRule {
    selectorText: string;
    style: MSStyleCSSProperties;
    readOnly: boolean;
}
declare var CSSStyleRule: {
    prototype: CSSStyleRule;
    new(): CSSStyleRule;
}
interface NodeIterator {
    whatToShow: number;
    filter: NodeFilter;
    root: Node;
    expandEntityReferences: boolean;
    nextNode(): Node;
    detach(): void;
    previousNode(): Node;
}
declare var NodeIterator: {
    prototype: NodeIterator;
    new(): NodeIterator;
}
interface SVGViewElement extends SVGElement, SVGZoomAndPan, SVGFitToViewBox, SVGExternalResourcesRequired {
    viewTarget: SVGStringList;
}
declare var SVGViewElement: {
    prototype: SVGViewElement;
    new(): SVGViewElement;
}
interface HTMLLinkElement extends HTMLElement, LinkStyle {
    rel: string;
    target: string;
    href: string;
    media: string;
    rev: string;
    type: string;
    charset: string;
    hreflang: string;
}
declare var HTMLLinkElement: {
    prototype: HTMLLinkElement;
    new(): HTMLLinkElement;
}
interface SVGLocatable {
    farthestViewportElement: SVGElement;
    nearestViewportElement: SVGElement;
    getBBox(): SVGRect;
    getTransformToElement(element: SVGElement): SVGMatrix;
    getCTM(): SVGMatrix;
    getScreenCTM(): SVGMatrix;
}
interface HTMLFontElement extends HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {
    face: string;
}
declare var HTMLFontElement: {
    prototype: HTMLFontElement;
    new(): HTMLFontElement;
}
interface SVGTitleElement extends SVGElement, SVGStylable, SVGLangSpace {
}
declare var SVGTitleElement: {
    prototype: SVGTitleElement;
    new(): SVGTitleElement;
}
interface ControlRangeCollection {
    length: number;
    queryCommandValue(cmdID: string): any;
    remove(index: number): void;
    add(item: Element): void;
    queryCommandIndeterm(cmdID: string): boolean;
    scrollIntoView(varargStart?: any): void;
    item(index: number): Element;
    [index: number]: Element;
    execCommand(cmdID: string, showUI?: boolean, value?: any): boolean;
    addElement(item: Element): void;
    queryCommandState(cmdID: string): boolean;
    queryCommandSupported(cmdID: string): boolean;
    queryCommandEnabled(cmdID: string): boolean;
    queryCommandText(cmdID: string): string;
    select(): void;
}
declare var ControlRangeCollection: {
    prototype: ControlRangeCollection;
    new(): ControlRangeCollection;
}
interface MSNamespaceInfo extends MSEventAttachmentTarget {
    urn: string;
    onreadystatechange: (ev: Event) => any;
    name: string;
    readyState: string;
    doImport(implementationUrl: string): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var MSNamespaceInfo: {
    prototype: MSNamespaceInfo;
    new(): MSNamespaceInfo;
}
interface WindowSessionStorage {
    sessionStorage: Storage;
}
interface SVGAnimatedTransformList {
    animVal: SVGTransformList;
    baseVal: SVGTransformList;
}
declare var SVGAnimatedTransformList: {
    prototype: SVGAnimatedTransformList;
    new(): SVGAnimatedTransformList;
}
interface HTMLTableCaptionElement extends HTMLElement {
    align: string;
    vAlign: string;
}
declare var HTMLTableCaptionElement: {
    prototype: HTMLTableCaptionElement;
    new(): HTMLTableCaptionElement;
}
interface HTMLOptionElement extends HTMLElement, MSDataBindingExtensions {
    index: number;
    defaultSelected: boolean;
    value: string;
    text: string;
    form: HTMLFormElement;
    label: string;
    selected: boolean;
}
declare var HTMLOptionElement: {
    prototype: HTMLOptionElement;
    new(): HTMLOptionElement;
    create(): HTMLOptionElement;
}
interface HTMLMapElement extends HTMLElement {
    name: string;
    areas: HTMLAreasCollection;
}
declare var HTMLMapElement: {
    prototype: HTMLMapElement;
    new(): HTMLMapElement;
}
interface HTMLMenuElement extends HTMLElement, DOML2DeprecatedListSpaceReduction {
    type: string;
}
declare var HTMLMenuElement: {
    prototype: HTMLMenuElement;
    new(): HTMLMenuElement;
}
interface MouseWheelEvent extends MouseEvent {
    wheelDelta: number;
    initMouseWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, wheelDeltaArg: number): void;
}
declare var MouseWheelEvent: {
    prototype: MouseWheelEvent;
    new(): MouseWheelEvent;
}
interface SVGFitToViewBox {
    viewBox: SVGAnimatedRect;
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}
interface SVGPointList {
    numberOfItems: number;
    replaceItem(newItem: SVGPoint, index: number): SVGPoint;
    getItem(index: number): SVGPoint;
    clear(): void;
    appendItem(newItem: SVGPoint): SVGPoint;
    initialize(newItem: SVGPoint): SVGPoint;
    removeItem(index: number): SVGPoint;
    insertItemBefore(newItem: SVGPoint, index: number): SVGPoint;
}
declare var SVGPointList: {
    prototype: SVGPointList;
    new(): SVGPointList;
}
interface SVGAnimatedLengthList {
    animVal: SVGLengthList;
    baseVal: SVGLengthList;
}
declare var SVGAnimatedLengthList: {
    prototype: SVGAnimatedLengthList;
    new(): SVGAnimatedLengthList;
}
interface SVGAnimatedPreserveAspectRatio {
    animVal: SVGPreserveAspectRatio;
    baseVal: SVGPreserveAspectRatio;
}
declare var SVGAnimatedPreserveAspectRatio: {
    prototype: SVGAnimatedPreserveAspectRatio;
    new(): SVGAnimatedPreserveAspectRatio;
}
interface MSSiteModeEvent extends Event {
    buttonID: number;
    actionURL: string;
}
declare var MSSiteModeEvent: {
    prototype: MSSiteModeEvent;
    new(): MSSiteModeEvent;
}
interface DOML2DeprecatedTextFlowControl {
    clear: string;
}
interface StyleSheetPageList {
    length: number;
    item(index: number): CSSPageRule;
    [index: number]: CSSPageRule;
}
declare var StyleSheetPageList: {
    prototype: StyleSheetPageList;
    new(): StyleSheetPageList;
}
interface MSCSSProperties extends CSSStyleDeclaration {
    scrollbarShadowColor: string;
    scrollbarHighlightColor: string;
    layoutGridChar: string;
    layoutGridType: string;
    textAutospace: string;
    textKashidaSpace: string;
    writingMode: string;
    scrollbarFaceColor: string;
    backgroundPositionY: string;
    lineBreak: string;
    imeMode: string;
    msBlockProgression: string;
    layoutGridLine: string;
    scrollbarBaseColor: string;
    layoutGrid: string;
    layoutFlow: string;
    textKashida: string;
    filter: string;
    zoom: string;
    scrollbarArrowColor: string;
    behavior: string;
    backgroundPositionX: string;
    accelerator: string;
    layoutGridMode: string;
    textJustifyTrim: string;
    scrollbar3dLightColor: string;
    msInterpolationMode: string;
    scrollbarTrackColor: string;
    scrollbarDarkShadowColor: string;
    styleFloat: string;
    getAttribute(attributeName: string, flags?: number): any;
    setAttribute(attributeName: string, AttributeValue: any, flags?: number): void;
    removeAttribute(attributeName: string, flags?: number): boolean;
}
declare var MSCSSProperties: {
    prototype: MSCSSProperties;
    new(): MSCSSProperties;
}
interface SVGExternalResourcesRequired {
    externalResourcesRequired: SVGAnimatedBoolean;
}
interface HTMLImageElement extends HTMLElement, MSImageResourceExtensions, MSDataBindingExtensions, MSResourceMetadata {
    width: number;
    vspace: number;
    naturalHeight: number;
    alt: string;
    align: string;
    src: string;
    useMap: string;
    naturalWidth: number;
    name: string;
    height: number;
    border: string;
    hspace: number;
    longDesc: string;
    href: string;
    isMap: boolean;
    complete: boolean;
    msPlayToPrimary: boolean;
    msPlayToDisabled: boolean;
    msPlayToSource: any;
    crossOrigin: string;
    msPlayToPreferredSourceUri: string;
}
declare var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
    create(): HTMLImageElement;
}
interface HTMLAreaElement extends HTMLElement {
    protocol: string;
    search: string;
    alt: string;
    coords: string;
    hostname: string;
    port: string;
    pathname: string;
    host: string;
    hash: string;
    target: string;
    href: string;
    noHref: boolean;
    shape: string;
    toString(): string;
}
declare var HTMLAreaElement: {
    prototype: HTMLAreaElement;
    new(): HTMLAreaElement;
}
interface EventTarget {
    removeEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    dispatchEvent(evt: Event): boolean;
}
interface SVGAngle {
    valueAsString: string;
    valueInSpecifiedUnits: number;
    value: number;
    unitType: number;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    convertToSpecifiedUnits(unitType: number): void;
    SVG_ANGLETYPE_RAD: number;
    SVG_ANGLETYPE_UNKNOWN: number;
    SVG_ANGLETYPE_UNSPECIFIED: number;
    SVG_ANGLETYPE_DEG: number;
    SVG_ANGLETYPE_GRAD: number;
}
declare var SVGAngle: {
    prototype: SVGAngle;
    new(): SVGAngle;
    SVG_ANGLETYPE_RAD: number;
    SVG_ANGLETYPE_UNKNOWN: number;
    SVG_ANGLETYPE_UNSPECIFIED: number;
    SVG_ANGLETYPE_DEG: number;
    SVG_ANGLETYPE_GRAD: number;
}
interface HTMLButtonElement extends HTMLElement, MSDataBindingExtensions {
    value: string;
    status: any;
    form: HTMLFormElement;
    name: string;
    type: string;
    validationMessage: string;
    formTarget: string;
    willValidate: boolean;
    formAction: string;
    autofocus: boolean;
    validity: ValidityState;
    formNoValidate: string;
    formEnctype: string;
    formMethod: string;
    createTextRange(): TextRange;
    checkValidity(): boolean;
    setCustomValidity(error: string): void;
}
declare var HTMLButtonElement: {
    prototype: HTMLButtonElement;
    new(): HTMLButtonElement;
}
interface HTMLSourceElement extends HTMLElement {
    src: string;
    media: string;
    type: string;
    msKeySystem: string;
}
declare var HTMLSourceElement: {
    prototype: HTMLSourceElement;
    new(): HTMLSourceElement;
}
interface CanvasGradient {
    addColorStop(offset: number, color: string): void;
}
declare var CanvasGradient: {
    prototype: CanvasGradient;
    new(): CanvasGradient;
}
interface KeyboardEvent extends UIEvent {
    location: number;
    keyCode: number;
    shiftKey: boolean;
    which: number;
    locale: string;
    key: string;
    altKey: boolean;
    metaKey: boolean;
    char: string;
    ctrlKey: boolean;
    repeat: boolean;
    charCode: number;
    getModifierState(keyArg: string): boolean;
    initKeyboardEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, keyArg: string, locationArg: number, modifiersListArg: string, repeat: boolean, locale: string): void;
    DOM_KEY_LOCATION_RIGHT: number;
    DOM_KEY_LOCATION_STANDARD: number;
    DOM_KEY_LOCATION_LEFT: number;
    DOM_KEY_LOCATION_NUMPAD: number;
    DOM_KEY_LOCATION_JOYSTICK: number;
    DOM_KEY_LOCATION_MOBILE: number;
}
declare var KeyboardEvent: {
    prototype: KeyboardEvent;
    new(): KeyboardEvent;
    DOM_KEY_LOCATION_RIGHT: number;
    DOM_KEY_LOCATION_STANDARD: number;
    DOM_KEY_LOCATION_LEFT: number;
    DOM_KEY_LOCATION_NUMPAD: number;
    DOM_KEY_LOCATION_JOYSTICK: number;
    DOM_KEY_LOCATION_MOBILE: number;
}
interface MessageEvent extends Event {
    source: Window;
    origin: string;
    data: any;
    ports: any;
    initMessageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, dataArg: any, originArg: string, lastEventIdArg: string, sourceArg: Window): void;
}
declare var MessageEvent: {
    prototype: MessageEvent;
    new(): MessageEvent;
}
interface SVGElement extends Element {
    onmouseover: (ev: MouseEvent) => any;
    viewportElement: SVGElement;
    onmousemove: (ev: MouseEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    ondblclick: (ev: MouseEvent) => any;
    onfocusout: (ev: FocusEvent) => any;
    onfocusin: (ev: FocusEvent) => any;
    xmlbase: string;
    onmousedown: (ev: MouseEvent) => any;
    onload: (ev: Event) => any;
    onmouseup: (ev: MouseEvent) => any;
    onclick: (ev: MouseEvent) => any;
    ownerSVGElement: SVGSVGElement;
    id: string;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var SVGElement: {
    prototype: SVGElement;
    new(): SVGElement;
}
interface HTMLScriptElement extends HTMLElement {
    defer: boolean;
    text: string;
    src: string;
    htmlFor: string;
    charset: string;
    type: string;
    event: string;
    async: boolean;
}
declare var HTMLScriptElement: {
    prototype: HTMLScriptElement;
    new(): HTMLScriptElement;
}
interface HTMLTableRowElement extends HTMLElement, HTMLTableAlignment, DOML2DeprecatedBackgroundColorStyle {
    rowIndex: number;
    cells: HTMLCollection;
    align: string;
    borderColorLight: any;
    sectionRowIndex: number;
    borderColor: any;
    height: any;
    borderColorDark: any;
    deleteCell(index?: number): void;
    insertCell(index?: number): HTMLElement;
}
declare var HTMLTableRowElement: {
    prototype: HTMLTableRowElement;
    new(): HTMLTableRowElement;
}
interface CanvasRenderingContext2D {
    miterLimit: number;
    font: string;
    globalCompositeOperation: string;
    msFillRule: string;
    lineCap: string;
    msImageSmoothingEnabled: boolean;
    lineDashOffset: number;
    shadowColor: string;
    lineJoin: string;
    shadowOffsetX: number;
    lineWidth: number;
    canvas: HTMLCanvasElement;
    strokeStyle: any;
    globalAlpha: number;
    shadowOffsetY: number;
    fillStyle: any;
    shadowBlur: number;
    textAlign: string;
    textBaseline: string;
    restore(): void;
    setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    save(): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    measureText(text: string): TextMetrics;
    isPointInPath(x: number, y: number, fillRule?: string): boolean;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void;
    rotate(angle: number): void;
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    translate(x: number, y: number): void;
    scale(x: number, y: number): void;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    lineTo(x: number, y: number): void;
    getLineDash(): number[];
    fill(fillRule?: string): void;
    createImageData(imageDataOrSw: any, sh?: number): ImageData;
    createPattern(image: HTMLElement, repetition: string): CanvasPattern;
    closePath(): void;
    rect(x: number, y: number, w: number, h: number): void;
    clip(fillRule?: string): void;
    clearRect(x: number, y: number, w: number, h: number): void;
    moveTo(x: number, y: number): void;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    fillRect(x: number, y: number, w: number, h: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    drawImage(image: HTMLElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void;
    transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    stroke(): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    setLineDash(segments: number[]): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    beginPath(): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
}
declare var CanvasRenderingContext2D: {
    prototype: CanvasRenderingContext2D;
    new(): CanvasRenderingContext2D;
}
interface MSCSSRuleList {
    length: number;
    item(index?: number): CSSStyleRule;
    [index: number]: CSSStyleRule;
}
declare var MSCSSRuleList: {
    prototype: MSCSSRuleList;
    new(): MSCSSRuleList;
}
interface SVGPathSegLinetoHorizontalAbs extends SVGPathSeg {
    x: number;
}
declare var SVGPathSegLinetoHorizontalAbs: {
    prototype: SVGPathSegLinetoHorizontalAbs;
    new(): SVGPathSegLinetoHorizontalAbs;
}
interface SVGPathSegArcAbs extends SVGPathSeg {
    y: number;
    sweepFlag: boolean;
    r2: number;
    x: number;
    angle: number;
    r1: number;
    largeArcFlag: boolean;
}
declare var SVGPathSegArcAbs: {
    prototype: SVGPathSegArcAbs;
    new(): SVGPathSegArcAbs;
}
interface SVGTransformList {
    numberOfItems: number;
    getItem(index: number): SVGTransform;
    consolidate(): SVGTransform;
    clear(): void;
    appendItem(newItem: SVGTransform): SVGTransform;
    initialize(newItem: SVGTransform): SVGTransform;
    removeItem(index: number): SVGTransform;
    insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
    replaceItem(newItem: SVGTransform, index: number): SVGTransform;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
}
declare var SVGTransformList: {
    prototype: SVGTransformList;
    new(): SVGTransformList;
}
interface HTMLHtmlElement extends HTMLElement {
    version: string;
}
declare var HTMLHtmlElement: {
    prototype: HTMLHtmlElement;
    new(): HTMLHtmlElement;
}
interface SVGPathSegClosePath extends SVGPathSeg {
}
declare var SVGPathSegClosePath: {
    prototype: SVGPathSegClosePath;
    new(): SVGPathSegClosePath;
}
interface HTMLFrameElement extends HTMLElement, GetSVGDocument, MSDataBindingExtensions {
    width: any;
    scrolling: string;
    marginHeight: string;
    marginWidth: string;
    borderColor: any;
    frameSpacing: any;
    frameBorder: string;
    noResize: boolean;
    contentWindow: Window;
    src: string;
    name: string;
    height: any;
    contentDocument: Document;
    border: string;
    longDesc: string;
    onload: (ev: Event) => any;
    security: any;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var HTMLFrameElement: {
    prototype: HTMLFrameElement;
    new(): HTMLFrameElement;
}
interface SVGAnimatedLength {
    animVal: SVGLength;
    baseVal: SVGLength;
}
declare var SVGAnimatedLength: {
    prototype: SVGAnimatedLength;
    new(): SVGAnimatedLength;
}
interface SVGAnimatedPoints {
    points: SVGPointList;
    animatedPoints: SVGPointList;
}
interface SVGDefsElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGDefsElement: {
    prototype: SVGDefsElement;
    new(): SVGDefsElement;
}
interface HTMLQuoteElement extends HTMLElement {
    dateTime: string;
    cite: string;
}
declare var HTMLQuoteElement: {
    prototype: HTMLQuoteElement;
    new(): HTMLQuoteElement;
}
interface CSSMediaRule extends CSSRule {
    media: MediaList;
    cssRules: CSSRuleList;
    insertRule(rule: string, index?: number): number;
    deleteRule(index?: number): void;
}
declare var CSSMediaRule: {
    prototype: CSSMediaRule;
    new(): CSSMediaRule;
}
interface WindowModal {
    dialogArguments: any;
    returnValue: any;
}
interface XMLHttpRequest extends EventTarget {
    responseBody: any;
    status: number;
    readyState: number;
    responseText: string;
    responseXML: any;
    ontimeout: (ev: Event) => any;
    statusText: string;
    onreadystatechange: (ev: Event) => any;
    timeout: number;
    onload: (ev: Event) => any;
    response: any;
    withCredentials: boolean;
    onprogress: (ev: ProgressEvent) => any;
    onabort: (ev: UIEvent) => any;
    responseType: string;
    onloadend: (ev: ProgressEvent) => any;
    upload: XMLHttpRequestEventTarget;
    onerror: (ev: ErrorEvent) => any;
    onloadstart: (ev: Event) => any;
    msCaching: string;
    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
    send(data?: any): void;
    abort(): void;
    getAllResponseHeaders(): string;
    setRequestHeader(header: string, value: string): void;
    getResponseHeader(header: string): string;
    msCachingEnabled(): boolean;
    overrideMimeType(mime: string): void;
    LOADING: number;
    DONE: number;
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;
    addEventListener(type: "timeout", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    LOADING: number;
    DONE: number;
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;
    create(): XMLHttpRequest;
}
interface HTMLTableHeaderCellElement extends HTMLTableCellElement {
    scope: string;
}
declare var HTMLTableHeaderCellElement: {
    prototype: HTMLTableHeaderCellElement;
    new(): HTMLTableHeaderCellElement;
}
interface HTMLDListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction {
}
declare var HTMLDListElement: {
    prototype: HTMLDListElement;
    new(): HTMLDListElement;
}
interface MSDataBindingExtensions {
    dataSrc: string;
    dataFormatAs: string;
    dataFld: string;
}
interface SVGPathSegLinetoHorizontalRel extends SVGPathSeg {
    x: number;
}
declare var SVGPathSegLinetoHorizontalRel: {
    prototype: SVGPathSegLinetoHorizontalRel;
    new(): SVGPathSegLinetoHorizontalRel;
}
interface SVGEllipseElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    ry: SVGAnimatedLength;
    cx: SVGAnimatedLength;
    rx: SVGAnimatedLength;
    cy: SVGAnimatedLength;
}
declare var SVGEllipseElement: {
    prototype: SVGEllipseElement;
    new(): SVGEllipseElement;
}
interface SVGAElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {
    target: SVGAnimatedString;
}
declare var SVGAElement: {
    prototype: SVGAElement;
    new(): SVGAElement;
}
interface SVGStylable {
    className: SVGAnimatedString;
    style: CSSStyleDeclaration;
}
interface SVGTransformable extends SVGLocatable {
    transform: SVGAnimatedTransformList;
}
interface HTMLFrameSetElement extends HTMLElement {
    ononline: (ev: Event) => any;
    borderColor: any;
    rows: string;
    cols: string;
    onblur: (ev: FocusEvent) => any;
    frameSpacing: any;
    onfocus: (ev: FocusEvent) => any;
    onmessage: (ev: MessageEvent) => any;
    onerror: (ev: ErrorEvent) => any;
    frameBorder: string;
    onresize: (ev: UIEvent) => any;
    name: string;
    onafterprint: (ev: Event) => any;
    onbeforeprint: (ev: Event) => any;
    onoffline: (ev: Event) => any;
    border: string;
    onunload: (ev: Event) => any;
    onhashchange: (ev: Event) => any;
    onload: (ev: Event) => any;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    onstorage: (ev: StorageEvent) => any;
    onpageshow: (ev: PageTransitionEvent) => any;
    onpagehide: (ev: PageTransitionEvent) => any;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var HTMLFrameSetElement: {
    prototype: HTMLFrameSetElement;
    new(): HTMLFrameSetElement;
}
interface Screen extends EventTarget {
    width: number;
    deviceXDPI: number;
    fontSmoothingEnabled: boolean;
    bufferDepth: number;
    logicalXDPI: number;
    systemXDPI: number;
    availHeight: number;
    height: number;
    logicalYDPI: number;
    systemYDPI: number;
    updateInterval: number;
    colorDepth: number;
    availWidth: number;
    deviceYDPI: number;
    pixelDepth: number;
    msOrientation: string;
    onmsorientationchange: (ev: any) => any;
    msLockOrientation(orientation: string): boolean;
    msLockOrientation(orientations: string[]): boolean;
    msUnlockOrientation(): void;
    addEventListener(type: "msorientationchange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var Screen: {
    prototype: Screen;
    new(): Screen;
}
interface Coordinates {
    altitudeAccuracy: number;
    longitude: number;
    latitude: number;
    speed: number;
    heading: number;
    altitude: number;
    accuracy: number;
}
declare var Coordinates: {
    prototype: Coordinates;
    new(): Coordinates;
}
interface NavigatorGeolocation {
    geolocation: Geolocation;
}
interface NavigatorContentUtils {
}
interface EventListener {
    (evt: Event): void;
}
interface SVGLangSpace {
    xmllang: string;
    xmlspace: string;
}
interface DataTransfer {
    effectAllowed: string;
    dropEffect: string;
    types: DOMStringList;
    files: FileList;
    clearData(format?: string): boolean;
    setData(format: string, data: string): boolean;
    getData(format: string): string;
}
declare var DataTransfer: {
    prototype: DataTransfer;
    new(): DataTransfer;
}
interface FocusEvent extends UIEvent {
    relatedTarget: EventTarget;
    initFocusEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, relatedTargetArg: EventTarget): void;
}
declare var FocusEvent: {
    prototype: FocusEvent;
    new(): FocusEvent;
}
interface Range {
    startOffset: number;
    collapsed: boolean;
    endOffset: number;
    startContainer: Node;
    endContainer: Node;
    commonAncestorContainer: Node;
    setStart(refNode: Node, offset: number): void;
    setEndBefore(refNode: Node): void;
    setStartBefore(refNode: Node): void;
    selectNode(refNode: Node): void;
    detach(): void;
    getBoundingClientRect(): ClientRect;
    toString(): string;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    insertNode(newNode: Node): void;
    collapse(toStart: boolean): void;
    selectNodeContents(refNode: Node): void;
    cloneContents(): DocumentFragment;
    setEnd(refNode: Node, offset: number): void;
    cloneRange(): Range;
    getClientRects(): ClientRectList;
    surroundContents(newParent: Node): void;
    deleteContents(): void;
    setStartAfter(refNode: Node): void;
    extractContents(): DocumentFragment;
    setEndAfter(refNode: Node): void;
    createContextualFragment(fragment: string): DocumentFragment;
    END_TO_END: number;
    START_TO_START: number;
    START_TO_END: number;
    END_TO_START: number;
}
declare var Range: {
    prototype: Range;
    new(): Range;
    END_TO_END: number;
    START_TO_START: number;
    START_TO_END: number;
    END_TO_START: number;
}
interface SVGPoint {
    y: number;
    x: number;
    matrixTransform(matrix: SVGMatrix): SVGPoint;
}
declare var SVGPoint: {
    prototype: SVGPoint;
    new(): SVGPoint;
}
interface MSPluginsCollection {
    length: number;
    refresh(reload?: boolean): void;
}
declare var MSPluginsCollection: {
    prototype: MSPluginsCollection;
    new(): MSPluginsCollection;
}
interface SVGAnimatedNumberList {
    animVal: SVGNumberList;
    baseVal: SVGNumberList;
}
declare var SVGAnimatedNumberList: {
    prototype: SVGAnimatedNumberList;
    new(): SVGAnimatedNumberList;
}
interface SVGSVGElement extends SVGElement, SVGStylable, SVGZoomAndPan, DocumentEvent, SVGLangSpace, SVGLocatable, SVGTests, SVGFitToViewBox, SVGExternalResourcesRequired {
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    contentStyleType: string;
    onzoom: (ev: any) => any;
    y: SVGAnimatedLength;
    viewport: SVGRect;
    onerror: (ev: ErrorEvent) => any;
    pixelUnitToMillimeterY: number;
    onresize: (ev: UIEvent) => any;
    screenPixelToMillimeterY: number;
    height: SVGAnimatedLength;
    onabort: (ev: UIEvent) => any;
    contentScriptType: string;
    pixelUnitToMillimeterX: number;
    currentTranslate: SVGPoint;
    onunload: (ev: Event) => any;
    currentScale: number;
    onscroll: (ev: UIEvent) => any;
    screenPixelToMillimeterX: number;
    setCurrentTime(seconds: number): void;
    createSVGLength(): SVGLength;
    getIntersectionList(rect: SVGRect, referenceElement: SVGElement): NodeList;
    unpauseAnimations(): void;
    createSVGRect(): SVGRect;
    checkIntersection(element: SVGElement, rect: SVGRect): boolean;
    unsuspendRedrawAll(): void;
    pauseAnimations(): void;
    suspendRedraw(maxWaitMilliseconds: number): number;
    deselectAll(): void;
    createSVGAngle(): SVGAngle;
    getEnclosureList(rect: SVGRect, referenceElement: SVGElement): NodeList;
    createSVGTransform(): SVGTransform;
    unsuspendRedraw(suspendHandleID: number): void;
    forceRedraw(): void;
    getCurrentTime(): number;
    checkEnclosure(element: SVGElement, rect: SVGRect): boolean;
    createSVGMatrix(): SVGMatrix;
    createSVGPoint(): SVGPoint;
    createSVGNumber(): SVGNumber;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
    getElementById(elementId: string): Element;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "zoom", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var SVGSVGElement: {
    prototype: SVGSVGElement;
    new(): SVGSVGElement;
}
interface HTMLLabelElement extends HTMLElement, MSDataBindingExtensions {
    htmlFor: string;
    form: HTMLFormElement;
}
declare var HTMLLabelElement: {
    prototype: HTMLLabelElement;
    new(): HTMLLabelElement;
}
interface MSResourceMetadata {
    protocol: string;
    fileSize: string;
    fileUpdatedDate: string;
    nameProp: string;
    fileCreatedDate: string;
    fileModifiedDate: string;
    mimeType: string;
}
interface HTMLLegendElement extends HTMLElement, MSDataBindingExtensions {
    align: string;
    form: HTMLFormElement;
}
declare var HTMLLegendElement: {
    prototype: HTMLLegendElement;
    new(): HTMLLegendElement;
}
interface HTMLDirectoryElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {
}
declare var HTMLDirectoryElement: {
    prototype: HTMLDirectoryElement;
    new(): HTMLDirectoryElement;
}
interface SVGAnimatedInteger {
    animVal: number;
    baseVal: number;
}
declare var SVGAnimatedInteger: {
    prototype: SVGAnimatedInteger;
    new(): SVGAnimatedInteger;
}
interface SVGTextElement extends SVGTextPositioningElement, SVGTransformable {
}
declare var SVGTextElement: {
    prototype: SVGTextElement;
    new(): SVGTextElement;
}
interface SVGTSpanElement extends SVGTextPositioningElement {
}
declare var SVGTSpanElement: {
    prototype: SVGTSpanElement;
    new(): SVGTSpanElement;
}
interface HTMLLIElement extends HTMLElement, DOML2DeprecatedListNumberingAndBulletStyle {
    value: number;
}
declare var HTMLLIElement: {
    prototype: HTMLLIElement;
    new(): HTMLLIElement;
}
interface SVGPathSegLinetoVerticalAbs extends SVGPathSeg {
    y: number;
}
declare var SVGPathSegLinetoVerticalAbs: {
    prototype: SVGPathSegLinetoVerticalAbs;
    new(): SVGPathSegLinetoVerticalAbs;
}
interface MSStorageExtensions {
    remainingSpace: number;
}
interface SVGStyleElement extends SVGElement, SVGLangSpace {
    media: string;
    type: string;
    title: string;
}
declare var SVGStyleElement: {
    prototype: SVGStyleElement;
    new(): SVGStyleElement;
}
interface MSCurrentStyleCSSProperties extends MSCSSProperties {
    blockDirection: string;
    clipBottom: string;
    clipLeft: string;
    clipRight: string;
    clipTop: string;
    hasLayout: string;
}
declare var MSCurrentStyleCSSProperties: {
    prototype: MSCurrentStyleCSSProperties;
    new(): MSCurrentStyleCSSProperties;
}
interface MSHTMLCollectionExtensions {
    urns(urn: any): any;
    tags(tagName: any): any;
}
interface Storage extends MSStorageExtensions {
    length: number;
    getItem(key: string): any;
    [key: string]: any;
    setItem(key: string, data: string): void;
    clear(): void;
    removeItem(key: string): void;
    key(index: number): string;
    [index: number]: string;
}
declare var Storage: {
    prototype: Storage;
    new(): Storage;
}
interface HTMLIFrameElement extends HTMLElement, GetSVGDocument, MSDataBindingExtensions {
    width: string;
    scrolling: string;
    marginHeight: string;
    marginWidth: string;
    frameSpacing: any;
    frameBorder: string;
    noResize: boolean;
    vspace: number;
    contentWindow: Window;
    align: string;
    src: string;
    name: string;
    height: string;
    border: string;
    contentDocument: Document;
    hspace: number;
    longDesc: string;
    security: any;
    onload: (ev: Event) => any;
    sandbox: DOMSettableTokenList;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var HTMLIFrameElement: {
    prototype: HTMLIFrameElement;
    new(): HTMLIFrameElement;
}
interface TextRangeCollection {
    length: number;
    item(index: number): TextRange;
    [index: number]: TextRange;
}
declare var TextRangeCollection: {
    prototype: TextRangeCollection;
    new(): TextRangeCollection;
}
interface HTMLBodyElement extends HTMLElement, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {
    scroll: string;
    ononline: (ev: Event) => any;
    onblur: (ev: FocusEvent) => any;
    noWrap: boolean;
    onfocus: (ev: FocusEvent) => any;
    onmessage: (ev: MessageEvent) => any;
    text: any;
    onerror: (ev: ErrorEvent) => any;
    bgProperties: string;
    onresize: (ev: UIEvent) => any;
    link: any;
    aLink: any;
    bottomMargin: any;
    topMargin: any;
    onafterprint: (ev: Event) => any;
    vLink: any;
    onbeforeprint: (ev: Event) => any;
    onoffline: (ev: Event) => any;
    onunload: (ev: Event) => any;
    onhashchange: (ev: Event) => any;
    onload: (ev: Event) => any;
    rightMargin: any;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    leftMargin: any;
    onstorage: (ev: StorageEvent) => any;
    onpopstate: (ev: PopStateEvent) => any;
    onpageshow: (ev: PageTransitionEvent) => any;
    onpagehide: (ev: PageTransitionEvent) => any;
    createTextRange(): TextRange;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var HTMLBodyElement: {
    prototype: HTMLBodyElement;
    new(): HTMLBodyElement;
}
interface DocumentType extends Node {
    name: string;
    notations: NamedNodeMap;
    systemId: string;
    internalSubset: string;
    entities: NamedNodeMap;
    publicId: string;
}
declare var DocumentType: {
    prototype: DocumentType;
    new(): DocumentType;
}
interface SVGRadialGradientElement extends SVGGradientElement {
    cx: SVGAnimatedLength;
    r: SVGAnimatedLength;
    cy: SVGAnimatedLength;
    fx: SVGAnimatedLength;
    fy: SVGAnimatedLength;
}
declare var SVGRadialGradientElement: {
    prototype: SVGRadialGradientElement;
    new(): SVGRadialGradientElement;
}
interface MutationEvent extends Event {
    newValue: string;
    attrChange: number;
    attrName: string;
    prevValue: string;
    relatedNode: Node;
    initMutationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, relatedNodeArg: Node, prevValueArg: string, newValueArg: string, attrNameArg: string, attrChangeArg: number): void;
    MODIFICATION: number;
    REMOVAL: number;
    ADDITION: number;
}
declare var MutationEvent: {
    prototype: MutationEvent;
    new(): MutationEvent;
    MODIFICATION: number;
    REMOVAL: number;
    ADDITION: number;
}
interface DragEvent extends MouseEvent {
    dataTransfer: DataTransfer;
    initDragEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, dataTransferArg: DataTransfer): void;
    msConvertURL(file: File, targetType: string, targetURL?: string): void;
}
declare var DragEvent: {
    prototype: DragEvent;
    new(): DragEvent;
}
interface HTMLTableSectionElement extends HTMLElement, HTMLTableAlignment, DOML2DeprecatedBackgroundColorStyle {
    align: string;
    rows: HTMLCollection;
    deleteRow(index?: number): void;
    moveRow(indexFrom?: number, indexTo?: number): any;
    insertRow(index?: number): HTMLElement;
}
declare var HTMLTableSectionElement: {
    prototype: HTMLTableSectionElement;
    new(): HTMLTableSectionElement;
}
interface DOML2DeprecatedListNumberingAndBulletStyle {
    type: string;
}
interface HTMLInputElement extends HTMLElement, MSDataBindingExtensions {
    width: string;
    status: boolean;
    form: HTMLFormElement;
    selectionStart: number;
    indeterminate: boolean;
    readOnly: boolean;
    size: number;
    loop: number;
    selectionEnd: number;
    vrml: string;
    lowsrc: string;
    vspace: number;
    accept: string;
    alt: string;
    defaultChecked: boolean;
    align: string;
    value: string;
    src: string;
    name: string;
    useMap: string;
    height: string;
    border: string;
    dynsrc: string;
    checked: boolean;
    hspace: number;
    maxLength: number;
    type: string;
    defaultValue: string;
    complete: boolean;
    start: string;
    validationMessage: string;
    files: FileList;
    max: string;
    formTarget: string;
    willValidate: boolean;
    step: string;
    autofocus: boolean;
    required: boolean;
    formEnctype: string;
    valueAsNumber: number;
    placeholder: string;
    formMethod: string;
    list: HTMLElement;
    autocomplete: string;
    min: string;
    formAction: string;
    pattern: string;
    validity: ValidityState;
    formNoValidate: string;
    multiple: boolean;
    createTextRange(): TextRange;
    setSelectionRange(start: number, end: number): void;
    select(): void;
    checkValidity(): boolean;
    stepDown(n?: number): void;
    stepUp(n?: number): void;
    setCustomValidity(error: string): void;
}
declare var HTMLInputElement: {
    prototype: HTMLInputElement;
    new(): HTMLInputElement;
}
interface HTMLAnchorElement extends HTMLElement, MSDataBindingExtensions {
    rel: string;
    protocol: string;
    search: string;
    coords: string;
    hostname: string;
    pathname: string;
    Methods: string;
    target: string;
    protocolLong: string;
    href: string;
    name: string;
    charset: string;
    hreflang: string;
    port: string;
    host: string;
    hash: string;
    nameProp: string;
    urn: string;
    rev: string;
    shape: string;
    type: string;
    mimeType: string;
    text: string;
    toString(): string;
}
declare var HTMLAnchorElement: {
    prototype: HTMLAnchorElement;
    new(): HTMLAnchorElement;
}
interface HTMLParamElement extends HTMLElement {
    value: string;
    name: string;
    type: string;
    valueType: string;
}
declare var HTMLParamElement: {
    prototype: HTMLParamElement;
    new(): HTMLParamElement;
}
interface SVGImageElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGImageElement: {
    prototype: SVGImageElement;
    new(): SVGImageElement;
}
interface SVGAnimatedNumber {
    animVal: number;
    baseVal: number;
}
declare var SVGAnimatedNumber: {
    prototype: SVGAnimatedNumber;
    new(): SVGAnimatedNumber;
}
interface PerformanceTiming {
    redirectStart: number;
    domainLookupEnd: number;
    responseStart: number;
    domComplete: number;
    domainLookupStart: number;
    loadEventStart: number;
    msFirstPaint: number;
    unloadEventEnd: number;
    fetchStart: number;
    requestStart: number;
    domInteractive: number;
    navigationStart: number;
    connectEnd: number;
    loadEventEnd: number;
    connectStart: number;
    responseEnd: number;
    domLoading: number;
    redirectEnd: number;
    unloadEventStart: number;
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    toJSON(): any;
}
declare var PerformanceTiming: {
    prototype: PerformanceTiming;
    new(): PerformanceTiming;
}
interface HTMLPreElement extends HTMLElement, DOML2DeprecatedTextFlowControl {
    width: number;
    cite: string;
}
declare var HTMLPreElement: {
    prototype: HTMLPreElement;
    new(): HTMLPreElement;
}
interface EventException {
    code: number;
    message: string;
    name: string;
    toString(): string;
    DISPATCH_REQUEST_ERR: number;
    UNSPECIFIED_EVENT_TYPE_ERR: number;
}
declare var EventException: {
    prototype: EventException;
    new(): EventException;
    DISPATCH_REQUEST_ERR: number;
    UNSPECIFIED_EVENT_TYPE_ERR: number;
}
interface MSNavigatorDoNotTrack {
    msDoNotTrack: string;
    removeSiteSpecificTrackingException(args: ExceptionInformation): void;
    removeWebWideTrackingException(args: ExceptionInformation): void;
    storeWebWideTrackingException(args: StoreExceptionsInformation): void;
    storeSiteSpecificTrackingException(args: StoreSiteSpecificExceptionsInformation): void;
    confirmSiteSpecificTrackingException(args: ConfirmSiteSpecificExceptionsInformation): boolean;
    confirmWebWideTrackingException(args: ExceptionInformation): boolean;
}
interface NavigatorOnLine {
    onLine: boolean;
}
interface WindowLocalStorage {
    localStorage: Storage;
}
interface SVGMetadataElement extends SVGElement {
}
declare var SVGMetadataElement: {
    prototype: SVGMetadataElement;
    new(): SVGMetadataElement;
}
interface SVGPathSegArcRel extends SVGPathSeg {
    y: number;
    sweepFlag: boolean;
    r2: number;
    x: number;
    angle: number;
    r1: number;
    largeArcFlag: boolean;
}
declare var SVGPathSegArcRel: {
    prototype: SVGPathSegArcRel;
    new(): SVGPathSegArcRel;
}
interface SVGPathSegMovetoAbs extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegMovetoAbs: {
    prototype: SVGPathSegMovetoAbs;
    new(): SVGPathSegMovetoAbs;
}
interface SVGStringList {
    numberOfItems: number;
    replaceItem(newItem: string, index: number): string;
    getItem(index: number): string;
    clear(): void;
    appendItem(newItem: string): string;
    initialize(newItem: string): string;
    removeItem(index: number): string;
    insertItemBefore(newItem: string, index: number): string;
}
declare var SVGStringList: {
    prototype: SVGStringList;
    new(): SVGStringList;
}
interface XDomainRequest {
    timeout: number;
    onerror: (ev: ErrorEvent) => any;
    onload: (ev: Event) => any;
    onprogress: (ev: ProgressEvent) => any;
    ontimeout: (ev: Event) => any;
    responseText: string;
    contentType: string;
    open(method: string, url: string): void;
    abort(): void;
    send(data?: any): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeout", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var XDomainRequest: {
    prototype: XDomainRequest;
    new(): XDomainRequest;
    create(): XDomainRequest;
}
interface DOML2DeprecatedBackgroundColorStyle {
    bgColor: any;
}
interface ElementTraversal {
    childElementCount: number;
    previousElementSibling: Element;
    lastElementChild: Element;
    nextElementSibling: Element;
    firstElementChild: Element;
}
interface SVGLength {
    valueAsString: string;
    valueInSpecifiedUnits: number;
    value: number;
    unitType: number;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    convertToSpecifiedUnits(unitType: number): void;
    SVG_LENGTHTYPE_NUMBER: number;
    SVG_LENGTHTYPE_CM: number;
    SVG_LENGTHTYPE_PC: number;
    SVG_LENGTHTYPE_PERCENTAGE: number;
    SVG_LENGTHTYPE_MM: number;
    SVG_LENGTHTYPE_PT: number;
    SVG_LENGTHTYPE_IN: number;
    SVG_LENGTHTYPE_EMS: number;
    SVG_LENGTHTYPE_PX: number;
    SVG_LENGTHTYPE_UNKNOWN: number;
    SVG_LENGTHTYPE_EXS: number;
}
declare var SVGLength: {
    prototype: SVGLength;
    new(): SVGLength;
    SVG_LENGTHTYPE_NUMBER: number;
    SVG_LENGTHTYPE_CM: number;
    SVG_LENGTHTYPE_PC: number;
    SVG_LENGTHTYPE_PERCENTAGE: number;
    SVG_LENGTHTYPE_MM: number;
    SVG_LENGTHTYPE_PT: number;
    SVG_LENGTHTYPE_IN: number;
    SVG_LENGTHTYPE_EMS: number;
    SVG_LENGTHTYPE_PX: number;
    SVG_LENGTHTYPE_UNKNOWN: number;
    SVG_LENGTHTYPE_EXS: number;
}
interface SVGPolygonElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGPolygonElement: {
    prototype: SVGPolygonElement;
    new(): SVGPolygonElement;
}
interface HTMLPhraseElement extends HTMLElement {
    dateTime: string;
    cite: string;
}
declare var HTMLPhraseElement: {
    prototype: HTMLPhraseElement;
    new(): HTMLPhraseElement;
}
interface NavigatorStorageUtils {
}
interface SVGPathSegCurvetoCubicRel extends SVGPathSeg {
    y: number;
    y1: number;
    x2: number;
    x: number;
    x1: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicRel: {
    prototype: SVGPathSegCurvetoCubicRel;
    new(): SVGPathSegCurvetoCubicRel;
}
interface SVGTextContentElement extends SVGElement, SVGStylable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    textLength: SVGAnimatedLength;
    lengthAdjust: SVGAnimatedEnumeration;
    getCharNumAtPosition(point: SVGPoint): number;
    getStartPositionOfChar(charnum: number): SVGPoint;
    getExtentOfChar(charnum: number): SVGRect;
    getComputedTextLength(): number;
    getSubStringLength(charnum: number, nchars: number): number;
    selectSubString(charnum: number, nchars: number): void;
    getNumberOfChars(): number;
    getRotationOfChar(charnum: number): number;
    getEndPositionOfChar(charnum: number): SVGPoint;
    LENGTHADJUST_SPACING: number;
    LENGTHADJUST_SPACINGANDGLYPHS: number;
    LENGTHADJUST_UNKNOWN: number;
}
declare var SVGTextContentElement: {
    prototype: SVGTextContentElement;
    new(): SVGTextContentElement;
    LENGTHADJUST_SPACING: number;
    LENGTHADJUST_SPACINGANDGLYPHS: number;
    LENGTHADJUST_UNKNOWN: number;
}
interface DOML2DeprecatedColorProperty {
    color: string;
}
interface Location {
    hash: string;
    protocol: string;
    search: string;
    href: string;
    hostname: string;
    port: string;
    pathname: string;
    host: string;
    reload(flag?: boolean): void;
    replace(url: string): void;
    assign(url: string): void;
    toString(): string;
}
declare var Location: {
    prototype: Location;
    new(): Location;
}
interface HTMLTitleElement extends HTMLElement {
    text: string;
}
declare var HTMLTitleElement: {
    prototype: HTMLTitleElement;
    new(): HTMLTitleElement;
}
interface HTMLStyleElement extends HTMLElement, LinkStyle {
    media: string;
    type: string;
}
declare var HTMLStyleElement: {
    prototype: HTMLStyleElement;
    new(): HTMLStyleElement;
}
interface PerformanceEntry {
    name: string;
    startTime: number;
    duration: number;
    entryType: string;
}
declare var PerformanceEntry: {
    prototype: PerformanceEntry;
    new(): PerformanceEntry;
}
interface SVGTransform {
    type: number;
    angle: number;
    matrix: SVGMatrix;
    setTranslate(tx: number, ty: number): void;
    setScale(sx: number, sy: number): void;
    setMatrix(matrix: SVGMatrix): void;
    setSkewY(angle: number): void;
    setRotate(angle: number, cx: number, cy: number): void;
    setSkewX(angle: number): void;
    SVG_TRANSFORM_SKEWX: number;
    SVG_TRANSFORM_UNKNOWN: number;
    SVG_TRANSFORM_SCALE: number;
    SVG_TRANSFORM_TRANSLATE: number;
    SVG_TRANSFORM_MATRIX: number;
    SVG_TRANSFORM_ROTATE: number;
    SVG_TRANSFORM_SKEWY: number;
}
declare var SVGTransform: {
    prototype: SVGTransform;
    new(): SVGTransform;
    SVG_TRANSFORM_SKEWX: number;
    SVG_TRANSFORM_UNKNOWN: number;
    SVG_TRANSFORM_SCALE: number;
    SVG_TRANSFORM_TRANSLATE: number;
    SVG_TRANSFORM_MATRIX: number;
    SVG_TRANSFORM_ROTATE: number;
    SVG_TRANSFORM_SKEWY: number;
}
interface UIEvent extends Event {
    detail: number;
    view: Window;
    initUIEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number): void;
}
declare var UIEvent: {
    prototype: UIEvent;
    new(): UIEvent;
}
interface SVGURIReference {
    href: SVGAnimatedString;
}
interface SVGPathSeg {
    pathSegType: number;
    pathSegTypeAsLetter: string;
    PATHSEG_MOVETO_REL: number;
    PATHSEG_LINETO_VERTICAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_REL: number;
    PATHSEG_CURVETO_CUBIC_ABS: number;
    PATHSEG_LINETO_HORIZONTAL_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_ABS: number;
    PATHSEG_LINETO_ABS: number;
    PATHSEG_CLOSEPATH: number;
    PATHSEG_LINETO_HORIZONTAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    PATHSEG_LINETO_REL: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    PATHSEG_ARC_REL: number;
    PATHSEG_CURVETO_CUBIC_REL: number;
    PATHSEG_UNKNOWN: number;
    PATHSEG_LINETO_VERTICAL_ABS: number;
    PATHSEG_ARC_ABS: number;
    PATHSEG_MOVETO_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
}
declare var SVGPathSeg: {
    prototype: SVGPathSeg;
    new(): SVGPathSeg;
    PATHSEG_MOVETO_REL: number;
    PATHSEG_LINETO_VERTICAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_REL: number;
    PATHSEG_CURVETO_CUBIC_ABS: number;
    PATHSEG_LINETO_HORIZONTAL_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_ABS: number;
    PATHSEG_LINETO_ABS: number;
    PATHSEG_CLOSEPATH: number;
    PATHSEG_LINETO_HORIZONTAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    PATHSEG_LINETO_REL: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    PATHSEG_ARC_REL: number;
    PATHSEG_CURVETO_CUBIC_REL: number;
    PATHSEG_UNKNOWN: number;
    PATHSEG_LINETO_VERTICAL_ABS: number;
    PATHSEG_ARC_ABS: number;
    PATHSEG_MOVETO_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
}
interface WheelEvent extends MouseEvent {
    deltaZ: number;
    deltaX: number;
    deltaMode: number;
    deltaY: number;
    initWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, deltaXArg: number, deltaYArg: number, deltaZArg: number, deltaMode: number): void;
    getCurrentPoint(element: Element): void;
    DOM_DELTA_PIXEL: number;
    DOM_DELTA_LINE: number;
    DOM_DELTA_PAGE: number;
}
declare var WheelEvent: {
    prototype: WheelEvent;
    new(): WheelEvent;
    DOM_DELTA_PIXEL: number;
    DOM_DELTA_LINE: number;
    DOM_DELTA_PAGE: number;
}
interface MSEventAttachmentTarget {
    attachEvent(event: string, listener: EventListener): boolean;
    detachEvent(event: string, listener: EventListener): void;
}
interface SVGNumber {
    value: number;
}
declare var SVGNumber: {
    prototype: SVGNumber;
    new(): SVGNumber;
}
interface SVGPathElement extends SVGElement, SVGStylable, SVGAnimatedPathData, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    getPathSegAtLength(distance: number): number;
    getPointAtLength(distance: number): SVGPoint;
    createSVGPathSegCurvetoQuadraticAbs(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticAbs;
    createSVGPathSegLinetoRel(x: number, y: number): SVGPathSegLinetoRel;
    createSVGPathSegCurvetoQuadraticRel(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticRel;
    createSVGPathSegCurvetoCubicAbs(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicAbs;
    createSVGPathSegLinetoAbs(x: number, y: number): SVGPathSegLinetoAbs;
    createSVGPathSegClosePath(): SVGPathSegClosePath;
    createSVGPathSegCurvetoCubicRel(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicRel;
    createSVGPathSegCurvetoQuadraticSmoothRel(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothRel;
    createSVGPathSegMovetoRel(x: number, y: number): SVGPathSegMovetoRel;
    createSVGPathSegCurvetoCubicSmoothAbs(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothAbs;
    createSVGPathSegMovetoAbs(x: number, y: number): SVGPathSegMovetoAbs;
    createSVGPathSegLinetoVerticalRel(y: number): SVGPathSegLinetoVerticalRel;
    createSVGPathSegArcRel(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcRel;
    createSVGPathSegCurvetoQuadraticSmoothAbs(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothAbs;
    createSVGPathSegLinetoHorizontalRel(x: number): SVGPathSegLinetoHorizontalRel;
    getTotalLength(): number;
    createSVGPathSegCurvetoCubicSmoothRel(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothRel;
    createSVGPathSegLinetoHorizontalAbs(x: number): SVGPathSegLinetoHorizontalAbs;
    createSVGPathSegLinetoVerticalAbs(y: number): SVGPathSegLinetoVerticalAbs;
    createSVGPathSegArcAbs(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcAbs;
}
declare var SVGPathElement: {
    prototype: SVGPathElement;
    new(): SVGPathElement;
}
interface MSCompatibleInfo {
    version: string;
    userAgent: string;
}
declare var MSCompatibleInfo: {
    prototype: MSCompatibleInfo;
    new(): MSCompatibleInfo;
}
interface Text extends CharacterData, MSNodeExtensions {
    wholeText: string;
    splitText(offset: number): Text;
    replaceWholeText(content: string): Text;
}
declare var Text: {
    prototype: Text;
    new(): Text;
}
interface SVGAnimatedRect {
    animVal: SVGRect;
    baseVal: SVGRect;
}
declare var SVGAnimatedRect: {
    prototype: SVGAnimatedRect;
    new(): SVGAnimatedRect;
}
interface CSSNamespaceRule extends CSSRule {
    namespaceURI: string;
    prefix: string;
}
declare var CSSNamespaceRule: {
    prototype: CSSNamespaceRule;
    new(): CSSNamespaceRule;
}
interface SVGPathSegList {
    numberOfItems: number;
    replaceItem(newItem: SVGPathSeg, index: number): SVGPathSeg;
    getItem(index: number): SVGPathSeg;
    clear(): void;
    appendItem(newItem: SVGPathSeg): SVGPathSeg;
    initialize(newItem: SVGPathSeg): SVGPathSeg;
    removeItem(index: number): SVGPathSeg;
    insertItemBefore(newItem: SVGPathSeg, index: number): SVGPathSeg;
}
declare var SVGPathSegList: {
    prototype: SVGPathSegList;
    new(): SVGPathSegList;
}
interface HTMLUnknownElement extends HTMLElement, MSDataBindingRecordSetReadonlyExtensions {
}
declare var HTMLUnknownElement: {
    prototype: HTMLUnknownElement;
    new(): HTMLUnknownElement;
}
interface HTMLAudioElement extends HTMLMediaElement {
}
declare var HTMLAudioElement: {
    prototype: HTMLAudioElement;
    new(): HTMLAudioElement;
}
interface MSImageResourceExtensions {
    dynsrc: string;
    vrml: string;
    lowsrc: string;
    start: string;
    loop: number;
}
interface PositionError {
    code: number;
    message: string;
    toString(): string;
    POSITION_UNAVAILABLE: number;
    PERMISSION_DENIED: number;
    TIMEOUT: number;
}
declare var PositionError: {
    prototype: PositionError;
    new(): PositionError;
    POSITION_UNAVAILABLE: number;
    PERMISSION_DENIED: number;
    TIMEOUT: number;
}
interface HTMLTableCellElement extends HTMLElement, HTMLTableAlignment, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {
    width: number;
    headers: string;
    cellIndex: number;
    align: string;
    borderColorLight: any;
    colSpan: number;
    borderColor: any;
    axis: string;
    height: any;
    noWrap: boolean;
    abbr: string;
    rowSpan: number;
    scope: string;
    borderColorDark: any;
}
declare var HTMLTableCellElement: {
    prototype: HTMLTableCellElement;
    new(): HTMLTableCellElement;
}
interface SVGElementInstance extends EventTarget {
    previousSibling: SVGElementInstance;
    parentNode: SVGElementInstance;
    lastChild: SVGElementInstance;
    nextSibling: SVGElementInstance;
    childNodes: SVGElementInstanceList;
    correspondingUseElement: SVGUseElement;
    correspondingElement: SVGElement;
    firstChild: SVGElementInstance;
}
declare var SVGElementInstance: {
    prototype: SVGElementInstance;
    new(): SVGElementInstance;
}
interface MSNamespaceInfoCollection {
    length: number;
    add(namespace?: string, urn?: string, implementationUrl?: any): any;
    item(index: any): any;
}
declare var MSNamespaceInfoCollection: {
    prototype: MSNamespaceInfoCollection;
    new(): MSNamespaceInfoCollection;
}
interface SVGCircleElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    cx: SVGAnimatedLength;
    r: SVGAnimatedLength;
    cy: SVGAnimatedLength;
}
declare var SVGCircleElement: {
    prototype: SVGCircleElement;
    new(): SVGCircleElement;
}
interface StyleSheetList {
    length: number;
    item(index?: number): StyleSheet;
    [index: number]: StyleSheet;
}
declare var StyleSheetList: {
    prototype: StyleSheetList;
    new(): StyleSheetList;
}
interface CSSImportRule extends CSSRule {
    styleSheet: CSSStyleSheet;
    href: string;
    media: MediaList;
}
declare var CSSImportRule: {
    prototype: CSSImportRule;
    new(): CSSImportRule;
}
interface CustomEvent extends Event {
    detail: any;
    initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: any): void;
}
declare var CustomEvent: {
    prototype: CustomEvent;
    new(): CustomEvent;
}
interface HTMLBaseFontElement extends HTMLElement, DOML2DeprecatedColorProperty {
    face: string;
    size: number;
}
declare var HTMLBaseFontElement: {
    prototype: HTMLBaseFontElement;
    new(): HTMLBaseFontElement;
}
interface HTMLTextAreaElement extends HTMLElement, MSDataBindingExtensions {
    value: string;
    status: any;
    form: HTMLFormElement;
    name: string;
    selectionStart: number;
    rows: number;
    cols: number;
    readOnly: boolean;
    wrap: string;
    selectionEnd: number;
    type: string;
    defaultValue: string;
    validationMessage: string;
    autofocus: boolean;
    validity: ValidityState;
    required: boolean;
    maxLength: number;
    willValidate: boolean;
    placeholder: string;
    createTextRange(): TextRange;
    setSelectionRange(start: number, end: number): void;
    select(): void;
    checkValidity(): boolean;
    setCustomValidity(error: string): void;
}
declare var HTMLTextAreaElement: {
    prototype: HTMLTextAreaElement;
    new(): HTMLTextAreaElement;
}
interface Geolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
}
declare var Geolocation: {
    prototype: Geolocation;
    new(): Geolocation;
}
interface DOML2DeprecatedMarginStyle {
    vspace: number;
    hspace: number;
}
interface MSWindowModeless {
    dialogTop: any;
    dialogLeft: any;
    dialogWidth: any;
    dialogHeight: any;
    menuArguments: any;
}
interface DOML2DeprecatedAlignmentStyle {
    align: string;
}
interface HTMLMarqueeElement extends HTMLElement, MSDataBindingExtensions, DOML2DeprecatedBackgroundColorStyle {
    width: string;
    onbounce: (ev: Event) => any;
    vspace: number;
    trueSpeed: boolean;
    scrollAmount: number;
    scrollDelay: number;
    behavior: string;
    height: string;
    loop: number;
    direction: string;
    hspace: number;
    onstart: (ev: Event) => any;
    onfinish: (ev: Event) => any;
    stop(): void;
    start(): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "bounce", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "start", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "finish", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var HTMLMarqueeElement: {
    prototype: HTMLMarqueeElement;
    new(): HTMLMarqueeElement;
}
interface SVGRect {
    y: number;
    width: number;
    x: number;
    height: number;
}
declare var SVGRect: {
    prototype: SVGRect;
    new(): SVGRect;
}
interface MSNodeExtensions {
    swapNode(otherNode: Node): Node;
    removeNode(deep?: boolean): Node;
    replaceNode(replacement: Node): Node;
}
interface History {
    length: number;
    state: any;
    back(distance?: any): void;
    forward(distance?: any): void;
    go(delta?: any): void;
    replaceState(statedata: any, title: string, url?: string): void;
    pushState(statedata: any, title: string, url?: string): void;
}
declare var History: {
    prototype: History;
    new(): History;
}
interface SVGPathSegCurvetoCubicAbs extends SVGPathSeg {
    y: number;
    y1: number;
    x2: number;
    x: number;
    x1: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicAbs: {
    prototype: SVGPathSegCurvetoCubicAbs;
    new(): SVGPathSegCurvetoCubicAbs;
}
interface SVGPathSegCurvetoQuadraticAbs extends SVGPathSeg {
    y: number;
    y1: number;
    x: number;
    x1: number;
}
declare var SVGPathSegCurvetoQuadraticAbs: {
    prototype: SVGPathSegCurvetoQuadraticAbs;
    new(): SVGPathSegCurvetoQuadraticAbs;
}
interface TimeRanges {
    length: number;
    start(index: number): number;
    end(index: number): number;
}
declare var TimeRanges: {
    prototype: TimeRanges;
    new(): TimeRanges;
}
interface CSSRule {
    cssText: string;
    parentStyleSheet: CSSStyleSheet;
    parentRule: CSSRule;
    type: number;
    IMPORT_RULE: number;
    MEDIA_RULE: number;
    STYLE_RULE: number;
    NAMESPACE_RULE: number;
    PAGE_RULE: number;
    UNKNOWN_RULE: number;
    FONT_FACE_RULE: number;
    CHARSET_RULE: number;
    KEYFRAMES_RULE: number;
    KEYFRAME_RULE: number;
    VIEWPORT_RULE: number;
}
declare var CSSRule: {
    prototype: CSSRule;
    new(): CSSRule;
    IMPORT_RULE: number;
    MEDIA_RULE: number;
    STYLE_RULE: number;
    NAMESPACE_RULE: number;
    PAGE_RULE: number;
    UNKNOWN_RULE: number;
    FONT_FACE_RULE: number;
    CHARSET_RULE: number;
    KEYFRAMES_RULE: number;
    KEYFRAME_RULE: number;
    VIEWPORT_RULE: number;
}
interface SVGPathSegLinetoAbs extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegLinetoAbs: {
    prototype: SVGPathSegLinetoAbs;
    new(): SVGPathSegLinetoAbs;
}
interface HTMLModElement extends HTMLElement {
    dateTime: string;
    cite: string;
}
declare var HTMLModElement: {
    prototype: HTMLModElement;
    new(): HTMLModElement;
}
interface SVGMatrix {
    e: number;
    c: number;
    a: number;
    b: number;
    d: number;
    f: number;
    multiply(secondMatrix: SVGMatrix): SVGMatrix;
    flipY(): SVGMatrix;
    skewY(angle: number): SVGMatrix;
    inverse(): SVGMatrix;
    scaleNonUniform(scaleFactorX: number, scaleFactorY: number): SVGMatrix;
    rotate(angle: number): SVGMatrix;
    flipX(): SVGMatrix;
    translate(x: number, y: number): SVGMatrix;
    scale(scaleFactor: number): SVGMatrix;
    rotateFromVector(x: number, y: number): SVGMatrix;
    skewX(angle: number): SVGMatrix;
}
declare var SVGMatrix: {
    prototype: SVGMatrix;
    new(): SVGMatrix;
}
interface MSPopupWindow {
    document: Document;
    isOpen: boolean;
    show(x: number, y: number, w: number, h: number, element?: any): void;
    hide(): void;
}
declare var MSPopupWindow: {
    prototype: MSPopupWindow;
    new(): MSPopupWindow;
}
interface BeforeUnloadEvent extends Event {
    returnValue: string;
}
declare var BeforeUnloadEvent: {
    prototype: BeforeUnloadEvent;
    new(): BeforeUnloadEvent;
}
interface SVGUseElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    animatedInstanceRoot: SVGElementInstance;
    instanceRoot: SVGElementInstance;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGUseElement: {
    prototype: SVGUseElement;
    new(): SVGUseElement;
}
interface Event {
    timeStamp: number;
    defaultPrevented: boolean;
    isTrusted: boolean;
    currentTarget: EventTarget;
    cancelBubble: boolean;
    target: EventTarget;
    eventPhase: number;
    cancelable: boolean;
    type: string;
    srcElement: Element;
    bubbles: boolean;
    initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    preventDefault(): void;
    CAPTURING_PHASE: number;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
}
declare var Event: {
    prototype: Event;
    new(): Event;
    CAPTURING_PHASE: number;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
}
interface ImageData {
    width: number;
    data: number[];
    height: number;
}
declare var ImageData: {
    prototype: ImageData;
    new(): ImageData;
}
interface HTMLTableColElement extends HTMLElement, HTMLTableAlignment {
    width: any;
    align: string;
    span: number;
}
declare var HTMLTableColElement: {
    prototype: HTMLTableColElement;
    new(): HTMLTableColElement;
}
interface SVGException {
    code: number;
    message: string;
    name: string;
    toString(): string;
    SVG_MATRIX_NOT_INVERTABLE: number;
    SVG_WRONG_TYPE_ERR: number;
    SVG_INVALID_VALUE_ERR: number;
}
declare var SVGException: {
    prototype: SVGException;
    new(): SVGException;
    SVG_MATRIX_NOT_INVERTABLE: number;
    SVG_WRONG_TYPE_ERR: number;
    SVG_INVALID_VALUE_ERR: number;
}
interface SVGLinearGradientElement extends SVGGradientElement {
    y1: SVGAnimatedLength;
    x2: SVGAnimatedLength;
    x1: SVGAnimatedLength;
    y2: SVGAnimatedLength;
}
declare var SVGLinearGradientElement: {
    prototype: SVGLinearGradientElement;
    new(): SVGLinearGradientElement;
}
interface HTMLTableAlignment {
    ch: string;
    vAlign: string;
    chOff: string;
}
interface SVGAnimatedEnumeration {
    animVal: number;
    baseVal: number;
}
declare var SVGAnimatedEnumeration: {
    prototype: SVGAnimatedEnumeration;
    new(): SVGAnimatedEnumeration;
}
interface DOML2DeprecatedSizeProperty {
    size: number;
}
interface HTMLUListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {
}
declare var HTMLUListElement: {
    prototype: HTMLUListElement;
    new(): HTMLUListElement;
}
interface SVGRectElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    ry: SVGAnimatedLength;
    rx: SVGAnimatedLength;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGRectElement: {
    prototype: SVGRectElement;
    new(): SVGRectElement;
}
interface ErrorEventHandler {
    (event: Event, source: string, fileno: number, columnNumber: number): void;
}
interface HTMLDivElement extends HTMLElement, MSDataBindingExtensions {
    align: string;
    noWrap: boolean;
}
declare var HTMLDivElement: {
    prototype: HTMLDivElement;
    new(): HTMLDivElement;
}
interface DOML2DeprecatedBorderStyle {
    border: string;
}
interface NamedNodeMap {
    length: number;
    removeNamedItemNS(namespaceURI: string, localName: string): Attr;
    item(index: number): Attr;
    [index: number]: Attr;
    removeNamedItem(name: string): Attr;
    getNamedItem(name: string): Attr;
    setNamedItem(arg: Attr): Attr;
    getNamedItemNS(namespaceURI: string, localName: string): Attr;
    setNamedItemNS(arg: Attr): Attr;
}
declare var NamedNodeMap: {
    prototype: NamedNodeMap;
    new(): NamedNodeMap;
}
interface MediaList {
    length: number;
    mediaText: string;
    deleteMedium(oldMedium: string): void;
    appendMedium(newMedium: string): void;
    item(index: number): string;
    [index: number]: string;
    toString(): string;
}
declare var MediaList: {
    prototype: MediaList;
    new(): MediaList;
}
interface SVGPathSegCurvetoQuadraticSmoothAbs extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegCurvetoQuadraticSmoothAbs: {
    prototype: SVGPathSegCurvetoQuadraticSmoothAbs;
    new(): SVGPathSegCurvetoQuadraticSmoothAbs;
}
interface SVGPathSegCurvetoCubicSmoothRel extends SVGPathSeg {
    y: number;
    x2: number;
    x: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicSmoothRel: {
    prototype: SVGPathSegCurvetoCubicSmoothRel;
    new(): SVGPathSegCurvetoCubicSmoothRel;
}
interface SVGLengthList {
    numberOfItems: number;
    replaceItem(newItem: SVGLength, index: number): SVGLength;
    getItem(index: number): SVGLength;
    clear(): void;
    appendItem(newItem: SVGLength): SVGLength;
    initialize(newItem: SVGLength): SVGLength;
    removeItem(index: number): SVGLength;
    insertItemBefore(newItem: SVGLength, index: number): SVGLength;
}
declare var SVGLengthList: {
    prototype: SVGLengthList;
    new(): SVGLengthList;
}
interface ProcessingInstruction extends Node {
    target: string;
    data: string;
}
declare var ProcessingInstruction: {
    prototype: ProcessingInstruction;
    new(): ProcessingInstruction;
}
interface MSWindowExtensions {
    status: string;
    onmouseleave: (ev: MouseEvent) => any;
    screenLeft: number;
    offscreenBuffering: any;
    maxConnectionsPerServer: number;
    onmouseenter: (ev: MouseEvent) => any;
    clipboardData: DataTransfer;
    defaultStatus: string;
    clientInformation: Navigator;
    closed: boolean;
    onhelp: (ev: Event) => any;
    external: External;
    event: MSEventObj;
    onfocusout: (ev: FocusEvent) => any;
    screenTop: number;
    onfocusin: (ev: FocusEvent) => any;
    showModelessDialog(url?: string, argument?: any, options?: any): Window;
    navigate(url: string): void;
    resizeBy(x?: number, y?: number): void;
    item(index: any): any;
    resizeTo(x?: number, y?: number): void;
    createPopup(arguments?: any): MSPopupWindow;
    toStaticHTML(html: string): string;
    execScript(code: string, language?: string): any;
    msWriteProfilerMark(profilerMarkName: string): void;
    moveTo(x?: number, y?: number): void;
    moveBy(x?: number, y?: number): void;
    showHelp(url: string, helpArg?: any, features?: string): void;
    captureEvents(): void;
    releaseEvents(): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
interface MSBehaviorUrnsCollection {
    length: number;
    item(index: number): string;
}
declare var MSBehaviorUrnsCollection: {
    prototype: MSBehaviorUrnsCollection;
    new(): MSBehaviorUrnsCollection;
}
interface CSSFontFaceRule extends CSSRule {
    style: CSSStyleDeclaration;
}
declare var CSSFontFaceRule: {
    prototype: CSSFontFaceRule;
    new(): CSSFontFaceRule;
}
interface DOML2DeprecatedBackgroundStyle {
    background: string;
}
interface TextEvent extends UIEvent {
    inputMethod: number;
    data: string;
    locale: string;
    initTextEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, inputMethod: number, locale: string): void;
    DOM_INPUT_METHOD_KEYBOARD: number;
    DOM_INPUT_METHOD_DROP: number;
    DOM_INPUT_METHOD_IME: number;
    DOM_INPUT_METHOD_SCRIPT: number;
    DOM_INPUT_METHOD_VOICE: number;
    DOM_INPUT_METHOD_UNKNOWN: number;
    DOM_INPUT_METHOD_PASTE: number;
    DOM_INPUT_METHOD_HANDWRITING: number;
    DOM_INPUT_METHOD_OPTION: number;
    DOM_INPUT_METHOD_MULTIMODAL: number;
}
declare var TextEvent: {
    prototype: TextEvent;
    new(): TextEvent;
    DOM_INPUT_METHOD_KEYBOARD: number;
    DOM_INPUT_METHOD_DROP: number;
    DOM_INPUT_METHOD_IME: number;
    DOM_INPUT_METHOD_SCRIPT: number;
    DOM_INPUT_METHOD_VOICE: number;
    DOM_INPUT_METHOD_UNKNOWN: number;
    DOM_INPUT_METHOD_PASTE: number;
    DOM_INPUT_METHOD_HANDWRITING: number;
    DOM_INPUT_METHOD_OPTION: number;
    DOM_INPUT_METHOD_MULTIMODAL: number;
}
interface DocumentFragment extends Node, NodeSelector, MSEventAttachmentTarget, MSNodeExtensions {
}
declare var DocumentFragment: {
    prototype: DocumentFragment;
    new(): DocumentFragment;
}
interface SVGPolylineElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGPolylineElement: {
    prototype: SVGPolylineElement;
    new(): SVGPolylineElement;
}
interface SVGAnimatedPathData {
    pathSegList: SVGPathSegList;
}
interface Position {
    timestamp: Date;
    coords: Coordinates;
}
declare var Position: {
    prototype: Position;
    new(): Position;
}
interface BookmarkCollection {
    length: number;
    item(index: number): any;
    [index: number]: any;
}
declare var BookmarkCollection: {
    prototype: BookmarkCollection;
    new(): BookmarkCollection;
}
interface PerformanceMark extends PerformanceEntry {
}
declare var PerformanceMark: {
    prototype: PerformanceMark;
    new(): PerformanceMark;
}
interface CSSPageRule extends CSSRule {
    pseudoClass: string;
    selectorText: string;
    selector: string;
    style: CSSStyleDeclaration;
}
declare var CSSPageRule: {
    prototype: CSSPageRule;
    new(): CSSPageRule;
}
interface HTMLBRElement extends HTMLElement {
    clear: string;
}
declare var HTMLBRElement: {
    prototype: HTMLBRElement;
    new(): HTMLBRElement;
}
interface MSNavigatorExtensions {
    userLanguage: string;
    plugins: MSPluginsCollection;
    cookieEnabled: boolean;
    appCodeName: string;
    cpuClass: string;
    appMinorVersion: string;
    connectionSpeed: number;
    browserLanguage: string;
    mimeTypes: MSMimeTypesCollection;
    systemLanguage: string;
    language: string;
    javaEnabled(): boolean;
    taintEnabled(): boolean;
}
interface HTMLSpanElement extends HTMLElement, MSDataBindingExtensions {
}
declare var HTMLSpanElement: {
    prototype: HTMLSpanElement;
    new(): HTMLSpanElement;
}
interface HTMLHeadElement extends HTMLElement {
    profile: string;
}
declare var HTMLHeadElement: {
    prototype: HTMLHeadElement;
    new(): HTMLHeadElement;
}
interface HTMLHeadingElement extends HTMLElement, DOML2DeprecatedTextFlowControl {
    align: string;
}
declare var HTMLHeadingElement: {
    prototype: HTMLHeadingElement;
    new(): HTMLHeadingElement;
}
interface HTMLFormElement extends HTMLElement, MSHTMLCollectionExtensions {
    length: number;
    target: string;
    acceptCharset: string;
    enctype: string;
    elements: HTMLCollection;
    action: string;
    name: string;
    method: string;
    encoding: string;
    autocomplete: string;
    noValidate: boolean;
    reset(): void;
    item(name?: any, index?: any): any;
    submit(): void;
    namedItem(name: string): any;
    [name: string]: any;
    checkValidity(): boolean;
}
declare var HTMLFormElement: {
    prototype: HTMLFormElement;
    new(): HTMLFormElement;
}
interface SVGZoomAndPan {
    zoomAndPan: number;
    SVG_ZOOMANDPAN_MAGNIFY: number;
    SVG_ZOOMANDPAN_UNKNOWN: number;
    SVG_ZOOMANDPAN_DISABLE: number;
}
declare var SVGZoomAndPan: SVGZoomAndPan;
interface HTMLMediaElement extends HTMLElement {
    initialTime: number;
    played: TimeRanges;
    currentSrc: string;
    readyState: any;
    autobuffer: boolean;
    loop: boolean;
    ended: boolean;
    buffered: TimeRanges;
    error: MediaError;
    seekable: TimeRanges;
    autoplay: boolean;
    controls: boolean;
    volume: number;
    src: string;
    playbackRate: number;
    duration: number;
    muted: boolean;
    defaultPlaybackRate: number;
    paused: boolean;
    seeking: boolean;
    currentTime: number;
    preload: string;
    networkState: number;
    msAudioCategory: string;
    msRealTime: boolean;
    msPlayToPrimary: boolean;
    textTracks: TextTrackList;
    msPlayToDisabled: boolean;
    audioTracks: AudioTrackList;
    msPlayToSource: any;
    msAudioDeviceType: string;
    msPlayToPreferredSourceUri: string;
    onmsneedkey: (ev: MSMediaKeyNeededEvent) => any;
    msKeys: MSMediaKeys;
    msGraphicsTrustStatus: MSGraphicsTrust;
    pause(): void;
    play(): void;
    load(): void;
    canPlayType(type: string): string;
    msClearEffects(): void;
    msSetMediaProtectionManager(mediaProtectionManager?: any): void;
    msInsertAudioEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;
    msSetMediaKeys(mediaKeys: MSMediaKeys): void;
    addTextTrack(kind: string, label?: string, language?: string): TextTrack;
    HAVE_METADATA: number;
    HAVE_CURRENT_DATA: number;
    HAVE_NOTHING: number;
    NETWORK_NO_SOURCE: number;
    HAVE_ENOUGH_DATA: number;
    NETWORK_EMPTY: number;
    NETWORK_LOADING: number;
    NETWORK_IDLE: number;
    HAVE_FUTURE_DATA: number;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msneedkey", listener: (ev: MSMediaKeyNeededEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var HTMLMediaElement: {
    prototype: HTMLMediaElement;
    new(): HTMLMediaElement;
    HAVE_METADATA: number;
    HAVE_CURRENT_DATA: number;
    HAVE_NOTHING: number;
    NETWORK_NO_SOURCE: number;
    HAVE_ENOUGH_DATA: number;
    NETWORK_EMPTY: number;
    NETWORK_LOADING: number;
    NETWORK_IDLE: number;
    HAVE_FUTURE_DATA: number;
}
interface ElementCSSInlineStyle {
    runtimeStyle: MSStyleCSSProperties;
    currentStyle: MSCurrentStyleCSSProperties;
    doScroll(component?: any): void;
    componentFromPoint(x: number, y: number): string;
}
interface DOMParser {
    parseFromString(source: string, mimeType: string): Document;
}
declare var DOMParser: {
    prototype: DOMParser;
    new(): DOMParser;
}
interface MSMimeTypesCollection {
    length: number;
}
declare var MSMimeTypesCollection: {
    prototype: MSMimeTypesCollection;
    new(): MSMimeTypesCollection;
}
interface StyleSheet {
    disabled: boolean;
    ownerNode: Node;
    parentStyleSheet: StyleSheet;
    href: string;
    media: MediaList;
    type: string;
    title: string;
}
declare var StyleSheet: {
    prototype: StyleSheet;
    new(): StyleSheet;
}
interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {
    startOffset: SVGAnimatedLength;
    method: SVGAnimatedEnumeration;
    spacing: SVGAnimatedEnumeration;
    TEXTPATH_SPACINGTYPE_EXACT: number;
    TEXTPATH_METHODTYPE_STRETCH: number;
    TEXTPATH_SPACINGTYPE_AUTO: number;
    TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_ALIGN: number;
}
declare var SVGTextPathElement: {
    prototype: SVGTextPathElement;
    new(): SVGTextPathElement;
    TEXTPATH_SPACINGTYPE_EXACT: number;
    TEXTPATH_METHODTYPE_STRETCH: number;
    TEXTPATH_SPACINGTYPE_AUTO: number;
    TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_ALIGN: number;
}
interface HTMLDTElement extends HTMLElement {
    noWrap: boolean;
}
declare var HTMLDTElement: {
    prototype: HTMLDTElement;
    new(): HTMLDTElement;
}
interface NodeList {
    length: number;
    item(index: number): Node;
    [index: number]: Node;
}
declare var NodeList: {
    prototype: NodeList;
    new(): NodeList;
}
interface XMLSerializer {
    serializeToString(target: Node): string;
}
declare var XMLSerializer: {
    prototype: XMLSerializer;
    new(): XMLSerializer;
}
interface PerformanceMeasure extends PerformanceEntry {
}
declare var PerformanceMeasure: {
    prototype: PerformanceMeasure;
    new(): PerformanceMeasure;
}
interface SVGGradientElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGExternalResourcesRequired, SVGURIReference {
    spreadMethod: SVGAnimatedEnumeration;
    gradientTransform: SVGAnimatedTransformList;
    gradientUnits: SVGAnimatedEnumeration;
    SVG_SPREADMETHOD_REFLECT: number;
    SVG_SPREADMETHOD_PAD: number;
    SVG_SPREADMETHOD_UNKNOWN: number;
    SVG_SPREADMETHOD_REPEAT: number;
}
declare var SVGGradientElement: {
    prototype: SVGGradientElement;
    new(): SVGGradientElement;
    SVG_SPREADMETHOD_REFLECT: number;
    SVG_SPREADMETHOD_PAD: number;
    SVG_SPREADMETHOD_UNKNOWN: number;
    SVG_SPREADMETHOD_REPEAT: number;
}
interface NodeFilter {
    acceptNode(n: Node): number;
    SHOW_ENTITY_REFERENCE: number;
    SHOW_NOTATION: number;
    SHOW_ENTITY: number;
    SHOW_DOCUMENT: number;
    SHOW_PROCESSING_INSTRUCTION: number;
    FILTER_REJECT: number;
    SHOW_CDATA_SECTION: number;
    FILTER_ACCEPT: number;
    SHOW_ALL: number;
    SHOW_DOCUMENT_TYPE: number;
    SHOW_TEXT: number;
    SHOW_ELEMENT: number;
    SHOW_COMMENT: number;
    FILTER_SKIP: number;
    SHOW_ATTRIBUTE: number;
    SHOW_DOCUMENT_FRAGMENT: number;
}
declare var NodeFilter: NodeFilter;
interface SVGNumberList {
    numberOfItems: number;
    replaceItem(newItem: SVGNumber, index: number): SVGNumber;
    getItem(index: number): SVGNumber;
    clear(): void;
    appendItem(newItem: SVGNumber): SVGNumber;
    initialize(newItem: SVGNumber): SVGNumber;
    removeItem(index: number): SVGNumber;
    insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
}
declare var SVGNumberList: {
    prototype: SVGNumberList;
    new(): SVGNumberList;
}
interface MediaError {
    code: number;
    msExtendedCode: number;
    MEDIA_ERR_ABORTED: number;
    MEDIA_ERR_NETWORK: number;
    MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    MEDIA_ERR_DECODE: number;
    MS_MEDIA_ERR_ENCRYPTED: number;
}
declare var MediaError: {
    prototype: MediaError;
    new(): MediaError;
    MEDIA_ERR_ABORTED: number;
    MEDIA_ERR_NETWORK: number;
    MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    MEDIA_ERR_DECODE: number;
    MS_MEDIA_ERR_ENCRYPTED: number;
}
interface HTMLFieldSetElement extends HTMLElement {
    align: string;
    form: HTMLFormElement;
    validationMessage: string;
    validity: ValidityState;
    willValidate: boolean;
    checkValidity(): boolean;
    setCustomValidity(error: string): void;
}
declare var HTMLFieldSetElement: {
    prototype: HTMLFieldSetElement;
    new(): HTMLFieldSetElement;
}
interface HTMLBGSoundElement extends HTMLElement {
    balance: any;
    volume: any;
    src: string;
    loop: number;
}
declare var HTMLBGSoundElement: {
    prototype: HTMLBGSoundElement;
    new(): HTMLBGSoundElement;
}
interface Comment extends CharacterData {
    text: string;
}
declare var Comment: {
    prototype: Comment;
    new(): Comment;
}
interface PerformanceResourceTiming extends PerformanceEntry {
    redirectStart: number;
    redirectEnd: number;
    domainLookupEnd: number;
    responseStart: number;
    domainLookupStart: number;
    fetchStart: number;
    requestStart: number;
    connectEnd: number;
    connectStart: number;
    initiatorType: string;
    responseEnd: number;
}
declare var PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    new(): PerformanceResourceTiming;
}
interface CanvasPattern {
}
declare var CanvasPattern: {
    prototype: CanvasPattern;
    new(): CanvasPattern;
}
interface HTMLHRElement extends HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {
    width: number;
    align: string;
    noShade: boolean;
}
declare var HTMLHRElement: {
    prototype: HTMLHRElement;
    new(): HTMLHRElement;
}
interface HTMLObjectElement extends HTMLElement, GetSVGDocument, DOML2DeprecatedMarginStyle, DOML2DeprecatedBorderStyle, DOML2DeprecatedAlignmentStyle, MSDataBindingExtensions, MSDataBindingRecordSetExtensions {
    width: string;
    codeType: string;
    object: any;
    form: HTMLFormElement;
    code: string;
    archive: string;
    standby: string;
    alt: string;
    classid: string;
    name: string;
    useMap: string;
    data: string;
    height: string;
    contentDocument: Document;
    altHtml: string;
    codeBase: string;
    declare: boolean;
    type: string;
    BaseHref: string;
    validationMessage: string;
    validity: ValidityState;
    willValidate: boolean;
    msPlayToPreferredSourceUri: string;
    msPlayToPrimary: boolean;
    msPlayToDisabled: boolean;
    readyState: number;
    msPlayToSource: any;
    checkValidity(): boolean;
    setCustomValidity(error: string): void;
}
declare var HTMLObjectElement: {
    prototype: HTMLObjectElement;
    new(): HTMLObjectElement;
}
interface HTMLEmbedElement extends HTMLElement, GetSVGDocument {
    width: string;
    palette: string;
    src: string;
    name: string;
    hidden: string;
    pluginspage: string;
    height: string;
    units: string;
    msPlayToPreferredSourceUri: string;
    msPlayToPrimary: boolean;
    msPlayToDisabled: boolean;
    readyState: string;
    msPlayToSource: any;
}
declare var HTMLEmbedElement: {
    prototype: HTMLEmbedElement;
    new(): HTMLEmbedElement;
}
interface StorageEvent extends Event {
    oldValue: any;
    newValue: any;
    url: string;
    storageArea: Storage;
    key: string;
    initStorageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, keyArg: string, oldValueArg: any, newValueArg: any, urlArg: string, storageAreaArg: Storage): void;
}
declare var StorageEvent: {
    prototype: StorageEvent;
    new(): StorageEvent;
}
interface CharacterData extends Node {
    length: number;
    data: string;
    deleteData(offset: number, count: number): void;
    replaceData(offset: number, count: number, arg: string): void;
    appendData(arg: string): void;
    insertData(offset: number, arg: string): void;
    substringData(offset: number, count: number): string;
}
declare var CharacterData: {
    prototype: CharacterData;
    new(): CharacterData;
}
interface HTMLOptGroupElement extends HTMLElement, MSDataBindingExtensions {
    index: number;
    defaultSelected: boolean;
    text: string;
    value: string;
    form: HTMLFormElement;
    label: string;
    selected: boolean;
}
declare var HTMLOptGroupElement: {
    prototype: HTMLOptGroupElement;
    new(): HTMLOptGroupElement;
}
interface HTMLIsIndexElement extends HTMLElement {
    form: HTMLFormElement;
    action: string;
    prompt: string;
}
declare var HTMLIsIndexElement: {
    prototype: HTMLIsIndexElement;
    new(): HTMLIsIndexElement;
}
interface SVGPathSegLinetoRel extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegLinetoRel: {
    prototype: SVGPathSegLinetoRel;
    new(): SVGPathSegLinetoRel;
}
interface DOMException {
    code: number;
    message: string;
    name: string;
    toString(): string;
    HIERARCHY_REQUEST_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    NAMESPACE_ERR: number;
    INVALID_CHARACTER_ERR: number;
    TYPE_MISMATCH_ERR: number;
    ABORT_ERR: number;
    INVALID_STATE_ERR: number;
    SECURITY_ERR: number;
    NETWORK_ERR: number;
    WRONG_DOCUMENT_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    INDEX_SIZE_ERR: number;
    DOMSTRING_SIZE_ERR: number;
    SYNTAX_ERR: number;
    SERIALIZE_ERR: number;
    VALIDATION_ERR: number;
    NOT_FOUND_ERR: number;
    URL_MISMATCH_ERR: number;
    PARSE_ERR: number;
    NO_DATA_ALLOWED_ERR: number;
    NOT_SUPPORTED_ERR: number;
    INVALID_ACCESS_ERR: number;
    INUSE_ATTRIBUTE_ERR: number;
    INVALID_NODE_TYPE_ERR: number;
    DATA_CLONE_ERR: number;
    TIMEOUT_ERR: number;
}
declare var DOMException: {
    prototype: DOMException;
    new(): DOMException;
    HIERARCHY_REQUEST_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    NAMESPACE_ERR: number;
    INVALID_CHARACTER_ERR: number;
    TYPE_MISMATCH_ERR: number;
    ABORT_ERR: number;
    INVALID_STATE_ERR: number;
    SECURITY_ERR: number;
    NETWORK_ERR: number;
    WRONG_DOCUMENT_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    INDEX_SIZE_ERR: number;
    DOMSTRING_SIZE_ERR: number;
    SYNTAX_ERR: number;
    SERIALIZE_ERR: number;
    VALIDATION_ERR: number;
    NOT_FOUND_ERR: number;
    URL_MISMATCH_ERR: number;
    PARSE_ERR: number;
    NO_DATA_ALLOWED_ERR: number;
    NOT_SUPPORTED_ERR: number;
    INVALID_ACCESS_ERR: number;
    INUSE_ATTRIBUTE_ERR: number;
    INVALID_NODE_TYPE_ERR: number;
    DATA_CLONE_ERR: number;
    TIMEOUT_ERR: number;
}
interface SVGAnimatedBoolean {
    animVal: boolean;
    baseVal: boolean;
}
declare var SVGAnimatedBoolean: {
    prototype: SVGAnimatedBoolean;
    new(): SVGAnimatedBoolean;
}
interface MSCompatibleInfoCollection {
    length: number;
    item(index: number): MSCompatibleInfo;
}
declare var MSCompatibleInfoCollection: {
    prototype: MSCompatibleInfoCollection;
    new(): MSCompatibleInfoCollection;
}
interface SVGSwitchElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGSwitchElement: {
    prototype: SVGSwitchElement;
    new(): SVGSwitchElement;
}
interface SVGPreserveAspectRatio {
    align: number;
    meetOrSlice: number;
    SVG_PRESERVEASPECTRATIO_NONE: number;
    SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    SVG_MEETORSLICE_UNKNOWN: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
    SVG_MEETORSLICE_MEET: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    SVG_MEETORSLICE_SLICE: number;
    SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
}
declare var SVGPreserveAspectRatio: {
    prototype: SVGPreserveAspectRatio;
    new(): SVGPreserveAspectRatio;
    SVG_PRESERVEASPECTRATIO_NONE: number;
    SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    SVG_MEETORSLICE_UNKNOWN: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
    SVG_MEETORSLICE_MEET: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    SVG_MEETORSLICE_SLICE: number;
    SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
}
interface Attr extends Node {
    expando: boolean;
    specified: boolean;
    ownerElement: Element;
    value: string;
    name: string;
}
declare var Attr: {
    prototype: Attr;
    new(): Attr;
}
interface PerformanceNavigation {
    redirectCount: number;
    type: number;
    toJSON(): any;
    TYPE_RELOAD: number;
    TYPE_RESERVED: number;
    TYPE_BACK_FORWARD: number;
    TYPE_NAVIGATE: number;
}
declare var PerformanceNavigation: {
    prototype: PerformanceNavigation;
    new(): PerformanceNavigation;
    TYPE_RELOAD: number;
    TYPE_RESERVED: number;
    TYPE_BACK_FORWARD: number;
    TYPE_NAVIGATE: number;
}
interface SVGStopElement extends SVGElement, SVGStylable {
    offset: SVGAnimatedNumber;
}
declare var SVGStopElement: {
    prototype: SVGStopElement;
    new(): SVGStopElement;
}
interface PositionCallback {
    (position: Position): void;
}
interface SVGSymbolElement extends SVGElement, SVGStylable, SVGLangSpace, SVGFitToViewBox, SVGExternalResourcesRequired {
}
declare var SVGSymbolElement: {
    prototype: SVGSymbolElement;
    new(): SVGSymbolElement;
}
interface SVGElementInstanceList {
    length: number;
    item(index: number): SVGElementInstance;
}
declare var SVGElementInstanceList: {
    prototype: SVGElementInstanceList;
    new(): SVGElementInstanceList;
}
interface CSSRuleList {
    length: number;
    item(index: number): CSSRule;
    [index: number]: CSSRule;
}
declare var CSSRuleList: {
    prototype: CSSRuleList;
    new(): CSSRuleList;
}
interface MSDataBindingRecordSetExtensions {
    recordset: any;
    namedRecordset(dataMember: string, hierarchy?: any): any;
}
interface LinkStyle {
    styleSheet: StyleSheet;
    sheet: StyleSheet;
}
interface HTMLVideoElement extends HTMLMediaElement {
    width: number;
    videoWidth: number;
    videoHeight: number;
    height: number;
    poster: string;
    msIsStereo3D: boolean;
    msStereo3DPackingMode: string;
    onMSVideoOptimalLayoutChanged: (ev: any) => any;
    onMSVideoFrameStepCompleted: (ev: any) => any;
    msStereo3DRenderMode: string;
    msIsLayoutOptimalForPlayback: boolean;
    msHorizontalMirror: boolean;
    onMSVideoFormatChanged: (ev: any) => any;
    msZoom: boolean;
    msInsertVideoEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;
    msSetVideoRectangle(left: number, top: number, right: number, bottom: number): void;
    msFrameStep(forward: boolean): void;
    getVideoPlaybackQuality(): VideoPlaybackQuality;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msneedkey", listener: (ev: MSMediaKeyNeededEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSVideoOptimalLayoutChanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "MSVideoFrameStepCompleted", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "MSVideoFormatChanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var HTMLVideoElement: {
    prototype: HTMLVideoElement;
    new(): HTMLVideoElement;
}
interface ClientRectList {
    length: number;
    item(index: number): ClientRect;
    [index: number]: ClientRect;
}
declare var ClientRectList: {
    prototype: ClientRectList;
    new(): ClientRectList;
}
interface SVGMaskElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    maskUnits: SVGAnimatedEnumeration;
    maskContentUnits: SVGAnimatedEnumeration;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGMaskElement: {
    prototype: SVGMaskElement;
    new(): SVGMaskElement;
}
interface External {
}
declare var External: {
    prototype: External;
    new(): External;
}
interface MSGestureEvent extends UIEvent {
    offsetY: number;
    translationY: number;
    velocityExpansion: number;
    velocityY: number;
    velocityAngular: number;
    translationX: number;
    velocityX: number;
    hwTimestamp: number;
    offsetX: number;
    screenX: number;
    rotation: number;
    expansion: number;
    clientY: number;
    screenY: number;
    scale: number;
    gestureObject: any;
    clientX: number;
    initGestureEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, offsetXArg: number, offsetYArg: number, translationXArg: number, translationYArg: number, scaleArg: number, expansionArg: number, rotationArg: number, velocityXArg: number, velocityYArg: number, velocityExpansionArg: number, velocityAngularArg: number, hwTimestampArg: number): void;
    MSGESTURE_FLAG_BEGIN: number;
    MSGESTURE_FLAG_END: number;
    MSGESTURE_FLAG_CANCEL: number;
    MSGESTURE_FLAG_INERTIA: number;
    MSGESTURE_FLAG_NONE: number;
}
declare var MSGestureEvent: {
    prototype: MSGestureEvent;
    new(): MSGestureEvent;
    MSGESTURE_FLAG_BEGIN: number;
    MSGESTURE_FLAG_END: number;
    MSGESTURE_FLAG_CANCEL: number;
    MSGESTURE_FLAG_INERTIA: number;
    MSGESTURE_FLAG_NONE: number;
}
interface ErrorEvent extends Event {
    colno: number;
    filename: string;
    error: any;
    lineno: number;
    message: string;
    initErrorEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, messageArg: string, filenameArg: string, linenoArg: number): void;
}
declare var ErrorEvent: {
    prototype: ErrorEvent;
    new(): ErrorEvent;
}
interface SVGFilterElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGURIReference, SVGExternalResourcesRequired {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    filterResX: SVGAnimatedInteger;
    filterUnits: SVGAnimatedEnumeration;
    primitiveUnits: SVGAnimatedEnumeration;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
    filterResY: SVGAnimatedInteger;
    setFilterRes(filterResX: number, filterResY: number): void;
}
declare var SVGFilterElement: {
    prototype: SVGFilterElement;
    new(): SVGFilterElement;
}
interface TrackEvent extends Event {
    track: any;
}
declare var TrackEvent: {
    prototype: TrackEvent;
    new(): TrackEvent;
}
interface SVGFEMergeNodeElement extends SVGElement {
    in1: SVGAnimatedString;
}
declare var SVGFEMergeNodeElement: {
    prototype: SVGFEMergeNodeElement;
    new(): SVGFEMergeNodeElement;
}
interface SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
}
declare var SVGFEFloodElement: {
    prototype: SVGFEFloodElement;
    new(): SVGFEFloodElement;
}
interface MSGesture {
    target: Element;
    addPointer(pointerId: number): void;
    stop(): void;
}
declare var MSGesture: {
    prototype: MSGesture;
    new(): MSGesture;
}
interface TextTrackCue extends EventTarget {
    onenter: (ev: Event) => any;
    track: TextTrack;
    endTime: number;
    text: string;
    pauseOnExit: boolean;
    id: string;
    startTime: number;
    onexit: (ev: Event) => any;
    getCueAsHTML(): DocumentFragment;
    addEventListener(type: "enter", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "exit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var TextTrackCue: {
    prototype: TextTrackCue;
    new(startTime: number, endTime: number, text: string): TextTrackCue;
}
interface MSStreamReader extends MSBaseReader {
    error: DOMError;
    readAsArrayBuffer(stream: MSStream, size?: number): void;
    readAsBlob(stream: MSStream, size?: number): void;
    readAsDataURL(stream: MSStream, size?: number): void;
    readAsText(stream: MSStream, encoding?: string, size?: number): void;
}
declare var MSStreamReader: {
    prototype: MSStreamReader;
    new(): MSStreamReader;
}
interface DOMTokenList {
    length: number;
    contains(token: string): boolean;
    remove(token: string): void;
    toggle(token: string): boolean;
    add(token: string): void;
    item(index: number): string;
    [index: number]: string;
    toString(): string;
}
declare var DOMTokenList: {
    prototype: DOMTokenList;
    new(): DOMTokenList;
}
interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncAElement: {
    prototype: SVGFEFuncAElement;
    new(): SVGFEFuncAElement;
}
interface SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
}
declare var SVGFETileElement: {
    prototype: SVGFETileElement;
    new(): SVGFETileElement;
}
interface SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in2: SVGAnimatedString;
    mode: SVGAnimatedEnumeration;
    in1: SVGAnimatedString;
    SVG_FEBLEND_MODE_DARKEN: number;
    SVG_FEBLEND_MODE_UNKNOWN: number;
    SVG_FEBLEND_MODE_MULTIPLY: number;
    SVG_FEBLEND_MODE_NORMAL: number;
    SVG_FEBLEND_MODE_SCREEN: number;
    SVG_FEBLEND_MODE_LIGHTEN: number;
}
declare var SVGFEBlendElement: {
    prototype: SVGFEBlendElement;
    new(): SVGFEBlendElement;
    SVG_FEBLEND_MODE_DARKEN: number;
    SVG_FEBLEND_MODE_UNKNOWN: number;
    SVG_FEBLEND_MODE_MULTIPLY: number;
    SVG_FEBLEND_MODE_NORMAL: number;
    SVG_FEBLEND_MODE_SCREEN: number;
    SVG_FEBLEND_MODE_LIGHTEN: number;
}
interface MessageChannel {
    port2: MessagePort;
    port1: MessagePort;
}
declare var MessageChannel: {
    prototype: MessageChannel;
    new(): MessageChannel;
}
interface SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
}
declare var SVGFEMergeElement: {
    prototype: SVGFEMergeElement;
    new(): SVGFEMergeElement;
}
interface TransitionEvent extends Event {
    propertyName: string;
    elapsedTime: number;
    initTransitionEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, propertyNameArg: string, elapsedTimeArg: number): void;
}
declare var TransitionEvent: {
    prototype: TransitionEvent;
    new(): TransitionEvent;
}
interface MediaQueryList {
    matches: boolean;
    media: string;
    addListener(listener: MediaQueryListListener): void;
    removeListener(listener: MediaQueryListListener): void;
}
declare var MediaQueryList: {
    prototype: MediaQueryList;
    new(): MediaQueryList;
}
interface DOMError {
    name: string;
    toString(): string;
}
declare var DOMError: {
    prototype: DOMError;
    new(): DOMError;
}
interface CloseEvent extends Event {
    wasClean: boolean;
    reason: string;
    code: number;
    initCloseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, wasCleanArg: boolean, codeArg: number, reasonArg: string): void;
}
declare var CloseEvent: {
    prototype: CloseEvent;
    new(): CloseEvent;
}
interface WebSocket extends EventTarget {
    protocol: string;
    readyState: number;
    bufferedAmount: number;
    onopen: (ev: Event) => any;
    extensions: string;
    onmessage: (ev: MessageEvent) => any;
    onclose: (ev: CloseEvent) => any;
    onerror: (ev: ErrorEvent) => any;
    binaryType: string;
    url: string;
    close(code?: number, reason?: string): void;
    send(data: any): void;
    OPEN: number;
    CLOSING: number;
    CONNECTING: number;
    CLOSED: number;
    addEventListener(type: "open", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "close", listener: (ev: CloseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var WebSocket: {
    prototype: WebSocket;
    new(url: string, protocols?: string): WebSocket;
    new(url: string, protocols?: string[]): WebSocket;
    OPEN: number;
    CLOSING: number;
    CONNECTING: number;
    CLOSED: number;
}
interface SVGFEPointLightElement extends SVGElement {
    y: SVGAnimatedNumber;
    x: SVGAnimatedNumber;
    z: SVGAnimatedNumber;
}
declare var SVGFEPointLightElement: {
    prototype: SVGFEPointLightElement;
    new(): SVGFEPointLightElement;
}
interface ProgressEvent extends Event {
    loaded: number;
    lengthComputable: boolean;
    total: number;
    initProgressEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, lengthComputableArg: boolean, loadedArg: number, totalArg: number): void;
}
declare var ProgressEvent: {
    prototype: ProgressEvent;
    new(): ProgressEvent;
}
interface IDBObjectStore {
    indexNames: DOMStringList;
    name: string;
    transaction: IDBTransaction;
    keyPath: string;
    count(key?: any): IDBRequest;
    add(value: any, key?: any): IDBRequest;
    clear(): IDBRequest;
    createIndex(name: string, keyPath: string, optionalParameters?: any): IDBIndex;
    put(value: any, key?: any): IDBRequest;
    openCursor(range?: any, direction?: string): IDBRequest;
    deleteIndex(indexName: string): void;
    index(name: string): IDBIndex;
    get(key: any): IDBRequest;
    delete(key: any): IDBRequest;
}
declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new(): IDBObjectStore;
}
interface SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    stdDeviationX: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
}
declare var SVGFEGaussianBlurElement: {
    prototype: SVGFEGaussianBlurElement;
    new(): SVGFEGaussianBlurElement;
}
interface SVGFilterPrimitiveStandardAttributes extends SVGStylable {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
    result: SVGAnimatedString;
}
interface IDBVersionChangeEvent extends Event {
    newVersion: number;
    oldVersion: number;
}
declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new(): IDBVersionChangeEvent;
}
interface IDBIndex {
    unique: boolean;
    name: string;
    keyPath: string;
    objectStore: IDBObjectStore;
    count(key?: any): IDBRequest;
    getKey(key: any): IDBRequest;
    openKeyCursor(range?: IDBKeyRange, direction?: string): IDBRequest;
    get(key: any): IDBRequest;
    openCursor(range?: IDBKeyRange, direction?: string): IDBRequest;
}
declare var IDBIndex: {
    prototype: IDBIndex;
    new(): IDBIndex;
}
interface FileList {
    length: number;
    item(index: number): File;
    [index: number]: File;
}
declare var FileList: {
    prototype: FileList;
    new(): FileList;
}
interface IDBCursor {
    source: any;
    direction: string;
    key: any;
    primaryKey: any;
    advance(count: number): void;
    delete(): IDBRequest;
    continue(key?: any): void;
    update(value: any): IDBRequest;
    PREV: string;
    PREV_NO_DUPLICATE: string;
    NEXT: string;
    NEXT_NO_DUPLICATE: string;
}
declare var IDBCursor: {
    prototype: IDBCursor;
    new(): IDBCursor;
    PREV: string;
    PREV_NO_DUPLICATE: string;
    NEXT: string;
    NEXT_NO_DUPLICATE: string;
}
interface SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    kernelUnitLengthY: SVGAnimatedNumber;
    surfaceScale: SVGAnimatedNumber;
    specularExponent: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    kernelUnitLengthX: SVGAnimatedNumber;
    specularConstant: SVGAnimatedNumber;
}
declare var SVGFESpecularLightingElement: {
    prototype: SVGFESpecularLightingElement;
    new(): SVGFESpecularLightingElement;
}
interface File extends Blob {
    lastModifiedDate: any;
    name: string;
}
declare var File: {
    prototype: File;
    new(): File;
}
interface URL {
    revokeObjectURL(url: string): void;
    createObjectURL(object: any, options?: ObjectURLOptions): string;
}
declare var URL: URL;
interface IDBCursorWithValue extends IDBCursor {
    value: any;
}
declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
}
interface XMLHttpRequestEventTarget extends EventTarget {
    onprogress: (ev: ProgressEvent) => any;
    onerror: (ev: ErrorEvent) => any;
    onload: (ev: Event) => any;
    ontimeout: (ev: Event) => any;
    onabort: (ev: UIEvent) => any;
    onloadstart: (ev: Event) => any;
    onloadend: (ev: ProgressEvent) => any;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeout", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new(): XMLHttpRequestEventTarget;
}
interface IDBEnvironment {
    msIndexedDB: IDBFactory;
    indexedDB: IDBFactory;
}
interface AudioTrackList extends EventTarget {
    length: number;
    onchange: (ev: Event) => any;
    onaddtrack: (ev: TrackEvent) => any;
    getTrackById(id: string): AudioTrack;
    item(index: number): AudioTrack;
    [index: number]: AudioTrack;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "addtrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var AudioTrackList: {
    prototype: AudioTrackList;
    new(): AudioTrackList;
}
interface MSBaseReader extends EventTarget {
    onprogress: (ev: ProgressEvent) => any;
    readyState: number;
    onabort: (ev: UIEvent) => any;
    onloadend: (ev: ProgressEvent) => any;
    onerror: (ev: ErrorEvent) => any;
    onload: (ev: Event) => any;
    onloadstart: (ev: Event) => any;
    result: any;
    abort(): void;
    LOADING: number;
    EMPTY: number;
    DONE: number;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
interface SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    operator: SVGAnimatedEnumeration;
    radiusX: SVGAnimatedNumber;
    radiusY: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    SVG_MORPHOLOGY_OPERATOR_DILATE: number;
}
declare var SVGFEMorphologyElement: {
    prototype: SVGFEMorphologyElement;
    new(): SVGFEMorphologyElement;
    SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    SVG_MORPHOLOGY_OPERATOR_DILATE: number;
}
interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncRElement: {
    prototype: SVGFEFuncRElement;
    new(): SVGFEFuncRElement;
}
interface WindowTimersExtension {
    msSetImmediate(expression: any, ...args: any[]): number;
    clearImmediate(handle: number): void;
    msClearImmediate(handle: number): void;
    setImmediate(expression: any, ...args: any[]): number;
}
interface SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in2: SVGAnimatedString;
    xChannelSelector: SVGAnimatedEnumeration;
    yChannelSelector: SVGAnimatedEnumeration;
    scale: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    SVG_CHANNEL_B: number;
    SVG_CHANNEL_R: number;
    SVG_CHANNEL_G: number;
    SVG_CHANNEL_UNKNOWN: number;
    SVG_CHANNEL_A: number;
}
declare var SVGFEDisplacementMapElement: {
    prototype: SVGFEDisplacementMapElement;
    new(): SVGFEDisplacementMapElement;
    SVG_CHANNEL_B: number;
    SVG_CHANNEL_R: number;
    SVG_CHANNEL_G: number;
    SVG_CHANNEL_UNKNOWN: number;
    SVG_CHANNEL_A: number;
}
interface AnimationEvent extends Event {
    animationName: string;
    elapsedTime: number;
    initAnimationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, animationNameArg: string, elapsedTimeArg: number): void;
}
declare var AnimationEvent: {
    prototype: AnimationEvent;
    new(): AnimationEvent;
}
interface SVGComponentTransferFunctionElement extends SVGElement {
    tableValues: SVGAnimatedNumberList;
    slope: SVGAnimatedNumber;
    type: SVGAnimatedEnumeration;
    exponent: SVGAnimatedNumber;
    amplitude: SVGAnimatedNumber;
    intercept: SVGAnimatedNumber;
    offset: SVGAnimatedNumber;
    SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
}
declare var SVGComponentTransferFunctionElement: {
    prototype: SVGComponentTransferFunctionElement;
    new(): SVGComponentTransferFunctionElement;
    SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
}
interface MSRangeCollection {
    length: number;
    item(index: number): Range;
    [index: number]: Range;
}
declare var MSRangeCollection: {
    prototype: MSRangeCollection;
    new(): MSRangeCollection;
}
interface SVGFEDistantLightElement extends SVGElement {
    azimuth: SVGAnimatedNumber;
    elevation: SVGAnimatedNumber;
}
declare var SVGFEDistantLightElement: {
    prototype: SVGFEDistantLightElement;
    new(): SVGFEDistantLightElement;
}
interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncBElement: {
    prototype: SVGFEFuncBElement;
    new(): SVGFEFuncBElement;
}
interface IDBKeyRange {
    upper: any;
    upperOpen: boolean;
    lower: any;
    lowerOpen: boolean;
}
declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new(): IDBKeyRange;
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    only(value: any): IDBKeyRange;
    lowerBound(bound: any, open?: boolean): IDBKeyRange;
    upperBound(bound: any, open?: boolean): IDBKeyRange;
}
interface WindowConsole {
    console: Console;
}
interface IDBTransaction extends EventTarget {
    oncomplete: (ev: Event) => any;
    db: IDBDatabase;
    mode: string;
    error: DOMError;
    onerror: (ev: ErrorEvent) => any;
    onabort: (ev: UIEvent) => any;
    abort(): void;
    objectStore(name: string): IDBObjectStore;
    READ_ONLY: string;
    VERSION_CHANGE: string;
    READ_WRITE: string;
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var IDBTransaction: {
    prototype: IDBTransaction;
    new(): IDBTransaction;
    READ_ONLY: string;
    VERSION_CHANGE: string;
    READ_WRITE: string;
}
interface AudioTrack {
    kind: string;
    language: string;
    id: string;
    label: string;
    enabled: boolean;
    sourceBuffer: SourceBuffer;
}
declare var AudioTrack: {
    prototype: AudioTrack;
    new(): AudioTrack;
}
interface SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    orderY: SVGAnimatedInteger;
    kernelUnitLengthY: SVGAnimatedNumber;
    orderX: SVGAnimatedInteger;
    preserveAlpha: SVGAnimatedBoolean;
    kernelMatrix: SVGAnimatedNumberList;
    edgeMode: SVGAnimatedEnumeration;
    kernelUnitLengthX: SVGAnimatedNumber;
    bias: SVGAnimatedNumber;
    targetX: SVGAnimatedInteger;
    targetY: SVGAnimatedInteger;
    divisor: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    SVG_EDGEMODE_WRAP: number;
    SVG_EDGEMODE_DUPLICATE: number;
    SVG_EDGEMODE_UNKNOWN: number;
    SVG_EDGEMODE_NONE: number;
}
declare var SVGFEConvolveMatrixElement: {
    prototype: SVGFEConvolveMatrixElement;
    new(): SVGFEConvolveMatrixElement;
    SVG_EDGEMODE_WRAP: number;
    SVG_EDGEMODE_DUPLICATE: number;
    SVG_EDGEMODE_UNKNOWN: number;
    SVG_EDGEMODE_NONE: number;
}
interface TextTrackCueList {
    length: number;
    item(index: number): TextTrackCue;
    [index: number]: TextTrackCue;
    getCueById(id: string): TextTrackCue;
}
declare var TextTrackCueList: {
    prototype: TextTrackCueList;
    new(): TextTrackCueList;
}
interface CSSKeyframesRule extends CSSRule {
    name: string;
    cssRules: CSSRuleList;
    findRule(rule: string): CSSKeyframeRule;
    deleteRule(rule: string): void;
    appendRule(rule: string): void;
}
declare var CSSKeyframesRule: {
    prototype: CSSKeyframesRule;
    new(): CSSKeyframesRule;
}
interface SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    baseFrequencyX: SVGAnimatedNumber;
    numOctaves: SVGAnimatedInteger;
    type: SVGAnimatedEnumeration;
    baseFrequencyY: SVGAnimatedNumber;
    stitchTiles: SVGAnimatedEnumeration;
    seed: SVGAnimatedNumber;
    SVG_STITCHTYPE_UNKNOWN: number;
    SVG_STITCHTYPE_NOSTITCH: number;
    SVG_TURBULENCE_TYPE_UNKNOWN: number;
    SVG_TURBULENCE_TYPE_TURBULENCE: number;
    SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    SVG_STITCHTYPE_STITCH: number;
}
declare var SVGFETurbulenceElement: {
    prototype: SVGFETurbulenceElement;
    new(): SVGFETurbulenceElement;
    SVG_STITCHTYPE_UNKNOWN: number;
    SVG_STITCHTYPE_NOSTITCH: number;
    SVG_TURBULENCE_TYPE_UNKNOWN: number;
    SVG_TURBULENCE_TYPE_TURBULENCE: number;
    SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    SVG_STITCHTYPE_STITCH: number;
}
interface TextTrackList extends EventTarget {
    length: number;
    onaddtrack: (ev: TrackEvent) => any;
    item(index: number): TextTrack;
    [index: number]: TextTrack;
    addEventListener(type: "addtrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var TextTrackList: {
    prototype: TextTrackList;
    new(): TextTrackList;
}
interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncGElement: {
    prototype: SVGFEFuncGElement;
    new(): SVGFEFuncGElement;
}
interface SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    type: SVGAnimatedEnumeration;
    values: SVGAnimatedNumberList;
    SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
}
declare var SVGFEColorMatrixElement: {
    prototype: SVGFEColorMatrixElement;
    new(): SVGFEColorMatrixElement;
    SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
}
interface SVGFESpotLightElement extends SVGElement {
    pointsAtY: SVGAnimatedNumber;
    y: SVGAnimatedNumber;
    limitingConeAngle: SVGAnimatedNumber;
    specularExponent: SVGAnimatedNumber;
    x: SVGAnimatedNumber;
    pointsAtZ: SVGAnimatedNumber;
    z: SVGAnimatedNumber;
    pointsAtX: SVGAnimatedNumber;
}
declare var SVGFESpotLightElement: {
    prototype: SVGFESpotLightElement;
    new(): SVGFESpotLightElement;
}
interface WindowBase64 {
    btoa(rawString: string): string;
    atob(encodedString: string): string;
}
interface IDBDatabase extends EventTarget {
    version: string;
    name: string;
    objectStoreNames: DOMStringList;
    onerror: (ev: ErrorEvent) => any;
    onabort: (ev: UIEvent) => any;
    createObjectStore(name: string, optionalParameters?: any): IDBObjectStore;
    close(): void;
    transaction(storeNames: any, mode?: string): IDBTransaction;
    deleteObjectStore(name: string): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var IDBDatabase: {
    prototype: IDBDatabase;
    new(): IDBDatabase;
}
interface DOMStringList {
    length: number;
    contains(str: string): boolean;
    item(index: number): string;
    [index: number]: string;
}
declare var DOMStringList: {
    prototype: DOMStringList;
    new(): DOMStringList;
}
interface IDBOpenDBRequest extends IDBRequest {
    onupgradeneeded: (ev: IDBVersionChangeEvent) => any;
    onblocked: (ev: Event) => any;
    addEventListener(type: "success", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "upgradeneeded", listener: (ev: IDBVersionChangeEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blocked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
}
interface HTMLProgressElement extends HTMLElement {
    value: number;
    max: number;
    position: number;
    form: HTMLFormElement;
}
declare var HTMLProgressElement: {
    prototype: HTMLProgressElement;
    new(): HTMLProgressElement;
}
interface MSLaunchUriCallback {
    (): void;
}
interface SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    dy: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    dx: SVGAnimatedNumber;
}
declare var SVGFEOffsetElement: {
    prototype: SVGFEOffsetElement;
    new(): SVGFEOffsetElement;
}
interface MSUnsafeFunctionCallback {
    (): any;
}
interface TextTrack extends EventTarget {
    language: string;
    mode: any;
    readyState: number;
    activeCues: TextTrackCueList;
    cues: TextTrackCueList;
    oncuechange: (ev: Event) => any;
    kind: string;
    onload: (ev: Event) => any;
    onerror: (ev: ErrorEvent) => any;
    label: string;
    addCue(cue: TextTrackCue): void;
    removeCue(cue: TextTrackCue): void;
    ERROR: number;
    SHOWING: number;
    LOADING: number;
    LOADED: number;
    NONE: number;
    HIDDEN: number;
    DISABLED: number;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var TextTrack: {
    prototype: TextTrack;
    new(): TextTrack;
    ERROR: number;
    SHOWING: number;
    LOADING: number;
    LOADED: number;
    NONE: number;
    HIDDEN: number;
    DISABLED: number;
}
interface MediaQueryListListener {
    (mql: MediaQueryList): void;
}
interface IDBRequest extends EventTarget {
    source: any;
    onsuccess: (ev: Event) => any;
    error: DOMError;
    transaction: IDBTransaction;
    onerror: (ev: ErrorEvent) => any;
    readyState: string;
    result: any;
    addEventListener(type: "success", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var IDBRequest: {
    prototype: IDBRequest;
    new(): IDBRequest;
}
interface MessagePort extends EventTarget {
    onmessage: (ev: MessageEvent) => any;
    close(): void;
    postMessage(message?: any, ports?: any): void;
    start(): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var MessagePort: {
    prototype: MessagePort;
    new(): MessagePort;
}
interface FileReader extends MSBaseReader {
    error: DOMError;
    readAsArrayBuffer(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, encoding?: string): void;
}
declare var FileReader: {
    prototype: FileReader;
    new(): FileReader;
}
interface ApplicationCache extends EventTarget {
    status: number;
    ondownloading: (ev: Event) => any;
    onprogress: (ev: ProgressEvent) => any;
    onupdateready: (ev: Event) => any;
    oncached: (ev: Event) => any;
    onobsolete: (ev: Event) => any;
    onerror: (ev: ErrorEvent) => any;
    onchecking: (ev: Event) => any;
    onnoupdate: (ev: Event) => any;
    swapCache(): void;
    abort(): void;
    update(): void;
    CHECKING: number;
    UNCACHED: number;
    UPDATEREADY: number;
    DOWNLOADING: number;
    IDLE: number;
    OBSOLETE: number;
    addEventListener(type: "downloading", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "updateready", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cached", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "obsolete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "checking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "noupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var ApplicationCache: {
    prototype: ApplicationCache;
    new(): ApplicationCache;
    CHECKING: number;
    UNCACHED: number;
    UPDATEREADY: number;
    DOWNLOADING: number;
    IDLE: number;
    OBSOLETE: number;
}
interface FrameRequestCallback {
    (time: number): void;
}
interface PopStateEvent extends Event {
    state: any;
    initPopStateEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, stateArg: any): void;
}
declare var PopStateEvent: {
    prototype: PopStateEvent;
    new(): PopStateEvent;
}
interface CSSKeyframeRule extends CSSRule {
    keyText: string;
    style: CSSStyleDeclaration;
}
declare var CSSKeyframeRule: {
    prototype: CSSKeyframeRule;
    new(): CSSKeyframeRule;
}
interface MSFileSaver {
    msSaveBlob(blob: any, defaultName?: string): boolean;
    msSaveOrOpenBlob(blob: any, defaultName?: string): boolean;
}
interface MSStream {
    type: string;
    msDetachStream(): any;
    msClose(): void;
}
declare var MSStream: {
    prototype: MSStream;
    new(): MSStream;
}
interface MSBlobBuilder {
    append(data: any, endings?: string): void;
    getBlob(contentType?: string): Blob;
}
declare var MSBlobBuilder: {
    prototype: MSBlobBuilder;
    new(): MSBlobBuilder;
}
interface DOMSettableTokenList extends DOMTokenList {
    value: string;
}
declare var DOMSettableTokenList: {
    prototype: DOMSettableTokenList;
    new(): DOMSettableTokenList;
}
interface IDBFactory {
    open(name: string, version?: number): IDBOpenDBRequest;
    cmp(first: any, second: any): number;
    deleteDatabase(name: string): IDBOpenDBRequest;
}
declare var IDBFactory: {
    prototype: IDBFactory;
    new(): IDBFactory;
}
interface MSPointerEvent extends MouseEvent {
    width: number;
    rotation: number;
    pressure: number;
    pointerType: any;
    isPrimary: boolean;
    tiltY: number;
    height: number;
    intermediatePoints: any;
    currentPoint: any;
    tiltX: number;
    hwTimestamp: number;
    pointerId: number;
    initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;
    getCurrentPoint(element: Element): void;
    getIntermediatePoints(element: Element): void;
    MSPOINTER_TYPE_PEN: number;
    MSPOINTER_TYPE_MOUSE: number;
    MSPOINTER_TYPE_TOUCH: number;
}
declare var MSPointerEvent: {
    prototype: MSPointerEvent;
    new(): MSPointerEvent;
    MSPOINTER_TYPE_PEN: number;
    MSPOINTER_TYPE_MOUSE: number;
    MSPOINTER_TYPE_TOUCH: number;
}
interface MSManipulationEvent extends UIEvent {
    lastState: number;
    currentState: number;
    initMSManipulationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, lastState: number, currentState: number): void;
    MS_MANIPULATION_STATE_STOPPED: number;
    MS_MANIPULATION_STATE_ACTIVE: number;
    MS_MANIPULATION_STATE_INERTIA: number;
    MS_MANIPULATION_STATE_SELECTING: number;
    MS_MANIPULATION_STATE_COMMITTED: number;
    MS_MANIPULATION_STATE_PRESELECT: number;
    MS_MANIPULATION_STATE_DRAGGING: number;
    MS_MANIPULATION_STATE_CANCELLED: number;
}
declare var MSManipulationEvent: {
    prototype: MSManipulationEvent;
    new(): MSManipulationEvent;
    MS_MANIPULATION_STATE_STOPPED: number;
    MS_MANIPULATION_STATE_ACTIVE: number;
    MS_MANIPULATION_STATE_INERTIA: number;
    MS_MANIPULATION_STATE_SELECTING: number;
    MS_MANIPULATION_STATE_COMMITTED: number;
    MS_MANIPULATION_STATE_PRESELECT: number;
    MS_MANIPULATION_STATE_DRAGGING: number;
    MS_MANIPULATION_STATE_CANCELLED: number;
}
interface FormData {
    append(name: any, value: any, blobName?: string): void;
}
declare var FormData: {
    prototype: FormData;
    new(): FormData;
}
interface HTMLDataListElement extends HTMLElement {
    options: HTMLCollection;
}
declare var HTMLDataListElement: {
    prototype: HTMLDataListElement;
    new(): HTMLDataListElement;
}
interface SVGFEImageElement extends SVGElement, SVGLangSpace, SVGFilterPrimitiveStandardAttributes, SVGURIReference, SVGExternalResourcesRequired {
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}
declare var SVGFEImageElement: {
    prototype: SVGFEImageElement;
    new(): SVGFEImageElement;
}
interface AbstractWorker extends EventTarget {
    onerror: (ev: ErrorEvent) => any;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    operator: SVGAnimatedEnumeration;
    in2: SVGAnimatedString;
    k2: SVGAnimatedNumber;
    k1: SVGAnimatedNumber;
    k3: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    k4: SVGAnimatedNumber;
    SVG_FECOMPOSITE_OPERATOR_OUT: number;
    SVG_FECOMPOSITE_OPERATOR_OVER: number;
    SVG_FECOMPOSITE_OPERATOR_XOR: number;
    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    SVG_FECOMPOSITE_OPERATOR_IN: number;
    SVG_FECOMPOSITE_OPERATOR_ATOP: number;
}
declare var SVGFECompositeElement: {
    prototype: SVGFECompositeElement;
    new(): SVGFECompositeElement;
    SVG_FECOMPOSITE_OPERATOR_OUT: number;
    SVG_FECOMPOSITE_OPERATOR_OVER: number;
    SVG_FECOMPOSITE_OPERATOR_XOR: number;
    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    SVG_FECOMPOSITE_OPERATOR_IN: number;
    SVG_FECOMPOSITE_OPERATOR_ATOP: number;
}
interface ValidityState {
    customError: boolean;
    valueMissing: boolean;
    stepMismatch: boolean;
    rangeUnderflow: boolean;
    rangeOverflow: boolean;
    typeMismatch: boolean;
    patternMismatch: boolean;
    tooLong: boolean;
    valid: boolean;
}
declare var ValidityState: {
    prototype: ValidityState;
    new(): ValidityState;
}
interface HTMLTrackElement extends HTMLElement {
    kind: string;
    src: string;
    srclang: string;
    track: TextTrack;
    label: string;
    default: boolean;
    readyState: number;
    ERROR: number;
    LOADING: number;
    LOADED: number;
    NONE: number;
}
declare var HTMLTrackElement: {
    prototype: HTMLTrackElement;
    new(): HTMLTrackElement;
    ERROR: number;
    LOADING: number;
    LOADED: number;
    NONE: number;
}
interface MSApp {
    createFileFromStorageFile(storageFile: any): File;
    createBlobFromRandomAccessStream(type: string, seeker: any): Blob;
    createStreamFromInputStream(type: string, inputStream: any): MSStream;
    terminateApp(exceptionObject: any): void;
    createDataPackage(object: any): any;
    execUnsafeLocalFunction(unsafeFunction: MSUnsafeFunctionCallback): any;
    getHtmlPrintDocumentSource(htmlDoc: any): any;
    addPublicLocalApplicationUri(uri: string): void;
    createDataPackageFromSelection(): any;
    getViewOpener(): MSAppView;
    suppressSubdownloadCredentialPrompts(suppress: boolean): void;
    execAsyncAtPriority(asynchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): void;
    isTaskScheduledAtPriorityOrHigher(priority: string): boolean;
    execAtPriority(synchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): any;
    createNewView(uri: string): MSAppView;
    getCurrentPriority(): string;
    NORMAL: string;
    HIGH: string;
    IDLE: string;
    CURRENT: string;
}
declare var MSApp: MSApp;
interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
}
declare var SVGFEComponentTransferElement: {
    prototype: SVGFEComponentTransferElement;
    new(): SVGFEComponentTransferElement;
}
interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    kernelUnitLengthY: SVGAnimatedNumber;
    surfaceScale: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    kernelUnitLengthX: SVGAnimatedNumber;
    diffuseConstant: SVGAnimatedNumber;
}
declare var SVGFEDiffuseLightingElement: {
    prototype: SVGFEDiffuseLightingElement;
    new(): SVGFEDiffuseLightingElement;
}
interface MSCSSMatrix {
    m24: number;
    m34: number;
    a: number;
    d: number;
    m32: number;
    m41: number;
    m11: number;
    f: number;
    e: number;
    m23: number;
    m14: number;
    m33: number;
    m22: number;
    m21: number;
    c: number;
    m12: number;
    b: number;
    m42: number;
    m31: number;
    m43: number;
    m13: number;
    m44: number;
    multiply(secondMatrix: MSCSSMatrix): MSCSSMatrix;
    skewY(angle: number): MSCSSMatrix;
    setMatrixValue(value: string): void;
    inverse(): MSCSSMatrix;
    rotateAxisAngle(x: number, y: number, z: number, angle: number): MSCSSMatrix;
    toString(): string;
    rotate(angleX: number, angleY?: number, angleZ?: number): MSCSSMatrix;
    translate(x: number, y: number, z?: number): MSCSSMatrix;
    scale(scaleX: number, scaleY?: number, scaleZ?: number): MSCSSMatrix;
    skewX(angle: number): MSCSSMatrix;
}
declare var MSCSSMatrix: {
    prototype: MSCSSMatrix;
    new(text?: string): MSCSSMatrix;
}
interface Worker extends AbstractWorker {
    onmessage: (ev: MessageEvent) => any;
    postMessage(message: any, ports?: any): void;
    terminate(): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var Worker: {
    prototype: Worker;
    new(stringUrl: string): Worker;
}
interface MSExecAtPriorityFunctionCallback {
    (...args: any[]): any;
}
interface MSGraphicsTrust {
    status: string;
    constrictionActive: boolean;
}
declare var MSGraphicsTrust: {
    prototype: MSGraphicsTrust;
    new(): MSGraphicsTrust;
}
interface SubtleCrypto {
    unwrapKey(wrappedKey: ArrayBufferView, keyAlgorithm: any, keyEncryptionKey: Key, extractable?: boolean, keyUsages?: string[]): KeyOperation;
    encrypt(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;
    importKey(format: string, keyData: ArrayBufferView, algorithm: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;
    wrapKey(key: Key, keyEncryptionKey: Key, keyWrappingAlgorithm: any): KeyOperation;
    verify(algorithm: any, key: Key, signature: ArrayBufferView, buffer?: ArrayBufferView): CryptoOperation;
    deriveKey(algorithm: any, baseKey: Key, derivedKeyType: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;
    digest(algorithm: any, buffer?: ArrayBufferView): CryptoOperation;
    exportKey(format: string, key: Key): KeyOperation;
    generateKey(algorithm: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;
    sign(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;
    decrypt(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;
}
declare var SubtleCrypto: {
    prototype: SubtleCrypto;
    new(): SubtleCrypto;
}
interface Crypto extends RandomSource {
    subtle: SubtleCrypto;
}
declare var Crypto: {
    prototype: Crypto;
    new(): Crypto;
}
interface VideoPlaybackQuality {
    totalFrameDelay: number;
    creationTime: number;
    totalVideoFrames: number;
    droppedVideoFrames: number;
}
declare var VideoPlaybackQuality: {
    prototype: VideoPlaybackQuality;
    new(): VideoPlaybackQuality;
}
interface GlobalEventHandlers {
    onpointerenter: (ev: PointerEvent) => any;
    onpointerout: (ev: PointerEvent) => any;
    onpointerdown: (ev: PointerEvent) => any;
    onpointerup: (ev: PointerEvent) => any;
    onpointercancel: (ev: PointerEvent) => any;
    onpointerover: (ev: PointerEvent) => any;
    onpointermove: (ev: PointerEvent) => any;
    onpointerleave: (ev: PointerEvent) => any;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
interface Key {
    algorithm: Algorithm;
    type: string;
    extractable: boolean;
    keyUsage: string[];
}
declare var Key: {
    prototype: Key;
    new(): Key;
}
interface DeviceAcceleration {
    y: number;
    x: number;
    z: number;
}
declare var DeviceAcceleration: {
    prototype: DeviceAcceleration;
    new(): DeviceAcceleration;
}
interface HTMLAllCollection extends HTMLCollection {
    namedItem(name: string): Element;
}
declare var HTMLAllCollection: {
    prototype: HTMLAllCollection;
    new(): HTMLAllCollection;
}
interface AesGcmEncryptResult {
    ciphertext: ArrayBuffer;
    tag: ArrayBuffer;
}
declare var AesGcmEncryptResult: {
    prototype: AesGcmEncryptResult;
    new(): AesGcmEncryptResult;
}
interface NavigationCompletedEvent extends NavigationEvent {
    webErrorStatus: number;
    isSuccess: boolean;
}
declare var NavigationCompletedEvent: {
    prototype: NavigationCompletedEvent;
    new(): NavigationCompletedEvent;
}
interface MutationRecord {
    oldValue: string;
    previousSibling: Node;
    addedNodes: NodeList;
    attributeName: string;
    removedNodes: NodeList;
    target: Node;
    nextSibling: Node;
    attributeNamespace: string;
    type: string;
}
declare var MutationRecord: {
    prototype: MutationRecord;
    new(): MutationRecord;
}
interface MimeTypeArray {
    length: number;
    item(index: number): Plugin;
    [index: number]: Plugin;
    namedItem(type: string): Plugin;
}
declare var MimeTypeArray: {
    prototype: MimeTypeArray;
    new(): MimeTypeArray;
}
interface KeyOperation extends EventTarget {
    oncomplete: (ev: Event) => any;
    onerror: (ev: ErrorEvent) => any;
    result: any;
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var KeyOperation: {
    prototype: KeyOperation;
    new(): KeyOperation;
}
interface DOMStringMap {
}
declare var DOMStringMap: {
    prototype: DOMStringMap;
    new(): DOMStringMap;
}
interface DeviceOrientationEvent extends Event {
    gamma: number;
    alpha: number;
    absolute: boolean;
    beta: number;
    initDeviceOrientationEvent(type: string, bubbles: boolean, cancelable: boolean, alpha: number, beta: number, gamma: number, absolute: boolean): void;
}
declare var DeviceOrientationEvent: {
    prototype: DeviceOrientationEvent;
    new(): DeviceOrientationEvent;
}
interface MSMediaKeys {
    keySystem: string;
    createSession(type: string, initData: Uint8Array, cdmData?: Uint8Array): MSMediaKeySession;
}
declare var MSMediaKeys: {
    prototype: MSMediaKeys;
    new(keySystem: string): MSMediaKeys;
    isTypeSupported(keySystem: string, type?: string): boolean;
}
interface MSMediaKeyMessageEvent extends Event {
    destinationURL: string;
    message: Uint8Array;
}
declare var MSMediaKeyMessageEvent: {
    prototype: MSMediaKeyMessageEvent;
    new(): MSMediaKeyMessageEvent;
}
interface MSHTMLWebViewElement extends HTMLElement {
    documentTitle: string;
    width: number;
    src: string;
    canGoForward: boolean;
    height: number;
    canGoBack: boolean;
    navigateWithHttpRequestMessage(requestMessage: any): void;
    goBack(): void;
    navigate(uri: string): void;
    stop(): void;
    navigateToString(contents: string): void;
    captureSelectedContentToDataPackageAsync(): MSWebViewAsyncOperation;
    capturePreviewToBlobAsync(): MSWebViewAsyncOperation;
    refresh(): void;
    goForward(): void;
    navigateToLocalStreamUri(source: string, streamResolver: any): void;
    invokeScriptAsync(scriptName: string, ...args: any[]): MSWebViewAsyncOperation;
    buildLocalStreamUri(contentIdentifier: string, relativePath: string): string;
}
declare var MSHTMLWebViewElement: {
    prototype: MSHTMLWebViewElement;
    new(): MSHTMLWebViewElement;
}
interface NavigationEvent extends Event {
    uri: string;
}
declare var NavigationEvent: {
    prototype: NavigationEvent;
    new(): NavigationEvent;
}
interface RandomSource {
    getRandomValues(array: ArrayBufferView): ArrayBufferView;
}
interface SourceBuffer extends EventTarget {
    updating: boolean;
    appendWindowStart: number;
    appendWindowEnd: number;
    buffered: TimeRanges;
    timestampOffset: number;
    audioTracks: AudioTrackList;
    appendBuffer(data: ArrayBuffer): void;
    remove(start: number, end: number): void;
    abort(): void;
    appendStream(stream: MSStream, maxSize?: number): void;
}
declare var SourceBuffer: {
    prototype: SourceBuffer;
    new(): SourceBuffer;
}
interface MSInputMethodContext extends EventTarget {
    oncandidatewindowshow: (ev: any) => any;
    target: HTMLElement;
    compositionStartOffset: number;
    oncandidatewindowhide: (ev: any) => any;
    oncandidatewindowupdate: (ev: any) => any;
    compositionEndOffset: number;
    getCompositionAlternatives(): string[];
    getCandidateWindowClientRect(): ClientRect;
    hasComposition(): boolean;
    isCandidateWindowVisible(): boolean;
    addEventListener(type: "candidatewindowshow", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "candidatewindowhide", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "candidatewindowupdate", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var MSInputMethodContext: {
    prototype: MSInputMethodContext;
    new(): MSInputMethodContext;
}
interface DeviceRotationRate {
    gamma: number;
    alpha: number;
    beta: number;
}
declare var DeviceRotationRate: {
    prototype: DeviceRotationRate;
    new(): DeviceRotationRate;
}
interface PluginArray {
    length: number;
    refresh(reload?: boolean): void;
    item(index: number): Plugin;
    [index: number]: Plugin;
    namedItem(name: string): Plugin;
}
declare var PluginArray: {
    prototype: PluginArray;
    new(): PluginArray;
}
interface MSMediaKeyError {
    systemCode: number;
    code: number;
    MS_MEDIA_KEYERR_SERVICE: number;
    MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    MS_MEDIA_KEYERR_OUTPUT: number;
    MS_MEDIA_KEYERR_DOMAIN: number;
    MS_MEDIA_KEYERR_UNKNOWN: number;
    MS_MEDIA_KEYERR_CLIENT: number;
}
declare var MSMediaKeyError: {
    prototype: MSMediaKeyError;
    new(): MSMediaKeyError;
    MS_MEDIA_KEYERR_SERVICE: number;
    MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    MS_MEDIA_KEYERR_OUTPUT: number;
    MS_MEDIA_KEYERR_DOMAIN: number;
    MS_MEDIA_KEYERR_UNKNOWN: number;
    MS_MEDIA_KEYERR_CLIENT: number;
}
interface Plugin {
    length: number;
    filename: string;
    version: string;
    name: string;
    description: string;
    item(index: number): MimeType;
    [index: number]: MimeType;
    namedItem(type: string): MimeType;
}
declare var Plugin: {
    prototype: Plugin;
    new(): Plugin;
}
interface MediaSource extends EventTarget {
    sourceBuffers: SourceBufferList;
    duration: number;
    readyState: string;
    activeSourceBuffers: SourceBufferList;
    addSourceBuffer(type: string): SourceBuffer;
    endOfStream(error?: string): void;
    removeSourceBuffer(sourceBuffer: SourceBuffer): void;
}
declare var MediaSource: {
    prototype: MediaSource;
    new(): MediaSource;
    isTypeSupported(type: string): boolean;
}
interface SourceBufferList extends EventTarget {
    length: number;
    item(index: number): SourceBuffer;
    [index: number]: SourceBuffer;
}
declare var SourceBufferList: {
    prototype: SourceBufferList;
    new(): SourceBufferList;
}
interface XMLDocument extends Document {
}
declare var XMLDocument: {
    prototype: XMLDocument;
    new(): XMLDocument;
}
interface DeviceMotionEvent extends Event {
    rotationRate: DeviceRotationRate;
    acceleration: DeviceAcceleration;
    interval: number;
    accelerationIncludingGravity: DeviceAcceleration;
    initDeviceMotionEvent(type: string, bubbles: boolean, cancelable: boolean, acceleration: DeviceAccelerationDict, accelerationIncludingGravity: DeviceAccelerationDict, rotationRate: DeviceRotationRateDict, interval: number): void;
}
declare var DeviceMotionEvent: {
    prototype: DeviceMotionEvent;
    new(): DeviceMotionEvent;
}
interface MimeType {
    enabledPlugin: Plugin;
    suffixes: string;
    type: string;
    description: string;
}
declare var MimeType: {
    prototype: MimeType;
    new(): MimeType;
}
interface PointerEvent extends MouseEvent {
    width: number;
    rotation: number;
    pressure: number;
    pointerType: any;
    isPrimary: boolean;
    tiltY: number;
    height: number;
    intermediatePoints: any;
    currentPoint: any;
    tiltX: number;
    hwTimestamp: number;
    pointerId: number;
    initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;
    getCurrentPoint(element: Element): void;
    getIntermediatePoints(element: Element): void;
}
declare var PointerEvent: {
    prototype: PointerEvent;
    new(): PointerEvent;
}
interface MSDocumentExtensions {
    captureEvents(): void;
    releaseEvents(): void;
}
interface MutationObserver {
    observe(target: Node, options: MutationObserverInit): void;
    takeRecords(): MutationRecord[];
    disconnect(): void;
}
declare var MutationObserver: {
    prototype: MutationObserver;
    new (callback: (arr: MutationRecord[], observer: MutationObserver)=>any): MutationObserver;
}
interface MSWebViewAsyncOperation extends EventTarget {
    target: MSHTMLWebViewElement;
    oncomplete: (ev: Event) => any;
    error: DOMError;
    onerror: (ev: ErrorEvent) => any;
    readyState: number;
    type: number;
    result: any;
    start(): void;
    ERROR: number;
    TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
    TYPE_INVOKE_SCRIPT: number;
    COMPLETED: number;
    TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
    STARTED: number;
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var MSWebViewAsyncOperation: {
    prototype: MSWebViewAsyncOperation;
    new(): MSWebViewAsyncOperation;
    ERROR: number;
    TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
    TYPE_INVOKE_SCRIPT: number;
    COMPLETED: number;
    TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
    STARTED: number;
}
interface ScriptNotifyEvent extends Event {
    value: string;
    callingUri: string;
}
declare var ScriptNotifyEvent: {
    prototype: ScriptNotifyEvent;
    new(): ScriptNotifyEvent;
}
interface PerformanceNavigationTiming extends PerformanceEntry {
    redirectStart: number;
    domainLookupEnd: number;
    responseStart: number;
    domComplete: number;
    domainLookupStart: number;
    loadEventStart: number;
    unloadEventEnd: number;
    fetchStart: number;
    requestStart: number;
    domInteractive: number;
    navigationStart: number;
    connectEnd: number;
    loadEventEnd: number;
    connectStart: number;
    responseEnd: number;
    domLoading: number;
    redirectEnd: number;
    redirectCount: number;
    unloadEventStart: number;
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    type: string;
}
declare var PerformanceNavigationTiming: {
    prototype: PerformanceNavigationTiming;
    new(): PerformanceNavigationTiming;
}
interface MSMediaKeyNeededEvent extends Event {
    initData: Uint8Array;
}
declare var MSMediaKeyNeededEvent: {
    prototype: MSMediaKeyNeededEvent;
    new(): MSMediaKeyNeededEvent;
}
interface LongRunningScriptDetectedEvent extends Event {
    stopPageScriptExecution: boolean;
    executionTime: number;
}
declare var LongRunningScriptDetectedEvent: {
    prototype: LongRunningScriptDetectedEvent;
    new(): LongRunningScriptDetectedEvent;
}
interface MSAppView {
    viewId: number;
    close(): void;
    postMessage(message: any, targetOrigin: string, ports?: any): void;
}
declare var MSAppView: {
    prototype: MSAppView;
    new(): MSAppView;
}
interface PerfWidgetExternal {
    maxCpuSpeed: number;
    independentRenderingEnabled: boolean;
    irDisablingContentString: string;
    irStatusAvailable: boolean;
    performanceCounter: number;
    averagePaintTime: number;
    activeNetworkRequestCount: number;
    paintRequestsPerSecond: number;
    extraInformationEnabled: boolean;
    performanceCounterFrequency: number;
    averageFrameTime: number;
    repositionWindow(x: number, y: number): void;
    getRecentMemoryUsage(last: number): any;
    getMemoryUsage(): number;
    resizeWindow(width: number, height: number): void;
    getProcessCpuUsage(): number;
    removeEventListener(eventType: string, callback: (ev: any) => any): void;
    getRecentCpuUsage(last: number): any;
    addEventListener(eventType: string, callback: (ev: any) => any): void;
    getRecentFrames(last: number): any;
    getRecentPaintRequests(last: number): any;
}
declare var PerfWidgetExternal: {
    prototype: PerfWidgetExternal;
    new(): PerfWidgetExternal;
}
interface PageTransitionEvent extends Event {
    persisted: boolean;
}
declare var PageTransitionEvent: {
    prototype: PageTransitionEvent;
    new(): PageTransitionEvent;
}
interface MutationCallback {
    (mutations: MutationRecord[], observer: MutationObserver): void;
}
interface HTMLDocument extends Document {
}
declare var HTMLDocument: {
    prototype: HTMLDocument;
    new(): HTMLDocument;
}
interface KeyPair {
    privateKey: Key;
    publicKey: Key;
}
declare var KeyPair: {
    prototype: KeyPair;
    new(): KeyPair;
}
interface MSMediaKeySession extends EventTarget {
    sessionId: string;
    error: MSMediaKeyError;
    keySystem: string;
    close(): void;
    update(key: Uint8Array): void;
}
declare var MSMediaKeySession: {
    prototype: MSMediaKeySession;
    new(): MSMediaKeySession;
}
interface UnviewableContentIdentifiedEvent extends NavigationEvent {
    referrer: string;
}
declare var UnviewableContentIdentifiedEvent: {
    prototype: UnviewableContentIdentifiedEvent;
    new(): UnviewableContentIdentifiedEvent;
}
interface CryptoOperation extends EventTarget {
    algorithm: Algorithm;
    oncomplete: (ev: Event) => any;
    onerror: (ev: ErrorEvent) => any;
    onprogress: (ev: ProgressEvent) => any;
    onabort: (ev: UIEvent) => any;
    key: Key;
    result: any;
    abort(): void;
    finish(): void;
    process(buffer: ArrayBufferView): void;
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var CryptoOperation: {
    prototype: CryptoOperation;
    new(): CryptoOperation;
}
interface WebGLTexture extends WebGLObject {
}
declare var WebGLTexture: {
    prototype: WebGLTexture;
    new(): WebGLTexture;
}
interface OES_texture_float {
}
declare var OES_texture_float: {
    prototype: OES_texture_float;
    new(): OES_texture_float;
}
interface WebGLContextEvent extends Event {
    statusMessage: string;
}
declare var WebGLContextEvent: {
    prototype: WebGLContextEvent;
    new(): WebGLContextEvent;
}
interface WebGLRenderbuffer extends WebGLObject {
}
declare var WebGLRenderbuffer: {
    prototype: WebGLRenderbuffer;
    new(): WebGLRenderbuffer;
}
interface WebGLUniformLocation {
}
declare var WebGLUniformLocation: {
    prototype: WebGLUniformLocation;
    new(): WebGLUniformLocation;
}
interface WebGLActiveInfo {
    name: string;
    type: number;
    size: number;
}
declare var WebGLActiveInfo: {
    prototype: WebGLActiveInfo;
    new(): WebGLActiveInfo;
}
interface WEBGL_compressed_texture_s3tc {
    COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
    COMPRESSED_RGB_S3TC_DXT1_EXT: number;
}
declare var WEBGL_compressed_texture_s3tc: {
    prototype: WEBGL_compressed_texture_s3tc;
    new(): WEBGL_compressed_texture_s3tc;
    COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
    COMPRESSED_RGB_S3TC_DXT1_EXT: number;
}
interface WebGLRenderingContext {
    drawingBufferWidth: number;
    drawingBufferHeight: number;
    canvas: HTMLCanvasElement;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;
    bindTexture(target: number, texture: WebGLTexture): void;
    bufferData(target: number, data: ArrayBufferView, usage: number): void;
    bufferData(target: number, data: ArrayBuffer, usage: number): void;
    bufferData(target: number, size: number, usage: number): void;
    depthMask(flag: boolean): void;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    vertexAttrib3fv(indx: number, values: number[]): void;
    vertexAttrib3fv(indx: number, values: Float32Array): void;
    linkProgram(program: WebGLProgram): void;
    getSupportedExtensions(): string[];
    bufferSubData(target: number, offset: number, data: ArrayBuffer): void;
    bufferSubData(target: number, offset: number, data: ArrayBufferView): void;
    vertexAttribPointer(indx: number, size: number, type: number, normalized: boolean, stride: number, offset: number): void;
    polygonOffset(factor: number, units: number): void;
    blendColor(red: number, green: number, blue: number, alpha: number): void;
    createTexture(): WebGLTexture;
    hint(target: number, mode: number): void;
    getVertexAttrib(index: number, pname: number): any;
    enableVertexAttribArray(index: number): void;
    depthRange(zNear: number, zFar: number): void;
    cullFace(mode: number): void;
    createFramebuffer(): WebGLFramebuffer;
    uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;
    uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;
    framebufferTexture2D(target: number, attachment: number, textarget: number, texture: WebGLTexture, level: number): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer): void;
    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
    compressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, data: ArrayBufferView): void;
    uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;
    uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;
    getExtension(name: string): any;
    createProgram(): WebGLProgram;
    deleteShader(shader: WebGLShader): void;
    getAttachedShaders(program: WebGLProgram): WebGLShader[];
    enable(cap: number): void;
    blendEquation(mode: number): void;
    texImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: ArrayBufferView): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, image: HTMLImageElement): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, canvas: HTMLCanvasElement): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, video: HTMLVideoElement): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, pixels: ImageData): void;
    createBuffer(): WebGLBuffer;
    deleteTexture(texture: WebGLTexture): void;
    useProgram(program: WebGLProgram): void;
    vertexAttrib2fv(indx: number, values: number[]): void;
    vertexAttrib2fv(indx: number, values: Float32Array): void;
    checkFramebufferStatus(target: number): number;
    frontFace(mode: number): void;
    getBufferParameter(target: number, pname: number): any;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, image: HTMLImageElement): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, canvas: HTMLCanvasElement): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, video: HTMLVideoElement): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, pixels: ImageData): void;
    copyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number): void;
    getVertexAttribOffset(index: number, pname: number): number;
    disableVertexAttribArray(index: number): void;
    blendFunc(sfactor: number, dfactor: number): void;
    drawElements(mode: number, count: number, type: number, offset: number): void;
    isFramebuffer(framebuffer: WebGLFramebuffer): boolean;
    uniform3iv(location: WebGLUniformLocation, v: number[]): void;
    uniform3iv(location: WebGLUniformLocation, v: Int32Array): void;
    lineWidth(width: number): void;
    getShaderInfoLog(shader: WebGLShader): string;
    getTexParameter(target: number, pname: number): any;
    getParameter(pname: number): any;
    getShaderPrecisionFormat(shadertype: number, precisiontype: number): WebGLShaderPrecisionFormat;
    getContextAttributes(): WebGLContextAttributes;
    vertexAttrib1f(indx: number, x: number): void;
    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer): void;
    compressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, data: ArrayBufferView): void;
    isContextLost(): boolean;
    uniform1iv(location: WebGLUniformLocation, v: number[]): void;
    uniform1iv(location: WebGLUniformLocation, v: Int32Array): void;
    getRenderbufferParameter(target: number, pname: number): any;
    uniform2fv(location: WebGLUniformLocation, v: number[]): void;
    uniform2fv(location: WebGLUniformLocation, v: Float32Array): void;
    isTexture(texture: WebGLTexture): boolean;
    getError(): number;
    shaderSource(shader: WebGLShader, source: string): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer): void;
    stencilMask(mask: number): void;
    bindBuffer(target: number, buffer: WebGLBuffer): void;
    getAttribLocation(program: WebGLProgram, name: string): number;
    uniform3i(location: WebGLUniformLocation, x: number, y: number, z: number): void;
    blendEquationSeparate(modeRGB: number, modeAlpha: number): void;
    clear(mask: number): void;
    blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;
    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void;
    readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;
    scissor(x: number, y: number, width: number, height: number): void;
    uniform2i(location: WebGLUniformLocation, x: number, y: number): void;
    getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo;
    getShaderSource(shader: WebGLShader): string;
    generateMipmap(target: number): void;
    bindAttribLocation(program: WebGLProgram, index: number, name: string): void;
    uniform1fv(location: WebGLUniformLocation, v: number[]): void;
    uniform1fv(location: WebGLUniformLocation, v: Float32Array): void;
    uniform2iv(location: WebGLUniformLocation, v: number[]): void;
    uniform2iv(location: WebGLUniformLocation, v: Int32Array): void;
    stencilOp(fail: number, zfail: number, zpass: number): void;
    uniform4fv(location: WebGLUniformLocation, v: number[]): void;
    uniform4fv(location: WebGLUniformLocation, v: Float32Array): void;
    vertexAttrib1fv(indx: number, values: number[]): void;
    vertexAttrib1fv(indx: number, values: Float32Array): void;
    flush(): void;
    uniform4f(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
    deleteProgram(program: WebGLProgram): void;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer): boolean;
    uniform1i(location: WebGLUniformLocation, x: number): void;
    getProgramParameter(program: WebGLProgram, pname: number): any;
    getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo;
    stencilFunc(func: number, ref: number, mask: number): void;
    pixelStorei(pname: number, param: number): void;
    disable(cap: number): void;
    vertexAttrib4fv(indx: number, values: number[]): void;
    vertexAttrib4fv(indx: number, values: Float32Array): void;
    createRenderbuffer(): WebGLRenderbuffer;
    isBuffer(buffer: WebGLBuffer): boolean;
    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;
    getFramebufferAttachmentParameter(target: number, attachment: number, pname: number): any;
    uniform4i(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
    sampleCoverage(value: number, invert: boolean): void;
    depthFunc(func: number): void;
    texParameterf(target: number, pname: number, param: number): void;
    vertexAttrib3f(indx: number, x: number, y: number, z: number): void;
    drawArrays(mode: number, first: number, count: number): void;
    texParameteri(target: number, pname: number, param: number): void;
    vertexAttrib4f(indx: number, x: number, y: number, z: number, w: number): void;
    getShaderParameter(shader: WebGLShader, pname: number): any;
    clearDepth(depth: number): void;
    activeTexture(texture: number): void;
    viewport(x: number, y: number, width: number, height: number): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    uniform1f(location: WebGLUniformLocation, x: number): void;
    uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;
    uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;
    deleteBuffer(buffer: WebGLBuffer): void;
    copyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void;
    uniform3fv(location: WebGLUniformLocation, v: number[]): void;
    uniform3fv(location: WebGLUniformLocation, v: Float32Array): void;
    stencilMaskSeparate(face: number, mask: number): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    compileShader(shader: WebGLShader): void;
    clearColor(red: number, green: number, blue: number, alpha: number): void;
    isShader(shader: WebGLShader): boolean;
    clearStencil(s: number): void;
    framebufferRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: WebGLRenderbuffer): void;
    finish(): void;
    uniform2f(location: WebGLUniformLocation, x: number, y: number): void;
    renderbufferStorage(target: number, internalformat: number, width: number, height: number): void;
    uniform3f(location: WebGLUniformLocation, x: number, y: number, z: number): void;
    getProgramInfoLog(program: WebGLProgram): string;
    validateProgram(program: WebGLProgram): void;
    isEnabled(cap: number): boolean;
    vertexAttrib2f(indx: number, x: number, y: number): void;
    isProgram(program: WebGLProgram): boolean;
    createShader(type: number): WebGLShader;
    bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer): void;
    uniform4iv(location: WebGLUniformLocation, v: number[]): void;
    uniform4iv(location: WebGLUniformLocation, v: Int32Array): void;
    DEPTH_FUNC: number;
    DEPTH_COMPONENT16: number;
    REPLACE: number;
    REPEAT: number;
    VERTEX_ATTRIB_ARRAY_ENABLED: number;
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
    STENCIL_BUFFER_BIT: number;
    RENDERER: number;
    STENCIL_BACK_REF: number;
    TEXTURE26: number;
    RGB565: number;
    DITHER: number;
    CONSTANT_COLOR: number;
    GENERATE_MIPMAP_HINT: number;
    POINTS: number;
    DECR: number;
    INT_VEC3: number;
    TEXTURE28: number;
    ONE_MINUS_CONSTANT_ALPHA: number;
    BACK: number;
    RENDERBUFFER_STENCIL_SIZE: number;
    UNPACK_FLIP_Y_WEBGL: number;
    BLEND: number;
    TEXTURE9: number;
    ARRAY_BUFFER_BINDING: number;
    MAX_VIEWPORT_DIMS: number;
    INVALID_FRAMEBUFFER_OPERATION: number;
    TEXTURE: number;
    TEXTURE0: number;
    TEXTURE31: number;
    TEXTURE24: number;
    HIGH_INT: number;
    RENDERBUFFER_BINDING: number;
    BLEND_COLOR: number;
    FASTEST: number;
    STENCIL_WRITEMASK: number;
    ALIASED_POINT_SIZE_RANGE: number;
    TEXTURE12: number;
    DST_ALPHA: number;
    BLEND_EQUATION_RGB: number;
    FRAMEBUFFER_COMPLETE: number;
    NEAREST_MIPMAP_NEAREST: number;
    VERTEX_ATTRIB_ARRAY_SIZE: number;
    TEXTURE3: number;
    DEPTH_WRITEMASK: number;
    CONTEXT_LOST_WEBGL: number;
    INVALID_VALUE: number;
    TEXTURE_MAG_FILTER: number;
    ONE_MINUS_CONSTANT_COLOR: number;
    ONE_MINUS_SRC_ALPHA: number;
    TEXTURE_CUBE_MAP_POSITIVE_Z: number;
    NOTEQUAL: number;
    ALPHA: number;
    DEPTH_STENCIL: number;
    MAX_VERTEX_UNIFORM_VECTORS: number;
    DEPTH_COMPONENT: number;
    RENDERBUFFER_RED_SIZE: number;
    TEXTURE20: number;
    RED_BITS: number;
    RENDERBUFFER_BLUE_SIZE: number;
    SCISSOR_BOX: number;
    VENDOR: number;
    FRONT_AND_BACK: number;
    CONSTANT_ALPHA: number;
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
    NEAREST: number;
    CULL_FACE: number;
    ALIASED_LINE_WIDTH_RANGE: number;
    TEXTURE19: number;
    FRONT: number;
    DEPTH_CLEAR_VALUE: number;
    GREEN_BITS: number;
    TEXTURE29: number;
    TEXTURE23: number;
    MAX_RENDERBUFFER_SIZE: number;
    STENCIL_ATTACHMENT: number;
    TEXTURE27: number;
    BOOL_VEC2: number;
    OUT_OF_MEMORY: number;
    MIRRORED_REPEAT: number;
    POLYGON_OFFSET_UNITS: number;
    TEXTURE_MIN_FILTER: number;
    STENCIL_BACK_PASS_DEPTH_PASS: number;
    LINE_LOOP: number;
    FLOAT_MAT3: number;
    TEXTURE14: number;
    LINEAR: number;
    RGB5_A1: number;
    ONE_MINUS_SRC_COLOR: number;
    SAMPLE_COVERAGE_INVERT: number;
    DONT_CARE: number;
    FRAMEBUFFER_BINDING: number;
    RENDERBUFFER_ALPHA_SIZE: number;
    STENCIL_REF: number;
    ZERO: number;
    DECR_WRAP: number;
    SAMPLE_COVERAGE: number;
    STENCIL_BACK_FUNC: number;
    TEXTURE30: number;
    VIEWPORT: number;
    STENCIL_BITS: number;
    FLOAT: number;
    COLOR_WRITEMASK: number;
    SAMPLE_COVERAGE_VALUE: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
    STENCIL_BACK_FAIL: number;
    FLOAT_MAT4: number;
    UNSIGNED_SHORT_4_4_4_4: number;
    TEXTURE6: number;
    RENDERBUFFER_WIDTH: number;
    RGBA4: number;
    ALWAYS: number;
    BLEND_EQUATION_ALPHA: number;
    COLOR_BUFFER_BIT: number;
    TEXTURE_CUBE_MAP: number;
    DEPTH_BUFFER_BIT: number;
    STENCIL_CLEAR_VALUE: number;
    BLEND_EQUATION: number;
    RENDERBUFFER_GREEN_SIZE: number;
    NEAREST_MIPMAP_LINEAR: number;
    VERTEX_ATTRIB_ARRAY_TYPE: number;
    INCR_WRAP: number;
    ONE_MINUS_DST_COLOR: number;
    HIGH_FLOAT: number;
    BYTE: number;
    FRONT_FACE: number;
    SAMPLE_ALPHA_TO_COVERAGE: number;
    CCW: number;
    TEXTURE13: number;
    MAX_VERTEX_ATTRIBS: number;
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
    TEXTURE_WRAP_T: number;
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
    FLOAT_VEC2: number;
    LUMINANCE: number;
    GREATER: number;
    INT_VEC2: number;
    VALIDATE_STATUS: number;
    FRAMEBUFFER: number;
    FRAMEBUFFER_UNSUPPORTED: number;
    TEXTURE5: number;
    FUNC_SUBTRACT: number;
    BLEND_DST_ALPHA: number;
    SAMPLER_CUBE: number;
    ONE_MINUS_DST_ALPHA: number;
    LESS: number;
    TEXTURE_CUBE_MAP_POSITIVE_X: number;
    BLUE_BITS: number;
    DEPTH_TEST: number;
    VERTEX_ATTRIB_ARRAY_STRIDE: number;
    DELETE_STATUS: number;
    TEXTURE18: number;
    POLYGON_OFFSET_FACTOR: number;
    UNSIGNED_INT: number;
    TEXTURE_2D: number;
    DST_COLOR: number;
    FLOAT_MAT2: number;
    COMPRESSED_TEXTURE_FORMATS: number;
    MAX_FRAGMENT_UNIFORM_VECTORS: number;
    DEPTH_STENCIL_ATTACHMENT: number;
    LUMINANCE_ALPHA: number;
    CW: number;
    VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
    LINEAR_MIPMAP_LINEAR: number;
    BUFFER_SIZE: number;
    SAMPLE_BUFFERS: number;
    TEXTURE15: number;
    ACTIVE_TEXTURE: number;
    VERTEX_SHADER: number;
    TEXTURE22: number;
    VERTEX_ATTRIB_ARRAY_POINTER: number;
    INCR: number;
    COMPILE_STATUS: number;
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
    TEXTURE7: number;
    UNSIGNED_SHORT_5_5_5_1: number;
    DEPTH_BITS: number;
    RGBA: number;
    TRIANGLE_STRIP: number;
    COLOR_CLEAR_VALUE: number;
    BROWSER_DEFAULT_WEBGL: number;
    INVALID_ENUM: number;
    SCISSOR_TEST: number;
    LINE_STRIP: number;
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
    STENCIL_FUNC: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
    RENDERBUFFER_HEIGHT: number;
    TEXTURE8: number;
    TRIANGLES: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
    STENCIL_BACK_VALUE_MASK: number;
    TEXTURE25: number;
    RENDERBUFFER: number;
    LEQUAL: number;
    TEXTURE1: number;
    STENCIL_INDEX8: number;
    FUNC_ADD: number;
    STENCIL_FAIL: number;
    BLEND_SRC_ALPHA: number;
    BOOL: number;
    ALPHA_BITS: number;
    LOW_INT: number;
    TEXTURE10: number;
    SRC_COLOR: number;
    MAX_VARYING_VECTORS: number;
    BLEND_DST_RGB: number;
    TEXTURE_BINDING_CUBE_MAP: number;
    STENCIL_INDEX: number;
    TEXTURE_BINDING_2D: number;
    MEDIUM_INT: number;
    SHADER_TYPE: number;
    POLYGON_OFFSET_FILL: number;
    DYNAMIC_DRAW: number;
    TEXTURE4: number;
    STENCIL_BACK_PASS_DEPTH_FAIL: number;
    STREAM_DRAW: number;
    MAX_CUBE_MAP_TEXTURE_SIZE: number;
    TEXTURE17: number;
    TRIANGLE_FAN: number;
    UNPACK_ALIGNMENT: number;
    CURRENT_PROGRAM: number;
    LINES: number;
    INVALID_OPERATION: number;
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
    LINEAR_MIPMAP_NEAREST: number;
    CLAMP_TO_EDGE: number;
    RENDERBUFFER_DEPTH_SIZE: number;
    TEXTURE_WRAP_S: number;
    ELEMENT_ARRAY_BUFFER: number;
    UNSIGNED_SHORT_5_6_5: number;
    ACTIVE_UNIFORMS: number;
    FLOAT_VEC3: number;
    NO_ERROR: number;
    ATTACHED_SHADERS: number;
    DEPTH_ATTACHMENT: number;
    TEXTURE11: number;
    STENCIL_TEST: number;
    ONE: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
    STATIC_DRAW: number;
    GEQUAL: number;
    BOOL_VEC4: number;
    COLOR_ATTACHMENT0: number;
    PACK_ALIGNMENT: number;
    MAX_TEXTURE_SIZE: number;
    STENCIL_PASS_DEPTH_FAIL: number;
    CULL_FACE_MODE: number;
    TEXTURE16: number;
    STENCIL_BACK_WRITEMASK: number;
    SRC_ALPHA: number;
    UNSIGNED_SHORT: number;
    TEXTURE21: number;
    FUNC_REVERSE_SUBTRACT: number;
    SHADING_LANGUAGE_VERSION: number;
    EQUAL: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
    BOOL_VEC3: number;
    SAMPLER_2D: number;
    TEXTURE_CUBE_MAP_NEGATIVE_X: number;
    MAX_TEXTURE_IMAGE_UNITS: number;
    TEXTURE_CUBE_MAP_POSITIVE_Y: number;
    RENDERBUFFER_INTERNAL_FORMAT: number;
    STENCIL_VALUE_MASK: number;
    ELEMENT_ARRAY_BUFFER_BINDING: number;
    ARRAY_BUFFER: number;
    DEPTH_RANGE: number;
    NICEST: number;
    ACTIVE_ATTRIBUTES: number;
    NEVER: number;
    FLOAT_VEC4: number;
    CURRENT_VERTEX_ATTRIB: number;
    STENCIL_PASS_DEPTH_PASS: number;
    INVERT: number;
    LINK_STATUS: number;
    RGB: number;
    INT_VEC4: number;
    TEXTURE2: number;
    UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
    MEDIUM_FLOAT: number;
    SRC_ALPHA_SATURATE: number;
    BUFFER_USAGE: number;
    SHORT: number;
    NONE: number;
    UNSIGNED_BYTE: number;
    INT: number;
    SUBPIXEL_BITS: number;
    KEEP: number;
    SAMPLES: number;
    FRAGMENT_SHADER: number;
    LINE_WIDTH: number;
    BLEND_SRC_RGB: number;
    LOW_FLOAT: number;
    VERSION: number;
}
declare var WebGLRenderingContext: {
    prototype: WebGLRenderingContext;
    new(): WebGLRenderingContext;
    DEPTH_FUNC: number;
    DEPTH_COMPONENT16: number;
    REPLACE: number;
    REPEAT: number;
    VERTEX_ATTRIB_ARRAY_ENABLED: number;
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
    STENCIL_BUFFER_BIT: number;
    RENDERER: number;
    STENCIL_BACK_REF: number;
    TEXTURE26: number;
    RGB565: number;
    DITHER: number;
    CONSTANT_COLOR: number;
    GENERATE_MIPMAP_HINT: number;
    POINTS: number;
    DECR: number;
    INT_VEC3: number;
    TEXTURE28: number;
    ONE_MINUS_CONSTANT_ALPHA: number;
    BACK: number;
    RENDERBUFFER_STENCIL_SIZE: number;
    UNPACK_FLIP_Y_WEBGL: number;
    BLEND: number;
    TEXTURE9: number;
    ARRAY_BUFFER_BINDING: number;
    MAX_VIEWPORT_DIMS: number;
    INVALID_FRAMEBUFFER_OPERATION: number;
    TEXTURE: number;
    TEXTURE0: number;
    TEXTURE31: number;
    TEXTURE24: number;
    HIGH_INT: number;
    RENDERBUFFER_BINDING: number;
    BLEND_COLOR: number;
    FASTEST: number;
    STENCIL_WRITEMASK: number;
    ALIASED_POINT_SIZE_RANGE: number;
    TEXTURE12: number;
    DST_ALPHA: number;
    BLEND_EQUATION_RGB: number;
    FRAMEBUFFER_COMPLETE: number;
    NEAREST_MIPMAP_NEAREST: number;
    VERTEX_ATTRIB_ARRAY_SIZE: number;
    TEXTURE3: number;
    DEPTH_WRITEMASK: number;
    CONTEXT_LOST_WEBGL: number;
    INVALID_VALUE: number;
    TEXTURE_MAG_FILTER: number;
    ONE_MINUS_CONSTANT_COLOR: number;
    ONE_MINUS_SRC_ALPHA: number;
    TEXTURE_CUBE_MAP_POSITIVE_Z: number;
    NOTEQUAL: number;
    ALPHA: number;
    DEPTH_STENCIL: number;
    MAX_VERTEX_UNIFORM_VECTORS: number;
    DEPTH_COMPONENT: number;
    RENDERBUFFER_RED_SIZE: number;
    TEXTURE20: number;
    RED_BITS: number;
    RENDERBUFFER_BLUE_SIZE: number;
    SCISSOR_BOX: number;
    VENDOR: number;
    FRONT_AND_BACK: number;
    CONSTANT_ALPHA: number;
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
    NEAREST: number;
    CULL_FACE: number;
    ALIASED_LINE_WIDTH_RANGE: number;
    TEXTURE19: number;
    FRONT: number;
    DEPTH_CLEAR_VALUE: number;
    GREEN_BITS: number;
    TEXTURE29: number;
    TEXTURE23: number;
    MAX_RENDERBUFFER_SIZE: number;
    STENCIL_ATTACHMENT: number;
    TEXTURE27: number;
    BOOL_VEC2: number;
    OUT_OF_MEMORY: number;
    MIRRORED_REPEAT: number;
    POLYGON_OFFSET_UNITS: number;
    TEXTURE_MIN_FILTER: number;
    STENCIL_BACK_PASS_DEPTH_PASS: number;
    LINE_LOOP: number;
    FLOAT_MAT3: number;
    TEXTURE14: number;
    LINEAR: number;
    RGB5_A1: number;
    ONE_MINUS_SRC_COLOR: number;
    SAMPLE_COVERAGE_INVERT: number;
    DONT_CARE: number;
    FRAMEBUFFER_BINDING: number;
    RENDERBUFFER_ALPHA_SIZE: number;
    STENCIL_REF: number;
    ZERO: number;
    DECR_WRAP: number;
    SAMPLE_COVERAGE: number;
    STENCIL_BACK_FUNC: number;
    TEXTURE30: number;
    VIEWPORT: number;
    STENCIL_BITS: number;
    FLOAT: number;
    COLOR_WRITEMASK: number;
    SAMPLE_COVERAGE_VALUE: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
    STENCIL_BACK_FAIL: number;
    FLOAT_MAT4: number;
    UNSIGNED_SHORT_4_4_4_4: number;
    TEXTURE6: number;
    RENDERBUFFER_WIDTH: number;
    RGBA4: number;
    ALWAYS: number;
    BLEND_EQUATION_ALPHA: number;
    COLOR_BUFFER_BIT: number;
    TEXTURE_CUBE_MAP: number;
    DEPTH_BUFFER_BIT: number;
    STENCIL_CLEAR_VALUE: number;
    BLEND_EQUATION: number;
    RENDERBUFFER_GREEN_SIZE: number;
    NEAREST_MIPMAP_LINEAR: number;
    VERTEX_ATTRIB_ARRAY_TYPE: number;
    INCR_WRAP: number;
    ONE_MINUS_DST_COLOR: number;
    HIGH_FLOAT: number;
    BYTE: number;
    FRONT_FACE: number;
    SAMPLE_ALPHA_TO_COVERAGE: number;
    CCW: number;
    TEXTURE13: number;
    MAX_VERTEX_ATTRIBS: number;
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
    TEXTURE_WRAP_T: number;
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
    FLOAT_VEC2: number;
    LUMINANCE: number;
    GREATER: number;
    INT_VEC2: number;
    VALIDATE_STATUS: number;
    FRAMEBUFFER: number;
    FRAMEBUFFER_UNSUPPORTED: number;
    TEXTURE5: number;
    FUNC_SUBTRACT: number;
    BLEND_DST_ALPHA: number;
    SAMPLER_CUBE: number;
    ONE_MINUS_DST_ALPHA: number;
    LESS: number;
    TEXTURE_CUBE_MAP_POSITIVE_X: number;
    BLUE_BITS: number;
    DEPTH_TEST: number;
    VERTEX_ATTRIB_ARRAY_STRIDE: number;
    DELETE_STATUS: number;
    TEXTURE18: number;
    POLYGON_OFFSET_FACTOR: number;
    UNSIGNED_INT: number;
    TEXTURE_2D: number;
    DST_COLOR: number;
    FLOAT_MAT2: number;
    COMPRESSED_TEXTURE_FORMATS: number;
    MAX_FRAGMENT_UNIFORM_VECTORS: number;
    DEPTH_STENCIL_ATTACHMENT: number;
    LUMINANCE_ALPHA: number;
    CW: number;
    VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
    LINEAR_MIPMAP_LINEAR: number;
    BUFFER_SIZE: number;
    SAMPLE_BUFFERS: number;
    TEXTURE15: number;
    ACTIVE_TEXTURE: number;
    VERTEX_SHADER: number;
    TEXTURE22: number;
    VERTEX_ATTRIB_ARRAY_POINTER: number;
    INCR: number;
    COMPILE_STATUS: number;
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
    TEXTURE7: number;
    UNSIGNED_SHORT_5_5_5_1: number;
    DEPTH_BITS: number;
    RGBA: number;
    TRIANGLE_STRIP: number;
    COLOR_CLEAR_VALUE: number;
    BROWSER_DEFAULT_WEBGL: number;
    INVALID_ENUM: number;
    SCISSOR_TEST: number;
    LINE_STRIP: number;
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
    STENCIL_FUNC: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
    RENDERBUFFER_HEIGHT: number;
    TEXTURE8: number;
    TRIANGLES: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
    STENCIL_BACK_VALUE_MASK: number;
    TEXTURE25: number;
    RENDERBUFFER: number;
    LEQUAL: number;
    TEXTURE1: number;
    STENCIL_INDEX8: number;
    FUNC_ADD: number;
    STENCIL_FAIL: number;
    BLEND_SRC_ALPHA: number;
    BOOL: number;
    ALPHA_BITS: number;
    LOW_INT: number;
    TEXTURE10: number;
    SRC_COLOR: number;
    MAX_VARYING_VECTORS: number;
    BLEND_DST_RGB: number;
    TEXTURE_BINDING_CUBE_MAP: number;
    STENCIL_INDEX: number;
    TEXTURE_BINDING_2D: number;
    MEDIUM_INT: number;
    SHADER_TYPE: number;
    POLYGON_OFFSET_FILL: number;
    DYNAMIC_DRAW: number;
    TEXTURE4: number;
    STENCIL_BACK_PASS_DEPTH_FAIL: number;
    STREAM_DRAW: number;
    MAX_CUBE_MAP_TEXTURE_SIZE: number;
    TEXTURE17: number;
    TRIANGLE_FAN: number;
    UNPACK_ALIGNMENT: number;
    CURRENT_PROGRAM: number;
    LINES: number;
    INVALID_OPERATION: number;
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
    LINEAR_MIPMAP_NEAREST: number;
    CLAMP_TO_EDGE: number;
    RENDERBUFFER_DEPTH_SIZE: number;
    TEXTURE_WRAP_S: number;
    ELEMENT_ARRAY_BUFFER: number;
    UNSIGNED_SHORT_5_6_5: number;
    ACTIVE_UNIFORMS: number;
    FLOAT_VEC3: number;
    NO_ERROR: number;
    ATTACHED_SHADERS: number;
    DEPTH_ATTACHMENT: number;
    TEXTURE11: number;
    STENCIL_TEST: number;
    ONE: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
    STATIC_DRAW: number;
    GEQUAL: number;
    BOOL_VEC4: number;
    COLOR_ATTACHMENT0: number;
    PACK_ALIGNMENT: number;
    MAX_TEXTURE_SIZE: number;
    STENCIL_PASS_DEPTH_FAIL: number;
    CULL_FACE_MODE: number;
    TEXTURE16: number;
    STENCIL_BACK_WRITEMASK: number;
    SRC_ALPHA: number;
    UNSIGNED_SHORT: number;
    TEXTURE21: number;
    FUNC_REVERSE_SUBTRACT: number;
    SHADING_LANGUAGE_VERSION: number;
    EQUAL: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
    BOOL_VEC3: number;
    SAMPLER_2D: number;
    TEXTURE_CUBE_MAP_NEGATIVE_X: number;
    MAX_TEXTURE_IMAGE_UNITS: number;
    TEXTURE_CUBE_MAP_POSITIVE_Y: number;
    RENDERBUFFER_INTERNAL_FORMAT: number;
    STENCIL_VALUE_MASK: number;
    ELEMENT_ARRAY_BUFFER_BINDING: number;
    ARRAY_BUFFER: number;
    DEPTH_RANGE: number;
    NICEST: number;
    ACTIVE_ATTRIBUTES: number;
    NEVER: number;
    FLOAT_VEC4: number;
    CURRENT_VERTEX_ATTRIB: number;
    STENCIL_PASS_DEPTH_PASS: number;
    INVERT: number;
    LINK_STATUS: number;
    RGB: number;
    INT_VEC4: number;
    TEXTURE2: number;
    UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
    MEDIUM_FLOAT: number;
    SRC_ALPHA_SATURATE: number;
    BUFFER_USAGE: number;
    SHORT: number;
    NONE: number;
    UNSIGNED_BYTE: number;
    INT: number;
    SUBPIXEL_BITS: number;
    KEEP: number;
    SAMPLES: number;
    FRAGMENT_SHADER: number;
    LINE_WIDTH: number;
    BLEND_SRC_RGB: number;
    LOW_FLOAT: number;
    VERSION: number;
}
interface WebGLProgram extends WebGLObject {
}
declare var WebGLProgram: {
    prototype: WebGLProgram;
    new(): WebGLProgram;
}
interface OES_standard_derivatives {
    FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;
}
declare var OES_standard_derivatives: {
    prototype: OES_standard_derivatives;
    new(): OES_standard_derivatives;
    FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;
}
interface WebGLFramebuffer extends WebGLObject {
}
declare var WebGLFramebuffer: {
    prototype: WebGLFramebuffer;
    new(): WebGLFramebuffer;
}
interface WebGLShader extends WebGLObject {
}
declare var WebGLShader: {
    prototype: WebGLShader;
    new(): WebGLShader;
}
interface OES_texture_float_linear {
}
declare var OES_texture_float_linear: {
    prototype: OES_texture_float_linear;
    new(): OES_texture_float_linear;
}
interface WebGLObject {
}
declare var WebGLObject: {
    prototype: WebGLObject;
    new(): WebGLObject;
}
interface WebGLBuffer extends WebGLObject {
}
declare var WebGLBuffer: {
    prototype: WebGLBuffer;
    new(): WebGLBuffer;
}
interface WebGLShaderPrecisionFormat {
    rangeMin: number;
    rangeMax: number;
    precision: number;
}
declare var WebGLShaderPrecisionFormat: {
    prototype: WebGLShaderPrecisionFormat;
    new(): WebGLShaderPrecisionFormat;
}
interface EXT_texture_filter_anisotropic {
    TEXTURE_MAX_ANISOTROPY_EXT: number;
    MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
}
declare var EXT_texture_filter_anisotropic: {
    prototype: EXT_texture_filter_anisotropic;
    new(): EXT_texture_filter_anisotropic;
    TEXTURE_MAX_ANISOTROPY_EXT: number;
    MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
}
declare var Option: { new(text?: string, value?: string, defaultSelected?: boolean, selected?:boolean): HTMLOptionElement; };
declare var Image: { new(width?: number, height?: number): HTMLImageElement; };
declare var Audio: { new(src?: string): HTMLAudioElement; };
declare var ondragend: (ev: DragEvent) => any;
declare var onkeydown: (ev: KeyboardEvent) => any;
declare var ondragover: (ev: DragEvent) => any;
declare var onkeyup: (ev: KeyboardEvent) => any;
declare var onreset: (ev: Event) => any;
declare var onmouseup: (ev: MouseEvent) => any;
declare var ondragstart: (ev: DragEvent) => any;
declare var ondrag: (ev: DragEvent) => any;
declare var screenX: number;
declare var onmouseover: (ev: MouseEvent) => any;
declare var ondragleave: (ev: DragEvent) => any;
declare var history: History;
declare var pageXOffset: number;
declare var name: string;
declare var onafterprint: (ev: Event) => any;
declare var onpause: (ev: Event) => any;
declare var onbeforeprint: (ev: Event) => any;
declare var top: Window;
declare var onmousedown: (ev: MouseEvent) => any;
declare var onseeked: (ev: Event) => any;
declare var opener: Window;
declare var onclick: (ev: MouseEvent) => any;
declare var innerHeight: number;
declare var onwaiting: (ev: Event) => any;
declare var ononline: (ev: Event) => any;
declare var ondurationchange: (ev: Event) => any;
declare var frames: Window;
declare var onblur: (ev: FocusEvent) => any;
declare var onemptied: (ev: Event) => any;
declare var onseeking: (ev: Event) => any;
declare var oncanplay: (ev: Event) => any;
declare var outerWidth: number;
declare var onstalled: (ev: Event) => any;
declare var onmousemove: (ev: MouseEvent) => any;
declare var innerWidth: number;
declare var onoffline: (ev: Event) => any;
declare var length: number;
declare var screen: Screen;
declare var onbeforeunload: (ev: BeforeUnloadEvent) => any;
declare var onratechange: (ev: Event) => any;
declare var onstorage: (ev: StorageEvent) => any;
declare var onloadstart: (ev: Event) => any;
declare var ondragenter: (ev: DragEvent) => any;
declare var onsubmit: (ev: Event) => any;
declare var self: Window;
declare var document: Document;
declare var onprogress: (ev: ProgressEvent) => any;
declare var ondblclick: (ev: MouseEvent) => any;
declare var pageYOffset: number;
declare var oncontextmenu: (ev: MouseEvent) => any;
declare var onchange: (ev: Event) => any;
declare var onloadedmetadata: (ev: Event) => any;
declare var onplay: (ev: Event) => any;
declare var onerror: ErrorEventHandler;
declare var onplaying: (ev: Event) => any;
declare var parent: Window;
declare var location: Location;
declare var oncanplaythrough: (ev: Event) => any;
declare var onabort: (ev: UIEvent) => any;
declare var onreadystatechange: (ev: Event) => any;
declare var outerHeight: number;
declare var onkeypress: (ev: KeyboardEvent) => any;
declare var frameElement: Element;
declare var onloadeddata: (ev: Event) => any;
declare var onsuspend: (ev: Event) => any;
declare var window: Window;
declare var onfocus: (ev: FocusEvent) => any;
declare var onmessage: (ev: MessageEvent) => any;
declare var ontimeupdate: (ev: Event) => any;
declare var onresize: (ev: UIEvent) => any;
declare var onselect: (ev: UIEvent) => any;
declare var navigator: Navigator;
declare var styleMedia: StyleMedia;
declare var ondrop: (ev: DragEvent) => any;
declare var onmouseout: (ev: MouseEvent) => any;
declare var onended: (ev: Event) => any;
declare var onhashchange: (ev: Event) => any;
declare var onunload: (ev: Event) => any;
declare var onscroll: (ev: UIEvent) => any;
declare var screenY: number;
declare var onmousewheel: (ev: MouseWheelEvent) => any;
declare var onload: (ev: Event) => any;
declare var onvolumechange: (ev: Event) => any;
declare var oninput: (ev: Event) => any;
declare var performance: Performance;
declare var onmspointerdown: (ev: any) => any;
declare var animationStartTime: number;
declare var onmsgesturedoubletap: (ev: any) => any;
declare var onmspointerhover: (ev: any) => any;
declare var onmsgesturehold: (ev: any) => any;
declare var onmspointermove: (ev: any) => any;
declare var onmsgesturechange: (ev: any) => any;
declare var onmsgesturestart: (ev: any) => any;
declare var onmspointercancel: (ev: any) => any;
declare var onmsgestureend: (ev: any) => any;
declare var onmsgesturetap: (ev: any) => any;
declare var onmspointerout: (ev: any) => any;
declare var msAnimationStartTime: number;
declare var applicationCache: ApplicationCache;
declare var onmsinertiastart: (ev: any) => any;
declare var onmspointerover: (ev: any) => any;
declare var onpopstate: (ev: PopStateEvent) => any;
declare var onmspointerup: (ev: any) => any;
declare var onpageshow: (ev: PageTransitionEvent) => any;
declare var ondevicemotion: (ev: DeviceMotionEvent) => any;
declare var devicePixelRatio: number;
declare var msCrypto: Crypto;
declare var ondeviceorientation: (ev: DeviceOrientationEvent) => any;
declare var doNotTrack: string;
declare var onmspointerenter: (ev: any) => any;
declare var onpagehide: (ev: PageTransitionEvent) => any;
declare var onmspointerleave: (ev: any) => any;
declare function alert(message?: any): void;
declare function scroll(x?: number, y?: number): void;
declare function focus(): void;
declare function scrollTo(x?: number, y?: number): void;
declare function print(): void;
declare function prompt(message?: string, _default?: string): string;
declare function toString(): string;
declare function open(url?: string, target?: string, features?: string, replace?: boolean): Window;
declare function scrollBy(x?: number, y?: number): void;
declare function confirm(message?: string): boolean;
declare function close(): void;
declare function postMessage(message: any, targetOrigin: string, ports?: any): void;
declare function showModalDialog(url?: string, argument?: any, options?: any): any;
declare function blur(): void;
declare function getSelection(): Selection;
declare function getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
declare function msCancelRequestAnimationFrame(handle: number): void;
declare function matchMedia(mediaQuery: string): MediaQueryList;
declare function cancelAnimationFrame(handle: number): void;
declare function msIsStaticHTML(html: string): boolean;
declare function msMatchMedia(mediaQuery: string): MediaQueryList;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
declare function msRequestAnimationFrame(callback: FrameRequestCallback): number;
declare function removeEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
declare function dispatchEvent(evt: Event): boolean;
declare function attachEvent(event: string, listener: EventListener): boolean;
declare function detachEvent(event: string, listener: EventListener): void;
declare var localStorage: Storage;
declare var status: string;
declare var onmouseleave: (ev: MouseEvent) => any;
declare var screenLeft: number;
declare var offscreenBuffering: any;
declare var maxConnectionsPerServer: number;
declare var onmouseenter: (ev: MouseEvent) => any;
declare var clipboardData: DataTransfer;
declare var defaultStatus: string;
declare var clientInformation: Navigator;
declare var closed: boolean;
declare var onhelp: (ev: Event) => any;
declare var external: External;
declare var event: MSEventObj;
declare var onfocusout: (ev: FocusEvent) => any;
declare var screenTop: number;
declare var onfocusin: (ev: FocusEvent) => any;
declare function showModelessDialog(url?: string, argument?: any, options?: any): Window;
declare function navigate(url: string): void;
declare function resizeBy(x?: number, y?: number): void;
declare function item(index: any): any;
declare function resizeTo(x?: number, y?: number): void;
declare function createPopup(arguments?: any): MSPopupWindow;
declare function toStaticHTML(html: string): string;
declare function execScript(code: string, language?: string): any;
declare function msWriteProfilerMark(profilerMarkName: string): void;
declare function moveTo(x?: number, y?: number): void;
declare function moveBy(x?: number, y?: number): void;
declare function showHelp(url: string, helpArg?: any, features?: string): void;
declare function captureEvents(): void;
declare function releaseEvents(): void;
declare var sessionStorage: Storage;
declare function clearTimeout(handle: number): void;
declare function setTimeout(handler: any, timeout?: any, ...args: any[]): number;
declare function clearInterval(handle: number): void;
declare function setInterval(handler: any, timeout?: any, ...args: any[]): number;
declare function msSetImmediate(expression: any, ...args: any[]): number;
declare function clearImmediate(handle: number): void;
declare function msClearImmediate(handle: number): void;
declare function setImmediate(expression: any, ...args: any[]): number;
declare function btoa(rawString: string): string;
declare function atob(encodedString: string): string;
declare var msIndexedDB: IDBFactory;
declare var indexedDB: IDBFactory;
declare var console: Console;
declare var onpointerenter: (ev: PointerEvent) => any;
declare var onpointerout: (ev: PointerEvent) => any;
declare var onpointerdown: (ev: PointerEvent) => any;
declare var onpointerup: (ev: PointerEvent) => any;
declare var onpointercancel: (ev: PointerEvent) => any;
declare var onpointerover: (ev: PointerEvent) => any;
declare var onpointermove: (ev: PointerEvent) => any;
declare var onpointerleave: (ev: PointerEvent) => any;
declare function addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "devicemotion", listener: (ev: DeviceMotionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "deviceorientation", listener: (ev: DeviceOrientationEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
declare function importScripts(...urls: string[]): void;
declare var ActiveXObject: { new (s: string): any; };
interface ITextWriter {
    Write(s: string): void;
    WriteLine(s: string): void;
    Close(): void;
}
declare var WScript: {
    Echo(s: any): void;
    StdErr: ITextWriter;
    StdOut: ITextWriter;
    Arguments: { length: number; Item(n: number): string; };
    ScriptFullName: string;
    Quit(exitCode?: number): number;
}`;

export const typescriptDefinitions = {
	'lib.d.ts': lib,
    'mocha.d.ts': mocha,
    'assert.d.ts': assert
};
