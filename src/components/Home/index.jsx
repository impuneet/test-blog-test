import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import { TITLE } from '~/constants';
import styles from './index.module.scss';
import PostsWrapper from '~/components/Common/PostsWrapper';
import CardCat from '../Common/CartCat';
import ListPost from '../Common/ListPost';
import SubscribeCard from '../Common/SubscribeCard';

const Home = ({ portfolios }) => (
  <>
    <Helmet>
      <title>
        {TITLE}
      </title>
      <meta name="og:title" content={TITLE} />
    </Helmet>
    <Wrapper isHome>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <h1 className={styles.heading}>
              {'Hey, I\'m'}
              {' '}
              <div className={styles.rainbowBackground}>
                <span className={styles.name}>Puneet</span>
              </div>
        .
            </h1>
            <p>
              I’m a
              {' '}
              <strong>Full Stack developer</strong>
,
              {' '}
              <strong>designer</strong>
, and
              {' '}
              <strong>chef</strong>
              {' '}
from India. I build open source projects and write the missing instruction manuals of the web.
              {' '}
            </p>
            <p>
              I created this site to document everything I learn, and share a bit of
              {' '}
              <a href="https://www.iampuneet.in">myself</a>
              {' '}
with the world. This website has no bullshit, no ads, no sponsored posts, and no paywalls. If you enjoy my content, please consider
              {' '}
              <a href="https://ko-fi.com/iampuneet" target="_blank">supporting what I do.</a>
            </p>
          </div>
          <div>
            <SubscribeCard key="https://wonism.github.io/categories/JavaScript/1" path="https://wonism.github.io/categories/JavaScript/1" tags="" image="images/js.png" title="Javascript" />
          </div>
        </div>
        <div />
      </div>
    </Wrapper>
    <PostsWrapper>
      <ListPost key="http://localhost:8000/authorization-in-nodejs/" path="authorization-in-nodejs/" tags="" image="JSON Web Token (JWT) is an open standard that defines a compact and self-contained way of securely transmitting information between parties as a JSON object" title="Authentication &amp; Authorization in Nodejs " />
      <ListPost key="http://localhost:8000/post-3/" path="post-3/" tags="" image="Node js Security measurements : Threats in API : DOS Attacks, XSS, SQL/NoSQL Injection Attacks" title="Security Measurement in Node js" />
      <ListPost key="http://localhost:8000/design-pattern-in-javascript/" path="design-pattern-in-javascript/" tags="" image="In handling large-scale JavaScript applications, we need to manage the code accordingly. While devising the architecture for your large-scale application, it’s important to think ahead." title="Design Patterns in JavaScript, Part 1" />
    </PostsWrapper>
    <PostsWrapper>
      <CardCat key="1" path="/categories/nodejs/1" tags="" image="images/js.png" title="NodeJS" />
      <CardCat key="2" path="/categories/design-pattern/1" tags="" image="images/js.png" title="Design Pattern" />
      <CardCat key="3" path="/categories//javascript/1" tags="" image="images/js.png" title="Javascript" />
    </PostsWrapper>


  </>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
