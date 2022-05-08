import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './about.styles.scss'

const About = () => {

  return (
    // <Routes>
    //   <Route index element={<CategoriesPreview />} />
    //   <Route path=":category" element={<Category />} />
    //   <
    // </Routes>
    <h1>About Me</h1>
  );
};

export default About;