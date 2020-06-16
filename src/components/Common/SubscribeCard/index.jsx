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
        <img src="https://notes-uploading.s3.ap-south-1.amazonaws.com/download.png" alt="Free e-book" />
      </div>
      <div className={styles.card__heading}>
        <h3>Subscribe</h3>
        <p>Stay up to date with all the news from our blog and also recive a free e-book.</p>
      </div>
      <form
        method="POST"
        action="https://tinyletter.com/iampuneet"
        target="popupwindow"
        onSubmit="window.open('https://tinyletter.com/iampuneet', 'popupwindow');return true"
        className={styles.card__form}
      >
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
