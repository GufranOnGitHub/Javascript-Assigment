interface Employee{
    empid:string,
    name:string
}

interface Project{
    pid:string,
    pname:string
}

interface User extends Employee,Project{
email:string
}

var a1:User = {
    empid:'A1',
    name:'Gufran',
    email:'test@gmail.com',
    pid:'p1',
    pname:'Test Project'
}

console.log(a1.empid);
console.log(a1.name);
console.log(a1.email);