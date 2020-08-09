import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import DefaultInput from '../../molecules/DefaultInput';

export const defaultProps = {
  Wrapper: styled.div``,
  Input: DefaultInput,
};

type Props = Readonly<
  typeof defaultProps & {
  onType?(newValue: string): void;
}
>;
type Children = (props: Props) => JSX.Element;

const Phone = ({ children, ...props }: { children: Children } & Props) => {
  return children(props);
};

Phone.defaultProps = {
  ...defaultProps,
  children: ({ Wrapper, Input, onType }: Props) => (
    <Wrapper>
      <Input onChange={(e: ChangeEvent<HTMLInputElement>, { setValue }) => {
        const { value } = e.target;
        setValue?.(value);
        onType?.(value);
      }}
      />
    </Wrapper>
  ),
};

export default Phone;
