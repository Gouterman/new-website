import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Highlight from 'components/Highlight';
import PersonasPicker from 'components/PersonasPicker';
import TitleIllustrationStripWithContent from 'components/TitleIllustrationStripWithContent';
import { withDato } from 'lib/datocms';
import Result from 'components/Result';
import InterstitialTitle from 'components/InterstitialTitle';
import Flag, { Highlight as FlagHighlight } from 'components/Flag';
import Bullets from 'components/Bullets';
import IntegrationsBanner from 'components/IntegrationsBanner';

import Ill1 from 'public/images/illustrations/dato-svg-4-02.svg';
import Ill2 from 'public/images/illustrations/dato-svg-3a-01.svg';
import Ill3 from 'public/images/illustrations/dato-svg-5-03.svg';

import Ill4 from 'public/images/illustrations/dato-svg-2a-01.svg';
import Ill5 from 'public/images/illustrations/dato-svg-6-04.svg';
import Ill6 from 'public/images/illustrations/dato-svg-8-02.svg';

import Nike from 'public/images/clients/nike.svg';
import Arduino from 'public/images/clients/arduino.svg';
import Linkedin from 'public/images/clients/linkedin.svg';

import WarningIcon from 'public/icons/regular/exclamation-circle.svg';
import SuccessIcon from 'public/icons/regular/check-circle.svg';

import styles from './style.css';

function Homepage() {
  return (
    <Layout>
      <Hero
        over="DatoCMS for digital marketers"
        title={
          <>
            Win the <Highlight>omnichannel</Highlight> marketing challenge
          </>
        }
        subtitle={
          <>
            Take control of your content, and everywhere it goes. Use a unified
            platform to send content to websites, chatbots, VR/AR and IoT
            devices, without heavy IT involvement.
          </>
        }
      />

      <TitleIllustrationStripWithContent
        image={Ill4}
        title="Why omnichannel matters?"
        subtitle={
          <>
            Many companies are delivering great content and experiences on their
            website, app, FB page and in stores. But the companies finding the
            most success are the ones who ensure that{' '}
            <strong>every interaction is consistent</strong> online and offline.
          </>
        }
      >
        <div className={styles.grid}>
          <Result
            title={
              <>
                <Highlight style="good">2x revenue growth</Highlight>
              </>
            }
          >
            According to <strong>MIT</strong>, when companies provide a seamless
            experience they generate a twice revenue rate of competitors using
            legacy digital tech
          </Result>
          <Result
            title={
              <>
                <Highlight style="good">2x customers</Highlight>
              </>
            }
          >
            <strong>Salesforce</strong> reports that more than half of shoppers
            stop buying from a company because a competitor provided a better
            experience
          </Result>
        </div>
      </TitleIllustrationStripWithContent>

      <div style={{ margin: '20vh 0 15vh' }}>
        <InterstitialTitle style="two">
          Here's DatoCMS helps you build better{' '}
          <Highlight>digital experiences</Highlight>
        </InterstitialTitle>
      </div>

      <Flag
        style="good"
        title={
          <>
            Structured, unified content means{' '}
            <FlagHighlight>future&#8209;proof</FlagHighlight>
          </>
        }
        image={Ill4}
      >
        <p>
          Keep content separate from presentation, uncluttered by code or
          formatting, so it's ready to flow into new digital experiences without
          months of effort.
        </p>

        <Bullets
          style="good"
          icon={SuccessIcon}
          bullets={[
            'Build channel-agnostic content, reusable across touchpoints',
            'Publish changes instantly to all your channels',
            'Provide personalized, contextual help linking resources together',
          ]}
        />
      </Flag>

      <Flag
        style="good"
        title={
          <>
            Launch new campaigns <FlagHighlight>in&nbsp;minutes</FlagHighlight>
          </>
        }
        image={Ill1}
      >
        <p>
          Whether you’re looking to launch a landing page, microsite, brand
          site, a new experience, or something in between, launch campaigns
          faster with less IT friction.
        </p>

        <Bullets
          style="good"
          icon={SuccessIcon}
          bullets={[
            'Built-in landing page builder',
            'Flexible, adaptable content model',
            'Easily find and reuse assets with AI-assisted DAM',
          ]}
        />
      </Flag>

      <Flag
        style="good"
        title={
          <>
            Streamline <FlagHighlight>SEO</FlagHighlight>
          </>
        }
        image={Ill1}
      >
        <p>
          Take full control over meta titles, descriptions, social shares, URL
          paths, and more. DatoCMS automates these tasks so you never have to
          worry about your content editor forgetting meta content, but SEO teams
          still retain flexibility to optimize those fields.
        </p>

        <Bullets
          style="good"
          icon={SuccessIcon}
          bullets={[
            'Automatic SEO generation',
            'Built-in SEO editor with validations',
            'Google SERP, Facebook and Twitter cards preview',
          ]}
        />
      </Flag>

      <Flag
        style="good"
        title={
          <>
            Deliver <FlagHighlight>blazing-fast</FlagHighlight> digital products
          </>
        }
        image={Ill5}
      >
        <p>
          Your customers will experience sub-second page load times without any
          additional optimization on your end. Even large photos are
          automatically optimized and resized without losing quality, so you can
          serve up the best content without sacrificing speed.
        </p>

        <Bullets
          style="good"
          icon={SuccessIcon}
          bullets={[
            "Easily achieve 100/100 on Google's PageSpeed Insight",
            'Highly optimized images and video streaming',
            'A globally delivered network at your disposal',
          ]}
        />
      </Flag>

      <IntegrationsBanner title={<>Easily connect any MarTech&nbsp;tool</>}>
        Easily integrate your CMS with your preferred marketing technologies,
        Marketo, Salesforce, Google Analytics, SEMrush, Brightcove, Watson, etc.
        so you can get valuable insights to make meaningful business decisions.
      </IntegrationsBanner>

      <PersonasPicker />
    </Layout>
  );
}

export default withDato(Homepage);