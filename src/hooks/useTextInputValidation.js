import { useState } from "react";


export const useValidate = (maxLength) => {
  // const [isTitleError, setIsTitleError] = useState('');
  const [text, setText] = useState('');

  const isLengthError = text.length > maxLength;
  const isEmptyError = text.length === 0;
  const isError = isLengthError || isEmptyError;

  const lengthErrorMessage = `Вы ввели больше символов чем разрешено. Максимальная длина: ${maxLength}`;
  const emptyErrorMessage = 'Поле обязательно для заполнения';
  const errorMessage = isError ? ((isEmptyError && emptyErrorMessage) || (isLengthError && lengthErrorMessage)) : null;

  return { text, setText, isError, errorMessage}
}