import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../../container/Footer";
import Header from "../../container/Header";
import { MenuTypes } from "../../utils/types";
import * as Config from "../../utils/Config";
import CustomHead from "../../components/head";
import Img from "../../components/Img";
import { IconButton } from "@mui/material";

const StaffsDetailPage = () => {
    const { query } = useRouter();
    const { staffId, name } = query;
    return (
        <React.Fragment>
            <CustomHead title={`${name} | ${Config.APP_NAME}`}></CustomHead>
            <div className="staffs__page">
                <Header activeTab={MenuTypes.STAFFS}></Header>
                <div className="staffs__container mh-100vh bg-white text-dark">
                    <div className="contacts_page_header d-flex justify-content-center align-items-center vh-20">
                        <h1>{name}</h1>
                    </div>

                    <div className="container-fluid  p-5">
                        <div className="col-12 row pb-5">
                            <div className="col-md-4">
                                <div className="text-center pb-5">
                                    <div className="div__staff__image p-2">
                                        <Link href="/staffs/antonyo.aziro?name=Antonuo Aziro">
                                            <Img
                                                className="grid__staff__image"
                                                src="/images/lady_cook.jpg"
                                                height="100%"
                                                width="100%"
                                                alt="lady cook"
                                            />
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
                            </div>
                            <div className="col-md-8 px-5">
                                <h1>Co-fouder, chef</h1>
                                <br />
                                <b>E-mail:</b> <a href="mailto:name@example.com">nshopit@gmail.com</a>
                                <br />
                                <br />
                                <p>
                                    Lorem ipsum dolor sit amet, sit cibo causae ut, eu ipsum ullum temporibus pri, at primis scaevola cotidieque sed.
                                    Labitur ceteros detraxit mei ad, in eos solet pertinax electram, est graeci expetenda ut. Feugiat mandamus est ut,
                                    eum melius salutandi disputationi eu. Ferri homero accommodare mea eu, utamur graecis epicurei ex eos.
                                </p>
                                <p>
                                    Mel ea latine diceret instructior. Eu pro prima sanctus singulis, an hinc assum sensibus per. Ut aeque essent his,
                                    everti legendos scribentur mea ex. Ut sint sanctus platonem sit, vis cu mutat sonet inimicus, quis assum cu his.
                                </p>
                                <p>
                                    Sit cu iudicabit reprimique. Per nonumes veritus nostrum in, quo dolorum posidonium appellantur ei. Dolore
                                    omnesque accusamus ut mea, cum munere tacimates an. Eam labores nostrum cu. Duo ex invenire assueverit
                                    philosophia, iisque maiorum ei sed. Utinam iisque est te. Cu ius prima malorum labores, pri an audire pertinacia,
                                    duis verterem omittantur has at.
                                </p>
                                <div className="social__login">
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
                        <p>
                            Lorem ipsum dolor sit amet, sit cibo causae ut, eu ipsum ullum temporibus pri, at primis scaevola cotidieque sed. Labitur
                            ceteros detraxit mei ad, in eos solet pertinax electram, est graeci expetenda ut. Feugiat mandamus est ut, eum melius
                            salutandi disputationi eu. Ferri homero accommodare mea eu, utamur graecis epicurei ex eos.
                        </p>
                        <p>
                            Mel ea latine diceret instructior. Eu pro prima sanctus singulis, an hinc assum sensibus per. Ut aeque essent his, everti
                            legendos scribentur mea ex. Ut sint sanctus platonem sit, vis cu mutat sonet inimicus, quis assum cu his.
                        </p>
                        <p>
                            Nec assum scribentur instructior eu, est eu tacimates conceptam voluptatum. Quo ea adhuc consetetur, vix eligendi deserunt
                            ullamcorper ne. An mea meis diceret urbanitas, sea altera quaeque facilisi id. Ea nec vitae meliore admodum. Cum no
                            recteque facilisis, vidit consul detracto ea eam. Ponderum legendos mei ea, ne vix case mundi evertitur.
                        </p>
                        <p>
                            Cu ius prima malorum labores, pri an audire pertinacia, duis verterem omittantur has at. Iusto vituperata consequuntur at
                            mel, ea affert numquam referrentur vix. Ea mei sanctus convenire. Eam ea delectus scribentur disputando, has an enim
                            graeci quaerendum.
                        </p>
                        <p>
                            Sit cu iudicabit reprimique. Per nonumes veritus nostrum in, quo dolorum posidonium appellantur ei. Dolore omnesque
                            accusamus ut mea, cum munere tacimates an. Eam labores nostrum cu. Duo ex invenire assueverit philosophia, iisque maiorum
                            ei sed. Utinam iisque est te.
                        </p>
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

export default StaffsDetailPage;
