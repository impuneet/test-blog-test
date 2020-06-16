import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styles from './list.module.scss';

const ListPost = ({
  path,
  image,
  title,
}) => (
  <div className={styles.listPost}>
    <Link to={path}>
      <ul className={styles.menu}>
        {/* className={styles.container} */}
        <ul>
          <li>
            <div className={styles.info}>
              <h1>{title}</h1>
              <p>{image}</p>
            </div>
          </li>
        </ul>
      </ul>
    </Link>
  </div>
);

ListPost.propTypes = {
  path: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

ListPost.defaultProps = {
  image: '',
  title: '',
  path: '',
};

export default ListPost;
