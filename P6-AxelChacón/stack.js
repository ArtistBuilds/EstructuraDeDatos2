class arrStack{
    constructor(){
        this.save=[];
        this.count=0;
    }
    push(){};
    pop(){};
    peek(){};
    size(){};
    print(){};
}

const Stack = new StackA();

class objStack{
    constructor(){
        this.save={};
        this.count=0;
    }

    push(el){
        this.save[this.count]=el;
        this.count++;
        return this.save;
    }
    pop(){
        if(this.count===0){
            return null;
        }
        this.count--;
        const el = this.save[this.count];
        delete this.save[this.count];
        return el;
    }
    peek(){
        if(this.count===0){
            return null;
        }
        return this.save[this.count-1];
    }   
    size(){
        return this.count;
    }
    print(){
        return this.save;
    }
}