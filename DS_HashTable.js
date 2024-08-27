// Basic hash, but not effective
// - not a constant time
function basic_hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

// Improved basic hash -- based on prime number
function improved_hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}


class HashTable {
    constructor(size = 53) {
        this.map = new Array(size);
    }


    _hash(key) {
        let total = 0;
        let WIERD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WIERD_PRIME + value) % this.map.length;
        }

        return total;
    }


    set(key, value) {
        let hash = this._hash(key);
        let cellValue = [key, value];


        if (!this.map[hash]) {
            this.map[hash] = [];
        }

        this.map[hash].push(cellValue);
    }

    get(key) {
        let hash = this._hash(key);

        if (!this.map[hash]) {
            return undefined;
        }

        const cell = this.map[hash];

        for (let i = 0; i < cell.length; i++) {
            if (cell[i][0] === key) {
                return cell[i][1];
            }
        }
    }

    // Wierd solution from lector O(n^3)
    keys() {
        let result = [];

        for(let i = 0; i < this.map.length; i++) {
            if (!this.map[i]) { continue; }

            for (let j = 0; j < this.map[i].length; j++) {
                if (!result.includes(this.map[i][j][0])) {
                    result.push(this.map[i][j][0]);
                }
            }
        } 
        
        return result;
    }

    // Wierd solution from lector O(n^3)
    values() {
        let result = [];

        for(let i = 0; i < this.map.length; i++) {
            if (!this.map[i]) { continue; }

            for (let j = 0; j < this.map[i].length; j++) {
                if (!result.includes(this.map[i][j][1])) {
                    result.push(this.map[i][j][1]);
                }
            }
        }
        
        return result;
    }
}

const hashmap = new HashTable(10);
hashmap.set('purple', '#123123')
hashmap.set('purple', '#123123')
