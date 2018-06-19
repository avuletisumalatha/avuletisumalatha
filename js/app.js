var user={{ name:"suma",age:23, company:"jspiders"},
            {name:"suguna",age:23,company:"tcs"}}

for (const key in user)
 {
    if (user.hasOwnProperty(key)) 
    {
        const element = user[key];
       console.log(key+":"+element ); 
    }
}