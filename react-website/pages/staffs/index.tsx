import React from "react";
import Footer from "../../container/Footer";
import Header from "../../container/Header";
import Link from "next/link";
import { MenuTypes } from "../../utils/types";
import * as Config from "../../utils/Config";
import CustomHead from "../../components/head";
import Img from "../../components/Img";
import { IconButton } from "@mui/material";

const StaffsPage = () => {
    return (
        <React.Fragment>
            <CustomHead title={`Staffs | ${Config.APP_NAME}`}></CustomHead>
            <div className="staffs__page">
                <Header activeTab={MenuTypes.STAFFS}></Header>
                <div className="staffs__container mh-100vh  bg-white text-dark">
                    <div className="contacts_page_header d-flex justify-content-center align-items-center vh-20">
                        <h1>Our Best Staffs</h1>
                    </div>
                    <div className="our__team__container">
                        <div className="right py-5 w-60 px-3">
                            <p className="py-4 fancy__title page__title">Our Team</p>
                            <span className="line__2"></span>
                            <h1 className="heading pb-5">Meet our best and most recognized chefs</h1>
                            <p className="welcome__desc">
                                How did it all begin? With &quot;Mamma&quot;, of course: The mother of all Giardino was opened in 1999 in Nuremberg.
                                Since then, our recipe has proved to be a success: fresh Italian cuisine, a casual ambience and full wide range of
                                dishes.
                            </p>
                            {/* <h4 className="book_table_text primary_text_dark w-fit-content py-3">Book A Table</h4> */}
                        </div>
                    </div>
                    <div className="container-fluid px-5">
                        <div className="box w-100 d-flex flex-wrap justify-content-around">
                            <div className="text-center pb-5">
                                <div className="div__staff__image p-2">
                                    <Link href="/staffs/antonyo.aziro?name=Antonuo Aziro">
                                        <Img className="grid__staff__image" src="/images/lady_cook.jpg" height="100%" width="100%" alt="lady cook" />
                                    </Link>
                                </div>
                                <h2>Antonuo Aziro</h2>
                                <p className="fancy__title__sm">Co-founder, chef</p>
                                <div className="social_icons">
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/facebook.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/twitter.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                </div>
                            </div>
                            <div className="text-center pb-5">
                                <div className="div__staff__image p-2">
                                    <Img className="grid__staff__image" src="/images/lady_cook.jpg" height="100%" width="100%" alt="lady cook" />
                                </div>
                                <h2>Antonuo Aziro</h2>
                                <p className="fancy__title__sm">Co-founder, chef</p>
                                <div className="social_icons">
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/facebook.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/twitter.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                </div>
                            </div>
                            <div className="text-center pb-5">
                                <div className="div__staff__image p-2">
                                    <Img className="grid__staff__image" src="/images/lady_cook.jpg" height="100%" width="100%" alt="lady cook" />
                                </div>
                                <h2>Antonuo Aziro</h2>
                                <p className="fancy__title__sm">Co-founder, chef</p>
                                <div className="social_icons">
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/facebook.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/twitter.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                </div>
                            </div>
                            <div className="text-center pb-5">
                                <div className="div__staff__image p-2">
                                    <Img className="grid__staff__image" src="/images/lady_cook.jpg" height="100%" width="100%" alt="lady cook" />
                                </div>
                                <h2>Antonuo Aziro</h2>
                                <p className="fancy__title__sm">Co-founder, chef</p>
                                <div className="social_icons">
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/facebook.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/twitter.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                </div>
                            </div>
                            <div className="text-center pb-5">
                                <div className="div__staff__image p-2">
                                    <Img className="grid__staff__image" src="/images/lady_cook.jpg" height="100%" width="100%" alt="lady cook" />
                                </div>
                                <h2>Antonuo Aziro</h2>
                                <p className="fancy__title__sm">Co-founder, chef</p>
                                <div className="social_icons">
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/facebook.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/twitter.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                </div>
                            </div>
                            <div className="text-center pb-5">
                                <div className="div__staff__image p-2">
                                    <Img className="grid__staff__image" src="/images/lady_cook.jpg" height="100%" width="100%" alt="lady cook" />
                                </div>
                                <h2>Antonuo Aziro</h2>
                                <p className="fancy__title__sm">Co-founder, chef</p>
                                <div className="social_icons">
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/facebook.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/twitter.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                </div>
                            </div>
                            <div className="text-center pb-5">
                                <div className="div__staff__image p-2">
                                    <Img className="grid__staff__image" src="/images/lady_cook.jpg" height="100%" width="100%" alt="lady cook" />
                                </div>
                                <h2>Antonuo Aziro</h2>
                                <p className="fancy__title__sm">Co-founder, chef</p>
                                <div className="social_icons">
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/facebook.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/twitter.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                </div>
                            </div>
                            <div className="text-center pb-5">
                                <div className="div__staff__image p-2">
                                    <Img className="grid__staff__image" src="/images/lady_cook.jpg" height="100%" width="100%" alt="lady cook" />
                                </div>
                                <h2>Antonuo Aziro</h2>
                                <p className="fancy__title__sm">Co-founder, chef</p>
                                <div className="social_icons">
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/facebook.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/twitter.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                </div>
                            </div>
                            <div className="text-center pb-5">
                                <div className="div__staff__image p-2">
                                    <Img className="grid__staff__image" src="/images/lady_cook.jpg" height="100%" width="100%" alt="lady cook" />
                                </div>
                                <h2>Antonuo Aziro</h2>
                                <p className="fancy__title__sm">Co-founder, chef</p>
                                <div className="social_icons">
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/facebook.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                    <span className="px-2">
                                        <IconButton className="icon_bg">
                                            <img className="social_icon" src="/app-icons/twitter.png" height="14px" width="14px" />
                                        </IconButton>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            <style>{`
                .contacts_page_header {
                    background-color: #f1efe8;
                    color: var(--dark);
                }
                .our__team__container h1 {
                    font-size: 5vw;
                }

                .our__team__container {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                }
                .our__team__container{

                }

                .page__title,
                .line__2 {
                    position: relative;
                }
                .page__title{
                    display: flex;
                    justify-content: center;
                }
                .page__title::after {
                    position: absolute;
                    content: "";
                    bottom: 19px;
                    left: 42%;
                    width: 87px;
                    height: 2px;
                    background-color: var(--primary_text);
                }

                .line__2::after {
                    position: absolute;
                    content: "";
                    bottom: 28px;
                    left: -28px;
                    width: 48px;
                    height: 2px;
                    background-color: var(--primary_text);
                }
                .staffs__page .description {
                    padding-top: 20px;
                }

                .staffs__page a,
                .staffs__page a:active {
                    color: var(--primary_text);
                }
                .div__staff__image{
                    width: 30vw;
                    height: 30vw;
                } 
                .grid__staff__image{
                    object-fit: cover;
                }
            `}</style>
        </React.Fragment>
    );
};

export default StaffsPage;
