var a=10;
a=30;
a="sudhee";
a+="  vasavi"

document.write("value of a:"+a+"<br>");
document.write(a.length+"<br>");
var b="eswari";
b+=" sudhee&vasavi ";
document.write(b+"<br>");
var arr=[10,'sudhee',true];
document.write(arr[1],"<br><br>");

var student=[
stu1={
    'name':'sudhee',
    'rollno':'05f6',
    'clg':'aec',
    'branch':'cse'
},
stu2={
    'name':'vasavi',
    'rollno':'05g9',
    'clg':'aec',
    'branch':'cse'
}]


// document.write(student.stu1.name,'<br>');
// document.write(student.stu1.rollno,'<br>');
// document.write(student.stu1.clg,'<br>');
// document.write(student.stu1.branch,'<br>');

// document.write(student.stu2.name,'<br>');
// document.write(student.stu2.rollno,'<br>');
// document.write(student.stu2.clg,'<br>');
// document.write(student.stu2.branch,'<br><br>');
document.write(typeof(student[0]));
for(var i=0;i<student.length;i++){
    for(let k in student[i]){
        document.write(`${k} ${student[k]}`);
    }
}
