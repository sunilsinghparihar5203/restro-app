import React, { useState } from 'react'
import Navbar from './Navbar'
import Modal from './Modal'
import ItemListContainer from './ItemListContainer'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const modalHandler = () => {
    setIsModalVisible(isModalVisible ? false : true)
  }
  return (
    <>
      {isModalVisible && <Modal modalHandler={modalHandler} />}
      <div>
        <Navbar modalHandler={modalHandler} />
        <ItemListContainer />
      </div>
    </>
  )
}
export default App;
