import { ReactNode } from 'react';
import { BoldText, TransitionPage } from '../shared';

const FormWrapper = (props: { title: string; children?: ReactNode }) => {
  return (
    <TransitionPage>
      <BoldText>{props.title}</BoldText>
      {props.children}
    </TransitionPage>
  );
};

export default FormWrapper;
