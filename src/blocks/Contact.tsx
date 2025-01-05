interface ContactItem {
    img: string,
    text: string
    href: string
    target: boolean
}


const contactItems: ContactItem[] = [
    {
        img: 'fb.png',
        text: 'facebook',
        href: 'https://www.facebook.com/profile.php?id=61571635464850',
        target: true
    },
    {
        img: 'viber.png',
        text: 'Viber Chat',
        href: 'viber://chat/?number=%2B995599873231',
        target: true
    },
    {
        img: 'whatsapp.png',
        text: 'Whatsapp Chat',
        href: 'https://api.whatsapp.com/send?phone=995599873231',
        target: true
    },
    {
        img: 'email.png',
        text: 'contact@devika.pro',
        href: 'mailto:contact@devika.pro',
        target: false
    }
]


const Contact = () => {
    return (
        <div className='contact' id='Contact'>
            <h2 className='subtitle'>Contact</h2>
            <ul className='contactItems grid2'>
                {contactItems.map(item =>
                    <li key={item.text} className='contact__item flex'>
                        <img src={require('../assets/img/contact/' + item.img)} alt={item.img}/>
                        <a className='text' target={item.target ? '_blank' : '_self'} href={item.href}>{item.text}</a>
                    </li>
                )
                }
            </ul>
        </div>
    );
};

export default Contact;