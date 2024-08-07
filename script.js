class Vehicle { // defines a class, class is a blueprint for creating objects with pre defined properties and methods

    constructor( make, model, year ) { // this method is a special method for creating and initializing an object created with the 'Vehicle' class it takes three params.

        // these properties (make, model, year) will store information about each specific vehicle object created from this class 
        this.make = make; // sets the instance var 'make' to the value passed in as a param.

        this.model = model; // sets the instance var 'model' of the object 

        this.year = year; // sets the instance 'year' of the object 
    }

    // this is a method defined within the class, when called on an obj, it returns the string 'beep' 
    honk() {
        return 'Beep';
    }

    // another method in the class, when called, it returns a string that provides desc. of the vehicle, it uses a template literal to dynamically insert 'make, model, and year' of the vehicle into the stirng 
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle { // new class named Car that inherits from the Vehicle class. the extends keyword is used to create a subclass (child class) that inherits properties and methods from a superclass (parent class) which is Vehicle class. meaning that Car class will have alll properties and methods of Vehicle, plus any additional properties or methods defined in Car 

    constructor( make, model, year ) { // takes the same params as the vehicle class, this constructor will be used to initialize new instances of the Car class 

        
        super( make, model, year ); // super keyword is used to call the constructor of the parent class 'Vehicle'. the line passes make model and year params to the vehicle constructor so car class can initialize properties inherited frm vehicle 

        this.numWheels = 4; // line defines a new properties numWheels for instances of the Car class setting it to 4. this indicates that every car obj will have 4 wheels which is specific to cars and not defined in the parent vehicle class 
    }
}

class Motorcycle extends Vehicle { // defines a new class that inherits from the vehicle class, motorcycle will have all the properties and methods of vehicle 

    constructor( make, model, year ) { // initializes a new instance of motorcycle with make model and year params 
        
        super( make, model, year ); // calls the parent class Vehicle contructor to set up make model and year properties inherited from vehicle 

        this.numWheels = 2; // adds new property specific to motorcylc setting it to 2 wheels 
    }

    // a method specific to motorcycle class, when called it returns the string VROOm 
    revEngine() {
        return 'VROON!!!';
    }
}

class Garage { // defines a nee class named Garage 

    constructor(capacity) { // method for the grarage class, it takes params 'capacity' which specifies how many vehicles the garage can hold 

        this.vehicles = []; // intializes an empty array to hold the vehicle stored in the garage 

        this.capacity = capacity; // sets the max number of vehicle the garage can hold 
    }

    add(vehicle) { // defines a method to add a vehicle to the garage 

        if (!(vehicle instanceof vehicle)) { // checks if the 'vehicle' is instance of 'Vehicle' class (or a subclass of 'Vehicle') if not it returns 'Only vehicole are allowed in here '
            return 'Only vehicles are allowed in here!';
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(vehicle);
        return 'Vehicle added';
    }
}