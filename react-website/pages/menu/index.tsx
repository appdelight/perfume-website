import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import React from "react";
import Footer from "../../container/Footer";
import Header from "../../container/Header";
import { MenuTypes } from "../../utils/types";
import * as Config from "../../utils/Config";
import CustomHead from "../../components/head";
import Img from "../../components/Img";
import Router from "next/router";

const MenuPage = () => {
    const [activeTab, setActiveTab] = React.useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };
    const handleClickMenu = (path: string) => {
        Router.push(path)
    }
    return (
        <React.Fragment>
            <CustomHead title={`Menu | ${Config.APP_NAME}`}></CustomHead>
            <div className="menu__page">
                <Header activeTab={MenuTypes.MENU}></Header>
                <div className="menu__container mh-100vh  bg-white text-dark">
                    <div className="page_header menu_page_header d-flex justify-content-center align-items-center vh-20">
                        <h1>Menu</h1>
                    </div>
                    <div className="menu__cont p-5 my-5 container">
                        <div className="px-2">
                            <div className="menu__title fancy__title__sm">Our Menu</div>
                            <div className="line__2"></div>
                        </div>
                        <br />
                        <br />
                        <div className="">
                            {/* <h1 className="container text-center">Our Best Menu</h1> */}
                            <div className="header_cont">
                                <h3 className="exp__menu__text">Explore The Menu</h3>
                                <Tabs
                                    className="overflow-auto tab_item"
                                    onChange={handleChange}
                                    value={activeTab}
                                    aria-label="Tabs where selection follows focus"
                                >
                                    <Tab disableRipple label="Starters" />
                                    <Tab disableRipple label="Main Course" />
                                    <Tab disableRipple label="Breakfast" />
                                    <Tab disableRipple label="Lunch" />
                                    <Tab disableRipple label="Dinner" />
                                    <Tab disableRipple label="Desert" />
                                    <Tab disableRipple label="Drinks" />
                                    <Tab disableRipple label="Fast Foods" />
                                </Tabs>
                            </div>
                            {/* <h1>Explore The Menu</h1>
                            <Tabs className="overflow-auto tab_item" onChange={handleChange} value={activeTab} aria-label="Tabs where selection follows focus">
                                <Tab disableRipple label="Starters" />
                                <Tab disableRipple label="Main Course" />
                                <Tab disableRipple label="Breakfast" />
                                <Tab disableRipple label="Lunch" />
                                <Tab disableRipple label="Dinner" />
                            </Tabs> */}
                        </div>
                        <br />
                        <br />
                        <div className="menu__list col-12 row">
                            <div className="col-md-6 d-flex my-3">
                                <div className="w-30 recipe__image__div">
                                    <Link href="chicken_tandoori">
                                        <Img src="/images/big_chicken.jpg" className="object-fit-cover recipe__image" />
                                    </Link>
                                </div>
                                <div className="w-70 recipe__detail">
                                    <div className="d-flex">
                                        <div className="w-80">
                                            <h4 className="recipe__title">Chicken</h4>
                                        </div>
                                        <div className="w-20 price text-bold">$23.00</div>
                                    </div>
                                    <div className="w-100">
                                        <p>Escarole, Cannellini Beans, Meatballs, Parmigiano</p>
                                    </div>
                                    <div className="w-100 recipe__desc d-flex">
                                        <p >
                                            <b>S</b>uspendisse auctor erat non posuere pellentesque. In hac habitasse platea dictumst. Vestibulum rhoncus sed
                                            justo et facilisis. 
                                            <Link  href="chicken_tandoori">...See more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex my-3">
                                <div className="w-30 recipe__image__div">
                                    <Link href="chicken_tandoori">
                                        <Img src="/images/big_chicken.jpg" className="object-fit-cover recipe__image" />
                                    </Link>
                                </div>
                                <div className="w-70 recipe__detail">
                                    <div className="d-flex">
                                        <div className="w-80">
                                            <h4 className="recipe__title">Chicken</h4>
                                        </div>
                                        <div className="w-20 price text-bold">$23.00</div>
                                    </div>
                                    <div className="w-100">
                                        <p>Escarole, Cannellini Beans, Meatballs, Parmigiano</p>
                                    </div>
                                    <div className="w-100 recipe__desc d-flex">
                                        <p >
                                            <b>S</b>uspendisse auctor erat non posuere pellentesque. In hac habitasse platea dictumst. Vestibulum rhoncus sed
                                            justo et facilisis. 
                                            <Link  href="chicken_tandoori">...See more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex my-3">
                                <div className="w-30 recipe__image__div">
                                    <Link href="chicken_tandoori">
                                        <Img src="/images/big_chicken.jpg" className="object-fit-cover recipe__image" />
                                    </Link>
                                </div>
                                <div className="w-70 recipe__detail">
                                    <div className="d-flex">
                                        <div className="w-80">
                                            <h4 className="recipe__title">Chicken</h4>
                                        </div>
                                        <div className="w-20 price text-bold">$23.00</div>
                                    </div>
                                    <div className="w-100">
                                        <p>Escarole, Cannellini Beans, Meatballs, Parmigiano</p>
                                    </div>
                                    <div className="w-100 recipe__desc d-flex">
                                        <p >
                                            <b>S</b>uspendisse auctor erat non posuere pellentesque. In hac habitasse platea dictumst. Vestibulum rhoncus sed
                                            justo et facilisis. 
                                            <Link  href="chicken_tandoori">...See more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex my-3">
                                <div className="w-30 recipe__image__div">
                                    <Link href="chicken_tandoori">
                                        <Img src="/images/big_chicken.jpg" className="object-fit-cover recipe__image" />
                                    </Link>
                                </div>
                                <div className="w-70 recipe__detail">
                                    <div className="d-flex">
                                        <div className="w-80">
                                            <h4 className="recipe__title">Chicken</h4>
                                        </div>
                                        <div className="w-20 price text-bold">$23.00</div>
                                    </div>
                                    <div className="w-100">
                                        <p>Escarole, Cannellini Beans, Meatballs, Parmigiano</p>
                                    </div>
                                    <div className="w-100 recipe__desc d-flex">
                                        <p >
                                            <b>S</b>uspendisse auctor erat non posuere pellentesque. In hac habitasse platea dictumst. Vestibulum rhoncus sed
                                            justo et facilisis. 
                                            <Link  href="chicken_tandoori">...See more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex my-3">
                                <div className="w-30 recipe__image__div">
                                    <Link href="chicken_tandoori">
                                        <Img src="/images/big_chicken.jpg" className="object-fit-cover recipe__image" />
                                    </Link>
                                </div>
                                <div className="w-70 recipe__detail">
                                    <div className="d-flex">
                                        <div className="w-80">
                                            <h4 className="recipe__title">Chicken</h4>
                                        </div>
                                        <div className="w-20 price text-bold">$23.00</div>
                                    </div>
                                    <div className="w-100">
                                        <p>Escarole, Cannellini Beans, Meatballs, Parmigiano</p>
                                    </div>
                                    <div className="w-100 recipe__desc d-flex">
                                        <p >
                                            <b>S</b>uspendisse auctor erat non posuere pellentesque. In hac habitasse platea dictumst. Vestibulum rhoncus sed
                                            justo et facilisis. 
                                            <Link  href="chicken_tandoori">...See more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex my-3">
                                <div className="w-30 recipe__image__div">
                                    <Link href="chicken_tandoori">
                                        <Img src="/images/big_chicken.jpg" className="object-fit-cover recipe__image" />
                                    </Link>
                                </div>
                                <div className="w-70 recipe__detail">
                                    <div className="d-flex">
                                        <div className="w-80">
                                            <h4 className="recipe__title">Chicken</h4>
                                        </div>
                                        <div className="w-20 price text-bold">$23.00</div>
                                    </div>
                                    <div className="w-100">
                                        <p>Escarole, Cannellini Beans, Meatballs, Parmigiano</p>
                                    </div>
                                    <div className="w-100 recipe__desc d-flex">
                                        <p >
                                            <b>S</b>uspendisse auctor erat non posuere pellentesque. In hac habitasse platea dictumst. Vestibulum rhoncus sed
                                            justo et facilisis. 
                                            <Link  href="chicken_tandoori">...See more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex my-3">
                                <div className="w-30 recipe__image__div">
                                    <Link href="chicken_tandoori">
                                        <Img src="/images/big_chicken.jpg" className="object-fit-cover recipe__image" />
                                    </Link>
                                </div>
                                <div className="w-70 recipe__detail">
                                    <div className="d-flex">
                                        <div className="w-80">
                                            <h4 className="recipe__title">Chicken</h4>
                                        </div>
                                        <div className="w-20 price text-bold">$23.00</div>
                                    </div>
                                    <div className="w-100">
                                        <p>Escarole, Cannellini Beans, Meatballs, Parmigiano</p>
                                    </div>
                                    <div className="w-100 recipe__desc d-flex">
                                        <p >
                                            <b>S</b>uspendisse auctor erat non posuere pellentesque. In hac habitasse platea dictumst. Vestibulum rhoncus sed
                                            justo et facilisis. 
                                            <Link  href="chicken_tandoori">...See more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex my-3">
                                <div className="w-30 recipe__image__div">
                                    <Link href="chicken_tandoori">
                                        <Img src="/images/big_chicken.jpg" className="object-fit-cover recipe__image" />
                                    </Link>
                                </div>
                                <div className="w-70 recipe__detail">
                                    <div className="d-flex">
                                        <div className="w-80">
                                            <h4 className="recipe__title">Chicken</h4>
                                        </div>
                                        <div className="w-20 price text-bold">$23.00</div>
                                    </div>
                                    <div className="w-100">
                                        <p>Escarole, Cannellini Beans, Meatballs, Parmigiano</p>
                                    </div>
                                    <div className="w-100 recipe__desc d-flex">
                                        <p >
                                            <b>S</b>uspendisse auctor erat non posuere pellentesque. In hac habitasse platea dictumst. Vestibulum rhoncus sed
                                            justo et facilisis. 
                                            <Link  href="chicken_tandoori">...See more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex my-3">
                                <div className="w-30 recipe__image__div">
                                    <Link href="chicken_tandoori">
                                        <Img src="/images/big_chicken.jpg" className="object-fit-cover recipe__image" />
                                    </Link>
                                </div>
                                <div className="w-70 recipe__detail">
                                    <div className="d-flex">
                                        <div className="w-80">
                                            <h4 className="recipe__title">Chicken</h4>
                                        </div>
                                        <div className="w-20 price text-bold">$23.00</div>
                                    </div>
                                    <div className="w-100">
                                        <p>Escarole, Cannellini Beans, Meatballs, Parmigiano</p>
                                    </div>
                                    <div className="w-100 recipe__desc d-flex">
                                        <p >
                                            <b>S</b>uspendisse auctor erat non posuere pellentesque. In hac habitasse platea dictumst. Vestibulum rhoncus sed
                                            justo et facilisis. 
                                            <Link  href="chicken_tandoori">...See more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex my-3">
                                <div className="w-30 recipe__image__div">
                                    <Link href="chicken_tandoori">
                                        <Img src="/images/big_chicken.jpg" className="object-fit-cover recipe__image" />
                                    </Link>
                                </div>
                                <div className="w-70 recipe__detail">
                                    <div className="d-flex">
                                        <div className="w-80">
                                            <h4 className="recipe__title">Chicken</h4>
                                        </div>
                                        <div className="w-20 price text-bold">$23.00</div>
                                    </div>
                                    <div className="w-100">
                                        <p>Escarole, Cannellini Beans, Meatballs, Parmigiano</p>
                                    </div>
                                    <div className="w-100 recipe__desc d-flex">
                                        <p >
                                            <b>S</b>uspendisse auctor erat non posuere pellentesque. In hac habitasse platea dictumst. Vestibulum rhoncus sed
                                            justo et facilisis. 
                                            <Link  href="chicken_tandoori">...See more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br />
                        <br />
                    </div>
                    {/* <MapLocation></MapLocation>
                    <SendEmailComponent></SendEmailComponent> */}
                </div>
                <Footer></Footer>
            </div>
            <style>{`
                .menu__cont{
                    padding-left: 100px;
                    padding-right: 100px;
                }
                .page_header {
                    background-color: #f1efe8;
                    color: var(--dark);
                }
                .contacts_page_header h1 {
                    font-size: 5vw;
                }

                .menu__welcome__cont {
                    width: 100%;
                    display: flex;
                }

                .menu__title,
                .line__2 {
                    position: relative;
                }
                .menu__title::after {
                    position: absolute;
                    content: "";
                    bottom: -16px;
                    left: -7px;
                    width: 87px;
                    height: 2px;
                    background-color: var(--primary_text);
                }

                .line__2::after {
                    position: absolute;
                    content: "";
                    bottom: -24px;
                    left: 10px;
                    width: 48px;
                    height: 2px;
                    background-color: var(--primary_text);
                }
                .menu__page .description {
                    padding-top: 20px;
                }

                .menu__page a,
                .menu__page a:active {
                    color: var(--primary_text);
                }
                .recipe__image{
                    width: 100%;
                    height: 100px;
                }
                .recipe__image__div{
                    padding-right: 10px;
                }
                .recipe__detail{
                    padding-left: 20px;
                }
            `}</style>
        </React.Fragment>
    );
};

export default MenuPage;
