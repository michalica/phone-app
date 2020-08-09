import React from 'react';
import styled from '@emotion/styled';
import DefaultInput from '../../molecules/DefaultInput';

export const defaultProps = {
  Wrapper: styled.div``,
  Input: DefaultInput,
};

type Props = Readonly<typeof defaultProps & {}>;
type Children = (props: Props) => JSX.Element;

const Phone = ({ children, ...props }: { children: Children } & Props) => {
  return children(props);
};

Phone.defaultProps = {
  ...defaultProps,
  children: ({ Wrapper, Input }: Props) => (
    <Wrapper>
      <Input />
    </Wrapper>
  ),
};

export default Phone;
