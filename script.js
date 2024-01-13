function say(massege, name){
    return{
        massege,
        name
    }
}
console.log(say('hi!!', "Rakib"));


let name = "Computer",
status = "MSI";
let machine = {
    name,
    status
};
console.log(machine);

let server = {
    name1 : "server",
    restart(){
        console.log("The " +this.name1 + " is restarting...");
    },
    "starting up"(){
        console.log("The " + this.name1 + " is starting...");
    }
};
server['restart']();
server['starting up']();