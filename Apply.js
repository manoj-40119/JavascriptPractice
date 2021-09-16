let cse2021=["c","java","python"];
let ece2021=["vlsi","cmos","m1"];
const Student1 = {
    name:"Manoj",
    year:"2020",
    branch:"ECE"
}
const Student2 = {
    name:"Sai",
    year:"2021",
    branch:"CSE"
}
const college = function(sub,sub1,sub2){
    console.log(this.name+" "+this.year+" "+this.branch+" "+sub+" "+sub1+" "+sub2);

}
college.apply(Student2,["c","java","python"]);