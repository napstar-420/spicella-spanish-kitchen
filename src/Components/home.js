/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { TbHelp } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";

const Home = () => {

    const sectionStyle = {
        width: '90%',
        margin: 'auto',
        paddingTop: '4em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const articleStyle = {
        width: '40%',
    }

    const paraStyle = {fontSize: '1.2rem', fontFamily: 'Albert Sans, sans-serif', width: '70%', margin: 'auto', textAlign: 'center', marginBottom: '2em'}

  return (
    <div className="home">
        <header className="header-container">
            <div className="top-nav">
                <ul>
                    <li>&reg; Since 1956</li>
                    <li>Help <TbHelp style={{margin: '0 0.5rem'}}/></li>
                </ul>
            </div>
            <div className="middle-container">
                <div className='image-back'/>
                <div className="welcome-container">
                    <h1>Spicella Spanish Kitchen</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad aut iusto at molestias repudiandae pariatur rem similique magnam asperiores amet fuga fugiat enim debitis error earum nisi quos ullam, dolores sed eius voluptate!</p>
                    <div className="buttons">
                        <button className="header-btn menu-btn">Menu</button>
                        <button className="header-btn order-btn">Order Online <BsArrowRightShort className="order-icon"/></button>
                    </div>
                    <nav>
                        <a href="#home">Home <IoIosArrowDown className="nav-link-icon"/></a>
                        <a href="#about-us">About us <IoIosArrowDown className="nav-link-icon"/></a>
                        <a href="#">Menu <IoIosArrowDown className="nav-link-icon"/></a>
                        <a href="#">Services <IoIosArrowDown className="nav-link-icon"/></a>
                        <a href="#">Contact <IoIosArrowDown className="nav-link-icon"/></a>
                        <a href="#">Rate us <IoIosArrowDown className="nav-link-icon"/></a>
                    </nav>
                    <div className="bottom-container">
                        <button><FaMapMarkerAlt/> Locate us</button>
                        <div className="icons">
                            <FaFacebookSquare className="social-icons"/>
                            <FaInstagramSquare className="social-icons"/>
                            <FaTwitterSquare className="social-icons"/>
                            <FaYoutubeSquare className="social-icons"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <section style={sectionStyle} id='home'>
                <article style={articleStyle}>
                    <h1 style={{fontSize: '2rem', marginBottom: '1rem', fontFamily: 'Albert Sans, sans-serif'}}>Spicella Spanish Kitchen</h1>
                    <p style={{fontSize: '1.2rem', fontFamily: 'Albert Sans, sans-serif'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati deleniti illum odio molestiae ad vero, similique, neque quidem at nihil excepturi cum quae alias quis optio ullam architecto fuga necessitatibus accusantium error, magni in. Totam nobis, maiores magnam quod animi quisquam labore quasi dolores necessitatibus iure perferendis, amet molestiae, excepturi sint saepe architecto culpa?</p>
                </article>
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80" width='40%' alt="store-img" />
            </section>
            <div className="underline"/>
            <section id='about-us'>
                <h1 style={{fontSize: '2rem', marginBottom: '1rem', fontFamily: 'Albert Sans, sans-serif',  textAlign: 'center'}}>About us</h1>
                <div style={{display: 'flex', width: '90%', margin:'5em auto', justifyContent: 'center', gap: '2em'}}>
                    <img style={{ width: '33%', height: '20em'}} src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img style={{ width: '33%', height: '20em'}} src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img style={{ width: '33%', height: '20em'}} src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum odio autem corrupti rerum vero sunt blanditiis quod, expedita ullam porro doloribus et totam ipsam accusamus! Corrupti laboriosam, ratione dicta quas ipsam unde aliquam. Eum impedit deleniti voluptates nulla minus possimus libero, animi esse cum voluptate ipsum deserunt ut architecto eligendi, culpa magni obcaecati minima quidem, modi quibusdam saepe ipsa consequuntur. Quasi ipsa assumenda temporibus maiores vitae, molestias quas inventore!</p>
                <p style={paraStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse consequatur enim suscipit placeat quis nostrum obcaecati ad nulla ut non error facilis et, voluptatibus alias provident necessitatibus voluptatum reprehenderit aspernatur? Nisi quod quis culpa reiciendis quia blanditiis laudantium error nemo earum animi! Vel esse corrupti, iste id delectus cumque asperiores ratione perferendis cupiditate debitis sit, inventore quis neque assumenda, quae sed eaque minima soluta repellendus mollitia. Eius maiores architecto perspiciatis rem quae dolorum laboriosam incidunt aut quos!</p>
                <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsam nemo fugiat consequuntur. Reprehenderit nam qui, vel dolor repellendus provident impedit maiores numquam ipsa facilis ipsam obcaecati eligendi velit illo?</p>
            </section>
            <div className="underline"></div>
            <section className="menu-container">
                <h1>Menu</h1>
                
            </section>
        </main>
    </div>
  )
};

export default Home;
