import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children,isGoogleSignIn,  ...otherProps }) => (
  <CustomButton type="button"
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </CustomButton>
);

export default CustomButton;