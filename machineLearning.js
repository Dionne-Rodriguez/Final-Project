const fetch = require('node-fetch');


var body = JSON.stringify(inputs)
fetch('https://ussouthcentral.services.azureml.net/workspaces/0c9abdb29d054db49d70577568da4823/services/d876d3f3734b4bc5a76c6a286ab09178/execute?api-version=2.0&details=true', {
   method: 'post',
   headers:{
     'Authorization': 'Bearer 5FyF8X3eOhJ5HN6wm+v/fLCIo8CrEOD/h2u71z/Ayl6iI2r20sMUQJz90PwMJIYRYgoDUVfeCdrRCvDR0bTyng==',
     'Content-Type': 'application/json',
     'Content-Length': body.length
   },
   body: JSON.stringify(inputs)
 }).then(res => res.json())
//     .then(response => {
//    const values = response.Results.output1.value.Values
//    console.log(values[values.length-1])
// })
