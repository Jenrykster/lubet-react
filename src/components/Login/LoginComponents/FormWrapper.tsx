import { ReactNode } from 'react';
import BoldText from '../../shared/Primitives/BoldText';
import TransitionPage from '../../shared/Utils/TransitionPage';

const FormWrapper = (props: { title: string; children?: ReactNode }) => {
  return (
    <TransitionPage>
      <BoldText>{props.title}</BoldText>
      {props.children}
    </TransitionPage>
  );
};

export default FormWrapper;
