import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import SearchForm from './section-components/search-form';

import Counter from './section-components/counter-v1';

import Featuresv1 from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v1';
import Testimonial from './section-components/testimonial-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import AboutV4 from './section-components/about-v4';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <SearchForm />
        <AboutV4 />
        <Counter />
        <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
        <ProSlider />
        <Testimonial />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home_V1

