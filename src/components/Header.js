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
        <h3>Sat, May 02 2020, 19:00</h3>
        <Countdown date={'Sat, 02 May 2020 19:00:00'} renderer={Renderer} />
      </div>
    </div>
    <nav />
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
