import useInput from './hooks/use-input';


const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    isValid: nameIsValid,
    reset: nameReset } = useInput(value => value.trim() !== '');

  const {
    value: enteredMail,
    hasError: mailInputHasError,
    valueChangeHandler: mailChangeHandler,
    valueBlurHandler: mailBlurHandler,
    isValid: mailIsValid,
    reset: mailReset } = useInput(value => value.includes('@'));


  let formIsValid = false;


  if (nameIsValid && mailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!nameIsValid && !mailIsValid) {
      return;
    }

    nameReset();
    mailReset();

  }

  const nameInputClasses = nameInputHasError ?
    'form-control invalid' : 'form-control'

  const mailInputClasses = mailInputHasError ?
    'form-control invalid' : 'form-control'


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName} />
        {nameInputHasError && <p>Name is wrong</p>}
      </div>

      <div className={mailInputClasses}>
        <label htmlFor='mail'>Your e-mail</label>
        <input
          type='text'
          id='name'
          onChange={mailChangeHandler}
          onBlur={mailBlurHandler}
          value={enteredMail} />
        {mailInputHasError && <p>E-mail is wrong</p>}
      </div>

      <div className="form-actions">
        <button
          disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;