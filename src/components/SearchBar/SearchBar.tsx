import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (values: { search: string }, actions: FormikHelpers<{ search: string }>) => {
    const formattedSearch = values.search.trim().toLowerCase();
    onSubmit(formattedSearch);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button className={css.button} type="submit">
            Search 
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
