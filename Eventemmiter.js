

class EventEmitter {
    constructor() {
        this.events={};
    }
    on(eveName, callback) {
        if(this.events[evetnName]) {
            this.events[evetnName].push(callback);
        } else {
            this.events[evetnName]=[callback];//create new events
        }
    }
    trigger(eventname, ...rest) {
        if(this.events[evetnName])
        {
            this.events[eventName].forEach(cb=>{
            cb.apply(null,rest)
            })
        }
} 
}  

const ee=new EventEmitter();
ee.on("change",()=>{
    console.log("learning");
})

ee.trigger("change");
