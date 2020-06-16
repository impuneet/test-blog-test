import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FaPrint, FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Clearfix from '~/components/Common/Clearfix';
import { PREFIX, AUTHOR, EMAIL, GITHUB_ID, TWITTER_ID, FACEBOOK_ID, LINKEDIN_ID } from '~/constants';
import * as profileUrl from '~/resources/me.png';
import { Wrapper, BasicInformation, SocialInformation, MDInformation, Button } from './styled';

const Project = ({
  data: {
    project: {
      html,
    },
  },
}) => {
  const $mdWrapper = useRef(null);

  useEffect(() => {
    const anchors = [...new Set($mdWrapper.current.getElementsByTagName('a'))];

    anchors.forEach((anchor) => {
      const href = anchor.getAttribute('href');

      if (href.startsWith('http')) {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noreferrer noopener');
      }
    });
  }, []);

  const printPage = useCallback(() => {
    global.print();
  }, []);

  return (
    <Wrapper>
      <Clearfix>
        <Helmet>
          <title>
            {`${PREFIX}PROJECTS`}
          </title>
          <meta name="og:title" content={`${PREFIX}PROJECTS`} />
        </Helmet>
        <BasicInformation>
          <a target="_BLANK" href="https://github.com/impuneet">
            {' '}
            <img
              src={profileUrl.default}
              alt=""
              width="120"
              height="120"
            />
            {' '}

          </a>


          <p>
            <a target="_BLANK" href="https://github.com/impuneet"> impuneet </a>
          </p>
        </BasicInformation>
        <MDInformation>
          <div
            ref={$mdWrapper}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </MDInformation>
      </Clearfix>
    </Wrapper>
  );
};

Project.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Project;
