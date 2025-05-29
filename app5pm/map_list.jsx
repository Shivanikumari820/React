app .jsx


import Empdata from './Empdata';
const ans=Empdata.map((key)=>{
  return(
    <>
<tr>
<td>{key.emp_id}</td>
<td>{key.name}</td>
<td>{key.age}</td>
<td>{key.city}</td>
</tr>
    
    </>
  )
})
const App=()=> {
  // // const name=["raju","sanju","anju","manju"];
  // // const ans= name.map((index,key)=>{
  // //   return(
  // //     <>
  // //     <h1>{key}</h1>
  // //     </>
  // //   )
  // // })
  // const student=[
  //   {
  //     "emp-id":101,
  //     "name":"Bunny",
  //     "age":23,
  //     "city":"madrid"
      

  //   },
  //   {
  //     "emp-id":102,
  //     "name":"George",
  //     "age":22,
  //     "city":"Monaco"
      

  //   },
  //   {
  //     "emp-id":103,
  //     "name":"Ok",
  //     "age":21,
  //     "city":"Barcelona"
      

  //   },
  //   {
  //     "emp-id":104,
  //     "name":"maria",
  //     "age":33,
  //     "city":"sydney"
      

  //   },
    
  //   {
  //     "emp-id":105,
  //     "name":"John",
  //     "age":35,
  //     "city":"adelaide"
      

  //   },
    
  //   {
  //     "emp-id":106,
  //     "name":"Kevin",
  //     "age":37,
  //     "city":"boston"
      

  //   },
    
  // ]
  // const ans =student.map((key)=>{
  //   return (
  //     <>
      
  //     <tr>
  //       <td>{key.emp-id}</td>
  //       <td> {key.name}</td>
  //       <td> {key.age}</td>
  //       <td> {key.city}</td>
  //     </tr>
      

  //     </>
  //   )

  // })
  // return(
  //   <>
  //   <table>
  //     <tr>
  //       <th>Emp id</th>
  //       <th>Name</th>
  //       <th>Age</th>
  //       <th>City</th>
  //     </tr>
  //     <tbody>{ans}</tbody>
  //   </table>
  //   </>
  // )
    
return(
  <>
  <table>
    <tr>
      <th>Emp id</th>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
    <tbody>{ans}</tbody>
  </table>
  </>
)
}




  
  


export default App;



emp .jsx

const Empdata=[
    {
      "emp_id":101,
      "name":"Bunny",
      "age":23,
      "city":"madrid"
      

    },
    {
      "emp_id":102,
      "name":"George",
      "age":22,
      "city":"Monaco"
      

    },
    {
      "emp_id":103,
      "name":"Ok",
      "age":21,
      "city":"Barcelona"
      

    },
    {
      "emp_id":104,
      "name":"maria",
      "age":33,
      "city":"sydney"
      

    },
    
    {
      "emp_id":105,
      "name":"John",
      "age":35,
      "city":"adelaide"
      

    },
    
    {
      "emp_id":106,
      "name":"Kevin",
      "age":37,
      "city":"boston"
      

    }
]


export default Empdata;
