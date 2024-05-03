import BaseClass from "./BaseClass";

class Derived_class extends BaseClass {
    name(name:string): string[] {
        console.log("Derived class is here");
        return [name, "BBBB"]
    }
}

export default Derived_class;