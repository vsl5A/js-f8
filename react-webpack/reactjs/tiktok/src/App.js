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


// import { useState ,useEffect} from 'react'
 
// function App() {
//   const arrtype = ['posts','comments','albums']
//   const [show, setshow] = useState(true)
// const [type, settype] = useState('comments')
// const [post, setpost] =useState([])
// const [gototop, setgototop] = useState(false)
// useEffect(() =>{
//   fetch(`https://jsonplaceholder.typicode.com/${type}`)
// .then( abc => abc.json())
// .then( posts => {setpost(posts);})
// },[type])
// useEffect(() =>{
//   const metmoi =() =>{setgototop(window.scrollY >= 200)}
//   window.addEventListener('scroll',metmoi)
// return () => {window.removeEventListener('scroll',metmoi)}
// },[])
  
//   return (
//     <div className="App">
      
//       <button onClick={() => setshow(!show)}>toggue</button><br></br>
//    <div>
//    {arrtype.map(ele =>(
//   <button key ={ele}
//   onClick={() => settype(ele)}>
//     {ele}
//   </button>
  
//   ))}
//    </div>
//   {show && (<ul>{post.map(ele=>(<li key={ele.id}>{ele.title}</li>))}</ul>)} 
//   {gototop && <button 
//   style={{position: 'fixed',bottom: 20,right:20}}>gototop</button>}
//       </div>
    
    
//   );
// }

// export default App;
// xem thỉ biết  chỉ có thể nói chức năng là fake api(không biết có đúng ko nữa)


// import { useState ,useEffect} from 'react'
 
// function App() {
  
//   const [show, setshow] = useState(true)

// const [count, setcount] = useState(180)
// useEffect(() => {
//   const qwert = setInterval(() => {
//     setcount(pre => pre -1)
//   }, 1000)
//  return () => clearInterval(qwert)
// }, [])

  
//   return (
//     <div className="App">
      
//       <button onClick={() => setshow(!show)}>toggue</button><br></br>
//    <div>
   
//    </div>
//   {show && (<h1>{count}</h1>
//   )} 
  
//       </div>
    
    
//   );
// }

// export default App;

// chức năng đếm ngược
import { useState, useRef } from 'react'
 
function App() {
  const [listjob,Setlistjob] = useState([]);
  const [job,Setjob] = useState('');
  const ele_fou = useRef();
  // const [listjoba,Setlistjoba] = useState([]);
  return (
    <div className="App">
      
      <input ref={ele_fou} value={job ||''} onChange={e =>Setjob(e.target.value)}></input>
      <button onClick={function(){
        Setlistjob(pre =>[...pre,job]);
        // Setlistjoba(listjob)
        Setjob('');
         ele_fou.current.focus();
    
    }}>regis</button>
      <ul>{listjob.map(function(ele,index)
      {return (
      <li key={index}>
        {
        <div>{ele} 
        <span onClick={function(){
          // const abcd = listjob;
          // abcd.splice(index,1,);
          Setjob(listjob.splice(index,1))
            Setlistjob(listjob)

        }}>&times;
        </span>
        
        
        </div>
        }
        
        </li>
                
                
                

              )
      
      }
      )
      
      }
      
      </ul>
      </div>
    
    
  );
}

export default App;
// chức năng todo_list update cần nghiên cứu lại