import './index.css'

const MyCard = props => {
  const {bannerCardsList} = props
  const {headerText, className} = bannerCardsList
  return (
    <li className={`card_sty ${className}`}>
      <div>
        <h1 className="heading_styling">{headerText}</h1>
        <p className="para_styling">
          Get the top class products for yourself with an extra off
        </p>
        <button className="button_sty">Show More</button>
      </div>
    </li>
  )
}

export default MyCard
