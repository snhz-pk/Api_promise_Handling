var list=[]
let url = fetch("https://dummyjson.com/products");
url.then((item) => {
    return item.json()
}).then((get_Api_Id) => {
    for (var prop in get_Api_Id) {
        // object[prop]
        this.list.push(get_Api_Id[prop])
        break;
        
    }
    console.warn("Api's id list will be : " ,this.list[0][28].title)
}).catch((reject_error) => {
    alert("Rejection occur")
})
url.finally(() => {
  console.warn("promises works either resolve/reject");
})
