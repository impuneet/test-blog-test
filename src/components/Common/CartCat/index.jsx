import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ImageWrapper, StyledArticle } from './styled';

const CardCat = ({
  path,
  image,
  title,
}) => (
  <StyledArticle>
    <div>
      <Link to={path}>
        <ImageWrapper>
          {image === null ? null : (
            <img
              src={image.includes('//') ? image : require(`~/resources/${image}`)}
              alt={title}
            />
          )}
        </ImageWrapper>
        <h3>
          {title}
        </h3>
      </Link>
    </div>
  </StyledArticle>
);

CardCat.propTypes = {
  path: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

CardCat.defaultProps = {
  image: '',
  title: '',
  path: '',
};

export default CardCat;
