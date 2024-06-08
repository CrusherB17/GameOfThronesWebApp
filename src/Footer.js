import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">
        {new Date().getFullYear()} Game of Thrones. All Rights Reserved
      </p>
    </div>
  )
}

export default Footer