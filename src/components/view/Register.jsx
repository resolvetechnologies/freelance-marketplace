import Head from "next/head";
import Link from "next/link";

export default function Register() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="bidding, fiverr, freelance marketplace, freelancers, freelancing, gigs, hiring, job board, job portal, job posting, jobs marketplace, peopleperhour, proposals, sell services, upwork" />
                <meta name="description" content="freelance.kaiketsu.tech - Freelance Marketplace" />
                <meta name="CreativeLayers" content="ATFN" />
                {/* <!-- css file --> */}
                <link rel="stylesheet" href="css/bootstrap.min.css" />
                <link rel="stylesheet" href="css/ace-responsive-menu.css" />
                <link rel="stylesheet" href="css/menu.css" />
                <link rel="stylesheet" href="css/fontawesome.css" />
                <link rel="stylesheet" href="css/flaticon.css" />
                <link rel="stylesheet" href="css/bootstrap-select.min.css" />
                <link rel="stylesheet" href="css/ud-custom-spacing.css" />
                <link rel="stylesheet" href="css/animate.css" />
                <link rel="stylesheet" href="css/jquery-ui.min.css" />
                <link rel="stylesheet" href="css/style.css" />
                {/* <!-- Responsive stylesheet --> */}
                <link rel="stylesheet" href="css/responsive.css" />
                {/* <!-- Title --> */}
                <title>freelance.kaiketsu.tech - Freelance Marketplace</title>
                {/* <!-- Favicon --> */}
                <link href="images/favicon.ico" sizes="128x128" rel="shortcut icon" type="image/x-icon" />
                <link href="images/favicon.ico" sizes="128x128" rel="shortcut icon" />
                {/* <!-- Apple Touch Icon --> */}
                <link href="images/apple-touch-icon-60x60.png" sizes="60x60" rel="apple-touch-icon" />
                <link href="images/apple-touch-icon-72x72.png" sizes="72x72" rel="apple-touch-icon" />
                <link href="images/apple-touch-icon-114x114.png" sizes="114x114" rel="apple-touch-icon" />
                <link href="images/apple-touch-icon-180x180.png" sizes="180x180" rel="apple-touch-icon" />
            </Head>

            <div className="bgc-thm4">
                <div className="wrapper ovh">
                    {/* <div className="preloader"></div> */}

                    {/* <!-- Main Header Nav --> */}
                    <header className="header-nav nav-innerpage-style main-menu">
                        {/* <!-- Ace Responsive Menu --> */}
                        <nav className="posr">
                            <div className="container-fluid posr menu_bdrt1">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-auto pe-0">
                                        <div className="d-flex align-items-center">
                                            <Link className="header-logo bdrr1 pr30 pr5-xl" href="/"><img src="images/header-logo-dark.svg" alt="Header Logo" /></Link>
                                            <div className="home1_style">
                                                <div id="mega-menu">
                                                    <Link className="btn-mega fw500" href="#"><span className="pl30 pl10-xl pr5 fz15 vam flaticon-menu"></span> Categories</Link>
                                                    <ul className="menu ps-0">
                                                        <li> <Link className="dropdown" href="#"> <span className="menu-icn flaticon-developer"></span> <span className="menu-title">Development & IT</span> </Link>
                                                            <div className="drop-menu d-flex justify-content-between">
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Web & App Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Website Design</Link></li>
                                                                        <li><Link href="#">App DesignUX Design</Link></li>
                                                                        <li><Link href="#">Landing Page Design</Link></li>
                                                                        <li><Link href="#">Icon Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Marketing Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Social Media Design</Link></li>
                                                                        <li><Link href="#">Email Design</Link></li>
                                                                        <li><Link href="#">Web Banners</Link></li>
                                                                        <li><Link href="#">Signage Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Illustration</Link></li>
                                                                        <li><Link href="#">NFT Art</Link></li>
                                                                        <li><Link href="#">Pattern Design</Link></li>
                                                                        <li><Link href="#">Portraits & Caricatures</Link></li>
                                                                        <li><Link href="#">Cartoons & Comics</Link></li>
                                                                        <li><Link href="#">Tattoo Design</Link></li>
                                                                        <li><Link href="#">Storyboards</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Gaming</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Game Art</Link></li>
                                                                        <li><Link href="#">Graphics for Streamers</Link></li>
                                                                        <li><Link href="#">Twitch Store</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Visual Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Image Editing</Link></li>
                                                                        <li><Link href="#">Presentation Design</Link></li>
                                                                        <li><Link href="#">Infographic Design</Link></li>
                                                                        <li><Link href="#">Vector Tracing</Link></li>
                                                                        <li><Link href="#">Resume Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Print Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">T-Shirts & Merchandise</Link></li>
                                                                        <li><Link href="#">Flyer Design</Link></li>
                                                                        <li><Link href="#">Brochure Design</Link></li>
                                                                        <li><Link href="#">Poster Design</Link></li>
                                                                        <li><Link href="#">Catalog Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li> <Link className="dropdown" href="#"> <span className="menu-icn flaticon-web-design-1"></span> <span className="menu-title">Design & Creative</span> </Link>
                                                            <div className="drop-menu d-flex justify-content-between">
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Web & App Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Website Design</Link></li>
                                                                        <li><Link href="#">App DesignUX Design</Link></li>
                                                                        <li><Link href="#">Landing Page Design</Link></li>
                                                                        <li><Link href="#">Icon Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Marketing Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Social Media Design</Link></li>
                                                                        <li><Link href="#">Email Design</Link></li>
                                                                        <li><Link href="#">Web Banners</Link></li>
                                                                        <li><Link href="#">Signage Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Illustration</Link></li>
                                                                        <li><Link href="#">NFT Art</Link></li>
                                                                        <li><Link href="#">Pattern Design</Link></li>
                                                                        <li><Link href="#">Portraits & Caricatures</Link></li>
                                                                        <li><Link href="#">Cartoons & Comics</Link></li>
                                                                        <li><Link href="#">Tattoo Design</Link></li>
                                                                        <li><Link href="#">Storyboards</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Gaming</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Game Art</Link></li>
                                                                        <li><Link href="#">Graphics for Streamers</Link></li>
                                                                        <li><Link href="#">Twitch Store</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Visual Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Image Editing</Link></li>
                                                                        <li><Link href="#">Presentation Design</Link></li>
                                                                        <li><Link href="#">Infographic Design</Link></li>
                                                                        <li><Link href="#">Vector Tracing</Link></li>
                                                                        <li><Link href="#">Resume Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Print Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">T-Shirts & Merchandise</Link></li>
                                                                        <li><Link href="#">Flyer Design</Link></li>
                                                                        <li><Link href="#">Brochure Design</Link></li>
                                                                        <li><Link href="#">Poster Design</Link></li>
                                                                        <li><Link href="#">Catalog Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li> <Link className="dropdown" href="#"> <span className="menu-icn flaticon-digital-marketing"></span> <span className="menu-title">Digital Marketing</span> </Link>
                                                            <div className="drop-menu d-flex justify-content-between">
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Web & App Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Website Design</Link></li>
                                                                        <li><Link href="#">App DesignUX Design</Link></li>
                                                                        <li><Link href="#">Landing Page Design</Link></li>
                                                                        <li><Link href="#">Icon Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Marketing Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Social Media Design</Link></li>
                                                                        <li><Link href="#">Email Design</Link></li>
                                                                        <li><Link href="#">Web Banners</Link></li>
                                                                        <li><Link href="#">Signage Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Illustration</Link></li>
                                                                        <li><Link href="#">NFT Art</Link></li>
                                                                        <li><Link href="#">Pattern Design</Link></li>
                                                                        <li><Link href="#">Portraits & Caricatures</Link></li>
                                                                        <li><Link href="#">Cartoons & Comics</Link></li>
                                                                        <li><Link href="#">Tattoo Design</Link></li>
                                                                        <li><Link href="#">Storyboards</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Gaming</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Game Art</Link></li>
                                                                        <li><Link href="#">Graphics for Streamers</Link></li>
                                                                        <li><Link href="#">Twitch Store</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Visual Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Image Editing</Link></li>
                                                                        <li><Link href="#">Presentation Design</Link></li>
                                                                        <li><Link href="#">Infographic Design</Link></li>
                                                                        <li><Link href="#">Vector Tracing</Link></li>
                                                                        <li><Link href="#">Resume Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Print Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">T-Shirts & Merchandise</Link></li>
                                                                        <li><Link href="#">Flyer Design</Link></li>
                                                                        <li><Link href="#">Brochure Design</Link></li>
                                                                        <li><Link href="#">Poster Design</Link></li>
                                                                        <li><Link href="#">Catalog Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li> <Link className="dropdown" href="#"> <span className="menu-icn flaticon-translator"></span> <span className="menu-title">Writing & Translation</span> </Link>
                                                            <div className="drop-menu d-flex justify-content-between">
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Web & App Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Website Design</Link></li>
                                                                        <li><Link href="#">App DesignUX Design</Link></li>
                                                                        <li><Link href="#">Landing Page Design</Link></li>
                                                                        <li><Link href="#">Icon Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Marketing Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Social Media Design</Link></li>
                                                                        <li><Link href="#">Email Design</Link></li>
                                                                        <li><Link href="#">Web Banners</Link></li>
                                                                        <li><Link href="#">Signage Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Illustration</Link></li>
                                                                        <li><Link href="#">NFT Art</Link></li>
                                                                        <li><Link href="#">Pattern Design</Link></li>
                                                                        <li><Link href="#">Portraits & Caricatures</Link></li>
                                                                        <li><Link href="#">Cartoons & Comics</Link></li>
                                                                        <li><Link href="#">Tattoo Design</Link></li>
                                                                        <li><Link href="#">Storyboards</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Gaming</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Game Art</Link></li>
                                                                        <li><Link href="#">Graphics for Streamers</Link></li>
                                                                        <li><Link href="#">Twitch Store</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Visual Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Image Editing</Link></li>
                                                                        <li><Link href="#">Presentation Design</Link></li>
                                                                        <li><Link href="#">Infographic Design</Link></li>
                                                                        <li><Link href="#">Vector Tracing</Link></li>
                                                                        <li><Link href="#">Resume Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Print Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">T-Shirts & Merchandise</Link></li>
                                                                        <li><Link href="#">Flyer Design</Link></li>
                                                                        <li><Link href="#">Brochure Design</Link></li>
                                                                        <li><Link href="#">Poster Design</Link></li>
                                                                        <li><Link href="#">Catalog Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li> <Link className="dropdown" href="#"> <span className="menu-icn flaticon-microphone"></span> <span className="menu-title">Music & Audio</span> </Link>
                                                            <div className="drop-menu d-flex justify-content-between">
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Web & App Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Website Design</Link></li>
                                                                        <li><Link href="#">App DesignUX Design</Link></li>
                                                                        <li><Link href="#">Landing Page Design</Link></li>
                                                                        <li><Link href="#">Icon Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Marketing Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Social Media Design</Link></li>
                                                                        <li><Link href="#">Email Design</Link></li>
                                                                        <li><Link href="#">Web Banners</Link></li>
                                                                        <li><Link href="#">Signage Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Illustration</Link></li>
                                                                        <li><Link href="#">NFT Art</Link></li>
                                                                        <li><Link href="#">Pattern Design</Link></li>
                                                                        <li><Link href="#">Portraits & Caricatures</Link></li>
                                                                        <li><Link href="#">Cartoons & Comics</Link></li>
                                                                        <li><Link href="#">Tattoo Design</Link></li>
                                                                        <li><Link href="#">Storyboards</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Gaming</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Game Art</Link></li>
                                                                        <li><Link href="#">Graphics for Streamers</Link></li>
                                                                        <li><Link href="#">Twitch Store</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Visual Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Image Editing</Link></li>
                                                                        <li><Link href="#">Presentation Design</Link></li>
                                                                        <li><Link href="#">Infographic Design</Link></li>
                                                                        <li><Link href="#">Vector Tracing</Link></li>
                                                                        <li><Link href="#">Resume Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Print Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">T-Shirts & Merchandise</Link></li>
                                                                        <li><Link href="#">Flyer Design</Link></li>
                                                                        <li><Link href="#">Brochure Design</Link></li>
                                                                        <li><Link href="#">Poster Design</Link></li>
                                                                        <li><Link href="#">Catalog Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li> <Link className="dropdown" href="#"> <span className="menu-icn flaticon-video-file"></span> <span className="menu-title">Video & Animation</span> </Link>
                                                            <div className="drop-menu d-flex justify-content-between">
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Web & App Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Website Design</Link></li>
                                                                        <li><Link href="#">App DesignUX Design</Link></li>
                                                                        <li><Link href="#">Landing Page Design</Link></li>
                                                                        <li><Link href="#">Icon Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Marketing Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Social Media Design</Link></li>
                                                                        <li><Link href="#">Email Design</Link></li>
                                                                        <li><Link href="#">Web Banners</Link></li>
                                                                        <li><Link href="#">Signage Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Illustration</Link></li>
                                                                        <li><Link href="#">NFT Art</Link></li>
                                                                        <li><Link href="#">Pattern Design</Link></li>
                                                                        <li><Link href="#">Portraits & Caricatures</Link></li>
                                                                        <li><Link href="#">Cartoons & Comics</Link></li>
                                                                        <li><Link href="#">Tattoo Design</Link></li>
                                                                        <li><Link href="#">Storyboards</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Gaming</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Game Art</Link></li>
                                                                        <li><Link href="#">Graphics for Streamers</Link></li>
                                                                        <li><Link href="#">Twitch Store</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Visual Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Image Editing</Link></li>
                                                                        <li><Link href="#">Presentation Design</Link></li>
                                                                        <li><Link href="#">Infographic Design</Link></li>
                                                                        <li><Link href="#">Vector Tracing</Link></li>
                                                                        <li><Link href="#">Resume Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Print Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">T-Shirts & Merchandise</Link></li>
                                                                        <li><Link href="#">Flyer Design</Link></li>
                                                                        <li><Link href="#">Brochure Design</Link></li>
                                                                        <li><Link href="#">Poster Design</Link></li>
                                                                        <li><Link href="#">Catalog Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li> <Link className="dropdown" href="#"> <span className="menu-icn flaticon-ruler"></span> <span className="menu-title">Engineering & Architecture</span> </Link>
                                                            <div className="drop-menu d-flex justify-content-between">
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Web & App Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Website Design</Link></li>
                                                                        <li><Link href="#">App DesignUX Design</Link></li>
                                                                        <li><Link href="#">Landing Page Design</Link></li>
                                                                        <li><Link href="#">Icon Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Marketing Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Social Media Design</Link></li>
                                                                        <li><Link href="#">Email Design</Link></li>
                                                                        <li><Link href="#">Web Banners</Link></li>
                                                                        <li><Link href="#">Signage Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Illustration</Link></li>
                                                                        <li><Link href="#">NFT Art</Link></li>
                                                                        <li><Link href="#">Pattern Design</Link></li>
                                                                        <li><Link href="#">Portraits & Caricatures</Link></li>
                                                                        <li><Link href="#">Cartoons & Comics</Link></li>
                                                                        <li><Link href="#">Tattoo Design</Link></li>
                                                                        <li><Link href="#">Storyboards</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Gaming</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Game Art</Link></li>
                                                                        <li><Link href="#">Graphics for Streamers</Link></li>
                                                                        <li><Link href="#">Twitch Store</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Visual Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Image Editing</Link></li>
                                                                        <li><Link href="#">Presentation Design</Link></li>
                                                                        <li><Link href="#">Infographic Design</Link></li>
                                                                        <li><Link href="#">Vector Tracing</Link></li>
                                                                        <li><Link href="#">Resume Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Print Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">T-Shirts & Merchandise</Link></li>
                                                                        <li><Link href="#">Flyer Design</Link></li>
                                                                        <li><Link href="#">Brochure Design</Link></li>
                                                                        <li><Link href="#">Poster Design</Link></li>
                                                                        <li><Link href="#">Catalog Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li> <Link className="dropdown" href="#"> <span className="menu-icn flaticon-goal"></span> <span className="menu-title">Finance & Accounting</span> </Link>
                                                            <div className="drop-menu d-flex justify-content-between">
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Web & App Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Website Design</Link></li>
                                                                        <li><Link href="#">App DesignUX Design</Link></li>
                                                                        <li><Link href="#">Landing Page Design</Link></li>
                                                                        <li><Link href="#">Icon Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Marketing Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Social Media Design</Link></li>
                                                                        <li><Link href="#">Email Design</Link></li>
                                                                        <li><Link href="#">Web Banners</Link></li>
                                                                        <li><Link href="#">Signage Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Illustration</Link></li>
                                                                        <li><Link href="#">NFT Art</Link></li>
                                                                        <li><Link href="#">Pattern Design</Link></li>
                                                                        <li><Link href="#">Portraits & Caricatures</Link></li>
                                                                        <li><Link href="#">Cartoons & Comics</Link></li>
                                                                        <li><Link href="#">Tattoo Design</Link></li>
                                                                        <li><Link href="#">Storyboards</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Gaming</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">Game Art</Link></li>
                                                                        <li><Link href="#">Graphics for Streamers</Link></li>
                                                                        <li><Link href="#">Twitch Store</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="one-third">
                                                                    <div className="h6 cat-title">Visual Design</div>
                                                                    <ul className="ps-0 mb40">
                                                                        <li><Link href="#">Image Editing</Link></li>
                                                                        <li><Link href="#">Presentation Design</Link></li>
                                                                        <li><Link href="#">Infographic Design</Link></li>
                                                                        <li><Link href="#">Vector Tracing</Link></li>
                                                                        <li><Link href="#">Resume Design</Link></li>
                                                                    </ul>
                                                                    <div className="h6 cat-title">Print Design</div>
                                                                    <ul className="ps-0 mb-0">
                                                                        <li><Link href="#">T-Shirts & Merchandise</Link></li>
                                                                        <li><Link href="#">Flyer Design</Link></li>
                                                                        <li><Link href="#">Brochure Design</Link></li>
                                                                        <li><Link href="#">Poster Design</Link></li>
                                                                        <li><Link href="#">Catalog Design</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                            {/* <!-- Responsive Menu Structure--> */}
                                            
                                            <Link className="login-info bdrl1 pl15-lg pl30" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><span className="flaticon-loupe"></span></Link>
                                            <Link className="login-info mx15-lg mx30" href="page-become-seller"><span className="d-none d-xl-inline-block">Become a</span> Seller</Link>
                                            <Link className="login-info mr15-lg mr30" href="page-login">Sign in</Link>
                                            <Link className="ud-btn btn-thm add-joining" href="page-register">Join</Link>
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
                                            <Link className="" href="page-login">join</Link>
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
                                        <li><Link href="/">Home V1</Link></li>
                                        <li><Link href="/">Home V2</Link></li>
                                        <li><Link href="/">Home V3</Link></li>
                                        <li><Link href="/">Home V4</Link></li>
                                        <li><Link href="/">Home V5</Link></li>
                                        <li><Link href="/">Home V6</Link></li>
                                        <li><Link href="/">Home V7</Link></li>
                                        <li><Link href="/">Home V8</Link></li>
                                        <li><Link href="/">Home V9</Link></li>
                                        <li><Link href="/">Home V10</Link></li>
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
                        {/* <!-- Our SignUp Area --> */}
                        <section className="our-register">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
                                        <div className="main-title text-center">
                                            <h2 className="title">Register</h2>
                                            <p className="paragraph">Register now to discover your next freelance adventure!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row wow fadeInRight" data-wow-delay="300ms">
                                    <div className="col-xl-6 mx-auto">
                                        <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                                            <div className="mb30">
                                                <h4>Let&apos;s create your account!</h4>
                                                <p className="text mt20">Already have an account? <Link href="./page-login" className="text-thm">Log In!</Link></p>
                                            </div>
                                            <div className="mb25">
                                                <label className="form-label fw500 dark-color">Full Name</label>
                                                <input type="text" className="form-control" placeholder="John Doe" required />
                                            </div>
                                            <div className="mb25">
                                                <label className="form-label fw500 dark-color">Username</label>
                                                <input type="text" className="form-control" placeholder="alitf" required />
                                            </div>
                                            <div className="mb25">
                                                <label className="form-label fw500 dark-color">Email</label>
                                                <input type="email" className="form-control" placeholder="alitfn58@gmail.com" required />
                                            </div>
                                            <div className="mb15">
                                                <label className="form-label fw500 dark-color">Password</label>
                                                <input type="text" className="form-control" placeholder="*******" required />
                                            </div>
                                            <div className="d-grid mb20">
                                                <button className="ud-btn btn-thm default-box-shadow2" type="button">Creat Account <i className="fal fa-arrow-right-long"></i></button>
                                            </div>
                                            <div className="hr_content mb20"><hr /><span className="hr_top_text">OR</span></div>
                                            <div className="d-md-flex justify-content-between">
                                                <button className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0" type="button"><i className="fab fa-facebook-f pr10"></i> Continue Facebook</button>
                                                <button className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0" type="button"><i className="fab fa-google"></i> Continue Google</button>
                                                <button className="ud-btn btn-apple fz14 fw400" type="button"><i className="fab fa-apple"></i> Continue Apple</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Our Footer -->  */}
                        <section className="footer-style1 pt25 pb-0">
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
                                                <li><Link href="#">Selling on Freeio</Link></li>
                                                <li><Link href="#">Buying on Freeio</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="footer-widget">
                                            <div className="footer-widget mb-4 mb-sm-5">
                                                <div className="mailchimp-widget">
                                                    <h5 className="title text-white mb20">Subscribe</h5>
                                                    <div className="mailchimp-style1">
                                                        <input type="email" className="form-control" placeholder="Your email address" />
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
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="text-center text-lg-start">
                                            <p className="copyright-text mb-2 mb-md-0 text-white-light ff-heading">© 2023 Kaiketsu. All Rights Reserved.</p>
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
                        <Link className="scrollToHome" href="#"><i className="fas fa-angle-up"></i></Link>
                    </div>
                </div>
                {/* <!-- Wrapper End -->  */}
                {/* <script src="js/jquery-3.6.4.min.js"></script>
                <script src="js/jquery-migrate-3.0.0.min.js"></script>
                <script src="js/popper.min.js"></script>
                <script src="js/bootstrap.min.js"></script>
                <script src="js/bootstrap-select.min.js"></script>
                <script src="js/jquery.mmenu.all.js"></script>
                <script src="js/ace-responsive-menu.js"></script>
                <script src="js/jquery-scrolltofixed-min.js"></script>
                <script src="js/wow.min.js"></script> */}
                {/* <!-- Custom script for all pages --> */}
                {/* <script src="js/script.js"></script> */}
            </div>
        </>
    )
}