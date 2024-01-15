//?? implementing hash table
const hashMap = new Map();

//?? adding key value pairs to it
hashMap.set("name", "sagar");
hashMap.set("age", 30);
hashMap.set("city", "banglore");

//?? to retrive those values we use get method
// console.log(hashMap.get("name"));

//?? TO CHECK IF KEY EXISTS
// console.log(hashMap.has("age"));

//?? to remove key value pair
// hashMap.delete("city");
// console.log(hashMap);

//?? we can get size of keys present in hash map
// const size = hashMap.size;
// console.log(size);

//!! How hashmap works under the hoood
//?? hashmap is implememnted using array of fixed size , where each element in array is acalled bucket. each bucket can store multiple key value pairs

//?? hash fucniton takes key and converts it into numerical value , the numerical value here then used to index to map key value pair to corresponding bucket in arrray

//?? collisions occur when 2 or more keys map to same bucket , to aoid it we use chaining

//?? chaining involves storing multiple key value pairs in the same bucket using linked list or arrry

//! simple implementation of hashmap
class HashMap {
  constructor() {
    this._buckets = [];
  }
  //?? creating hash value
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this._buckets.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this._buckets[index]) {
      this._buckets[index] = [];
    }

    const bucket = this._buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this._buckets[index];
    if (!bucket) {
      return undefined;
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return undefined;
  }

  remove(key) {
    const index = this._hash(key);
    const bucket = this._buckets[index];
    if (!bucket) {
      return;
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
}
