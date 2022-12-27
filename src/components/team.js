import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import TeamV1 from './section-components/team-v1';

const Team_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Agent" subheader="Agent" />
        <TeamV1 />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Team_V1

