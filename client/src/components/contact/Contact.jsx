import './Contact.css'
const Contact = () => {
  return (
    <div className='form'>
        <div className='contact'>
            <h2>Contact</h2>
            <form action="">
                <div className='fn inputs'>
                <label htmlFor="">Full name</label>
                <input type="text" />
                </div>
                <div className='email inputs'>
                <label htmlFor="">Email</label>
                <input type="email" />
                </div>
                <div className='mes inputs'>
                <label htmlFor="">Message</label>
                <input type="text" />
                </div>
                <div className='btn'>
                    <input type="submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact