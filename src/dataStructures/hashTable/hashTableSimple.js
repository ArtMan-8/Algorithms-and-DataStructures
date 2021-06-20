/**
 * HashTable - simple impementation
 * from book Grokking Algorithms
 */
export default class HashTable {
  constructor() {
    this._keysMap = {};
  }

  get length() {
    return Object.keys(this._keysMap).length;
  }

  clear() {
    this._keysMap = {};
  }

  delete(key) {
    if (this.has(key)) {
      delete this._keysMap[this.hash(key)];
      return true;
    }

    return false;
  }

  get(key) {
    return this.has(key) ? this._keysMap[this.hash(key)] : null;
  }

  has(key) {
    return Object.prototype.hasOwnProperty.call(this._keysMap, this.hash(key));
  }

  hash(key) {
    return Array.from(key).reduce(
      (hash, keySymbol) => hash + keySymbol.charCodeAt(0),
      0
    );
  }

  set(key, value) {
    if (this.has(key)) {
      return false;
    }

    this._keysMap[this.hash(key)] = value;
    return true;
  }
}
