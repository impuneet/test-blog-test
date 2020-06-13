import styled from 'styled-components';

export const Tags = styled.div`
  margin: 1em 0;

  a {
    margin: 0 0 0 4px;
    color: #000;
    text-decoration: blink;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PostContent = styled.section`
  padding: 1em 0 4em;
  line-height: 1.6em;

  a {
    color: #111;
    text-decoration: none;
    border-bottom: 2px solid #00ff7f;
  }

  a:hover {
    background: #00ff7f;
    background: linear-gradient(to top, #00ff7f 50%, #fffff8 50%);
    background-size: 200% 200%;
    background-position: bottom;
    transition: all .5s ease-out;
  }

  h1{
    font-weight: 400;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    font-size: 3.2rem;
    line-height: 1;
   }

  h2 {
    font-style: italic;
  font-weight: 400;
  margin-top: 2.1rem;
  margin-bottom: 1.4rem;
  font-size: 2.2rem;
  line-height: 1;
  }

  h3 {
    font-style: italic;
  font-weight: 400;
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-bottom: 1.4rem;
  line-height: 1;
  }

  h4 {
    margin: 24px 0 10px;
    font-size: 21px;
  }

  p,
ol,
ul {
  font-size: 1.4rem;
  line-height: 2rem;
}


  pre {
    margin: 20px 0 0;
  }
`;

export const ImageWrapper = styled.figure`
  position: relative;
  margin: 0 0 48px;
  padding: 56.25% 0 0;
  width: 100%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: auto;
  }
`;

export const ComponentInPost = styled.div`
  position: relative;
  margin: 1em 0 1em;
  padding: 55px 16px 16px;
  color: #263238;
  border: 1px solid #263238;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 0 0 0 80px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #fff;
    background-color: #263238;
    font-weight: 100;
    content: 'Application for example';
  }

  &:after {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 20px;
    width: 10px;
    height: 10px;
    background-color: #ff5f56;
    border-radius: 50%;
    content: '';
  }

  & > *:first-child {
    &:before {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 40px;
      width: 10px;
      height: 10px;
      background-color: #ffbd2e;
      border-radius: 50%;
      content: '';
    }

    &:after {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 60px;
      width: 10px;
      height: 10px;
      background-color: #27c93f;
      border-radius: 50%;
      content: '';
    }
  }
`;
