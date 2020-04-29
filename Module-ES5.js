

// before es6 modules were written inside IFFE to stop the code from polluting the global namespace
// need to be careful about the order the scripts are inserted in html file
 var functionality = (function() {

    var num = 123;
    function fight(char1, char2) {
        var l1 = Math.floor(Math.random() * char1.length) ;
        var l2 = Math.floor(Math.random() * char2.length) ;
        return (l1 > l2)? `${char1} wins`: `${char2} wins`;
    }

    function privateMthd() {

    }

    // expose only the methods and variables to be used by other programs
    return {
        fight: fight,
        num: num
    }
})()

console.log(functionality.fight('meera', 'sam'))