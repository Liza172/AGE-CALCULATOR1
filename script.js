const btn = document.getElementById("submit");

btn.addEventListener("click", () =>{
    const input1 = document.getElementById("input").value;
    let current = new Date;
    // console.log(current);
    const DOB = new Date(input1);
    // console.log(DOB);
    let curDate = current.getDate();
    let curMon = current.getMonth();
    let curYear = current.getFullYear();
    let DDate = DOB.getDate();
    let DMon = DOB.getMonth();
    let DYear = DOB.getFullYear();

    if(current < DOB)
    {
        alert("Please enter currct date");
        return;
    }
    if(curDate < DDate)
    {
        curDate += 30;
        curMon -= 1;
    }
    if(curMon < DMon)
    {
        curMon += 12;
        curYear -= 1;
    }
    let date = curDate - DDate;
    let month = curMon - DMon;
    let year = curYear - DYear;
    let age = `${year} years ${month} months ${date} days`;
    // console.log(age);
    const result1 = document.getElementById("result");
    result1.innerHTML = `Your age is ${age}`;
})


