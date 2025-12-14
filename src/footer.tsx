// Footer.jsx
import './footer.css';

function Footer() {
    const developer={
        name:"Ali Shamal Salih",
        role:"Software Engineer | Full Stack Developer",
        location:"Duhok, Kurdistan Regional Government (KRG), Iraq",
        contact : 'github.com/AliShSalih9 | linkedin.com/in/ali-shamal-895516288',
        passion: "Clean Code & Innovation"

    }
    const currentYear= new Date().getFullYear();
    return (
       
    <div className="footer">
            
 
<div className="terminal-line">$ cat contact.txt</div>
            <div className="terminal-line"><span>&gt;</span> {developer.contact}</div>
                        <div className="terminal-line">$ cat copyright.txt</div>

                   <div className="terminal-line"><span>&gt;</span> © {currentYear} {developer.name}. All rights reserved.</div>
 <div className="terminal-line">
  $ <span className="cursor"></span>
</div>

            </div>       
    );
}

export default Footer;

 