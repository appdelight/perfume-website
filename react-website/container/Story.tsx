import React from 'react'
import { PRIMARY_COLOR } from '../utils/Config'
import Image from 'next/image';
import { PostObject } from '../redux/Actions/Post.action';

type StoryProps = {
    posts: PostObject[]
}
const Story = (props: StoryProps) => {
    
    return (
        <React.Fragment>
            <div className="story__cont">

                <div className="story d-flex">
                    {props.posts.map((post: PostObject, index: number)=>(
                        <div key={index} className="story_circle">
                                <Image
                                    width="71px"
                                    height="71px"
                                    layout="fixed"
                                    objectFit="cover"
                                    className="story_circle_image"
                                    src={post.urls.thumb}
                                    loading="lazy"
                                    alt="SpicyDeli"
                                    />
                                
                            <div className="username text_wrap">
                                {post.user.username}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .story__cont{
                    // top: 50px;
                    // position: sticky;
                    z-index: 9;
                    background: var(--dark);

                }
                .story{
                    overflow-x: auto;
                    overflow-y: hidden;
                    height: 110px;
                }
                .story_circle{
                    height: 80px;
                    min-width: 80px;
                    margin: 4px 4px 0 4px;
                    border: 2px solid ${PRIMARY_COLOR};
                    border-radius: 50px;
                    position: relative;
                    display: flex;
                    justify-content: center;
                }
                .story_circle div {
                    margin: auto;
                }
                .username{
                    position: absolute;
                    margin-top: 75px !important;
                    max-width: 70px;
                }
                .story_circle_image {
                    border-radius: 50px; 
                }
                .story_circle_image div:first-child {
                    margin: auto;
                }
            `}</style>
        </React.Fragment>
    )
}

export default Story
