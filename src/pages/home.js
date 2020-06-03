import React from 'react'

import {H2, H3, Text, Page, Row, Column, Button, Image} from 'components/lib'

import Header from 'components/Header'
import Section from 'components/Section'

import IntroImage from 'components/IntroImage'
import Introduction from 'components/Introduction'
import Speakers from 'components/Speakers'
import CvA from 'components/CvA'

import team from 'assets/team.jpg'

export default () => (
    <Page>
        {/*<IntroImage />*/}
        <Header/>
        <Section id="intro">
        <Introduction></Introduction>
        </Section>
        {/*<Section id="speakers">*/}
        {/*<H2>The Speakers</H2>*/}
        {/*<Speakers />*/}
        {/*</Section>*/}
        <Section id="about">
        <Row>
        <Column size={12} sSize={12}>
        <H2>About Us</H2>
        <Text>Advanced Analytics: Diving Deep intro your Data is organised by a team of 7 students from W.I.S.V. ‘Christiaan Huygens’.</Text>
        <Button medium to="/about">Learn more</Button>
        <br/> <br/>
        </Column>
        {/*<Column size={1} sSize={0} />*/}
        {/*<Column size={6} sSize={12}>*/}
        {/*<Image src={team} alt="The team" />*/}
        {/*</Column>*/}
        </Row>
        </Section>
    </Page>
)
