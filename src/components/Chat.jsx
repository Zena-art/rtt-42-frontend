import { useState, useRef, useEffect } from "react"

export default function Chats() {
  const [userInput, setUserInput] = useState("");

  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    inputRef.current.focus();
  }, []);


  const handleChange = (e) => {
   const text =  e.target.value.trim();
   setUserInput(text);
  }

  const handleSubmit = (e) => {
   try {
    e.preventDefault();
    console.log(userInput);
    const message = {
      role: 'user',
      content: userInput
    }

    setMessages([...messages, message]);
    setUserInput("");
   } catch (error) {
    console.log(error);
   }
  }

  return (
    <div>
     <div>  
      {messages.map((message, index) => (
        <p key={index}>{message.content}</p>
      ))}
     </div>

     <form onSubmit={handleSubmit}>
      <label >
        <input 
        type="text" 
        name="userInput" 
        value={userInput} 
        ref={inputRef}
        onChange={handleChange}
        />
        <button>Send</button>
        </label>
      </form>



      </div>
  )
}