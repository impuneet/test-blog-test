import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const SubscribeCard = ({
  path,
  image,
  title,
}) => (
  <div className={styles.listPost}>
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src="https://preview.ibb.co/bU7VYT/img_for_016.png" alt="Free e-book" />
      </div>
      <div className={styles.card__heading}>
        <h3>Subscribe</h3>
        <p>Stay up to date with all the news from our blog and also recive a free e-book.</p>
      </div>
      <form className={styles.card__form}>
        <input type="text" className={styles.form__input} />
        <button type="submit" className={styles.form__submit}>Ok</button>
      </form>
    </div>
  </div>
);

SubscribeCard.propTypes = {
  path: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

SubscribeCard.defaultProps = {
  image: '',
  title: '',
  path: '',
};

export default SubscribeCard;
