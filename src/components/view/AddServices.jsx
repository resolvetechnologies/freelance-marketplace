import React from "react";

const AddServices = () => {
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
                                className="dropdown-item"
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
                                className="dropdown-item active"
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
                  <a href="page-dashboard-save.html" className="items-center">
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
                    className="items-center -is-active"
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
                          <li>
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
                          <li className="active">
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
                  <div className="col-lg-9">
                    <div className="dashboard_title_area">
                      <h2>Add Services</h2>
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="text-lg-end">
                      <a href="#" className="ud-btn btn-dark">
                        Save &amp; Publish
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                      <div className="bdrb1 pb15 mb25">
                        <h5 className="list-title">Basic Information</h5>
                      </div>
                      <div className="col-xl-8">
                        <form className="form-style1">
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="mb20">
                                <label className="heading-color ff-heading fw500 mb10">
                                  Service Title
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="i will"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="mb20">
                                <label className="heading-color ff-heading fw500 mb10">
                                  Price
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="$10"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="mb20">
                                <div className="form-style1">
                                  <label className="heading-color ff-heading fw500 mb10">
                                    Category
                                  </label>
                                  <div className="bootselect-multiselect">
                                    <select className="selectpicker">
                                      <option>Select</option>
                                      <option>Graphics &amp; Design</option>
                                      <option>Digital Marketing</option>
                                      <option>Writing &amp; Translation</option>
                                      <option>Video &amp; Animation</option>
                                      <option>Music &amp; Audio</option>
                                      <option>Programming &amp; Tech</option>
                                      <option>Business</option>
                                      <option>Lifestyle</option>
                                      <option>Trending</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="mb20">
                                <div className="form-style1">
                                  <label className="heading-color ff-heading fw500 mb10">
                                    English Level
                                  </label>
                                  <div className="bootselect-multiselect">
                                    <select className="selectpicker">
                                      <option>Select</option>
                                      <option>Fluent</option>
                                      <option>Mid Level</option>
                                      <option>Conversational</option>
                                      <option>Other</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="mb20">
                                <div className="form-style1">
                                  <label className="heading-color ff-heading fw500 mb10">
                                    Response Time
                                  </label>
                                  <div className="bootselect-multiselect">
                                    <select className="selectpicker">
                                      <option>Select</option>
                                      <option>Response Time One</option>
                                      <option>Response Time Two</option>
                                      <option>Response Time Three</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="mb20">
                                <div className="form-style1">
                                  <label className="heading-color ff-heading fw500 mb10">
                                    Delivery Time
                                  </label>
                                  <div className="bootselect-multiselect">
                                    <select className="selectpicker">
                                      <option>Select</option>
                                      <option>Delivery Time One</option>
                                      <option>Delivery Time Two</option>
                                      <option>Delivery Time Three</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="mb20">
                                <div className="form-style1">
                                  <label className="heading-color ff-heading fw500 mb10">
                                    Skills
                                  </label>
                                  <div className="bootselect-multiselect">
                                    <select
                                      className="selectpicker"
                                      multiple=""
                                    >
                                      <option>Figma</option>
                                      <option>Adobe XD</option>
                                      <option>CSS</option>
                                      <option>HTML</option>
                                      <option>Bootstrap</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="mb20">
                                <div className="form-style1">
                                  <label className="heading-color ff-heading fw500 mb10">
                                    Country
                                  </label>
                                  <div className="bootselect-multiselect">
                                    <select className="selectpicker">
                                      <option>Turkey</option>
                                      <option>United Kingdom</option>
                                      <option>United State</option>
                                      <option>Ukraine</option>
                                      <option>Uruguay</option>
                                      <option>UK</option>
                                      <option>Uzbekistan</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="mb20">
                                <div className="form-style1">
                                  <label className="heading-color ff-heading fw500 mb10">
                                    City
                                  </label>
                                  <div className="bootselect-multiselect">
                                    <select className="selectpicker">
                                      <option data-tokens="California">
                                        California
                                      </option>
                                      <option data-tokens="Chicago">
                                        Chicago
                                      </option>
                                      <option data-tokens="LosAngeles">
                                        Los Angeles
                                      </option>
                                      <option data-tokens="Manhattan">
                                        Manhattan
                                      </option>
                                      <option data-tokens="NewJersey">
                                        New Jersey
                                      </option>
                                      <option data-tokens="NewYork">
                                        New York
                                      </option>
                                      <option data-tokens="SanDiego">
                                        San Diego
                                      </option>
                                      <option data-tokens="SanFrancisco">
                                        San Francisco
                                      </option>
                                      <option data-tokens="Texas">Texas</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="mb10">
                                <label className="heading-color ff-heading fw500 mb10">
                                  Services Detail
                                </label>
                                <textarea
                                  cols={30}
                                  rows={6}
                                  placeholder="Description"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="text-start">
                                <a
                                  className="ud-btn btn-thm"
                                  href="page-contact.html"
                                >
                                  Save
                                  <i className="fal fa-arrow-right-long" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
                      <div className="bdrb1 pb15 mb30">
                        <h5 className="list-title">Packages</h5>
                      </div>
                      <div className="col-xl-8">
                        <div className="table-style2 table-responsive bdr1 mb30">
                          <table className="table table-borderless mb-0">
                            <thead className="t-head">
                              <tr>
                                <th className="col" scope="col" />
                                <th className="col" scope="col">
                                  <span className="h4 mb15">
                                    Basic{" "}
                                    <span className="text-thm2 flaticon-pencil fz16 float-end mt10 me-2" />
                                  </span>{" "}
                                  <br />
                                  <span className="text">
                                    I will redesign your current{" "}
                                    <br className="d-none d-lg-block" /> landing
                                    page or create one for{" "}
                                    <br className="d-none d-lg-block" /> you
                                    (upto 4 sections)
                                  </span>
                                </th>
                                <th className="col" scope="col">
                                  <span className="h4 mb15">
                                    Standard{" "}
                                    <span className="text-thm2 flaticon-pencil fz16 float-end mt10 me-2" />
                                  </span>{" "}
                                  <br />
                                  <span className="text">
                                    4 High Quality Desktop{" "}
                                    <br className="d-none d-lg-block" /> Pages.
                                  </span>
                                </th>
                                <th className="col" scope="col">
                                  <span className="h4 mb15">
                                    Premium{" "}
                                    <span className="text-thm2 flaticon-pencil fz16 float-end mt10 me-2" />
                                  </span>{" "}
                                  <br />
                                  <span className="text">
                                    4 High Quality Desktop and{" "}
                                    <br className="d-none d-lg-block" /> Mobile
                                    Pages.
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="t-body">
                              <tr className="bgc-thm3">
                                <th scope="row">Source file</th>
                                <td>
                                  <label className="custom_checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                  </label>
                                </td>
                                <td>
                                  <label className="custom_checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span className="checkmark" />
                                  </label>
                                </td>
                                <td>
                                  <label className="custom_checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span className="checkmark" />
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Prototype</th>
                                <td>
                                  <label className="custom_checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                  </label>
                                </td>
                                <td>
                                  <label className="custom_checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span className="checkmark" />
                                  </label>
                                </td>
                                <td>
                                  <label className="custom_checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span className="checkmark" />
                                  </label>
                                </td>
                              </tr>
                              <tr className="bgc-thm3">
                                <th scope="row">Responsive design</th>
                                <td>
                                  <label className="custom_checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                  </label>
                                </td>
                                <td>
                                  <label className="custom_checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span className="checkmark" />
                                  </label>
                                </td>
                                <td>
                                  <label className="custom_checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span className="checkmark" />
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Number of pages</th>
                                <td>
                                  2{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                                <td>
                                  4{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                                <td>
                                  6{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                              </tr>
                              <tr className="bgc-thm3">
                                <th scope="row">Revisions</th>
                                <td>
                                  1{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                                <td>
                                  3{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                                <td>
                                  5{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Delivery Time </th>
                                <td>
                                  2 Days{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                                <td>
                                  3 Days{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                                <td>
                                  4 Days{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                              </tr>
                              <tr className="bgc-thm3">
                                <th scope="row">Total</th>
                                <td>
                                  $29{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                                <td>
                                  $49{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                                <td>
                                  $89{" "}
                                  <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <a href="#" className="ud-btn btn-thm">
                          Save
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                    <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
                      <div className="bdrb1 pb15 mb25">
                        <h5 className="list-title">Add extra services</h5>
                      </div>
                      <div className="col-xl-8">
                        <div className="extra-service-tab">
                          <nav>
                            <div
                              className="nav flex-column nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <button
                                className="nav-link"
                                id="nav-home2-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-home2"
                                type="button"
                                role="tab"
                                aria-selected="true"
                              >
                                <label className="custom_checkbox fw500 text-start">
                                  100 Words (+2 days)
                                  <span className="text text-bottom">
                                    I will professionally translate english to
                                    german
                                  </span>
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <span className="price">$25</span>
                              </button>
                              <button
                                className="nav-link active"
                                id="nav-profile2-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-profile2"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                <label className="custom_checkbox fw500 text-start">
                                  100 Words (+2 days)
                                  <span className="text text-bottom">
                                    I will professionally translate english to
                                    german
                                  </span>
                                  <input
                                    type="checkbox"
                                    defaultChecked="checked"
                                  />
                                  <span className="checkmark" />
                                </label>
                                <span className="price">$45</span>
                              </button>
                              <button
                                className="nav-link"
                                id="nav-contact2-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-contact2"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                <label className="custom_checkbox fw500 text-start">
                                  100 Words (+2 days)
                                  <span className="text text-bottom">
                                    I will professionally translate english to
                                    german
                                  </span>
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <span className="price">$75</span>
                              </button>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
                      <div className="bdrb1 pb15 mb30">
                        <h5 className="list-title">Gallery</h5>
                      </div>
                      <div className="col-xl-9">
                        <div className="d-flex mb30">
                          <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                            <img
                              className="w-100"
                              src="images/gallery/g-1.jpg"
                              alt=""
                            />
                            <div className="del-edit">
                              <div className="d-flex justify-content-center">
                                <a
                                  href="#"
                                  className="icon me-2"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Edit"
                                  aria-label="Edit"
                                >
                                  <span className="flaticon-pencil" />
                                </a>
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
                              </div>
                            </div>
                          </div>
                          <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                            <img
                              className="w-100"
                              src="images/gallery/g-2.jpg"
                              alt=""
                            />
                            <div className="del-edit">
                              <div className="d-flex justify-content-center">
                                <a
                                  href="#"
                                  className="icon me-2"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Edit"
                                  aria-label="Edit"
                                >
                                  <span className="flaticon-pencil" />
                                </a>
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
                              </div>
                            </div>
                          </div>
                          <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                            <img
                              className="w-100"
                              src="images/gallery/g-3.jpg"
                              alt=""
                            />
                            <div className="del-edit">
                              <div className="d-flex justify-content-center">
                                <a
                                  href="#"
                                  className="icon me-2"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Edit"
                                  aria-label="Edit"
                                >
                                  <span className="flaticon-pencil" />
                                </a>
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
                              </div>
                            </div>
                          </div>
                          <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                            <img
                              className="w-100"
                              src="images/gallery/g-4.jpg"
                              alt=""
                            />
                            <div className="del-edit">
                              <div className="d-flex justify-content-center">
                                <a
                                  href="#"
                                  className="icon me-2"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Edit"
                                  aria-label="Edit"
                                >
                                  <span className="flaticon-pencil" />
                                </a>
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
                              </div>
                            </div>
                          </div>
                          <div className="gallery-item bdrs4 overflow-hidden">
                            <a href="#">
                              <img
                                className="w-100"
                                src="images/gallery/g-1.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <p className="text">
                          Max file size is 1MB, Minimum dimension: 330x300 And
                          Suitable files are .jpg &amp; .png
                        </p>
                        <a href="#" className="ud-btn btn-thm mt-2">
                          Save
                          <i className="fal fa-arrow-right-long" />
                        </a>
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

export default AddServices;
