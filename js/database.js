export default function getAirtable(api_key, basekey){
    
    console.log(api_key);
    console.log(basekey);
    const Airtable = require('airtable');
    var base = new Airtable({apiKey: api_key}).base(basekey);
    return base;
}
// export default class Airtable_T{
//     constructor(){
        
//     }
//     init(data){
//         // let {API_KEY, BASE_KEY} = {data};
//         const Airtable = require('airtable');
//         require('dotenv').config();
//         const {API_KEY, BASE} = process.env;
//         console.log(API_KEY);
//         this.base = new Airtable({apiKey: API_KEY}).base(BASE);
//     }
// }
// // console.log(xxxxxx);
// // const Airtable = require('airtable');
// // require('dotenv').config();
// // const {API_KEY, BASE} = process.env;
// // console.log(API_KEY);
// // const base = new Airtable({apiKey: API_KEY}).base(BASE);

// // export default base;

// // console.log(base);
// // console.log("aaa");
// // // base('Normal_generate').select({
// // //     // Selecting the first 3 records in Grid view:
// // //     maxRecords: 3,
// // //     view: "Grid view"
// // // }).eachPage(function page(records, fetchNextPage) {
// // //     // This function (`page`) will get called for each page of records.

// // //     records.forEach(function(record) {
// // //         console.log('Retrieved', record.get('Name'));
// // //     });

// // //     // To fetch the next page of records, call `fetchNextPage`.
// // //     // If there are more records, `page` will get called again.
// // //     // If there are no more records, `done` will get called.
// // //     fetchNextPage();

// // // }, function done(err) {
// // //     if (err) { console.error(err); return; }
// // // });