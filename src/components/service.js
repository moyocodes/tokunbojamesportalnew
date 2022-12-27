import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import ServiceV1 from './section-components/service-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import AboutV4 from './section-components/about-v4';

const Service_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="What We Do" subheader="Service" />
        <AboutV4 />
        <ServiceV1 />
        <BlogSlider sectionClass="pt-120" />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Service_V1

