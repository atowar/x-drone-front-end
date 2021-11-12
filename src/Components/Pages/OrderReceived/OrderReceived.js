import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import './OrderReceived.css';


const OrderReceived = () => {

    const { orderId } = useParams();
    const [order, setOrder] = useState([])
    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://x-drone.herokuapp.com/products/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);
    console.log(user);

    const onSubmit = data => {

        data.order = order;
        data.status = "Pending";
        console.log(data)

        fetch('https://x-drone.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Thanks for your order')
                    reset();
                };
            })
    };

    return (
        <div className="grid justify-items-center">
            <div className="md:w-8/12">
                <div className="grid md:grid-cols-2 gap-4">

                    <div className="product mr-2 items-center grid justify-items-center">
                        <h2 className="text-2xl border-b-4">Your Order Details</h2>
                        <div className="py-2">
                            <div><img src={order.svcimg} alt="" /></div>
                            <h2 className="underline text-4xl font-bold p-2">{order.title}</h2>
                            <p className="border-b-2 text-md font-medium p-2">{order.material}</p>
                            <p className="border-b-2 text-md font-medium p-2">{order.cameralense}</p>
                            <p className="border-b-2 text-md font-medium p-2">{order.power}</p>
                            <p className="border-b-2 text-md font-medium p-2">{order.weight}</p>
                            <p className="border-b-2 text-md font-medium p-2">{order.shipping}</p>
                            <p className="border-b-2 text-md font-medium p-2">{order.phoneservice}</p>
                            <p className="border-b-2 text-md font-medium p-2 font-bold">Cost: ${order.price}</p>
                        </div>
                    </div>
                    <div className="grid justify-items-center">
                        <h2 className="text-2xl border-b-4">CheckOut</h2>
                        <form className="order-received-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input className="submit" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReceived;