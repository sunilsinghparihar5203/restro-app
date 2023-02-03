import React from 'react';
import ItemList from './ItemList'

const data = [
  { id: 1, title: 'item1', amount: "100" },
  { id: 2, title: 'item2', amount: "200" },
  { id: 3, title: 'item3', amount: "300" },
  { id: 4, title: 'item4', amount: "400" },
  { id: 5, title: 'item5', amount: "500" },
]
function ItemListContainer() {
  return (
    <div className='container my-2 shadow-sm p-3 mb-5 bg-body rounded'>
      <ul className='list-group'>
        {data &&
          data.map((item) => {
            return (
              <ItemList key={item.id} title={item.title} amount={item.title} />
            )
          })
        }
      </ul>
    </div>
  )
}

export default ItemListContainer