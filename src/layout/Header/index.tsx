
const Header = () => {
  return (
    <header>
      {/* container start */}
      <div className="container">
        {/* navigation bar */}
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="index.html">
            <img src={`../../../public/assets/images/logo.png`} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              {/* <i class="icofont-navigation-menu ico_menu"></i> */}
              <span className="toggle-wrap">
                <span className="toggle-bar" />
              </span>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {/* secondery menu start */}
              <li className="nav-item has_dropdown">
                <a className="nav-link" href="#">
                  Home
                </a>
                <span className="drp_btn">
                  <i className="icofont-rounded-down" />
                </span>
                <div className="sub_menu">
                  <ul>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/01-App-Landing-Page-Defoult/index.html">Home 1 </a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/02-App-Landing-Page-Center-Hero/index.html"> Home 2 </a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/03-App-Landing-Page-Static-Hero/index.html">Home 3</a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/04-App-Landing-Page-Static-Hero-Center/index.html">Home 4</a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/05-App-Landing-Page-QR-Code-Hero/index.html">Home 5</a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/06-App-Landing-Page-Video-Hero/index.html">Home 6</a>
                    </li>
                    <li>
                      <a href="index.html">Home 7</a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/08-App-Landing-Page-Slider-Hero-Green/index.html">Home 8</a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/09-App-Landing-Page-Slider-Hero-Light-Green/index.html">Home 9</a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/10-App-Landing-Page-Static-Hero-Center-Light-Orange-Hero/index.html">Home 10</a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/11-App-Landing-Page-Static-Hero-Center-Blue/index.html">Home 11</a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/12-App-Landing-Page-Center-Hero-Orange-Gradient/index.html">Home 12</a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/13-App-Landing-Page-Slider-Hero-Circle-Animated-bg/index.html">Home 13</a>
                    </li>
                    <li>
                      <a href="https://kalanidhithemes.com/live-preview/landing-page/appix/all-demo/14-App-Landing-Page-QR-Code-Dark-Hero/index.html">Home 14</a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* secondery menu end */}
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About us
                </a>
              </li>
              {/* secondery menu start */}
              <li className="nav-item has_dropdown">
                <a className="nav-link" href="#">
                  Pages
                </a>
                <span className="drp_btn">
                  <i className="icofont-rounded-down" />
                </span>
                <div className="sub_menu">
                  <ul>
                    <li>
                      <a href="blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-detail.html">Single Blog</a>
                    </li>
                    <li>
                      <a href="sign-in.html">Sign In</a>
                    </li>
                    <li>
                      <a href="sign-up.html">Sign Up</a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* secondery menu end */}
              <li className="nav-item">
                <a className="nav-link" href="pricing.html">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="reviews.html">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog-list.html">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <div className="btn_block">
                  <a className="nav-link dark_btn" href="contact.html">
                    Download
                  </a>
                  <div className="btn_bottom" />
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {/* navigation end */}
      </div>
      {/* container end */}
    </header>
  );
};

export default Header;
