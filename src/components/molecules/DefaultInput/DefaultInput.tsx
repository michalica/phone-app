import React, { ChangeEvent, useState } from 'react';
import InputAtom from '../../atoms/Input';

export const defaultProps = {
  Input: InputAtom,
};

type Value = {
  value?: string;
  setValue?: (value: string) => void;
};
type Props = Readonly<
  typeof defaultProps &
Value & {
  onChange?(e: ChangeEvent<HTMLInputElement>, props: Value): void;
}
>;

type Children = (props: Props) => JSX.Element;

const DefaultInput = ({
  children,
  ...props
}: { children?: Children } & Props) => {
  const [value, setValue] = useState('');

  return children!({ ...props, value, setValue });
};

DefaultInput.defaultProps = {
  ...defaultProps,
  onChange: (e: ChangeEvent<HTMLInputElement>, { setValue }: Props) => {
    setValue!(e.target.value);
  },
  children: ({ Input, value, onChange, setValue }: Props) => (
    <>
      <Input
        aria-label="numbers"
        value={value}
        onChange={(e) => onChange!(e, { setValue, value })}
      />
    </>
  ),
};

export default DefaultInput;
