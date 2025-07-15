import React, {useState} from 'react';

export default function Home(props) {

  const [text, setText] = useState("");

  const capitalizeFirst = () => {
  let newText = text.charAt(0).toUpperCase() + text.slice(1);
  setText(newText);
}

const trimExtraSpaces = () => {
  let newText = text.replace(/\s+/g, ' ').trim();
  setText(newText);
}

 const toHandleUp=()=>{
   let newtext = text.toUpperCase();
   setText(newtext);
  }
  const toHandleLo=()=>{
   let newtext = text.toLowerCase();
   setText(newtext);
  }

 const toClear=(e)=>{
    
    setText("");
  }
 const toHandleChange=(e)=>{
      setText(e.target.value) ;
      console.log(e.target.value)
  }
 const toCopy=(e)=>{
      let mytext =  document.getElementById("mytext");
      // mytext.select();
      //   navigator.clipboard.writeText(mytext.value);


        mytext.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
  }

  const titleCase = () => {
  let newText = text.toLowerCase().split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  setText(newText);
};

 const spaceToComma = () => {
  setText(text.replace(/\s+/g, ','));
};
  
  return (
    <>
    
    <div >
       <div className="form-group  text-center">
    <h1 >{props.heading}</h1>
    
    <div className="form-group">
      <textarea className="form-control w-50 mx-auto" value={text} style={{backgroundColor:props.mode === "dark" ? "grey" : "white", color:props.mode=== "dark"? "white" : "black"}} onChange={toHandleChange} id="mytext" rows="3"></textarea>
    </div>
    <div>
    <button type="submit" onClick={titleCase} className="btn btn-primary rounded mb-2 mx-2">Title Case </button>
    <button type="submit" onClick={capitalizeFirst} className="btn btn-primary rounded mb-2 mx-2">capitalize First </button>
    <button type="submit" onClick={toHandleUp} className="btn btn-primary rounded mb-2 mx-2">Uppercase</button>
    <button type="submit" onClick={toHandleLo} className="btn btn-primary rounded w-12 mb-2 mx-2">Lowercase</button> <br/>
    <button type="submit" onClick={trimExtraSpaces} className="btn btn-danger rounded w-12 mb-2 mx-2">Remove Spaces</button>
    <button type="submit" onClick={spaceToComma} className="btn btn-danger rounded w-12 mb-2 mx-2">Add Commas </button>
   
    <button type="submit" onClick={toCopy} className="btn btn-success rounded w-12 mb-2 mx-2"> Copy</button>
    <button type="submit" onClick={toClear} className="btn btn-danger rounded w-12 mb-2 mx-2">Clear</button>
    </div>
  </div>
  <div className='container text-center mx-auto' style={{color:props.mode=== "dark"? "white" : "black"}}>
        <h1 className='mx-auto'>Your text Summary</h1>
        <p className='mx-auto text-center'>{text.length} characters and {text.split(" ").length} words</p>
  </div>
    </div>
    </>
  );
}

