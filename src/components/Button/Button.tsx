import React, { useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

type ButtonPropsType = {
  size?: 'default' | 'large';
  color: 'black' | 'soft-blue' | 'bright-blue' | 'gray';
  label: string;
  action?: () => void;
  href?: string;
  target?: string;
  type?: 'default' | 'link';
  disable?: boolean;
  actionType?: 'button' | 'submit' | 'reset';
  notUppercase?: boolean;
  download?: string;
};

const Button = ({
  size = 'default',
  color,
  label,
  action,
  href,
  target,
  type = 'default',
  disable,
  actionType,
  notUppercase,
  download,
}: ButtonPropsType) => {
  const buttonColorStyle = useMemo(() => {
    switch (color) {
      case 'black':
        return styles['btn__dark'];
      case 'soft-blue':
        return styles['btn__soft-blue'];
      case 'bright-blue':
        return styles['btn__bright-blue'];
      default:
        return styles['btn__dark'];
    }
  }, [color]);

  const handleButtonClick = useCallback(() => {
    if (type !== 'default' || !action) return;

    return action();
  }, [type, action]);

  return (
    <>
      {type === 'link' && href ? (
        <Link
          className={`${styles['btn-wrapper']} ${styles['btn']} ${
            styles['btn-link']
          } ${buttonColorStyle} ${notUppercase ? styles['no-uppercase'] : ''} ${
            disable ? styles['disable'] : ''
          }`}
          to={`${download ? '' : '/'}${href}`}
          style={{ height: `${size === 'default' ? '40px' : '50px'}` }}
          target={target || '_self'}
          download={download}
        >
          {label}
        </Link>
      ) : (
        <button
          className={`${styles['btn-wrapper']} ${styles['btn']} ${buttonColorStyle} ${
            notUppercase ? styles['no-uppercase'] : ''
          }`}
          onClick={handleButtonClick}
          style={{ height: `${size === 'default' ? '40px' : '50px'}` }}
          disabled={disable || false}
          type={actionType || 'button'}
        >
          <div>{label}</div>
        </button>
      )}
    </>
  );
};

export default React.memo(Button);
