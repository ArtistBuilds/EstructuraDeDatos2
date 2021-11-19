class queue {
    constructor(){
        this.save=[];        
        this.start=0;
        this.last=0;            
    }

    enqueue(el){
        this.save[this.last]=el;   
        this.last++;                            
        return this.save;                    
    }

    dequeue(){
        if(this.start===this.last){
            return null;
        }
        const el=this.save[this.start];
        delete this.save[this.start];
        this.start++;
        return el;
    }

    peek(){
        if(this.size()===0){
            return null;
        }
        return this.save[this.start];
    }

    size(){
        return this.last-this.start;
    }

    print(){
        return this.save;
    }

    isEmpty(){
        if(this.start===this.last){
            return true;
        }
        return false;
        
    }
}