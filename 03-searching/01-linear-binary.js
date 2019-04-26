//Linear search: goes through entire list until target value/node is found

//examples:

const stuff = ['surfboard', 'boardshorts', 'sunscreen'];

stuff.indexOf('boardshorts'); // 1

stuff.findIndex(function(item) {
    return item === 'boardshorts'
})
// 1

stuff.find(function(item) {
    return item === 'boardshorts'
})
//'boardshorts'

stuff.includes('boardshorts') //true


//Binary Search: compares target value to the middle element in list. If target value is larger than middle element, drop all elements smaller than middle element (drop higher values if target value is smaller)


