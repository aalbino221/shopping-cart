/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Shop/Card';

export default function Shop({ items }) {
  return (
    <div className="shop">
      {items.length > 0 ? (
        items.map((item) => {
          if (typeof item === 'object') {
            return (
              <Link
                to={`/shop/${item.id}`}
                className="routerBook"
                state={{ item }}
                key={item.id}
              >
                <Card item={item} />
              </Link>
            );
          }
          return null;
        })
      ) : (
        <h1>No Items</h1>
      )}
    </div>
  );
}
