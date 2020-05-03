class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value) {
        let obj = [key, value];
        let address = this._hash(key);

        if(this.data[address] === undefined){
            this.data[address] = [];
        } 
        
        this.data[address].push(obj);
    }

    get(key) {
        let address = this._hash(key);
        return this.data[address].find((ele) => {
            if (ele[0] === key) {
                return ele;
            }
        })
    }

    getAllKeys() {
        let keysArr = [];
        for (let i = 0; i < this.data.length; i++ ) {
            if (this.data[i] !== undefined) {
                if (this.data[i].length > 1) {
                    for (let ele of this.data[i]) {
                        keysArr.push(ele[0]);

                    }
                } else {
                    keysArr.push(this.data[i][0][0]);
                }
            }
            
        } 

        console.log('==>',keysArr)
    }
  }
  
  const myHashTable = new HashTable(5);
  myHashTable.set('grapes', 10000)
  console.log(myHashTable.get('grapes'))
  myHashTable.set('apples', 9)
  console.log(myHashTable.get('apples'))
  myHashTable.set('mango', 30)
  console.log(myHashTable.get('mango'))
  myHashTable.set('chicku', 200)
  console.log(myHashTable.get('chicku'))

  // get all the keys in hash table

  let keys = myHashTable.getAllKeys();
  console.log(keys)