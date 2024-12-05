import { Formik, Field, Form } from 'formik';
import { useId, useState } from 'react';
import icons from '../../images/icons.svg';
import css from './FilterForm.module.css';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/operations';
import { resetCampers } from '../../redux/campersSlice';
import { setFilterData } from '../../redux/filterSlice';

export const FilterForm = () => {
  const [isFilled, setIsFilled] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setIsFilled(e.target.value !== '');
  };

  const resultFilters = values => {
    const { location, form, equipment } = values;

    const params = {};

    if (location !== '') {
      params.location = location;
    }

    if (form !== '') {
      params.form = form;
    }

    equipment.forEach(i => {
      if (i === 'automatic') {
        params.transmission = 'automatic';
      } else {
        params[i] = true;
      }
    });

    return params;
  };

  const handleSubmit = values => {
    const filterData = resultFilters(values);
    dispatch(resetCampers());
    dispatch(setFilterData(filterData));
    dispatch(fetchCampers({ ...filterData, page: 1 }));
  };

  const locationId = useId();
  const checkboxGroupId = useId();
  const radioGroupId = useId();

  return (
    <>
      <Formik
        initialValues={{
          location: '',
          equipment: [],
          form: '',
        }}
        onSubmit={handleSubmit}
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
                onInput={handleInputChange}
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
                    value="automatic"
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
                    value="kitchen"
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
                    value="bathroom"
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
                    name="form"
                    value="panelTruck"
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
                    name="form"
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
                    name="form"
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
