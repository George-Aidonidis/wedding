import React from 'react'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown-now'

const Renderer = ({ days, hours, minutes, seconds }) => (
  <>
    <p>
      {days} days {hours} hours {minutes} minutes {seconds} seconds
    </p>
  </>
)

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Save the date</h1>
        <h3>Sat, May 02 2020, 18:30</h3>
        <Countdown date={'Sat, 02 May 2020 18:30:00'} renderer={Renderer} />
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="https://www.google.com/maps/place/Royal+Heights+Resort+%CE%9E%CE%B5%CE%BD%CE%BF%CE%B4%CE%BF%CF%87%CE%B5%CE%AF%CE%BF/@35.273828,25.4597423,17z/data=!4m18!1m9!3m8!1s0x149a64b084782865:0x343092e8b77a0157!2zUm95YWwgSGVpZ2h0cyBSZXNvcnQgzp7Otc69zr_OtM6_z4fOtc6vzr8!5m2!4m1!1i2!8m2!3d35.273828!4d25.461931!3m7!1s0x149a64b084782865:0x343092e8b77a0157!5m2!4m1!1i2!8m2!3d35.273828!4d25.461931"
            target="blank"
          >
            Location
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
