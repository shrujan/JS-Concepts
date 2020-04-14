// Lexical scope : available data + variables depend on where the function is defined
// this: is dynamically scoped ie depends on how the function is called not defined
// to make this Lexically scoped use arrow functions

let Obj = {
    song: "abc",
    favSong() {
        // since the this method favSong is called using the object this is bound to Obj so this is obj
        console.log('listening to '+ this.song);

        // the obj function did not call the newFavSong function but the function favSong() did
        // so the this by default is windows 
        let newFavSong = function () {
            console.log('My new fav Song is ' + this.song); // undefined
            console.log(this); // this is windows
        }

        // newFavSong is called inside the method is the one that calls the newFavSong method not the object OBJ
        // so this is bound to global window / Global

        newFavSong()

    }
}

// here we use the object to trigger the method favSong.
Obj.favSong();

// -------------------------


// To solve this ES6 has introduced arrow function
console.log('--------------------------') 
let Obj1 = {
    song: "xyz",
    favSong() {
        // since the this method favSong is called using the object this is bound to Obj so this is obj
        console.log('listening to '+ this.song);
        console.log(this); // this is obj


      // arrow function solves this issue
        let newFavSong = () => {
            console.log('My new fav Song is ' + this.song); // abc
            console.log(this); // this is obj
        }

        // now since newFavSong is arrow function this is obj as to where it is defined

        newFavSong()

    }
}

Obj1.favSong();

// ------------PRE ES6 Solution------------------\
console.log('PRE ES6 -------------------' )
let Obj2 = {
    song: "xyz",
    favSong() {
        // since the this method favSong is called using the object this is bound to Obj so this is obj
        // console.log('listening to olden song '+ this.song);
        console.log(this); // this is obj
        let self = this

      // arrow function solves this issue
        let newFavSong = function()  {
            // console.log('My new fav old Song is ' + this.song); // abc
            console.log(this); // this is obj
        }
 
        // Binding this to the object when calling the method

        console.log('------------- Call -------')

        newFavSong.call(this);
        console.log(' -------------- Apply -------');

        newFavSong.apply(this)
        // or
        console.log(' --------------- Bind -------')

        let newMethod = newFavSong.bind(this);
        newMethod();
    }
}

Obj2.favSong();

// ----------- 



