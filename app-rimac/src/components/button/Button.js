import React from 'react';
import './Button.css'; // Asegúrate de crear este archivo CSS

export const BUTTON_TYPE = {
  PRIMARY_COLOR: 'primary',
  SECONDARY_COLOR: 'secondary',
  TERTIARY_COLOR: 'tertiary',
  UNSET: 'unset',
};

function getStyles(type, isDisabled) {
  switch (type) {
    case BUTTON_TYPE.SECONDARY_COLOR:
      return [
        {
          borderWidth: '3px',
          minHeight: '56px',
          height: '72px',
          ...(isDisabled ? {borderColor: '#d9d9d9'} : {borderColor: '#000000'}),
        },
        {...(isDisabled && {color: '#d9d9d9'})},
      ];
    case BUTTON_TYPE.TERTIARY_COLOR:
      return [
        {
          minHeight: '56px',
          height: '72px',
          ...(isDisabled ? {backgroundColor: 'transparent'} : {backgroundColor: 'transparent'}),
        },
        {...(isDisabled && {color: '#d9d9d9'})},
      ];
    case BUTTON_TYPE.UNSET:
      return [{}, {}];
    case BUTTON_TYPE.PRIMARY_COLOR:
    default:
      return [
        {
          minHeight: '56px',
          height: '72px',
          ...(isDisabled ? {backgroundColor: '#999999'} : {backgroundColor: '#ff69b4'}),
        },
        {...(isDisabled && {color: '#d9d9d9'})},
      ];
  }
}

const Button = ({
  type = BUTTON_TYPE.PRIMARY_COLOR,
  text = '',
  children = null,
  colorText = '#ffffff',
  style = {},
  textStyles = {},
  onPress = () => {},
  isLoading = false,
  disabled = false,
  testID = '',
  ...props
}) => {
  const [defaultContainerStyles, defaultTextStyles] = getStyles(type, disabled || isLoading);

  const backgroundColor = style.backgroundColor || defaultContainerStyles.backgroundColor;

  return (
    <button
      data-testid={testID}
      onClick={onPress}
      style={{...defaultContainerStyles, ...style}}
      className="button"
      disabled={disabled || isLoading}
      {...props}
    >
      <div style={{display: 'flex', alignItems: 'center'}}>
        {isLoading && <div className="spinner" style={{paddingRight: 10}} />}
        {!!text && (
          <span style={{...defaultTextStyles, ...textStyles, color: colorText}}>
            {text}
          </span>
        )}
        {children}
      </div>
    </button>
  );
};

export default Button;
