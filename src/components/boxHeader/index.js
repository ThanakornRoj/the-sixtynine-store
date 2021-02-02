import React from 'react';
import { Section, HeaderText } from './style';

const BoxHeader = ({ text }) => {
  return (
    <Section>
      <HeaderText>{text}</HeaderText>
    </Section>
  );
};

export default BoxHeader;
