

class EventEmitter {
    constructor() {
        this.events={};
    }
    on(eventName, callback) {
        if(this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName]=[callback];//create new events
        }
    }
    trigger(eventName, ...rest) {
        if(this.events[eventName])
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
