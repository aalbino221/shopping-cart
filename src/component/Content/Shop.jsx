/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Shop/Card';

export default function Shop({ items }) {
  return (
    <div>
      {items.length > 0
        ? items.map((item) => {
            const hasUndefinedValue = Object.values(item).some(
              (v) => v === undefined || v === null,
            );
            if (hasUndefinedValue) return null;
            return typeof item === 'object' ? (
              <Card item={item} key={item.id} />
            ) : (
              ''
            );
          })
        : ''}
      {document.querySelectorAll('.card').length === 0 ? <h1>No items</h1> : ''}
    </div>
  );
}
