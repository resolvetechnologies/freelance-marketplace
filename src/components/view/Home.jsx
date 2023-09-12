import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="bidding, fiverr, freelance marketplace, freelancers, freelancing, gigs, hiring, job board, job portal, job posting, jobs marketplace, peopleperhour, proposals, sell services, upwork" />
                <meta name="description" content="freelance.kaiketsu.tech - Freelance Marketplace" />
                <meta name="CreativeLayers" content="ATFN" />
                {/* <!-- css file --> */}
                <link rel="stylesheet" href="./css/bootstrap.min.css" />
                <link rel="stylesheet" href="./css/jquery-ui.min.css" />
                <link rel="stylesheet" href="./css/ace-responsive-menu.css" />
                <link rel="stylesheet" href="./css/menu.css" />
                <link rel="stylesheet" href="./css/fontawesome.css" />
                <link rel="stylesheet" href="./css/flaticon.css" />
                <link rel="stylesheet" href="./css/bootstrap-select.min.css" />
                <link rel="stylesheet" href="./css/animate.css" />
                <link rel="stylesheet" href="./css/magnific-popup.css" />
                <link rel="stylesheet" href="./css/slider.css" />
                <link rel="stylesheet" href="./css/style.css" />
                <link rel="stylesheet" href="./css/ud-custom-spacing.css" />
                {/* <!-- Responsive stylesheet --> */}
                <link rel="stylesheet" href="/css/responsive.css" />
                {/* <!-- Title --> */}
                <title>freelance.kaiketsu.tech - Freelance Marketplace</title>
                {/* <!-- Favicon --> */}
                <link href="./images/favicon.ico" sizes="128x128" rel="shortcut icon" type="image/x-icon" />
                <link href="./images/favicon.ico" sizes="128x128" rel="shortcut icon" />
                {/* <!-- Apple Touch Icon --> */}
                <link href="./images/apple-touch-icon-60x60.png" sizes="60x60" rel="apple-touch-icon" />
                <link href="./images/apple-touch-icon-72x72.png" sizes="72x72" rel="apple-touch-icon" />
                <link href="./images/apple-touch-icon-114x114.png" sizes="114x114" rel="apple-touch-icon" />
                <link href="./images/apple-touch-icon-180x180.png" sizes="180x180" rel="apple-touch-icon" />
            </Head>

            <div>
                <div className="wrapper ovh">
                    {/* <div className="preloader"></div> */}

                    {/* <!-- Main Header Nav --> */}
                    <header className="header-nav nav-innerpage-style bg-transparent stricky main-menu border-0">
                        {/* <!-- Ace Responsive Menu --> */}
                        <nav className="posr">
                            <div className="container posr menu_bdrt1">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-auto px-0">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="logos">
                                                <Link className="header-logo logo2" href="/"><img src="images/header-logo3.svg" alt="Header Logo" /></Link>
                                            </div>

                                            {/* <!-- Responsive Menu Structure--> */}

                                        </div>
                                    </div>
                                    <div className="col-auto px-0">
                                        <div className="d-flex align-items-center">
                                            <Link className="login-info" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><span className="flaticon-loupe"></span></Link>
                                            <Link className="login-info mx10-lg mx30" href="./page-become-seller"><span className="d-none d-xl-inline-block">Become a</span> Seller</Link>
                                            <Link className="login-info mr10-lg mr30" href="./page-login">Sign in</Link>
                                            <Link className="ud-btn btn-thm add-joining" href="./page-register">Join</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                    {/* <!-- Search Modal --> */}
                    <div className="search-modal">
                        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalToggleLabel"></h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fal fa-xmark"></i></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="popup-search-field search_area">
                                            <input type="text" className="form-control border-0" placeholder="What service are you looking for today?" />
                                            <label><span className="far fa-magnifying-glass"></span></label>
                                            <button className="ud-btn btn-thm" type="submit">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hiddenbar-body-ovelay"></div>

                    {/* <!-- Mobile Nav  --> */}
                    <div id="page" className="mobilie_header_nav stylehome1">
                        <div className="mobile-menu">
                            <div className="header bdrb1">
                                <div className="menu_and_widgets">
                                    <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
                                        <Link className="mobile_logo" href="#"><img src="images/header-logo-dark.svg" alt="" /></Link>
                                        <div className="right-side text-end">
                                            <Link className="" href="./page-login">join</Link>
                                            <Link className="menubar ml30" href="#menu"><img src="images/mobile-dark-nav-icon.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="posr"><div className="mobile_menu_close_btn"><span className="far fa-times"></span></div></div>
                            </div>
                        </div>
                        {/* <!-- /.mobile-menu --> */}
                        <nav id="menu" className="">
                            <ul>
                                <li><span>Home</span>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                    </ul>
                                </li>
                                <li><span>Browse Jobs</span>
                                    <ul>
                                        <li><span>Services</span>
                                            <ul>
                                                <li><Link href="./page-service-v1">Service v1</Link></li>
                                                <li><Link href="./page-service-v2">Service v2</Link></li>
                                                <li><Link href="./page-service-v3">Service v3</Link></li>
                                                <li><Link href="./page-service-v4">Service v4</Link></li>
                                                <li><Link href="./page-service-v5">Service v5</Link></li>
                                                <li><Link href="./page-service-v6">Service v6</Link></li>
                                                <li><Link href="./page-service-v7">Service v7</Link></li>
                                                <li><Link href="./page-service-all">Service All</Link></li>
                                                <li><Link href="./page-service-single">Service Single</Link></li>
                                            </ul>
                                        </li>
                                        <li><span>Projects</span>
                                            <ul>
                                                <li><Link href="./page-project-v1">Project v1</Link></li>
                                                <li><Link href="./page-project-single">Project Single</Link></li>
                                            </ul>
                                        </li>
                                        <li><span>Job View</span>
                                            <ul>
                                                <li><Link href="./page-job-list-v1">Job list v1</Link></li>
                                                <li><Link href="./page-job-list-v2">Job list v2</Link></li>
                                                <li><Link href="./page-job-list-v3">Job list V3</Link></li>
                                                <li><Link href="./page-job-list-single">Job Single</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><span>Users</span>
                                    <ul>
                                        <li><span>Dashboard</span>
                                            <ul>
                                                <li><Link href="./page-dashboard">Dashboard</Link></li>
                                                <li><Link href="./page-dashboard-proposal">Proposal</Link></li>
                                                <li><Link href="./page-dashboard-save">Saved</Link></li>
                                                <li><Link href="./page-dashboard-message">Message</Link></li>
                                                <li><Link href="./page-dashboard-reviews">Reviews</Link></li>
                                                <li><Link href="./page-dashboard-invoice">Invoice</Link></li>
                                                <li><Link href="./page-dashboard-payouts">Payouts</Link></li>
                                                <li><Link href="./page-dashboard-statement">Statement</Link></li>
                                                <li><Link href="./page-dashboard-manage-service">Manage Service</Link></li>
                                                <li><Link href="./page-dashboard-add-service">Add Services</Link></li>
                                                <li><Link href="./page-dashboard-manage-jobs">Manage Jobs</Link></li>
                                                <li><Link href="./page-dashboard-manage-project">Manage Project</Link></li>
                                                <li><Link href="./page-dashboard-create-project">Create Project</Link></li>
                                                <li><Link href="./page-dashboard-profile">My Profile</Link></li>
                                            </ul>
                                        </li>
                                        <li><span>Employee</span>
                                            <ul>
                                                <li><Link href="./page-employee-v1">Employee V1</Link></li>
                                                <li><Link href="./page-employee-v2">Employee V2</Link></li>
                                                <li><Link href="./page-employee-single">Employee Single</Link></li>
                                            </ul>
                                        </li>
                                        <li><span>Freelancer</span>
                                            <ul>
                                                <li><Link href="./page-freelancer-v1">Freelancer V1</Link></li>
                                                <li><Link href="./page-freelancer-v2">Freelancer V2</Link></li>
                                                <li><Link href="./page-freelancer-v3">Freelancer V3</Link></li>
                                                <li><Link href="./page-freelancer-single">Freelancer Single</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="./page-become-seller">Become Seller</Link></li>
                                    </ul>
                                </li>
                                <li><span>Pages</span>
                                    <ul>
                                        <li><span>About</span>
                                            <ul>
                                                <li><Link href="./page-about">About v1</Link></li>
                                                <li><Link href="./page-about-v2">About v2</Link></li>
                                            </ul>
                                        </li>
                                        <li><span>Shop</span>
                                            <ul>
                                                <li><Link href="./page-shop">List</Link></li>
                                                <li><Link href="./page-shop-single">Single</Link></li>
                                                <li><Link href="./page-shop-cart">Cart</Link></li>
                                                <li><Link href="./page-shop-checkout">Checkout</Link></li>
                                                <li><Link href="./page-shop-order">Order</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="./page-contact">Contact</Link></li>
                                        <li><Link href="./page-error">404</Link></li>
                                        <li><Link href="./page-faq">Faq</Link></li>
                                        <li><Link href="./page-help">Help</Link></li>
                                        <li><Link href="./page-invoice">Invoices</Link></li>
                                        <li><Link href="./page-login">Login</Link></li>
                                        <li><Link href="./page-pricing">Pricing</Link></li>
                                        <li><Link href="./page-register">Register</Link></li>
                                        <li><Link href="./page-terms">Terms</Link></li>
                                        <li><Link href="./page-ui-element">UI Elements</Link></li>
                                    </ul>
                                </li>
                                <li><span>Blog</span>
                                    <ul>
                                        <li><Link href="./page-blog-v1">List V1</Link></li>
                                        <li><Link href="./page-blog-v2">List V2</Link></li>
                                        <li><Link href="./page-blog-v3">List V3</Link></li>
                                        <li><Link href="./page-blog-single">Single</Link></li>
                                    </ul>
                                </li>
                                {/* <!-- Only for Mobile View --> */}
                            </ul>
                        </nav>
                    </div>

                    <div className="body_content">
                        {/* <!-- Home Banner Style V1 --> */}
                        <section className="hero-home6 py-0">
                            <div className="container">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-lg-6">
                                        <div className="pr50 pr0-xl mb30-md position-relative">
                                            <h1 className="animate-up-1 mb15 text-dark">With talented <span className="text-thm">freelancers</span> <br className="d-none d-xl-block" />do more work.</h1>
                                            <p className="animate-up-2 ff-heading mb30 text">Millions of people use Kaiketsu&apos;s Freelance Marketplace to turn their ideas into reality.</p>
                                            <div className="advance-search-tab at-home6 bgc-white bdrs20 p10 position-relative zi2 animate-up-3">
                                                <div className="row">
                                                    <div className="col-md-9 col-lg-8 col-xl-9">
                                                        <div className="advance-search-field mb10-sm">
                                                            <form className="form-search position-relative">
                                                                <div className="box-search">
                                                                    <span className="icon far fa-magnifying-glass"></span>
                                                                    <input className="form-control" type="text" name="search" placeholder="What are you looking for?" />
                                                                    <div className="search-suggestions">
                                                                        <h6 className="fz14 ml30 mt25 mb-3">Popular Search</h6>
                                                                        <div className="box-suggestions">
                                                                            <ul className="px-0 m-0 pb-4">
                                                                                <li>
                                                                                    <div className="info-product">
                                                                                        <div className="item_title">mobile app development</div>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="info-product">
                                                                                        <div className="item_title">mobile app builder</div>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="info-product">
                                                                                        <div className="item_title">mobile legends</div>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="info-product">
                                                                                        <div className="item_title">mobile app ui ux design</div>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="info-product">
                                                                                        <div className="item_title">mobile game app development</div>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="info-product">
                                                                                        <div className="item_title">mobile app design</div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-lg-4 col-xl-3">
                                                        <div className="text-center">
                                                            <button className="ud-btn btn-dark bdrs60 bdrs4-sm w-100" type="button">Search</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-block d-md-flex mt30 banner-text animate-up-4">
                                                <p className="hero-text fz15 me-2 mb-0 text">Popular Searches</p>
                                                <Link className="text" href="#"> Designer,</Link>
                                                <Link className="text" href="#"> Developer,</Link>
                                                <Link className="text" href="#"> Web,</Link>
                                                <Link className="text" href="#"> IOS,</Link>
                                                <Link className="text" href="#"> PHP,</Link>
                                                <Link className="text" href="#"> Senior,</Link>
                                                <Link className="text" href="#"> Engineer</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-5">
                                        <div className="home6-hero-content position-relative">
                                            <div className="iconbox-small1 d-none d-md-block wow fadeInRight default-box-shadow4 bounce-y animate-up-1">
                                                <span className="icon flaticon-review"></span>
                                                <div className="details">
                                                    <h6>4.9/5</h6>
                                                    <p className="text fz13 mb-0">Clients rate professionals</p>
                                                </div>
                                            </div>
                                            <div className="iconbox-small2 d-none d-md-block wow fadeInLeft default-box-shadow4 bounce-y animate-up-2">
                                                <span className="icon flaticon-review"></span>
                                                <div className="details">
                                                    <h6>+12M</h6>
                                                    <p className="text fz13 mb-0">Project Completed</p>
                                                </div>
                                            </div>
                                            <img src="images/about/element-10.png" alt="" className="bounce-x img-4" />
                                            <img src="images/about/element-11.png" alt="" className="spin-right img-5 d-none d-sm-block" />
                                            <img src="images/about/home6-hero-element-1.png" alt="" className="bounce-y img-1 d-none d-sm-block" />
                                            <img src="images/about/home6-hero-element-2.png" alt="" className="bounce-y img-2 d-none d-sm-block" />
                                            <img src="images/about/home6-hero-element-3.png" alt="" className="bounce-y img-3 d-none d-sm-block" />
                                            <img src="images/about/home6-hero-img-1.png" alt="" className="animate-up-1 w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Need something -->  */}
                        <section className="our-features bgc-thm2 pt60 pb35">
                            <div className="container wow fadeInUp">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="main-title">
                                            <h2 className="text-white">Need something done?</h2>
                                            <p className="text text-white">Most viewed and all-time top-selling services</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="iconbox-style1 at-home6 border-less p-0 bgc-transparent">
                                            <div className="icon before-none"><span className="flaticon-cv"></span></div>
                                            <div className="details">
                                                <h4 className="title text-white mt10 mb-3">Post a job</h4>
                                                <p className="text text-white">It’s free and easy to post a job. Simply fill <br className="d-none d-xxl-block" /> in a title, description.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="iconbox-style1 at-home6 border-less p-0 bgc-transparent">
                                            <div className="icon before-none"><span className="flaticon-web-design"></span></div>
                                            <div className="details">
                                                <h4 className="title text-white mt10 mb-3">Choose freelancers</h4>
                                                <p className="text text-white">It’s free and easy to post a job. Simply fill <br className="d-none d-xxl-block" /> in a title, description.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="iconbox-style1 at-home6 border-less p-0 bgc-transparent">
                                            <div className="icon before-none"><span className="flaticon-secure"></span></div>
                                            <div className="details">
                                                <h4 className="title text-white mt10 mb-3">Pay safely</h4>
                                                <p className="text text-white">It’s free and easy to post a job. Simply fill <br className="d-none d-xxl-block" /> in a title, description.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="iconbox-style1 at-home6 border-less p-0 bgc-transparent">
                                            <div className="icon before-none"><span className="flaticon-customer-service"></span></div>
                                            <div className="details">
                                                <h4 className="title text-white mt10 mb-3">We’re here to help</h4>
                                                <p className="text text-white">It’s free and easy to post a job. Simply fill <br className="d-none d-xxl-block" /> in a title, description.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Explore Apartment --> */}
                        <section className="pb70 pb30-md">
                            <div className="container">
                                <div className="row align-items-md-center wow fadeInUp" data-wow-delay="00ms">
                                    <div className="col-lg-9">
                                        <div className="main-title2">
                                            <h2 className="title">Browse talent by category</h2>
                                            <p className="paragraph">Get some Inspirations from 1800+ skills</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="text-start text-lg-end mb-3">
                                            <Link className="ud-btn2" href="./page-service-v1">All Categories<i className="fal fa-arrow-right-long dark-color"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row wow fadeInUp" data-wow-delay="300ms">
                                    <div className="col-sm-6 col-lg-3">
                                        <Link href="./page-service-v1">
                                            <div className="position-relative mb50 mb20-md d-flex align-items-center">
                                                <div className="city-img flex-shrink-0"><img className="bdrs4" src="images/listings/ct-s-1.jpg" alt="" /></div>
                                                <div className="flex-shrink-1 ms-3">
                                                    <h6 className="mb-1">Development & IT</h6>
                                                    <p className="mb-0">1.853 skills</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <Link href="./page-service-v1">
                                            <div className="position-relative mb50 mb20-md d-flex align-items-center">
                                                <div className="city-img flex-shrink-0"><img className="bdrs4" src="images/listings/ct-s-2.jpg" alt="" /></div>
                                                <div className="flex-shrink-1 ms-3">
                                                    <h6 className="mb-1">Design & Creative</h6>
                                                    <p className="mb-0">1.853 skills</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <Link href="./page-service-v1">
                                            <div className="position-relative mb50 mb20-md d-flex align-items-center">
                                                <div className="city-img flex-shrink-0"><img className="bdrs4" src="images/listings/ct-s-3.jpg" alt="" /></div>
                                                <div className="flex-shrink-1 ms-3">
                                                    <h6 className="mb-1">Digital Marketing</h6>
                                                    <p className="mb-0">1.853 skills</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <Link href="./page-service-v1">
                                            <div className="position-relative mb50 mb20-md d-flex align-items-center">
                                                <div className="city-img flex-shrink-0"><img className="bdrs4" src="images/listings/ct-s-4.jpg" alt="" /></div>
                                                <div className="flex-shrink-1 ms-3">
                                                    <h6 className="mb-1">Writing & Translation</h6>
                                                    <p className="mb-0">1.853 skills</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <Link href="./page-service-v1">
                                            <div className="position-relative mb50 mb20-md d-flex align-items-center">
                                                <div className="city-img flex-shrink-0"><img className="bdrs4" src="images/listings/ct-s-5.jpg" alt="" /></div>
                                                <div className="flex-shrink-1 ms-3">
                                                    <h6 className="mb-1">Music & Audio</h6>
                                                    <p className="mb-0">1.853 skills</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <Link href="./page-service-v1">
                                            <div className="position-relative mb50 mb20-md d-flex align-items-center">
                                                <div className="city-img flex-shrink-0"><img className="bdrs4" src="images/listings/ct-s-6.jpg" alt="" /></div>
                                                <div className="flex-shrink-1 ms-3">
                                                    <h6 className="mb-1">Video & Animation</h6>
                                                    <p className="mb-0">1.853 skills</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <Link href="./page-service-v1">
                                            <div className="position-relative mb50 mb20-md d-flex align-items-center">
                                                <div className="city-img flex-shrink-0"><img className="bdrs4" src="images/listings/ct-s-7.jpg" alt="" /></div>
                                                <div className="flex-shrink-1 ms-3">
                                                    <h6 className="mb-1">Engineering & Architecture</h6>
                                                    <p className="mb-0">1.853 skills</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <Link href="./page-service-v1">
                                            <div className="position-relative mb50 mb20-md d-flex align-items-center">
                                                <div className="city-img flex-shrink-0"><img className="bdrs4" src="images/listings/ct-s-8.jpg" alt="" /></div>
                                                <div className="flex-shrink-1 ms-3">
                                                    <h6 className="mb-1">Finance & Accounting</h6>
                                                    <p className="mb-0">1.853 skills</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Popular Services --> */}
                        <section className="pt-0 pb90">
                            <div className="container">
                                <div className="row align-items-center wow fadeInUp">
                                    <div className="col-xl-3">
                                        <div className="main-title mb30-lg">
                                            <h2 className="title">Popular Services</h2>
                                            <p className="paragraph">Most viewed and all-time top-selling services</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-9">
                                        <div className="navpill-style2 at-home6 mb50-lg">
                                            <ul className="nav nav-pills mb20 justify-content-xl-end" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active fw500 dark-color" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Development & IT</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link fw500 dark-color" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Design & Creative</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link fw500 dark-color" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Digital Marketing</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link fw500 dark-color" id="pills-music-tab" data-bs-toggle="pill" data-bs-target="#pills-music" type="button" role="tab" aria-controls="pills-music" aria-selected="false">Music & Audio</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link fw500 dark-color" id="pills-video-tab" data-bs-toggle="pill" data-bs-target="#pills-video" type="button" role="tab" aria-controls="pills-video" aria-selected="false">Video & Animation</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="navpill-style2">
                                            <div className="tab-content ha" id="pills-tabContent">
                                                <div className="tab-pane fade fz15 text show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-17.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will design modern websites in figma or adobe xd</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-1.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme">
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-18.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-17.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-19.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-20.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Art & Illustration</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will create modern flat design illustration</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-2.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Ali Tufan</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-19.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                                    <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-20.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will do mobile app development for ios and android</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-21.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                                    <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-22.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will do mobile app development for ios and android</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade fz15 text" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-17.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will design modern websites in figma or adobe xd</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-1.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme">
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-18.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-17.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-19.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-20.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Art & Illustration</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will create modern flat design illustration</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-2.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Ali Tufan</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-19.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                                    <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-20.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will do mobile app development for ios and android</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-21.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                                    <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-22.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will do mobile app development for ios and android</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade fz15 text" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-17.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will design modern websites in figma or adobe xd</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-1.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme">
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-18.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-17.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-19.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-20.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Art & Illustration</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will create modern flat design illustration</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-2.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Ali Tufan</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-19.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                                    <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-20.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will do mobile app development for ios and android</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-21.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                                    <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-22.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will do mobile app development for ios and android</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade fz15 text" id="pills-audio" role="tabpanel" aria-labelledby="pills-audio-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-17.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will design modern websites in figma or adobe xd</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-1.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme">
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-18.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-17.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-19.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-20.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Art & Illustration</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will create modern flat design illustration</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-2.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Ali Tufan</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-19.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                                    <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-20.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will do mobile app development for ios and android</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-21.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                                    <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-22.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will do mobile app development for ios and android</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade fz15 text" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-17.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will design modern websites in figma or adobe xd</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-1.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme">
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-18.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-17.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-19.jpg" alt="" />
                                                                        </div>
                                                                        <div className="item">
                                                                            <img className="" src="images/listings/g-20.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Art & Illustration</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will create modern flat design illustration</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-2.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Ali Tufan</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-19.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                                    <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-20.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will do mobile app development for ios and android</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-21.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                                    <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
                                                                <div className="list-thumb flex-shrink-0">
                                                                    <img className="w-100" src="images/listings/g-22.jpg" alt="" />
                                                                </div>
                                                                <div className="list-content flex-grow-1 ms-1">
                                                                    <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                                    <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                                    <h5 className="list-title"><Link href="./page-services-single">I will do mobile app development for ios and android</Link></h5>
                                                                    <div className="review-meta d-flex align-items-center">
                                                                        <i className="fas fa-star fz10 review-color me-2"></i>
                                                                        <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                                    </div>
                                                                    <hr className="my-2" />
                                                                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                                        <Link href="#">
                                                                            <span className="position-relative mr10">
                                                                                <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                                                                                <span className="online-badge"></span>
                                                                            </span>
                                                                            <span className="fz14">Wanda Runo</span>
                                                                        </Link>
                                                                        <div className="budget">
                                                                            <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- CTA Banner --> */}
                        <section className="cta-banner-about2 at-home10-2 at-home6 mx-auto position-relative pt60-lg pb60-lg">
                            <div className="container">
                                <div className="row align-items-center wow fadeInDown" data-wow-delay="400ms">
                                    <div className="col-lg-7 col-xl-5 mb60-xs mb100-md">
                                        <div className="mb30">
                                            <div className="main-title">
                                                <h2 className="title">A whole world of freelance <br className="d-none d-xl-block" /> talent at your fingertips</h2>
                                            </div>
                                        </div>
                                        <div className="why-chose-list">
                                            <div className="list-one d-flex align-items-start mb30">
                                                <span className="list-icon flex-shrink-0 flaticon-badge"></span>
                                                <div className="list-content flex-grow-1 ml20">
                                                    <h4 className="mb-1">Proof of quality</h4>
                                                    <p className="text mb-0 fz15">Check any pro’s work samples, client reviews, and identity <br className="d-none d-lg-block" /> verification.</p>
                                                </div>
                                            </div>
                                            <div className="list-one d-flex align-items-start mb30">
                                                <span className="list-icon flex-shrink-0 flaticon-money"></span>
                                                <div className="list-content flex-grow-1 ml20">
                                                    <h4 className="mb-1">No cost until you hire</h4>
                                                    <p className="text mb-0 fz15">Interview potential fits for your job, negotiate rates, and only pay <br className="d-none d-lg-block" /> for work you approve.</p>
                                                </div>
                                            </div>
                                            <div className="list-one d-flex align-items-start mb30">
                                                <span className="list-icon flex-shrink-0 flaticon-security"></span>
                                                <div className="list-content flex-grow-1 ml20">
                                                    <h4 className="mb-1">Safe and secure</h4>
                                                    <p className="text mb-0 fz15">Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-xl-4 offset-xl-1">
                                        <div className="listbox-style1 px30 py-5 bdrs16 bgc-thm2 position-relative">
                                            <div className="list-style1">
                                                <ul className="mb-0">
                                                    <li className="text-white fw500"><i className="far fa-check dark-color bgc-white"></i>The best for every budget</li>
                                                    <li className="text-white fw500"><i className="far fa-check dark-color bgc-white"></i>Quality work done quickly</li>
                                                    <li className="text-white fw500"><i className="far fa-check dark-color bgc-white"></i>Protected payments, every time</li>
                                                    <li className="text-white fw500 mb-0"><i className="far fa-check dark-color bgc-white"></i>24/7 support</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className="home6-cta-img" src="images/about/about-10.jpg" alt="" />
                        </section>

                        {/* <!-- Funfact --> */}
                        <section className="pb-0 pt60">
                            <div className="container maxw1600 bdrb1 pb60">
                                <div className="row">
                                    <div className="col-xl-10 mx-auto">
                                        <div className="row justify-content-center wow fadeInUp" data-wow-delay="300ms">
                                            <div className="col-6 col-md-3">
                                                <div className="funfact_one mb20-sm text-center">
                                                    <div className="details">
                                                        <ul className="ps-0 mb-0 d-flex justify-content-center">
                                                            <li><div className="timer">834</div></li>
                                                            <li><span>M</span></li>
                                                        </ul>
                                                        <p className="text mb-0">Total Freelancer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="funfact_one mb20-sm text-center">
                                                    <div className="details">
                                                        <ul className="ps-0 mb-0 d-flex justify-content-center">
                                                            <li><div className="timer">732</div></li>
                                                            <li><span>M</span></li>
                                                        </ul>
                                                        <p className="text mb-0">Positive Review</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="funfact_one mb20-sm text-center">
                                                    <div className="details">
                                                        <ul className="ps-0 mb-0 d-flex justify-content-center">
                                                            <li><div className="timer">90</div></li>
                                                            <li><span>M</span></li>
                                                        </ul>
                                                        <p className="text mb-0">Order recieved</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="funfact_one mb20-sm text-center">
                                                    <div className="details">
                                                        <ul className="ps-0 mb-0 d-flex justify-content-center">
                                                            <li><div className="timer">236</div></li>
                                                            <li><span>M</span></li>
                                                        </ul>
                                                        <p className="text mb-0">Projects Completed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Our Testimonials --> */}
                        <section className="our-testimonial">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 mx-auto wow fadeInUp" data-wow-delay="300ms">
                                        <div className="main-title text-center">
                                            <h2>Testimonials</h2>
                                            <p className="paragraph">Interdum et malesuada fames ac ante ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 m-auto wow fadeInUp" data-wow-delay="500ms">
                                        <div className="testimonial-style2">
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade" id="pills-1st" role="tabpanel" aria-labelledby="pills-1st-tab">
                                                    <div className="testi-content text-md-center">
                                                        <span className="icon fas fa-quote-left"></span>
                                                        <h4 className="testi-text">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. &quot;</h4>
                                                        <h6 className="name">Ali Tufan</h6>
                                                        <p className="design">Product Manager, Apple Inc</p>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade show active" id="pills-2nd" role="tabpanel" aria-labelledby="pills-2nd-tab">
                                                    <div className="testi-content text-md-center">
                                                        <span className="icon fas fa-quote-left"></span>
                                                        <h4 className="testi-text">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. &quot;</h4>
                                                        <h6 className="name">Ali Tufan</h6>
                                                        <p className="design">Product Manager, Apple Inc</p>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pills-3rd" role="tabpanel" aria-labelledby="pills-3rd-tab">
                                                    <div className="testi-content text-md-center">
                                                        <span className="icon fas fa-quote-left"></span>
                                                        <h4 className="testi-text">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. &quot;</h4>
                                                        <h6 className="name">Ali Tufan</h6>
                                                        <p className="design">Product Manager, Apple Inc</p>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pills-4th" role="tabpanel" aria-labelledby="pills-4th-tab">
                                                    <div className="testi-content text-md-center">
                                                        <span className="icon fas fa-quote-left"></span>
                                                        <h4 className="testi-text">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. &quot;</h4>
                                                        <h6 className="name">Ali Tufan</h6>
                                                        <p className="design">Product Manager, Apple Inc</p>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pills-5th" role="tabpanel" aria-labelledby="pills-5th-tab">
                                                    <div className="testi-content text-md-center">
                                                        <span className="icon fas fa-quote-left"></span>
                                                        <h4 className="testi-text">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. &quot;</h4>
                                                        <h6 className="name">Ali Tufan</h6>
                                                        <p className="design">Product Manager, Apple Inc</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-list position-relative">
                                                <ul className="nav nav-pills justify-content-md-center" id="pills-tab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link ps-0" id="pills-1st-tab" data-bs-toggle="pill" data-bs-target="#pills-1st" type="button" role="tab" aria-controls="pills-1st" aria-selected="true"><img src="images/testimonials/testi-1.png" alt="" /></button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="pills-2nd-tab" data-bs-toggle="pill" data-bs-target="#pills-2nd" type="button" role="tab" aria-controls="pills-2nd" aria-selected="false"><img src="images/testimonials/testi-2.png" alt="" /></button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="pills-3rd-tab" data-bs-toggle="pill" data-bs-target="#pills-3rd" type="button" role="tab" aria-controls="pills-3rd" aria-selected="false"><img src="images/testimonials/testi-3.png" alt="" /></button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="pills-4th-tab" data-bs-toggle="pill" data-bs-target="#pills-4th" type="button" role="tab" aria-controls="pills-4th" aria-selected="false"><img src="images/testimonials/testi-4.png" alt="" /></button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link pe-0" id="pills-5th-tab" data-bs-toggle="pill" data-bs-target="#pills-5th" type="button" role="tab" aria-controls="pills-5th" aria-selected="false"><img src="images/testimonials/testi-5.png" alt="" /></button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Trending Services --> */}
                        <section className="pb80 pb20-md bgc-thm2">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-9 wow fadeInUp">
                                        <div className="main-title">
                                            <h2 className="title text-white">Trending Services</h2>
                                            <p className="paragraph text-white">Aliquam lacinia diam quis lacus euismod</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="text-start text-lg-end mb-4 mb-lg-2">
                                            <Link className="ud-btn2 text-white" href="page-service-v1">All Services<i className="fal fa-arrow-right-long"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="slider-outer-dib vam_nav_style dots_none slider-4-grid owl-carousel owl-theme wow fadeInUp" data-wow-delay="300ms">
                                            <div className="item">
                                                <div className="listing-style1 default-box-shadow1 border-0">
                                                    <div className="list-thumb">
                                                        <img className="w-100" src="images/listings/g-1.jpg" alt="" />
                                                        <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                    </div>
                                                    <div className="list-content">
                                                        <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                        <h5 className="list-title"><Link href="./page-services-single">I will design modern websites in figma or adobe xd</Link></h5>
                                                        <div className="review-meta d-flex align-items-center">
                                                            <i className="fas fa-star fz10 review-color me-2"></i>
                                                            <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                        </div>
                                                        <hr className="my-2" />
                                                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                            <Link className="d-flex" href="#">
                                                                <span className="position-relative mr10">
                                                                    <img className="rounded-circle wa" src="images/team/fl-s-1.png" alt="Freelancer Photo" />
                                                                    <span className="online-badges"></span>
                                                                </span>
                                                                <span className="fz14">Wanda Runo</span>
                                                            </Link>
                                                            <div className="budget">
                                                                <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listing-style1 default-box-shadow1 border-0">
                                                    <div className="list-thumb">
                                                        <img className="w-100" src="images/listings/g-2.jpg" alt="" />
                                                        <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                    </div>
                                                    <div className="list-content">
                                                        <p className="list-text body-color fz14 mb-1">Art & Illustration</p>
                                                        <h5 className="list-title"><Link href="./page-services-single">I will create modern flat design illustration</Link></h5>
                                                        <div className="review-meta d-flex align-items-center">
                                                            <i className="fas fa-star fz10 review-color me-2"></i>
                                                            <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                        </div>
                                                        <hr className="my-2" />
                                                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                            <Link className="d-flex" href="#">
                                                                <span className="position-relative mr10">
                                                                    <img className="rounded-circle wa" src="images/team/fl-s-2.png" alt="Freelancer Photo" />
                                                                    <span className="online-badges"></span>
                                                                </span>
                                                                <span className="fz14">Ali Tufan</span>
                                                            </Link>
                                                            <div className="budget">
                                                                <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listing-style1 default-box-shadow1 border-0">
                                                    <div className="list-thumb">
                                                        <img className="w-100" src="images/listings/g-3.jpg" alt="" />
                                                        <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                    </div>
                                                    <div className="list-content">
                                                        <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                        <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                        <div className="review-meta d-flex align-items-center">
                                                            <i className="fas fa-star fz10 review-color me-2"></i>
                                                            <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                        </div>
                                                        <hr className="my-2" />
                                                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                            <Link className="d-flex" href="#">
                                                                <span className="position-relative mr10">
                                                                    <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                    <span className="online-badges"></span>
                                                                </span>
                                                                <span className="fz14">Wanda Runo</span>
                                                            </Link>
                                                            <div className="budget">
                                                                <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listing-style1 default-box-shadow1 border-0">
                                                    <div className="list-thumb">
                                                        <img className="w-100" src="images/listings/g-4.jpg" alt="" />
                                                        <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                    </div>
                                                    <div className="list-content">
                                                        <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                        <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will do mobile app development for ios and android</Link></h5>
                                                        <div className="review-meta d-flex align-items-center">
                                                            <i className="fas fa-star fz10 review-color me-2"></i>
                                                            <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                        </div>
                                                        <hr className="my-2" />
                                                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                            <Link className="d-flex" href="#">
                                                                <span className="position-relative mr10">
                                                                    <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                                                                    <span className="online-badges"></span>
                                                                </span>
                                                                <span className="fz14">Wanda Runo</span>
                                                            </Link>
                                                            <div className="budget">
                                                                <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listing-style1 default-box-shadow1 border-0">
                                                    <div className="list-thumb">
                                                        <img className="w-100" src="images/listings/g-5.jpg" alt="" />
                                                        <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                    </div>
                                                    <div className="list-content">
                                                        <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                        <h5 className="list-title"><Link href="./page-services-single">I will design modern websites in figma or adobe xd</Link></h5>
                                                        <div className="review-meta d-flex align-items-center">
                                                            <i className="fas fa-star fz10 review-color me-2"></i>
                                                            <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                        </div>
                                                        <hr className="my-2" />
                                                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                            <Link className="d-flex" href="#">
                                                                <span className="position-relative mr10">
                                                                    <img className="rounded-circle" src="images/team/fl-s-1.png" alt="Freelancer Photo" />
                                                                    <span className="online-badges"></span>
                                                                </span>
                                                                <span className="fz14">Wanda Runo</span>
                                                            </Link>
                                                            <div className="budget">
                                                                <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listing-style1 default-box-shadow1 border-0">
                                                    <div className="list-thumb">
                                                        <img className="w-100" src="images/listings/g-6.jpg" alt="" />
                                                        <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                    </div>
                                                    <div className="list-content">
                                                        <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                                                        <h5 className="list-title"><Link href="./page-services-single">I will design modern websites in figma or adobe xd</Link></h5>
                                                        <div className="review-meta d-flex align-items-center">
                                                            <i className="fas fa-star fz10 review-color me-2"></i>
                                                            <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                        </div>
                                                        <hr className="my-2" />
                                                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                            <Link className="d-flex" href="#">
                                                                <span className="position-relative mr10">
                                                                    <img className="rounded-circle" src="images/team/fl-s-2.png" alt="Freelancer Photo" />
                                                                    <span className="online-badges"></span>
                                                                </span>
                                                                <span className="fz14">Wanda Runo</span>
                                                            </Link>
                                                            <div className="budget">
                                                                <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listing-style1 default-box-shadow1 border-0">
                                                    <div className="list-thumb">
                                                        <img className="w-100" src="images/listings/g-7.jpg" alt="" />
                                                        <Link href="#" className="listing-fav fz12"><span className="far fa-heart"></span></Link>
                                                    </div>
                                                    <div className="list-content">
                                                        <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                                                        <h5 className="list-title line-clamp2"><Link href="./page-services-single">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</Link></h5>
                                                        <div className="review-meta d-flex align-items-center">
                                                            <i className="fas fa-star fz10 review-color me-2"></i>
                                                            <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                                                        </div>
                                                        <hr className="my-2" />
                                                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                            <Link className="d-flex" href="#">
                                                                <span className="position-relative mr10">
                                                                    <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                                                                    <span className="online-badges"></span>
                                                                </span>
                                                                <span className="fz14">Wanda Runo</span>
                                                            </Link>
                                                            <div className="budget">
                                                                <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Our Blog --> */}
                        <section className="pb90 pb20-md">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-9 wow fadeInUp" data-wow-delay="00ms">
                                        <div className="main-title">
                                            <h2 className="title">Our Blog</h2>
                                            <p className="paragraph">Aliquam lacinia diam quis lacus euismod</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="text-start text-lg-end mb-4 mb-lg-2">
                                            <Link className="ud-btn2" href="page-blog-v1">Browse All<i className="fal fa-arrow-right-long"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row wow fadeInUp" data-wow-delay="300ms">
                                    <div className="col-sm-6 col-xl-3">
                                        <div className="blog-style1 at-home6">
                                            <div className="blog-img bdrs4 over-flowhidden"><img className="w-100" src="images/blog/blog-1.jpg" alt="" /></div>
                                            <div className="blog-content px-0 pb-0">
                                                <Link className="date" href="#">December 2, 2022</Link>
                                                <h4 className="title mt-1"><Link href="./page-blog-single">Start an online business and work from home</Link></h4>
                                                <p className="text mb-0">A complete guide to starting a small <br className="d-none d-md-block" /> business online</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xl-3">
                                        <div className="blog-style1 at-home6">
                                            <div className="blog-img bdrs4 over-flowhidden"><img className="w-100" src="images/blog/blog-2.jpg" alt="" /></div>
                                            <div className="blog-content px-0 pb-0">
                                                <Link className="date" href="#">December 2, 2022</Link>
                                                <h4 className="title mt-1"><Link href="./page-blog-single">Front becomes an official Instagram Marketing Partner</Link></h4>
                                                <p className="text mb-0">A complete guide to starting a small <br className="d-none d-md-block" /> business online</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xl-3">
                                        <div className="blog-style1 at-home6">
                                            <div className="blog-img bdrs4 over-flowhidden"><img className="w-100" src="images/blog/blog-3.jpg" alt="" /></div>
                                            <div className="blog-content px-0 pb-0">
                                                <Link className="date" href="#">December 2, 2022</Link>
                                                <h4 className="title mt-1"><Link href="./page-blog-single">Engendering a culture of professional development</Link></h4>
                                                <p className="text mb-0">A complete guide to starting a small <br className="d-none d-md-block" /> business online</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xl-3">
                                        <div className="blog-style1 at-home6">
                                            <div className="blog-img bdrs4 over-flowhidden"><img className="w-100" src="images/blog/blog-4.jpg" alt="" /></div>
                                            <div className="blog-content px-0 pb-0">
                                                <Link className="date" href="#">December 2, 2022</Link>
                                                <h4 className="title mt-1"><Link href="./page-blog-single">Increasing engagement with Instagram</Link></h4>
                                                <p className="text mb-0">A complete guide to starting a small <br className="d-none d-md-block" /> business online</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Our Partners --> */}
                        <section className="our-partners pt-0">
                            <div className="container">
                                <div className="row wow fadeInUp">
                                    <div className="col-lg-12">
                                        <div className="main-title text-center">
                                            <h6>Trusted by the world’s best</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row wow fadeInUp">
                                    <div className="col-6 col-md-4 col-xl-2">
                                        <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/1.png" alt="1.png" /></div>
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-2">
                                        <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/2.png" alt="2.png" /></div>
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-2">
                                        <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/3.png" alt="3.png" /></div>
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-2">
                                        <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/4.png" alt="4.png" /></div>
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-2">
                                        <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/5.png" alt="5.png" /></div>
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-2">
                                        <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/6.png" alt="6.png" /></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Our Newslatter --> */}
                        <section className="home6-newslatter">
                            <div className="container">
                                <div className="row wow fadeInUp">
                                    <div className="col-lg-7 col-xl-6 mx-auto">
                                        <div className="mailchimp-widget text-center">
                                            <h2 className="title">Subscribe our Newsletter &</h2>
                                            <h6 className="title mb35 fw400">Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                                            <div className="mailchimp-style2 default-box-shadow7 mx-xl-4">
                                                <input type="email" className="form-control" placeholder="Your Email" />
                                                <button className="ud-btn btn-dark" type="submit">Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Our Footer --> */}
                        <section className="footer-style1 at-home10 pt25 pb-0">
                            <div className="container">
                                <div className="row bb-white-light pb10 mb60">
                                    <div className="col-md-7">
                                        <div className="d-block text-center text-md-start justify-content-center justify-content-md-start d-md-flex align-items-center mb-3 mb-md-0">
                                            <Link className="fz17 fw500 text-white mr15-md mr30" href="#">Terms of Service</Link>
                                            <Link className="fz17 fw500 text-white mr15-md mr30" href="#">Privacy Policy</Link>
                                            <Link className="fz17 fw500 text-white" href="#">Site Map</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="social-widget text-center text-md-end">
                                            <div className="social-style1">
                                                <Link className="text-white me-2 fw500 fz17" href="#">Follow us</Link>
                                                <Link href="#"><i className="fab fa-facebook-f list-inline-item"></i></Link>
                                                <Link href="#"><i className="fab fa-twitter list-inline-item"></i></Link>
                                                <Link href="#"><i className="fab fa-instagram list-inline-item"></i></Link>
                                                <Link href="#"><i className="fab fa-linkedin-in list-inline-item"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="link-style1 mb-4 mb-sm-5">
                                            <h5 className="text-white mb15">About</h5>
                                            <div className="link-list">
                                                <Link href="#">Careers</Link>
                                                <Link href="#">Press & News</Link>
                                                <Link href="#">Partnerships</Link>
                                                <Link href="#">Privacy Policy</Link>
                                                <Link href="#">Terms of Service</Link>
                                                <Link href="#">Investor Relations</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="link-style1 mb-4 mb-sm-5">
                                            <h5 className="text-white mb15">Categories</h5>
                                            <ul className="ps-0">
                                                <li><Link href="#">Graphics & Design</Link></li>
                                                <li><Link href="#">Digital Marketing</Link></li>
                                                <li><Link href="#">Writing & Translation</Link></li>
                                                <li><Link href="#">Video & Animation</Link></li>
                                                <li><Link href="#">Music & Audio</Link></li>
                                                <li><Link href="#">Programming & Tech</Link></li>
                                                <li><Link href="#">Data</Link></li>
                                                <li><Link href="#">Business</Link></li>
                                                <li><Link href="#">Lifestyle</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="link-style1 mb-4 mb-sm-5">
                                            <h5 className="text-white mb15">Support</h5>
                                            <ul className="ps-0">
                                                <li><Link href="#">Help & Support</Link></li>
                                                <li><Link href="#">Trust & Safety</Link></li>
                                                <li><Link href="#">Selling on Kaiketsu</Link></li>
                                                <li><Link href="#">Buying on Kaiketsu</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="footer-widget">
                                            <div className="footer-widget mb-4 mb-sm-5">
                                                <div className="mailchimp-widget">
                                                    <h5 className="title text-white mb20">Subscribe</h5>
                                                    <div className="mailchimp-style1">
                                                        <input type="email" className="form-control bdrs4" placeholder="Your email address" />
                                                        <button type="submit">Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-widget mb-4 mb-sm-5">
                                                <h5 className="title text-white mb20">Apps</h5>
                                                <div className="row mb-4 mb-lg-5">
                                                    <div className="col-lg-12">
                                                        <Link className="app-list d-flex align-items-center mb10" href="#">
                                                            <i className="fab fa-apple fz17 mr15"></i>
                                                            <h6 className="app-title fz15 fw400 mb-0">iOS App</h6>
                                                        </Link>
                                                        <Link className="app-list d-flex align-items-center" href="#">
                                                            <i className="fab fa-google-play fz15 mr15"></i>
                                                            <h6 className="app-title fz15 fw400 mb-0">Android App</h6>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container white-bdrt1 py-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="text-center text-lg-start">
                                            <p className="copyright-text mb-0 text-white-light ff-heading">© 2023 Kaiketsu. All Rights Reserved.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="footer_bottom_right_btns text-center text-lg-end">
                                            <ul className="p-0 m-0">
                                                <li className="list-inline-item">
                                                    <select className="selectpicker show-tick">
                                                        <option>US$ USD</option>
                                                        <option>Euro</option>
                                                        <option>Pound</option>
                                                    </select>
                                                </li>
                                                <li className="list-inline-item">
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
                        </section>
                        <Link className="scrollToHome at-home2" href="#"><i className="fas fa-angle-up"></i></Link>
                    </div>
                </div>
                {/* <!-- Wrapper End -->  */}
                {/* <script src="./js/jquery-3.6.4.min.js"></script>
                <script src="./js/jquery-migrate-3.0.0.min.js"></script>
                <script src="./js/popper.min.js"></script>
                <script src="./js/bootstrap.min.js"></script>
                <script src="./js/bootstrap-select.min.js"></script>
                <script src="./js/jquery.mmenu.all.js"></script>
                <script src="./js/ace-responsive-menu.js"></script>
                <script src="./js/jquery-scrolltofixed-min.js"></script>
                <script src="./js/wow.min.js"></script>
                <script src="./js/owl.js"></script>
                <script src="./js/jquery.counterup.js"></script>
                <script src="./js/isotop.js"></script> */}
                {/* <!-- Custom script for all pages --> */}
                {/* <script src="js/script.js"></script> */}
            </div>
        </>
    )
}