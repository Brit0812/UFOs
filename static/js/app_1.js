// import the data from data.js
const tableData = data;
//in java we use double slashes instead of # 

// Reference the HTML table using d3
//d3- java library that produces dynamic graphics 
var tbody = d3.select("tbody");


// were using a function within a function so no point in using a fat arrow
//forEach can ONLY be used in arrays- and could be combined with an arrow function
//the purpose of this function is to take the hard to read .js file and make it neat and easy to read- charted 
function buildTable(data){
    tbody.html("");
    data.forEach((dataRow) => {
        // next line will append a to the table body
        //let is being used because its limited to this block of code
        let row = tbody.append("tr");
        //obkect.-- function doesnt need to be indented- not like python
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            //.text(value) to the variable, we are extracting only the text of the value.
        });
    });
}

function handleClick(){
    //were using #datetime since its the list thing listed in the .js
    let date= d3.select("#datetime").property("value");
    let filterData= tableData
    //this let is being set equal to the previous const which was from the start of the .js- this is pulling the OG data.js
    // if statement syntax--- if (condition){code to execute}
    // pseudocode practice 
    // if (a date is entered){
        //filter the default dat to show only the date entered
    //};
    if (date){
        filterData= filterData.filter(row=> row.datetime===date);
        //=== triple equal signs means it MUST match exactly 
        //== double equal is much less strict then the ===, doesnt have to be exact

    };
    //since we already have a built function well only CALL on the variable
    buildTable(filterData);
}
//listen for the button- d3
d3.selectAll("#filter-btn").on("click", handleClick);

//build the table- when the page loads
buildTable(tableData);
