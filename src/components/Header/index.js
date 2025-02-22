import './index.css'

const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const renderCartIcon = () => (
    <div className='cart-icon-container'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='35'
        height='35'
        fill='#585555'
        className='bi bi-cart3 cart-icon'
        viewBox='0 0 16 16'
      ></svg>
      <div className='cart-count-badge d-flex justify-content-center align-items-center'>
        <p className='m-0 cart-count'>{getCartItemsCount()}</p>
      </div>
    </div>
  )
  return (
    <header className='p-4 d-flex flex-row align-items-center nav-header'>
      <h1 className='m-0 logo-heading'>UNI Resto Cafe</h1>
      <div className='d-flex flex-row align-items-center ms-auto'>
        <p className='mt-0 mb-0 me-2 d-none d-sm-block my-order-text'>
          My Orders
        </p>
        {renderCartIcon()}
      </div>
    </header>
  )
}
export default Header
