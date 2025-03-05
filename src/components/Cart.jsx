import { useEffect, useState } from "react"

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onSaveCart }) => {
    const [discountCode, setDiscountCode] = useState('')
    const [appliedDiscount, setAppliedDiscount] = useState

    const totalPrice = cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const dicountedPrice = totalPrice - totalPrice * appliedDiscount

    const hendleApplyDiscount = () => {
        if (discountCode.trim().toUpperCase() === 'SALE2025') {
            setAppliedDiscount(0.1)
        } else {
            setAppliedDiscount(0)
            alert('неверный промокод')
        }
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        if (onSaveCart) {
            onSeveCart(cartItems)
        }
    }, [cartItems, onSaveCart])
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all 
    duration-300">
            <h2 className="text-2xl font-bold mb-4 text-center">Ваша карзина </h2>
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Корзина пуста</p>
            ) : (
                <>
                    <div className="space-4 ">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex flex-col md:flex-row 
                    item-center justify-between border-b pb-4">
                                <div className="flex items-center w-full md:w-1/2">
                                    <img src={item.image} alt={item.title} className="w-20 h-20
                        object-cover rounded mr-4 " />
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray600">
                                        {item.price }
                                        </p>
                                    </div>
                                </div>
                                <div className="flex item-center my-2 mb:my-0">
                                <button onClick={()=>onUpdateQuantity(item.id,item.quantity -1)}
                                 className="px-3 py-1 border rounded-l 
                                 disable:opacity-50 transition-colors" disabled={item.quantity<=1} >
                                    -

        
                                </button>
                                <span className="px-4 border-t border-b"> {item.quantity}</span>
                                <button onClick={()=>onUpdateQuantity(item.id,item.quantity +1)}
                                 className="px-3 py-1 border rounded-l 
                                 disable:opacity-50 transition-colors"  >
                                    +
                                </button>
                                </div>
                                <div className="text-right">    
                                <button onClick={()=>{
                                    if (window.confirm('Вы уверены, что хотите удалить этот товар?')){
                                        onRemoveItem(item.id)
                                    }
                                    }} className="text-red-500 hover:underline" >
                                        удалить

                                </button>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    <div className="mt-6 text-right">
                        <p className="text-xl font-semibold text-green-600">
                            Общаяя стоимость:{totalPrice.toFixed(2)}р
                        </p>
                        {appliedDiscount>0 && (
                            <p className="text-xl font-semibold text-green-600">
                                Со скидкой :{discountedPrice.toFixed(2)}р
                            </p>
                        )}
                    </div>
                    <div className="mt-6">
                        <label  htmlFor="promo" className='bloc text-gray-700 mb-2'>
                            промокод
                        </label>
                        <div className="flex flex-col md:flex-row gap-2">
                        <input 
                        id='promo'
                        type='text'
                        placeholder="введите промокод"
                        value={discountCode}
                        onChange={(e)=> setDiscountCode(e.target.value)}
                        className='flex-1 px-4 py-2 border round focus:outline-none
                        focus:ring-2 focus:ring-blue-400' />

                        <button onClick={handApplyDiscount} className="px-4 py-2 bg-blut-500 text-white rounded
                         hover:bg-blue-600 transition-colors">применить</button>
                        </div>
                    </div>
                </>
            )
            }
        </div >
    )
}
export default Cart