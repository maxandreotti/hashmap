
class HashMap {
  constructor () {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.entry = 0;
    this.buckets = new Array(this.capacity);
  }

  /* DA COMPLETARE E SISTEMARE IN SET

  doubleCapacity () {
    this.capacity = this.capacity * 2;
    let bucket2 = new Array (this.capacity);
    this.buckets.forEach(elemento => {
      elemento.forEach(coppia => {

      })
    })
    
  }

  */

  hash (key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    let hashcode = this.hash(key);
    let target = this.buckets[hashcode];
    this.doubleCapacity();

    if (target === undefined) {
      this.entry ++;
      return this.buckets[hashcode] = [[key, value]];
    } else {
      for (let i = 0; i < target.length; i++) {
        if (target[i][0] === key) {
          return this.buckets[hashcode][i][1] = value;
        }
      }
      this.entry ++;
      return this.buckets[hashcode].push([key, value])
    }
  }

  get (key) {
    let chiave = this.hash(key);
    if (this.buckets[chiave] === undefined) {
      return undefined
    }
    let target = this.buckets[chiave];
    for (let i = 0; i < target.length; i++) {
      if (target[i][0] === key) {
        return this.buckets[chiave][i][1];
      }
    }
    return undefined
  }

  has(key) {
    let chiave = this.hash(key);
    if (this.buckets[chiave] === undefined) {
      return false
    }
    let target = this.buckets[chiave];
    for (let i = 0; i < target.length; i++) {
      if (target[i][0] === key) {
        return true;
      }
    }
    return false
  }

  remove (key) {
    let chiave = this.hash(key);
    if (this.buckets[chiave] === undefined) {
      return false
    }
    let target = this.buckets[chiave];
    for (let i = 0; i < target.length; i++) {
      if (target[i][0] === key) {
        this.buckets[chiave].splice(i, 1);
        return true;
      }
    }
    return false;
  }

  
  length() {
    let contatore = 0;
    for (const elemento of this.buckets) {
      if (elemento === undefined) {
        continue;
      }
      elemento.forEach(coppia => {
        contatore ++;
      })
    }
    return contatore;
  }

  clear() {
    this.capacity = 16;
    this.entry = 0;
    this.buckets = new Array (this.capacity);
  }

  keys() {
    let chiavi = [];
    this.buckets.forEach(elemento => {
      elemento.forEach(coppia => {
        chiavi.push(coppia[0])
      })
    })
    return chiavi;
  }

  values() {
    let valori = [];
    this.buckets.forEach(elemento => {
      elemento.forEach(coppia => {
        valori.push(coppia[1])
      })
    })
    return valori;
  }

  entries() {
    let inseriti = [];
    this.buckets.forEach(elemento => {
      elemento.forEach(coppia => {
        inseriti.push([coppia[0], coppia[1]])
      })
    })
    return inseriti;
  }

}