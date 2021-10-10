import { Grid, Box, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../../container/Footer";
import Header from "../../container/Header";
import { MenuTypes } from "../../utils/types";
import * as Config from '../../utils/Config';
import CustomHead from "../../components/head";
import Img from "../../components/Img";

const RecipeDetailPage = () => {
    const { query, asPath } = useRouter();
    const name = asPath.slice(1).split('_').map(item=>item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
    return (
        <React.Fragment>
            <CustomHead
                title={`${name} | Recipe | ${Config.APP_NAME}`}
            ></CustomHead>
            <div className="staffs__page">
                <Header activeTab={MenuTypes.MENU}></Header>
                <div className="staffs__container mh-100vh bg-white text-dark">
                    <div className="contacts_page_header d-flex justify-content-center align-items-center vh-20">
                        <h1>{name}</h1>
                    </div>

                    <div className="container  p-5">
                        <div className="recipe__image__showcase">
                            <Img
                                src="/images/food.jpg"
                                style={{
                                    height: "560px",
                                    width: "100%",
                                }}
                                alt="Recipe title - Recipe details"
                                className="position-relative object-fit-cover"
                            />
                            <h3 className="recipe__price text-white">$23.00</h3>
                        </div>
                        <p>
                            Suspendisse auctor erat non posuere pellentesque. In hac habitasse platea dictumst. Vestibulum rhoncus sed justo et
                            facilisis. Ut id justo molestie, faucibus magna tempor, tempus lacus. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Nullam lacus magna, sollicitudin nec suscipit porta, egestas non sem. Praesent
                            iaculis ligula luctus felis finibus rutrum. Vivamus sollicitudin diam sit amet nulla fringilla luctus. Vivamus vitae
                            hendrerit dui, ac semper sapien. Donec dolor lacus, condimentum id magna in, consectetur commodo erat. Quisque fermentum
                            nisl et dui pulvinar, in accumsan magna vulputate.
                        </p>
                        <br />
                        <br />
                        <br />
                        <div className="nutrition_ingredients d-flex">
                            <div className="nutiritons ">
                                <h1>Nutritions</h1>
                                <ul>
                                    <li>Calories: 160KCal</li>
                                    <li>Cholesterol: 18mg</li>
                                    <li>Fiber: 0.9g</li>
                                    <li>Sodium: 160mg</li>
                                    <li>Carbohydrates: 2.2g</li>
                                    <li>Fat: 2.4g</li>
                                    <li>Protein: 4.2g</li>
                                </ul>
                            </div>
                            <div className="ingredients">
                                <h1>Ingredients</h1>
                                <ul>
                                    <li>Calories: 160KCal</li>
                                    <li>Cholesterol: 18mg</li>
                                    <li>Fiber: 0.9g</li>
                                    <li>Sodium: 160mg</li>
                                    <li>Carbohydrates: 2.2g</li>
                                    <li>Fat: 2.4g</li>
                                    <li>Protein: 4.2g</li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <div className="comment__form">
                            <h1>Add Your Comment</h1>
                            <br />
                            <form className="comment_form">
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <input type="text" name="name" className="w-100" placeholder="Enter Your Name..." id="name" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <input type="email" name="email" placeholder="Enter Your Email..." className="w-100" id="email" />
                                    </Grid>
                                    <br />
                                    <div className="m-3 px-2">
                                        <input type="checkbox" name="" id="rememberMe" />
                                        <label className="primary_text" htmlFor="rememberMe">
                                            Save my name, email, and website in this browser for the next time I comment.
                                        </label>
                                    </div>
                                    <br />

                                    <Grid item xs={12}>
                                        <TextField
                                            id="message"
                                            // label="Name"
                                            multiline
                                            fullWidth
                                            style={{ background: "#fff" }}
                                            minRows={6}
                                            placeholder="Your Message..."
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <div className="m-3 px-2 w-100">
                                        <input type="checkbox" name="" id="agree" />
                                        <label className="primary_text" htmlFor="agree">
                                            I agree that my submitted data is being collected and stored. *
                                        </label>
                                    </div>
                                    <br />
                                    <div className="send__message w-100">
                                        <button className="btn btn-link primary_text">
                                            <h3 className="primary_text">Subscribe</h3>
                                        </button>
                                    </div>
                                </Grid>

                                <br />
                            </form>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            <style>{`
                .contacts_page_header{
                    background-color: #f1efe8;
                    color: var(--dark);
                }
                .our__team__container h1 {
                    font-size: 5vw;
                }
                .recipe__price{
                    width: fit-content;
                    background: #0000006e;
                    margin-left: auto;
                    position: relative;
                    top: -40px;
                    right: 15px;
                    padding: 0 10px;
                }
                ol, ul{
                    padding-left: 1rem;
                }
                .ingredients{
                    padding-left: 50px;
                }
                label.primary_text{
                    padding-left: 10px;
                  }
                .send__message{
                display: flex;
                justify-content: flex-end;
                }
            `}</style>
        </React.Fragment>
    );
};

export default RecipeDetailPage;
