// import { useState } from 'react'
//  const rad = ['qwert1','hjsfdr3','htrfgss5','jyhed9','dsfsd7']
// function App() {
//   const [count, setCount] = useState('');
//   function tang(){ setCount(rad[Math.floor(Math.random()*rad.length)]);}
//   function giam() {setCount(count -1);}
  
//   return (
//     <div className="App">
//       <h1 >{count ||'qwe577'}</h1>
//       <button onClick={tang}>clickme</button>
      
//       {/* <button onClick={giam}>giaM</button> */}
//     </div>
//   );
// }

// export default App;
// chức năng radom ra 1 phần tử từ mảng

// import { useState } from 'react'
//  const rada = [{
//   id: 1,
//   name : 'html'
//  },{
//   id: 2,
//   name : 'js'
//  },{
//   id: 3,
//   name : 'css'
//  },{
//   id: 4,
//   name : 'python'
//  }
// ]
// function App() {
//   const [check,setcheck] = useState()
  
//   return (
//     <div className="App">
//       {rada.map(function(abc)
//       {
//         return (<div key={abc.id}>
//           <input checked={check === abc.id}
//           onChange = {function(){setcheck(abc.id)}} 
//           type="radio"></input>
//           {abc.name}
//           </div>)
//       }
//       )}
//       </div>
//     // <div style={{padding: 32}}>{rada.map(function (ele) {return(<div key={ele.id}>
//     //   <input type="radio"></input>
//     //   {ele.name}
//     //   </div>)
    
//     //   })}</div>
    
//   );
// }

// export default App;
//  chức năng check input

// import { useState } from 'react'
 
// function App() {
//   const [listjob,Setlistjob] = useState([]);
//   const [job,Setjob] = useState('');
  
//   return (
//     <div className="App">
      
//       <input value={job ||''} onChange={e =>Setjob(e.target.value)}></input>
//       <button onClick={function(){Setlistjob(pre =>[...pre,job]);Setjob('')
    
//     }}>regis</button>
//       <ul>{listjob.map(function(ele,index)
//       {return (<li key={index}>{ele}</li>
      
//       )
      
//       }
//       )
      
//       }
      
//       </ul>
//       </div>
    
    
//   );
// }

// export default App;
// chức năng todolist
import { useState, useEffect } from 'react'
 
function App() {
  const [listjob,Setlistjob] = useState([]);
  const [job,Setjob] = useState('');
  useEffect(function(){
    return(fetch('https://jsonplaceholder.typicode.com/posts')
    .then (abc =>abc.json())
    .then(job =>{console.log(job)}))
  })
  return (
    <div className="App">
      
      
      </div>
    
    
  );
}

export default App;