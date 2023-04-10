/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Shop/Card';

export default function Shop({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}
