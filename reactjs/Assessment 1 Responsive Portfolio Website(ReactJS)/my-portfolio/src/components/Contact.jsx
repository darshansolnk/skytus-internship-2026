import { useState } from "react";

const Contact = () => {

  const [form,setForm]=useState({
    name:"",email:"",message:""
  });

  const [error,setError]=useState(false);

  const handleChange=e=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit=e=>{
    e.preventDefault();

    if(!form.name || !form.email || !form.message){
      setError(true);
      return;
    }

    alert("Message Sent");
    setError(false);
  }

  return(
    <section id="contact">

      <h2>Contact</h2>

      <form
        onSubmit={handleSubmit}
        className={error ? "shake":""}
      >

        <input name="name" placeholder="Name"
        onChange={handleChange}/>

        <input name="email" placeholder="Email"
        onChange={handleChange}/>

        <textarea name="message"
        placeholder="Message"
        onChange={handleChange}/>

        <button className="btn">
          Send
        </button>

      </form>

    </section>
  )
}

export default Contact;
