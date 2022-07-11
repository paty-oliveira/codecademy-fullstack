import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import Category from './Category'

export default function Categories () {
  const categories = useSelector(selectCategories)
  const { path, url } = useRouteMatch()

  return (
    <main>
      <h1>Categories</h1>
      <ul>
        { 
          Object.keys(categories).map(category => {
            return (
              <li key={category}>
                <Link to={`${url}/${category}`}>{category}</Link>
              </li>
            )
          })
        }
      </ul>
      <Route path={`/${path}/:name`}>
        <Category />
      </Route>
    </main>
  )
}
