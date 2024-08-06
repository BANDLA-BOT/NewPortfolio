import './Scroller.css'

const Scroll = () => {
  return (
    <div>
        <div className="scroller" id='about'>
            <marquee  behavior='alternate'>
                <h1 className='scrolling_text'>Web Developer & Web designer Web Developer & Web designer </h1>
            </marquee>
        </div>


    </div>
  )
}

export default Scroll