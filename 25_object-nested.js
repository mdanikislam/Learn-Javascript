let versity = {
    name:'Jhanagirnagar University',
    hall:'Mir Mosharraf Hossain Hall',
    location:'savar',
    department:{
        science: ['IT',  'Statics', "Physics", "CSE", "Chemistry"],
        commarce:['BBA','Finance', 'Accounting'],
        arts:['English',"Public Adminstration",'Economics']
    }
    
}
versity.department.science.push('Biochemistry', 'pharmacy')
console.log(versity.department.science);

