import './services.css';
function services()
{
    interface Service{
        service:string,
        desc:string,
        logo:string
    }
   const services: Service[] = [
  {
    service: 'Mobile App Development',
    desc: 'I create fast, modern, and user-friendly mobile apps for Android and iOS using Flutter — including UI design, API integration, database setup, and full deployment.',
    logo: 'https://cdni.iconscout.com/illustration/premium/thumb/mobile-app-development-illustration-svg-download-png-6529899.png'
  },
  {
    service: 'Web Development',
    desc: 'I build responsive, secure, and high-performance websites and web applications using modern technologies, ensuring smooth UI/UX and strong backend functionality.',
    logo: 'https://static.vecteezy.com/system/resources/previews/011/153/368/non_2x/3d-website-developer-working-on-laptop-illustration-png.png'
  },
  {
    service: 'IT Support & Technical Solutions',
    desc: 'I provide reliable technical support, troubleshooting, system setup, network assistance, and software/hardware solutions to keep your technology running smoothly.',
    logo: 'https://www.pngall.com/wp-content/uploads/4/Support-PNG-Transparent-HD-Photo.png'
  }
];

    return <>
    <div className="services-container">
        <h2 className='section-title-underline'>Services</h2>
        <p>Discover the range of services I offer, designed to help you build modern, fast, and scalable digital products.</p>
        <div className="services-card"> {services.map((service, index) => (
    <div className="service-card" key={index}>
        <img src={service.logo}/>
      <h3>{service.service}</h3>
      <p>{service.desc}</p>
    </div>
  ))}
        </div>
    </div>
    </>
}

export default services;