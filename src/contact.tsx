import './contact.css'
import {useState} from "react";
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faLinkedin, faGithub, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
 
import axios from 'axios';

function contact()
{
  const [form,setForm]=useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });

  const [loading,setLoading]=useState(false);

  

  const [status,setStatus]=useState("");
  

  const handleChange=(e: { target: { name: any; value: any; }; })=>{
setForm({...form,[e.target.name]:e.target.value});
  };
  let statusMessage;

if (loading) {
  statusMessage = <div className="loading-message">Sending message...</div>;
} else if (status) {
  statusMessage = <div className="success-message">{status}</div>;
} else {
  statusMessage = null; // nothing to show
}
  const handleSubmit=async (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    setLoading(true);

    try
    {
      const res =await axios.post("https://api-ali-shamal-portfolio.vercel.app/contact",form);
      if(res.data.success)
      {
          setStatus("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" }); // reset form
      } else {
        setStatus("Failed to send message.");
      }
setLoading(false);

    }catch(error)
    {
      setLoading(false);

            console.error(error);
      setStatus("Error sending message.");
    }

  };
    return <>
     <form onSubmit={handleSubmit}>
    <div className="contact-container" id="contact-page">
        <h3>Contact Me</h3>
        <p>Feel free to reach out for project inquiries, collaborations, or any questions. I’m always open to discussing new ideas and opportunities.</p>
<div className="contact-content">

<div className="right-contact">
    <div className="contact-message">
     <p> Name<div className="required">*</div></p>
   <input
                type="text"
                name="name"
                 placeholder="Your Name"
                    value={form.name}
                 onChange={handleChange}
                 required
              />
    </div>
        <div className="contact-message">
    <p> Email<div className="required">*</div></p>
   <input
                type="email"
                name="email"
                   value={form.email}
                 onChange={handleChange}
                 placeholder="Your.example@example.com"
                 required
              />
    </div>
            <div className="contact-message">
    <p> Subject</p>
   <input
                type="text"
                name="subject"
                   value={form.subject}
                 onChange={handleChange}
                 placeholder="What's this about?"
                 required
              />
    </div>
            <div className="contact-message">
    <p> message<div className="required">*</div></p>
   <textarea
                 name="message"
                 value={form.message}
                 minLength={15}
                 
                 onChange={handleChange}
                 placeholder="Tell me about your idea and what you’d like to achieve."
                 required
              />
    </div>
<button type="submit" disabled={loading}>
  {loading ? "Sending..." : "Send Message"}
</button>
    
 </div>
<div className="left-contact">
    <h2>Get In Touch</h2>
<div className="info-contact">
<div className="icon-contact">
 📧
</div>
<div className="content-contact">
    <h5>Email</h5>
    <a href='mailto:ali.shamal.code@gmail.com?subject=Contact&body=Hello%20Ali%2C%20I%20want%20to%20message%20you'>ali.shamal.code@gmail.com</a>
</div>

</div>
<div className="info-contact">
<div className="icon-contact">
 📱
</div>
<div className="content-contact">
    <h5>Phone</h5>
    <a href="https://wa.me/9647507686271?text=Hello%20Ali%20I%20want%20to%20contact%20you" target="_blank">+964 750 768 6271</a>
</div>

</div>
<div className="info-contact">
<div className="icon-contact">
 📍
</div>
<div className="content-contact">
    <h5>Location</h5>
    <small>  Duhok City, Duhok Governorate, Kurdistan Region, Iraq
</small>
</div>

</div>
    <h2>Fallow Me</h2>
   <div className="fallowMe-social">
  <a 
    href="https://www.linkedin.com/in/ali-shamal-895516288/" 
    className="social-fallow"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faLinkedin} />
  </a>

  <a 
    href="https://github.com/AliShSalih9" 
    className="social-fallow"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faGithub} />
  </a>

  <a 
    href="#" 
    className="social-fallow"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faInstagram} />
  </a>

  <a 
    href="https://www.facebook.com/ali.sh.salih.2025" 
    className="social-fallow"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faFacebook} />
  </a>
</div>

   
 
</div>
</div>
    </div>
        </form>

    </>
}

export default contact;
