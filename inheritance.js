class Parent{
    constructor()
    {
        this.fatherName = 'Shelby';
    }
}
class Child extends Parent{
  
    constructor(name)
    {
        super();
        this.name = name;
    }
    getFullName()
    {
        return this.name +' '+ this.fatherName;
    }
}
const baby = new Child('Arnold');
const baby2 = new Child('Tommy');
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());