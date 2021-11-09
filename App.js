import React, {useState} from 'react'

function App()  {
const [name, setName] = useState("");
function handleChange(event) {
console.log(event.target.value);
setName(event.target.value);

    
}

    return (
        <div className="container">
        <h1>Hello {name}</h1>
        <input onChange={handleChange}
        type="text" placeholder="what's your name?" value={name} /><br /><br />
        <button >Submit</button>
            
        </div>
    )
}


export default App;
