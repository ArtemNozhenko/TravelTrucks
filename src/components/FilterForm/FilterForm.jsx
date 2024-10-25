import { Formik, Field, Form } from 'formik';
import { useId, useState } from 'react';
import icons from '../../images/icons.svg';
import css from './FilterForm.module.css';

export const FilterForm = () => {
  const [isFilled, setIsFilled] = useState(false);
  // const dispatch = useDispatch();
  // const [initialValues, setInitialValues] = useState({
  //   location: '',
  //   equipment: '',
  //   type: '',
  // });

  const handleInputChange = e => {
    setIsFilled(e.target.value !== '');
  };

  const handleSubmit = values => {
    console.log(values);
  };

  const locationId = useId();
  const checkboxGroupId = useId();
  const radioGroupId = useId();

  return (
    <>
      <Formik
        initialValues={{
          location: '',
          equipment: {},
          type: '',
        }}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        <Form>
          <label className={css.label}>
            Location
            <div className={css.inputWrapper}>
              <Field
                id={locationId}
                name="location"
                type="text"
                placeholder="City"
                className={`${css.labelInput} ${isFilled ? css.filled : ''}`}
                onInput={handleInputChange} //
              />

              <svg
                className={`${css.icon} ${isFilled ? css.iconFilled : ''}`}
                width="20"
                height="20"
              >
                <use href={`${icons}#icon-map`} />
              </svg>
            </div>
          </label>

          <div className={css.filtersContainer}>
            <p className={css.title}>Filters</p>

            <div id={checkboxGroupId} className={css.radioGroupContainer}>
              <h2 className={css.titleGroup}>Vehicle equipment</h2>
              <div className={css.radioGroup}>
                <label>
                  <Field
                    type="checkbox"
                    name="equipment"
                    value="AC"
                    className={css.radioInput}
                  />
                  <span className={css.radioMark}>
                    <svg className={css.svg}>
                      <use href={`${icons}#icon-ac`}></use>
                    </svg>
                    <p className={css.radioMarkText}>AC</p>
                  </span>
                </label>
                <label>
                  <Field
                    type="checkbox"
                    name="equipment"
                    value="Automatic"
                    className={css.radioInput}
                  />
                  <span className={css.radioMark}>
                    <svg className={css.svg}>
                      <use href={`${icons}#icon-automatic`}></use>
                    </svg>
                    <p className={css.radioMarkText}>Automatic</p>
                  </span>
                </label>
                <label>
                  <Field
                    type="checkbox"
                    name="equipment"
                    value="Kitchen"
                    className={css.radioInput}
                  />
                  <span className={css.radioMark}>
                    <svg className={css.svg}>
                      <use href={`${icons}#icon-kitchen`}></use>
                    </svg>
                    <p className={css.radioMarkText}>Kitchen</p>
                  </span>
                </label>
                <label>
                  <Field
                    type="checkbox"
                    name="equipment"
                    value="TV"
                    className={css.radioInput}
                  />
                  <span className={css.radioMark}>
                    <svg className={css.svg}>
                      <use href={`${icons}#icon-tv`}></use>
                    </svg>
                    <p className={css.radioMarkText}>TV</p>
                  </span>
                </label>
                <label>
                  <Field
                    type="checkbox"
                    name="equipment"
                    value="Bathroom"
                    className={css.radioInput}
                  />
                  <span className={css.radioMark}>
                    <svg className={css.svg}>
                      <use href={`${icons}#icon-bathroom`}></use>
                    </svg>
                    <p className={css.radioMarkText}>Bathroom</p>
                  </span>
                </label>
              </div>
            </div>

            <div id={radioGroupId} className={css.radioGroupContainer}>
              <h2 className={css.titleGroup}>Vehicle type</h2>
              <div className={css.radioGroup}>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="type"
                    value="van"
                    className={css.radioInput}
                  />

                  <span className={css.radioMark}>
                    <svg className={css.svg}>
                      <use href={`${icons}#icon-van`}></use>
                    </svg>
                    <p className={css.radioMarkText}>Van</p>
                  </span>
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="type"
                    value="fullyIntegrated"
                    className={css.radioInput}
                  />
                  <span className={css.radioMark}>
                    <svg className={css.svg}>
                      <use href={`${icons}#icon-fully`}></use>
                    </svg>
                    <p className={css.radioMarkText}>Fully integrated</p>
                  </span>
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="type"
                    value="alcove"
                    className={css.radioInput}
                  />
                  <span className={css.radioMark}>
                    <svg className={css.svg}>
                      <use href={`${icons}#icon-alkove`}></use>
                    </svg>
                    <p className={css.radioMarkText}>Alcove</p>
                  </span>
                </label>
              </div>
            </div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
