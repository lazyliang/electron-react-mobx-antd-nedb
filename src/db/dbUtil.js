const {remote} = window.require('electron')
const db = remote.getGlobal('collDb');




export function getData(store){
    db.find({n: 1}, function (err, docs) {
        console.log(docs);

        store.temp1 = docs
        // _this.setState({dbData : docs});
    });
}

export function getAllData(store) {
    db.find({}, function (err, docs) {
        console.log(docs,'docs')
        store.temp1 = docs
    });
}

export function insertData(doc) {
    db.insert(doc, function (err, newDoc) {// Callback is optional
    });
}

export function deleteData(){
    db.remove({ hello: 'hi' }, { multi: true }, function (err, numRemoved) {
        // numRemoved = 3
        // All planets from the solar system were removed
    });
}


