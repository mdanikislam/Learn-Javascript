class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('Car is running');
        
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
    stopCounter(){
        console.log('stop Savar counter');
        
    }
}
const total = new Vehicle('Itihas', '60', '1', '2');
console.log(total);


