import React from 'react'
import "../Components/Slides.css"

function Slides() {
    return (
        
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://edelweissspa.net/wp-content/uploads/2014/05/massage_ban.jpg" className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/1388628687/photo/woman-at-the-spa-getting-a-rejuvenation-treatment-on-her-face.jpg?s=612x612&w=0&k=20&c=fh7l3oMeJ3ObFltVw_ErEMO_4jlQN6eIoYB5Ui2_DsY=" className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://static.wixstatic.com/media/9c0ff8_e8ee0f2056844b95a40f42ea66e3cf9d~mv2.jpg/v1/fill/w_560,h_432,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/FebSpaCollage.jpg" className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn11.bigcommerce.com/s-663bb/product_images/uploaded_images/holistic-spa.jpg" className="d-block" alt="..." />

                    </div>
                    <div className="carousel-item">
                    <img src="https://media.istockphoto.com/id/513758080/photo/stone-massage.jpg?s=612x612&w=0&k=20&c=WPy4j9tMg_B5TiePSEjZZfT2hOPUnp3xm4v-9RKFiQo="className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src="https://villaafrica.co.za/wp-content/uploads/2021/07/spa-banner-img-1920x468.jpg" className="d-block" alt="..." />
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slides
