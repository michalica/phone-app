import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

const defaultProps = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

type Props = Readonly<
  typeof defaultProps & {
  render?(): ReactElement;
}
>;
type Children = (props: Props) => JSX.Element;

const BaseTemplate = ({
  children,
  ...props
}: { children: Children } & Props) => {
  return children(props);
};

BaseTemplate.defaultProps = {
  ...defaultProps,
  children: ({ Wrapper, Content, render }: Props) => (
    <Wrapper>
      <Content>{render && render()}</Content>
    </Wrapper>
  ),
};

export default BaseTemplate;
