import useInput from "./hooks/use-input";

const BasicForm = (props) => {


  const {
    value: enteredName,
    hasError: enteredNameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlur,
    isValid: nameIsValid,
    reset: resetName
  } = useInput(val => val.trim() !== '');

  const {
    value: enteredSurname,
    hasError: enteredSurnameHasError,
    valueChangeHandler: surnameChangeHandler,
    valueBlurHandler: surnameBlur,
    isValid: surnameIsValid,
    reset: resetSurname
  } = useInput(val => val.trim() !== '');


  const {
    value: enteredMail,
    hasError: enteredMailHasError,
    valueChangeHandler: mailChangeHandler,
    valueBlurHandler: mailBlur,
    isValid: mailIsValid,
    reset: resetMail
  } = useInput(val => val.includes("@"));


  let formIsValid = false;


  if (nameIsValid && mailIsValid && surnameIsValid) {
    formIsValid = true
  }

  const formSubmission = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetMail();
    resetName();
    resetSurname();
  }

  return (
    <form onSubmit={formSubmission}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlur}
            value={enteredName} />

          {enteredNameHasError && <p>WRITE SMTH</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={surnameChangeHandler}
            onBlur={surnameBlur}
            value={enteredSurname} />
          {enteredSurnameHasError && <p>DO IT</p>}

        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={mailChangeHandler}
          onBlur={mailBlur}
          value={enteredMail} />
        {enteredMailHasError && <p>AAAAAAAAAAA</p>}

      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;