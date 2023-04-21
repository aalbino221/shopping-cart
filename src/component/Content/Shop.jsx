import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Shop/Card';

function Shop({ items }) {
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

Shop.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Shop;
