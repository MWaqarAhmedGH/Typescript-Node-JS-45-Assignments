//  Assignment # 14

/*  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes 
at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them 
to dinner.  */

let guestList: string [] = ["Syeda", "Zahara", "Sawera"];

//  Invite each person for Dinner

//  For Loop  (Procedure # 1)
for (let i=0; i<guestList.length; i++)
{
    console.log(`Dear ${guestList[i]}, You are heartly invited for dinner.`);
}
//  For Each Loop  (Procedure # 2)
guestList.forEach(variable =>
{
    console.log(`Dear ${variable}, You are heartly invited for dinner.`);
});
//  For Of Loop  (Procedure # 3)
for (const variable of guestList) 
{
    console.log(`Dear ${variable}, You are heartly invited for dinner.`);
}
