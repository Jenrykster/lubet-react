import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IFormErrors, InputTypes } from '../../../shared/interfaces';
import { capitalizeFirstLetter } from '../../../shared/utils';
import ErrorLabel from '../../shared/Primitives/ErrorLabel';
import Input from '../../shared/Primitives/Input';

const FormInput = (props: {
  errors: IFormErrors;
  register: UseFormRegister<FieldValues>;
  inputName: InputTypes;
  defaultError?: string;
  password?: boolean;
}) => {
  return (
    <React.Fragment>
      {props.errors[props.inputName] && (
        <ErrorLabel htmlFor={props.inputName}>
          {props.defaultError ||
            props.errors[props.inputName]?.message ||
            'input error'}
        </ErrorLabel>
      )}
      <Input
        data-cy={props.inputName}
        type={props.password ? 'password' : 'text'}
        placeholder={capitalizeFirstLetter(props.inputName)}
        {...props.register(props.inputName)}
      />
    </React.Fragment>
  );
};

export default FormInput;
