import React from "react";

const Save = () => {
  return (
    <>
      <div className="wrapper">
        <div className="preloader" />
        {/* Main Header Nav */}
        <header className="header-nav nav-innerpage-style menu-home4 dashboard_header main-menu">
          {/* Ace Responsive Menu */}
          <nav className="posr">
            <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
              <div className="row align-items-center justify-content-between">
                <div className="col-6 col-lg-auto">
                  <div className="text-center text-lg-start d-flex align-items-center">
                    <div className="dashboard_header_logo position-relative me-2 me-xl-5">
                      <a href="index.html" className="logo">
                        <img src="images/header-logo-dark.svg" alt="" />
                      </a>
                    </div>
                    <div className="fz20 ml90">
                      <a href="#" className="dashboard_sidebar_toggle_icon vam">
                        <img src="images/dashboard-navicon.svg" alt="" />
                      </a>
                    </div>
                    <a
                      className="login-info d-block d-xl-none ml40 vam"
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                      role="button"
                    >
                      <span className="flaticon-loupe" />
                    </a>
                    <div className="ml40 d-none d-xl-block">
                      <div className="search_area dashboard-style">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="What service are you looking for today?"
                        />
                        <label>
                          <span className="flaticon-loupe" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-auto">
                  <div className="text-center text-lg-end header_right_widgets">
                    <ul className="dashboard_dd_menu_list d-flex align-items-center justify-content-center justify-content-sm-end mb-0 p-0">
                      <li className="d-none d-sm-block">
                        <a
                          className="text-center mr5 text-thm2 dropdown-toggle fz20"
                          type="button"
                          data-bs-toggle="dropdown"
                          href="#"
                        >
                          <span className="flaticon-notification" />
                        </a>
                        <div className="dropdown-menu">
                          <div className="dboard_notific_dd px30 pt10 pb15">
                            <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                              <img src="images/resource/notif-1.png" alt="" />
                              <div className="details ml10">
                                <p className="text mb-0">Your resume</p>
                                <p className="text mb-0">updated!</p>
                              </div>
                            </div>
                            <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                              <img src="images/resource/notif-2.png" alt="" />
                              <div className="details ml10">
                                <p className="text mb-0">You changed</p>
                                <p className="text mb-0">password</p>
                              </div>
                            </div>
                            <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                              <img src="images/resource/notif-3.png" alt="" />
                              <div className="details ml10">
                                <p className="text mb-0">
                                  Your account has been
                                </p>
                                <p className="text mb-0">
                                  created successfully
                                </p>
                              </div>
                            </div>
                            <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                              <img src="images/resource/notif-4.png" alt="" />
                              <div className="details ml10">
                                <p className="text mb-0">
                                  You applied for a job{" "}
                                </p>
                                <p className="text mb-0">Front-end Developer</p>
                              </div>
                            </div>
                            <div className="notif_list d-flex align-items-center">
                              <img src="images/resource/notif-5.png" alt="" />
                              <div className="details ml10">
                                <p className="text mb-0">
                                  Your course uploaded
                                </p>
                                <p className="text mb-0">successfully</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-none d-sm-block">
                        <a
                          className="text-center mr5 text-thm2 dropdown-toggle fz20"
                          type="button"
                          data-bs-toggle="dropdown"
                          href="#"
                        >
                          <span className="flaticon-mail" />
                        </a>
                        <div className="dropdown-menu">
                          <div className="dboard_notific_dd px30 pt20 pb15">
                            <div className="notif_list d-flex align-items-start bdrb1 pb25 mb10">
                              <img
                                className="img-2"
                                src="images/testimonials/testi-1.png"
                                alt=""
                              />
                              <div className="details ml15">
                                <p className="dark-color fw500 mb-2">
                                  Ali Tufan
                                </p>
                                <p className="text mb-2">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                                </p>
                                <p className="mb-0 text-thm">4 hours ago</p>
                              </div>
                            </div>
                            <div className="notif_list d-flex align-items-start mb25">
                              <img
                                className="img-2"
                                src="images/testimonials/testi-2.png"
                                alt=""
                              />
                              <div className="details ml15">
                                <p className="dark-color fw500 mb-2">
                                  Ali Tufan
                                </p>
                                <p className="text mb-2">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                                </p>
                                <p className="mb-0 text-thm">4 hours ago</p>
                              </div>
                            </div>
                            <div className="d-grid">
                              <a
                                href="page-dashboard-message.html"
                                className="ud-btn btn-thm w-100"
                              >
                                View All Messages
                                <i className="fal fa-arrow-right-long" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-none d-sm-block">
                        <a
                          className="text-center mr5 text-thm2 dropdown-toggle fz20"
                          type="button"
                          data-bs-toggle="dropdown"
                          href="#"
                        >
                          <span className="flaticon-like" />
                        </a>
                        <div className="dropdown-menu">
                          <div className="dboard_notific_dd px30 pt10 pb15">
                            <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                              <img src="images/resource/notif-1.png" alt="" />
                              <div className="details ml10">
                                <p className="text mb-0">Your resume</p>
                                <p className="text mb-0">updated!</p>
                              </div>
                            </div>
                            <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                              <img src="images/resource/notif-2.png" alt="" />
                              <div className="details ml10">
                                <p className="text mb-0">You changed</p>
                                <p className="text mb-0">password</p>
                              </div>
                            </div>
                            <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                              <img src="images/resource/notif-3.png" alt="" />
                              <div className="details ml10">
                                <p className="text mb-0">
                                  Your account has been
                                </p>
                                <p className="text mb-0">
                                  created successfully
                                </p>
                              </div>
                            </div>
                            <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                              <img src="images/resource/notif-4.png" alt="" />
                              <div className="details ml10">
                                <p className="text mb-0">
                                  You applied for a job{" "}
                                </p>
                                <p className="text mb-0">Front-end Developer</p>
                              </div>
                            </div>
                            <div className="notif_list d-flex align-items-center">
                              <img src="images/resource/notif-5.png" alt="" />
                              <div className="details ml10">
                                <p className="text mb-0">
                                  Your course uploaded
                                </p>
                                <p className="text mb-0">successfully</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="user_setting">
                        <div className="dropdown">
                          <a className="btn" href="#" data-bs-toggle="dropdown">
                            <img
                              src="images/resource/user.png"
                              alt="user.png"
                            />
                          </a>
                          <div className="dropdown-menu">
                            <div className="user_setting_content">
                              <p className="fz15 fw400 ff-heading mb10 pl30">
                                Start
                              </p>
                              <a
                                className="dropdown-item"
                                href="page-dashboard.html"
                              >
                                <i className="flaticon-home mr10" />
                                Dashboard
                              </a>
                              <a
                                className="dropdown-item"
                                href="page-dashboard-proposal.html"
                              >
                                <i className="flaticon-document mr10" />
                                My Proposals
                              </a>
                              <a
                                className="dropdown-item active"
                                href="page-dashboard-save.html"
                              >
                                <i className="flaticon-like mr10" />
                                Saved
                              </a>
                              <a
                                className="dropdown-item"
                                href="page-dashboard-message.html"
                              >
                                <i className="flaticon-chat mr10" />
                                Message
                              </a>
                              <a
                                className="dropdown-item"
                                href="page-dashboard-reviews.html"
                              >
                                <i className="flaticon-review-1 mr10" />
                                Reviews
                              </a>
                              <a
                                className="dropdown-item"
                                href="page-dashboard-invoice.html"
                              >
                                <i className="flaticon-receipt mr10" />
                                Invoice
                              </a>
                              <a
                                className="dropdown-item"
                                href="page-dashboard-payouts.html"
                              >
                                <i className="flaticon-dollar mr10" />
                                Payouts
                              </a>
                              <a
                                className="dropdown-item"
                                href="page-dashboard-statement.html"
                              >
                                <i className="flaticon-web mr10" />
                                Statements
                              </a>
                              <p className="fz15 fw400 ff-heading mt30 pl30">
                                Organize and Manage
                              </p>
                              <a
                                className="dropdown-item"
                                href="page-dashboard-manage-service.html"
                              >
                                <i className="flaticon-presentation mr10" />
                                Manage Services
                              </a>
                              <a
                                className="dropdown-item"
                                href="page-dashboard-manage-jobs.html"
                              >
                                <i className="flaticon-briefcase mr10" />
                                Manage Jobs
                              </a>
                              <a
                                className="dropdown-item"
                                href="page-dashboard-favorites.html"
                              >
                                <i className="flaticon-content mr10" />
                                Manage Project
                              </a>
                              <p className="fz15 fw400 ff-heading mt30 pl30">
                                Account
                              </p>
                              <a
                                className="dropdown-item"
                                href="page-dashboard-profile.html"
                              >
                                <i className="flaticon-photo mr10" />
                                My Profile
                              </a>
                              <a
                                className="dropdown-item"
                                href="page-login.html"
                              >
                                <i className="flaticon-logout mr10" />
                                Logout
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* Search Modal */}
        <div className="search-modal">
          <div
            className="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex={-1}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel" />
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fal fa-xmark" />
                  </button>
                </div>
                <div className="modal-body">
                  <div className="popup-search-field search_area">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="What service are you looking for today?"
                    />
                    <label>
                      <span className="far fa-magnifying-glass" />
                    </label>
                    <button className="ud-btn btn-thm" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Nav  */}
        <div id="page" className="mobilie_header_nav stylehome1">
          <div className="mobile-menu">
            <div className="header bdrb1">
              <div className="menu_and_widgets">
                <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
                  <a className="mobile_logo" href="#">
                    <img src="images/header-logo3.svg" alt="" />
                  </a>
                  <div className="right-side text-end">
                    <a className="" href="page-login.html">
                      join
                    </a>
                    <a className="menubar ml30" href="#menu">
                      <img src="images/mobile-dark-nav-icon.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="posr">
                <div className="mobile_menu_close_btn">
                  <span className="far fa-times" />
                </div>
              </div>
            </div>
          </div>
          {/* /.mobile-menu */}
          <nav id="menu" className="">
            <ul>
              <li>
                <span>Home</span>
                <ul>
                  <li>
                    <a href="index.html">Home V1</a>
                  </li>
                  <li>
                    <a href="index2.html">Home V2</a>
                  </li>
                  <li>
                    <a href="index3.html">Home V3</a>
                  </li>
                  <li>
                    <a href="index4.html">Home V4</a>
                  </li>
                  <li>
                    <a href="index5.html">Home V5</a>
                  </li>
                  <li>
                    <a href="index6.html">Home V6</a>
                  </li>
                  <li>
                    <a href="index7.html">Home V7</a>
                  </li>
                  <li>
                    <a href="index8.html">Home V8</a>
                  </li>
                  <li>
                    <a href="index9.html">Home V9</a>
                  </li>
                  <li>
                    <a href="index10.html">Home V10</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Browse Jobs</span>
                <ul>
                  <li>
                    <span>Services</span>
                    <ul>
                      <li>
                        <a href="page-service-v1.html">Service v1</a>
                      </li>
                      <li>
                        <a href="page-service-v2.html">Service v2</a>
                      </li>
                      <li>
                        <a href="page-service-v3.html">Service v3</a>
                      </li>
                      <li>
                        <a href="page-service-v4.html">Service v4</a>
                      </li>
                      <li>
                        <a href="page-service-v5.html">Service v5</a>
                      </li>
                      <li>
                        <a href="page-service-v6.html">Service v6</a>
                      </li>
                      <li>
                        <a href="page-service-v7.html">Service v7</a>
                      </li>
                      <li>
                        <a href="page-service-all.html">Service All</a>
                      </li>
                      <li>
                        <a href="page-service-single.html">Service Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Projects</span>
                    <ul>
                      <li>
                        <a href="page-project-v1.html">Project v1</a>
                      </li>
                      <li>
                        <a href="page-project-single.html">Project Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Job View</span>
                    <ul>
                      <li>
                        <a href="page-job-list-v1.html">Job list v1</a>
                      </li>
                      <li>
                        <a href="page-job-list-v2.html">Job list v2</a>
                      </li>
                      <li>
                        <a href="page-job-list-v3.html">Job list V3</a>
                      </li>
                      <li>
                        <a href="page-job-list-single.html">Job Single</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span>Users</span>
                <ul>
                  <li>
                    <span>Dashboard</span>
                    <ul>
                      <li>
                        <a href="page-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="page-dashboard-proposal.html">Proposal</a>
                      </li>
                      <li>
                        <a href="page-dashboard-save.html">Saved</a>
                      </li>
                      <li>
                        <a href="page-dashboard-message.html">Message</a>
                      </li>
                      <li>
                        <a href="page-dashboard-reviews.html">Reviews</a>
                      </li>
                      <li>
                        <a href="page-dashboard-invoice.html">Invoice</a>
                      </li>
                      <li>
                        <a href="page-dashboard-payouts.html">Payouts</a>
                      </li>
                      <li>
                        <a href="page-dashboard-statement.html">Statement</a>
                      </li>
                      <li>
                        <a href="page-dashboard-manage-service.html">
                          Manage Service
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-add-service.html">
                          Add Services
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-manage-jobs.html">
                          Manage Jobs
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-manage-project.html">
                          Manage Project
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-create-project.html">
                          Create Project
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-profile.html">My Profile</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Employee</span>
                    <ul>
                      <li>
                        <a href="page-employee-v1.html">Employee V1</a>
                      </li>
                      <li>
                        <a href="page-employee-v2.html">Employee V2</a>
                      </li>
                      <li>
                        <a href="page-employee-single.html">Employee Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Freelancer</span>
                    <ul>
                      <li>
                        <a href="page-freelancer-v1.html">Freelancer V1</a>
                      </li>
                      <li>
                        <a href="page-freelancer-v2.html">Freelancer V2</a>
                      </li>
                      <li>
                        <a href="page-freelancer-v3.html">Freelancer V3</a>
                      </li>
                      <li>
                        <a href="page-freelancer-single.html">
                          Freelancer Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-become-seller.html">Become Seller</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Pages</span>
                <ul>
                  <li>
                    <span>About</span>
                    <ul>
                      <li>
                        <a href="page-about.html">About v1</a>
                      </li>
                      <li>
                        <a href="page-about-v2.html">About v2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Shop</span>
                    <ul>
                      <li>
                        <a href="page-shop.html">List</a>
                      </li>
                      <li>
                        <a href="page-shop-single.html">Single</a>
                      </li>
                      <li>
                        <a href="page-shop-cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="page-shop-checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="page-shop-order.html">Order</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="page-error.html">404</a>
                  </li>
                  <li>
                    <a href="page-faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="page-help.html">Help</a>
                  </li>
                  <li>
                    <a href="page-invoice.html">Invoices</a>
                  </li>
                  <li>
                    <a href="page-login.html">Login</a>
                  </li>
                  <li>
                    <a href="page-pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="page-register.html">Register</a>
                  </li>
                  <li>
                    <a href="page-terms.html">Terms</a>
                  </li>
                  <li>
                    <a href="page-ui-element.html">UI Elements</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Blog</span>
                <ul>
                  <li>
                    <a href="page-blog-v1.html">List V1</a>
                  </li>
                  <li>
                    <a href="page-blog-v2.html">List V2</a>
                  </li>
                  <li>
                    <a href="page-blog-v3.html">List V3</a>
                  </li>
                  <li>
                    <a href="page-blog-single.html">Single</a>
                  </li>
                </ul>
              </li>
              {/* Only for Mobile View */}
            </ul>
          </nav>
        </div>
        <div className="dashboard_content_wrapper">
          <div className="dashboard dashboard_wrapper pr30 pr0-xl">
            <div className="dashboard__sidebar d-none d-lg-block">
              <div className="dashboard_sidebar_list">
                <p className="fz15 fw400 ff-heading pl30">Start</p>
                <div className="sidebar_list_item">
                  <a href="page-dashboard.html" className="items-center">
                    <i className="flaticon-home mr15" />
                    Dashboard
                  </a>
                </div>
                <div className="sidebar_list_item">
                  <a
                    href="page-dashboard-proposal.html"
                    className="items-center"
                  >
                    <i className="flaticon-document mr15" />
                    My Proposals
                  </a>
                </div>
                <div className="sidebar_list_item">
                  <a
                    href="page-dashboard-save.html"
                    className="items-center -is-active"
                  >
                    <i className="flaticon-like mr15" />
                    Saved
                  </a>
                </div>
                <div className="sidebar_list_item ">
                  <a
                    href="page-dashboard-message.html"
                    className="items-center"
                  >
                    <i className="flaticon-chat mr15" />
                    Message
                  </a>
                </div>
                <div className="sidebar_list_item ">
                  <a
                    href="page-dashboard-reviews.html"
                    className="items-center"
                  >
                    <i className="flaticon-review-1 mr15" />
                    Reviews
                  </a>
                </div>
                <div className="sidebar_list_item">
                  <a
                    href="page-dashboard-invoice.html"
                    className="items-center"
                  >
                    <i className="flaticon-receipt mr15" />
                    Invoice
                  </a>
                </div>
                <div className="sidebar_list_item">
                  <a
                    href="page-dashboard-payouts.html"
                    className="items-center"
                  >
                    <i className="flaticon-dollar mr15" />
                    Payouts
                  </a>
                </div>
                <div className="sidebar_list_item">
                  <a
                    href="page-dashboard-statement.html"
                    className="items-center"
                  >
                    <i className="flaticon-web mr15" />
                    Statements
                  </a>
                </div>
                <p className="fz15 fw400 ff-heading pl30 mt30">
                  Organize and Manage
                </p>
                <div className="sidebar_list_item ">
                  <a
                    href="page-dashboard-manage-service.html"
                    className="items-center"
                  >
                    <i className="flaticon-presentation mr15" />
                    Manage Services
                  </a>
                </div>
                <div className="sidebar_list_item ">
                  <a
                    href="page-dashboard-manage-jobs.html"
                    className="items-center"
                  >
                    <i className="flaticon-briefcase mr15" />
                    Manage Jobs
                  </a>
                </div>
                <div className="sidebar_list_item ">
                  <a
                    href="page-dashboard-manage-project.html"
                    className="items-center"
                  >
                    <i className="flaticon-content mr15" />
                    Manage Project
                  </a>
                </div>
                <p className="fz15 fw400 ff-heading pl30 mt30">Account</p>
                <div className="sidebar_list_item ">
                  <a
                    href="page-dashboard-profile.html"
                    className="items-center"
                  >
                    <i className="flaticon-photo mr15" />
                    My Profile
                  </a>
                </div>
                <div className="sidebar_list_item ">
                  <a href="page-login.html" className="items-center">
                    <i className="flaticon-logout mr15" />
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <div className="dashboard__main pl0-md">
              <div className="dashboard__content hover-bgc-color">
                <div className="row pb40">
                  <div className="col-lg-12">
                    <div className="dashboard_navigationbar d-block d-lg-none">
                      <div className="dropdown">
                        <button onclick="myFunction()" className="dropbtn">
                          <i className="fa fa-bars pr10" /> Dashboard Navigation
                        </button>
                        <ul id="myDropdown" className="dropdown-content">
                          <li>
                            <p className="fz15 fw400 ff-heading mt30 pl30">
                              Start
                            </p>
                          </li>
                          <li>
                            <a href="page-dashboard.html">
                              <i className="flaticon-home mr10" />
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="page-dashboard-proposal.html">
                              <i className="flaticon-document mr10" />
                              My Proposals
                            </a>
                          </li>
                          <li className="active">
                            <a href="page-dashboard-save.html">
                              <i className="flaticon-like mr10" />
                              Saved
                            </a>
                          </li>
                          <li>
                            <a href="page-dashboard-message.html">
                              <i className="flaticon-chat mr10" />
                              Message
                            </a>
                          </li>
                          <li>
                            <a href="page-dashboard-reviews.html">
                              <i className="flaticon-review-1 mr10" />
                              Reviews
                            </a>
                          </li>
                          <li>
                            <a href="page-dashboard-invoice.html">
                              <i className="flaticon-receipt mr10" />
                              Invoice
                            </a>
                          </li>
                          <li>
                            <a href="page-dashboard-payouts.html">
                              <i className="flaticon-dollar mr10" />
                              Payouts
                            </a>
                          </li>
                          <li>
                            <a href="page-dashboard-statement.html">
                              <i className="flaticon-web mr10" />
                              Statements
                            </a>
                          </li>
                          <li>
                            <p className="fz15 fw400 ff-heading mt30 pl30">
                              Organize and Manage
                            </p>
                          </li>
                          <li>
                            <a href="page-dashboard-manage-service.html">
                              <i className="flaticon-presentation mr10" />
                              Manage Services
                            </a>
                          </li>
                          <li>
                            <a href="page-dashboard-manage-jobs.html">
                              <i className="flaticon-briefcase mr10" />
                              Manage Jobs
                            </a>
                          </li>
                          <li>
                            <a href="page-dashboard-manage-project.html">
                              <i className="flaticon-content mr10" />
                              Manage Project
                            </a>
                          </li>
                          <li>
                            <p className="fz15 fw400 ff-heading mt30 pl30">
                              Account
                            </p>
                          </li>
                          <li>
                            <a href="page-dashboard-profile.html">
                              <i className="flaticon-photo mr10" />
                              My Profile
                            </a>
                          </li>
                          <li>
                            <a href="page-login.html">
                              <i className="flaticon-logout mr10" />
                              Logout
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="dashboard_title_area">
                      <h2>Saved</h2>
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="ps-widget bgc-white bdrs4 p30 mb30 position-relative">
                      <div className="navtab-style1">
                        <nav>
                          <div
                            className="nav nav-tabs mb30"
                            id="nav-tab2"
                            role="tablist"
                          >
                            <button
                              className="nav-link active fw500 ps-0"
                              id="nav-item1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-item1"
                              type="button"
                              role="tab"
                              aria-controls="nav-item1"
                              aria-selected="true"
                            >
                              Services
                            </button>
                            <button
                              className="nav-link fw500"
                              id="nav-item2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-item2"
                              type="button"
                              role="tab"
                              aria-controls="nav-item2"
                              aria-selected="false"
                            >
                              Project
                            </button>
                            <button
                              className="nav-link fw500"
                              id="nav-item3-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-item3"
                              type="button"
                              role="tab"
                              aria-controls="nav-item3"
                              aria-selected="false"
                            >
                              Jobs
                            </button>
                          </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="nav-item1"
                            role="tabpanel"
                            aria-labelledby="nav-item1-tab"
                          >
                            <div className="row">
                              <div className="col-sm-6 col-xl-3">
                                <div className="listing-style1">
                                  <div className="list-thumb">
                                    <img
                                      className="w-100"
                                      src="images/listings/g-1.jpg"
                                      alt=""
                                    />
                                    <a
                                      href="#"
                                      className="tag-del"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete Item"
                                      aria-label="Delete Item"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                  <div className="list-content">
                                    <p className="list-text body-color fz14 mb-1">
                                      Web &amp; App Design
                                    </p>
                                    <h5 className="list-title">
                                      <a href="page-services-single.html">
                                        I will design modern websites in figma
                                        or adobe xd
                                      </a>
                                    </h5>
                                    <div className="review-meta d-flex align-items-center">
                                      <i className="fas fa-star fz10 review-color me-2" />
                                      <p className="mb-0 body-color fz14">
                                        <span className="dark-color me-2">
                                          4.82
                                        </span>
                                        94 reviews
                                      </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                      <a className="d-flex" href="#">
                                        <span className="position-relative mr10">
                                          <img
                                            className="rounded-circle wa"
                                            src="images/team/fl-s-1.png"
                                            alt="Freelancer Photo"
                                          />
                                          <span className="online-badges" />
                                        </span>
                                        <span className="fz14">Wanda Runo</span>
                                      </a>
                                      <div className="budget">
                                        <p className="mb-0 body-color">
                                          Starting at
                                          <span className="fz17 fw500 dark-color ms-1">
                                            $983
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-xl-3">
                                <div className="listing-style1">
                                  <div className="list-thumb">
                                    <img
                                      className="w-100"
                                      src="images/listings/g-2.jpg"
                                      alt=""
                                    />
                                    <a
                                      href="#"
                                      className="tag-del"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete Item"
                                      aria-label="Delete Item"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                  <div className="list-content">
                                    <p className="list-text body-color fz14 mb-1">
                                      Art &amp; Illustration
                                    </p>
                                    <h5 className="list-title">
                                      <a href="page-services-single.html">
                                        I will create modern flat design
                                        illustration
                                      </a>
                                    </h5>
                                    <div className="review-meta d-flex align-items-center">
                                      <i className="fas fa-star fz10 review-color me-2" />
                                      <p className="mb-0 body-color fz14">
                                        <span className="dark-color me-2">
                                          4.82
                                        </span>
                                        94 reviews
                                      </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                      <a className="d-flex" href="#">
                                        <span className="position-relative mr10">
                                          <img
                                            className="rounded-circle wa"
                                            src="images/team/fl-s-2.png"
                                            alt="Freelancer Photo"
                                          />
                                          <span className="online-badges" />
                                        </span>
                                        <span className="fz14">Ali Tufan</span>
                                      </a>
                                      <div className="budget">
                                        <p className="mb-0 body-color">
                                          Starting at
                                          <span className="fz17 fw500 dark-color ms-1">
                                            $983
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-xl-3">
                                <div className="listing-style1">
                                  <div className="list-thumb">
                                    <img
                                      className="w-100"
                                      src="images/listings/g-3.jpg"
                                      alt=""
                                    />
                                    <a
                                      href="#"
                                      className="tag-del"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete Item"
                                      aria-label="Delete Item"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                  <div className="list-content">
                                    <p className="list-text body-color fz14 mb-1">
                                      Design &amp; Creative
                                    </p>
                                    <h5 className="list-title line-clamp2">
                                      <a href="page-services-single.html">
                                        I will build a fully responsive design
                                        in HTML,CSS, bootstrap, and javascript
                                      </a>
                                    </h5>
                                    <div className="review-meta d-flex align-items-center">
                                      <i className="fas fa-star fz10 review-color me-2" />
                                      <p className="mb-0 body-color fz14">
                                        <span className="dark-color me-2">
                                          4.82
                                        </span>
                                        94 reviews
                                      </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                      <a className="d-flex" href="#">
                                        <span className="position-relative mr10">
                                          <img
                                            className="rounded-circle"
                                            src="images/team/fl-s-3.png"
                                            alt="Freelancer Photo"
                                          />
                                          <span className="online-badges" />
                                        </span>
                                        <span className="fz14">Wanda Runo</span>
                                      </a>
                                      <div className="budget">
                                        <p className="mb-0 body-color">
                                          Starting at
                                          <span className="fz17 fw500 dark-color ms-1">
                                            $983
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-xl-3">
                                <div className="listing-style1">
                                  <div className="list-thumb">
                                    <img
                                      className="w-100"
                                      src="images/listings/g-4.jpg"
                                      alt=""
                                    />
                                    <a
                                      href="#"
                                      className="tag-del"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete Item"
                                      aria-label="Delete Item"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                  <div className="list-content">
                                    <p className="list-text body-color fz14 mb-1">
                                      Web &amp; App Design
                                    </p>
                                    <h5 className="list-title line-clamp2">
                                      <a href="page-services-single.html">
                                        I will do mobile app development for ios
                                        and android
                                      </a>
                                    </h5>
                                    <div className="review-meta d-flex align-items-center">
                                      <i className="fas fa-star fz10 review-color me-2" />
                                      <p className="mb-0 body-color fz14">
                                        <span className="dark-color me-2">
                                          4.82
                                        </span>
                                        94 reviews
                                      </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                      <a className="d-flex" href="#">
                                        <span className="position-relative mr10">
                                          <img
                                            className="rounded-circle"
                                            src="images/team/fl-s-4.png"
                                            alt="Freelancer Photo"
                                          />
                                          <span className="online-badges" />
                                        </span>
                                        <span className="fz14">Wanda Runo</span>
                                      </a>
                                      <div className="budget">
                                        <p className="mb-0 body-color">
                                          Starting at
                                          <span className="fz17 fw500 dark-color ms-1">
                                            $983
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-xl-3">
                                <div className="listing-style1">
                                  <div className="list-thumb">
                                    <img
                                      className="w-100"
                                      src="images/listings/g-1.jpg"
                                      alt=""
                                    />
                                    <a
                                      href="#"
                                      className="tag-del"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete Item"
                                      aria-label="Delete Item"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                  <div className="list-content">
                                    <p className="list-text body-color fz14 mb-1">
                                      Web &amp; App Design
                                    </p>
                                    <h5 className="list-title">
                                      <a href="page-services-single.html">
                                        I will design modern websites in figma
                                        or adobe xd
                                      </a>
                                    </h5>
                                    <div className="review-meta d-flex align-items-center">
                                      <i className="fas fa-star fz10 review-color me-2" />
                                      <p className="mb-0 body-color fz14">
                                        <span className="dark-color me-2">
                                          4.82
                                        </span>
                                        94 reviews
                                      </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                      <a className="d-flex" href="#">
                                        <span className="position-relative mr10">
                                          <img
                                            className="rounded-circle wa"
                                            src="images/team/fl-s-1.png"
                                            alt="Freelancer Photo"
                                          />
                                          <span className="online-badges" />
                                        </span>
                                        <span className="fz14">Wanda Runo</span>
                                      </a>
                                      <div className="budget">
                                        <p className="mb-0 body-color">
                                          Starting at
                                          <span className="fz17 fw500 dark-color ms-1">
                                            $983
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-xl-3">
                                <div className="listing-style1">
                                  <div className="list-thumb">
                                    <img
                                      className="w-100"
                                      src="images/listings/g-2.jpg"
                                      alt=""
                                    />
                                    <a
                                      href="#"
                                      className="tag-del"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete Item"
                                      aria-label="Delete Item"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                  <div className="list-content">
                                    <p className="list-text body-color fz14 mb-1">
                                      Art &amp; Illustration
                                    </p>
                                    <h5 className="list-title">
                                      <a href="page-services-single.html">
                                        I will create modern flat design
                                        illustration
                                      </a>
                                    </h5>
                                    <div className="review-meta d-flex align-items-center">
                                      <i className="fas fa-star fz10 review-color me-2" />
                                      <p className="mb-0 body-color fz14">
                                        <span className="dark-color me-2">
                                          4.82
                                        </span>
                                        94 reviews
                                      </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                      <a className="d-flex" href="#">
                                        <span className="position-relative mr10">
                                          <img
                                            className="rounded-circle wa"
                                            src="images/team/fl-s-2.png"
                                            alt="Freelancer Photo"
                                          />
                                          <span className="online-badges" />
                                        </span>
                                        <span className="fz14">Ali Tufan</span>
                                      </a>
                                      <div className="budget">
                                        <p className="mb-0 body-color">
                                          Starting at
                                          <span className="fz17 fw500 dark-color ms-1">
                                            $983
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-xl-3">
                                <div className="listing-style1">
                                  <div className="list-thumb">
                                    <img
                                      className="w-100"
                                      src="images/listings/g-3.jpg"
                                      alt=""
                                    />
                                    <a
                                      href="#"
                                      className="tag-del"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete Item"
                                      aria-label="Delete Item"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                  <div className="list-content">
                                    <p className="list-text body-color fz14 mb-1">
                                      Design &amp; Creative
                                    </p>
                                    <h5 className="list-title line-clamp2">
                                      <a href="page-services-single.html">
                                        I will build a fully responsive design
                                        in HTML,CSS, bootstrap, and javascript
                                      </a>
                                    </h5>
                                    <div className="review-meta d-flex align-items-center">
                                      <i className="fas fa-star fz10 review-color me-2" />
                                      <p className="mb-0 body-color fz14">
                                        <span className="dark-color me-2">
                                          4.82
                                        </span>
                                        94 reviews
                                      </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                      <a className="d-flex" href="#">
                                        <span className="position-relative mr10">
                                          <img
                                            className="rounded-circle"
                                            src="images/team/fl-s-3.png"
                                            alt="Freelancer Photo"
                                          />
                                          <span className="online-badges" />
                                        </span>
                                        <span className="fz14">Wanda Runo</span>
                                      </a>
                                      <div className="budget">
                                        <p className="mb-0 body-color">
                                          Starting at
                                          <span className="fz17 fw500 dark-color ms-1">
                                            $983
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-xl-3">
                                <div className="listing-style1">
                                  <div className="list-thumb">
                                    <img
                                      className="w-100"
                                      src="images/listings/g-4.jpg"
                                      alt=""
                                    />
                                    <a
                                      href="#"
                                      className="tag-del"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete Item"
                                      aria-label="Delete Item"
                                    >
                                      <span className="flaticon-delete text-thm2" />
                                    </a>
                                  </div>
                                  <div className="list-content">
                                    <p className="list-text body-color fz14 mb-1">
                                      Web &amp; App Design
                                    </p>
                                    <h5 className="list-title line-clamp2">
                                      <a href="page-services-single.html">
                                        I will do mobile app development for ios
                                        and android
                                      </a>
                                    </h5>
                                    <div className="review-meta d-flex align-items-center">
                                      <i className="fas fa-star fz10 review-color me-2" />
                                      <p className="mb-0 body-color fz14">
                                        <span className="dark-color me-2">
                                          4.82
                                        </span>
                                        94 reviews
                                      </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                      <a className="d-flex" href="#">
                                        <span className="position-relative mr10">
                                          <img
                                            className="rounded-circle"
                                            src="images/team/fl-s-4.png"
                                            alt="Freelancer Photo"
                                          />
                                          <span className="online-badges" />
                                        </span>
                                        <span className="fz14">Wanda Runo</span>
                                      </a>
                                      <div className="budget">
                                        <p className="mb-0 body-color">
                                          Starting at
                                          <span className="fz17 fw500 dark-color ms-1">
                                            $983
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-item2"
                            role="tabpanel"
                            aria-labelledby="nav-item2-tab"
                          >
                            <div className="row">
                              <div className="col-md-6 col-lg-12 col-xl-6">
                                <div className="freelancer-style1 bdr1 box-shadow-none row ms-0 pr20 align-items-lg-end">
                                  <a
                                    href="#"
                                    className="tag-del"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete Item"
                                    aria-label="Delete Item"
                                  >
                                    <span className="flaticon-delete" />
                                  </a>
                                  <div className="col-lg-9 px-0">
                                    <div className="d-lg-flex">
                                      <div className="thumb w60 position-relative rounded-circle mb15-md">
                                        <img
                                          className="rounded-circle mx-auto"
                                          src="images/team/client-1.png"
                                          alt=""
                                        />
                                        <span className="online-badge2" />
                                      </div>
                                      <div className="details ml20 ml0-md mb15-md">
                                        <h5 className="title mb10">
                                          Food Delviery Mobile App
                                        </h5>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                                          London, UK
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          2 hours ago
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm">
                                          <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          1 Received
                                        </p>
                                        <div className="skill-tags d-flex align-items-center justify-content-start mt-3">
                                          <span className="tag">Figma</span>
                                          <span className="tag mx10">
                                            Sketch
                                          </span>
                                          <span className="tag">HTML5</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 px-0">
                                    <div className="details">
                                      <div className="text-lg-end">
                                        <h4 className="mb-0">$100 - $150</h4>
                                        <p className="text mb-0">Hourly Rate</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-12 col-xl-6">
                                <div className="freelancer-style1 bdr1 box-shadow-none row ms-0 pr20 align-items-lg-end">
                                  <a
                                    href="#"
                                    className="tag-del"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete Item"
                                    aria-label="Delete Item"
                                  >
                                    <span className="flaticon-delete" />
                                  </a>
                                  <div className="col-lg-9 px-0">
                                    <div className="d-lg-flex">
                                      <div className="thumb w60 position-relative rounded-circle mb15-md">
                                        <img
                                          className="rounded-circle mx-auto"
                                          src="images/team/client-4.png"
                                          alt=""
                                        />
                                      </div>
                                      <div className="details ml20 ml0-md mb15-md">
                                        <h5 className="title mb10">
                                          Food Delviery Mobile App
                                        </h5>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                                          London, UK
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          2 hours ago
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm">
                                          <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          1 Received
                                        </p>
                                        <div className="skill-tags d-flex align-items-center justify-content-start mt-3">
                                          <span className="tag">Figma</span>
                                          <span className="tag mx10">
                                            Sketch
                                          </span>
                                          <span className="tag">HTML5</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 px-0">
                                    <div className="details">
                                      <div className="text-lg-end">
                                        <h4 className="mb-0">$100 - $150</h4>
                                        <p className="text mb-0">Hourly Rate</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-12 col-xl-6">
                                <div className="freelancer-style1 bdr1 box-shadow-none row ms-0 pr20 align-items-lg-end">
                                  <a
                                    href="#"
                                    className="tag-del"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete Item"
                                    aria-label="Delete Item"
                                  >
                                    <span className="flaticon-delete" />
                                  </a>
                                  <div className="col-lg-9 px-0">
                                    <div className="d-lg-flex">
                                      <div className="thumb w60 position-relative rounded-circle mb15-md">
                                        <img
                                          className="rounded-circle mx-auto"
                                          src="images/team/client-3.png"
                                          alt=""
                                        />
                                      </div>
                                      <div className="details ml20 ml0-md mb15-md">
                                        <h5 className="title mb10">
                                          Food Delviery Mobile App
                                        </h5>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                                          London, UK
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          2 hours ago
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm">
                                          <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          1 Received
                                        </p>
                                        <div className="skill-tags d-flex align-items-center justify-content-start mt-3">
                                          <span className="tag">Figma</span>
                                          <span className="tag mx10">
                                            Sketch
                                          </span>
                                          <span className="tag">HTML5</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 px-0">
                                    <div className="details">
                                      <div className="text-lg-end">
                                        <h4 className="mb-0">$100 - $150</h4>
                                        <p className="text mb-0">Hourly Rate</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-12 col-xl-6">
                                <div className="freelancer-style1 bdr1 box-shadow-none row ms-0 pr20 align-items-lg-end">
                                  <a
                                    href="#"
                                    className="tag-del"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete Item"
                                    aria-label="Delete Item"
                                  >
                                    <span className="flaticon-delete" />
                                  </a>
                                  <div className="col-lg-9 px-0">
                                    <div className="d-lg-flex">
                                      <div className="thumb w60 position-relative rounded-circle mb15-md">
                                        <img
                                          className="rounded-circle mx-auto"
                                          src="images/team/client-5.png"
                                          alt=""
                                        />
                                      </div>
                                      <div className="details ml20 ml0-md mb15-md">
                                        <h5 className="title mb10">
                                          Food Delviery Mobile App
                                        </h5>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                                          London, UK
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          2 hours ago
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm">
                                          <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          1 Received
                                        </p>
                                        <div className="skill-tags d-flex align-items-center justify-content-start mt-3">
                                          <span className="tag">Figma</span>
                                          <span className="tag mx10">
                                            Sketch
                                          </span>
                                          <span className="tag">HTML5</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 px-0">
                                    <div className="details">
                                      <div className="text-lg-end">
                                        <h4 className="mb-0">$100 - $150</h4>
                                        <p className="text mb-0">Hourly Rate</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-12 col-xl-6">
                                <div className="freelancer-style1 bdr1 box-shadow-none row ms-0 pr20 align-items-lg-end">
                                  <a
                                    href="#"
                                    className="tag-del"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete Item"
                                    aria-label="Delete Item"
                                  >
                                    <span className="flaticon-delete" />
                                  </a>
                                  <div className="col-lg-9 px-0">
                                    <div className="d-lg-flex">
                                      <div className="thumb w60 position-relative rounded-circle mb15-md">
                                        <img
                                          className="rounded-circle mx-auto"
                                          src="images/team/client-6.png"
                                          alt=""
                                        />
                                      </div>
                                      <div className="details ml20 ml0-md mb15-md">
                                        <h5 className="title mb10">
                                          Food Delviery Mobile App
                                        </h5>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                                          London, UK
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          2 hours ago
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm">
                                          <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          1 Received
                                        </p>
                                        <div className="skill-tags d-flex align-items-center justify-content-start mt-3">
                                          <span className="tag">Figma</span>
                                          <span className="tag mx10">
                                            Sketch
                                          </span>
                                          <span className="tag">HTML5</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 px-0">
                                    <div className="details">
                                      <div className="text-lg-end">
                                        <h4 className="mb-0">$100 - $150</h4>
                                        <p className="text mb-0">Hourly Rate</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-12 col-xl-6">
                                <div className="freelancer-style1 bdr1 box-shadow-none row ms-0 pr20 align-items-lg-end">
                                  <a
                                    href="#"
                                    className="tag-del"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete Item"
                                    aria-label="Delete Item"
                                  >
                                    <span className="flaticon-delete" />
                                  </a>
                                  <div className="col-lg-9 px-0">
                                    <div className="d-lg-flex">
                                      <div className="thumb w60 position-relative rounded-circle mb15-md">
                                        <img
                                          className="rounded-circle mx-auto"
                                          src="images/team/client-7.png"
                                          alt=""
                                        />
                                      </div>
                                      <div className="details ml20 ml0-md mb15-md">
                                        <h5 className="title mb10">
                                          Food Delviery Mobile App
                                        </h5>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                                          London, UK
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                          <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          2 hours ago
                                        </p>
                                        <p className="mb-0 fz14 list-inline-item mb5-sm">
                                          <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                                          1 Received
                                        </p>
                                        <div className="skill-tags d-flex align-items-center justify-content-start mt-3">
                                          <span className="tag">Figma</span>
                                          <span className="tag mx10">
                                            Sketch
                                          </span>
                                          <span className="tag">HTML5</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 px-0">
                                    <div className="details">
                                      <div className="text-lg-end">
                                        <h4 className="mb-0">$100 - $150</h4>
                                        <p className="text mb-0">Hourly Rate</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-item3"
                            role="tabpanel"
                            aria-labelledby="nav-item3-tab"
                          >
                            <div className="packages_table table-responsive">
                              <table className="table-style3 table at-savesearch">
                                <tbody className="t-body">
                                  <tr>
                                    <th className="ps-0 pt-0" scope="row">
                                      <div className="job-list-style1 at-dashboard p-0 d-xl-flex align-items-start mb-0">
                                        <div className="icon2 mb10-lg mb-0 me-3 bg-transparent">
                                          <img
                                            className="wa"
                                            src="images/team/client-1.png"
                                            alt=""
                                          />
                                        </div>
                                        <div className="details">
                                          <h5>
                                            Marketing and Communications Manager
                                          </h5>
                                          <h6 className="mb-3 text-thm">
                                            Mailchimp
                                          </h6>
                                        </div>
                                      </div>
                                    </th>
                                    <td className="vam">
                                      <p className="list-inline-item mb-0">
                                        $125k-$135k Hourly
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        1-5 Days
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        Expensive
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        Remote
                                      </p>
                                    </td>
                                    <td className="vam">
                                      <a
                                        href="#"
                                        className="icon"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="Delete"
                                        aria-label="Delete"
                                      >
                                        <span className="flaticon-delete" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="ps-0" scope="row">
                                      <div className="job-list-style1 at-dashboard p-0 d-xl-flex align-items-start mb-0">
                                        <div className="icon2 mb10-lg mb-0 me-3 bg-transparent">
                                          <img
                                            className="wa"
                                            src="images/team/client-3.png"
                                            alt=""
                                          />
                                        </div>
                                        <div className="details">
                                          <h5>Senior backend developer</h5>
                                          <h6 className="mb-3 text-thm">
                                            Invision
                                          </h6>
                                        </div>
                                      </div>
                                    </th>
                                    <td className="vam">
                                      <p className="list-inline-item mb-0">
                                        $125k-$135k Hourly
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        1-5 Days
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        Expensive
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        Remote
                                      </p>
                                    </td>
                                    <td className="vam">
                                      <a
                                        href="#"
                                        className="icon"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="Delete"
                                        aria-label="Delete"
                                      >
                                        <span className="flaticon-delete" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="ps-0">
                                      <div className="job-list-style1 at-dashboard p-0 d-xl-flex align-items-start mb-0">
                                        <div className="icon2 mb10-lg mb-0 me-3 bg-transparent">
                                          <img
                                            className="wa"
                                            src="images/team/client-4.png"
                                            alt=""
                                          />
                                        </div>
                                        <div className="details">
                                          <h5>Senior product manager</h5>
                                          <h6 className="mb-3 text-thm">
                                            Mailchimp
                                          </h6>
                                        </div>
                                      </div>
                                    </th>
                                    <td className="vam">
                                      <p className="list-inline-item mb-0">
                                        $125k-$135k Hourly
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        1-5 Days
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        Expensive
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        Remote
                                      </p>
                                    </td>
                                    <td className="vam">
                                      <a
                                        href="#"
                                        className="icon"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="Delete"
                                        aria-label="Delete"
                                      >
                                        <span className="flaticon-delete" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="ps-0">
                                      <div className="job-list-style1 at-dashboard p-0 d-xl-flex align-items-start mb-0">
                                        <div className="icon2 mb10-lg mb-0 me-3 bg-transparent">
                                          <img
                                            className="wa"
                                            src="images/team/client-5.png"
                                            alt=""
                                          />
                                        </div>
                                        <div className="details">
                                          <h5>
                                            Administrative Business Partner
                                          </h5>
                                          <h6 className="mb-3 text-thm">
                                            Mailchimp
                                          </h6>
                                        </div>
                                      </div>
                                    </th>
                                    <td className="vam">
                                      <p className="list-inline-item mb-0">
                                        $125k-$135k Hourly
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        1-5 Days
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        Expensive
                                      </p>
                                      <p className="list-inline-item mb-0 bdrl1 pl15 bdrn-lg pl5-lg">
                                        Remote
                                      </p>
                                    </td>
                                    <td className="vam">
                                      <a
                                        href="#"
                                        className="icon"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="Delete"
                                        aria-label="Delete"
                                      >
                                        <span className="flaticon-delete" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mbp_pagination text-center">
                        <ul className="page_navigation">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              {" "}
                              <span className="fas fa-angle-left" />
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">
                              2 <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              ...
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              20
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span className="fas fa-angle-right" />
                            </a>
                          </li>
                        </ul>
                        <p className="mt10 mb-0 pagination_page_count text-center">
                          1 – 20 of 300+ property available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="dashboard_footer pt30 pb30">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-md-between">
                    <div className="col-auto">
                      <div className="copyright-widget">
                        <p className="mb-md-0">
                          © Freeio. 2023 CreativeLayers. All rights reserved.
                        </p>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="footer_bottom_right_btns at-home8 text-center text-lg-end">
                        <ul className="p-0 m-0">
                          <li className="list-inline-item bg-white">
                            <select className="selectpicker show-tick">
                              <option>US$ USD</option>
                              <option>Euro</option>
                              <option>Pound</option>
                            </select>
                          </li>
                          <li className="list-inline-item bg-white">
                            <select className="selectpicker show-tick">
                              <option>English</option>
                              <option>Frenc</option>
                              <option>Italian</option>
                              <option>Spanish</option>
                              <option>Turkey</option>
                            </select>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <a className="scrollToHome" href="#">
          <i className="fas fa-angle-up" />
        </a>
      </div>
    </>
  );
};

export default Save;
