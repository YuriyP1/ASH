import { TextField } from '@mui/material';
import { useState } from 'react';
// import PhoneMask from './phoneMask/PhoneMask';
// import { FilledInput } from '@mui/material';
import './style.scss'
export default function ContactForm () {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Здесь можно написать логику отправки данных на сервер или их сохранения в локальном состоянии приложения.
      // Например, можно создать объект с данными и передать его в функцию-обработчик или контекст приложения.
      const contactData = {
        name,
        phone,
        address,
      };
      console.log(contactData);
      // Очистка полей после отправки формы
      setName("");
      setPhone("");
      setAddress("");
    };
  
    const [deliveryType, setDeliveryType] = useState("delivery");

    const handleDeliveryTypeChange = (e) => {
      setDeliveryType(e.target.value);
    };

    const send = () =>{
        fetch('http://185.235.218.108:3001/order')
    }

    return (
        <form onSubmit={handleSubmit} className="contactForm">
            {/* <label htmlFor="name">Ім'я</label> */}
            <TextField id="name" label="Ім'я *" variant="outlined" onChange={(event) => setName(event.target.value)}/>
            {/* <input
                type="text"
                id="name"
                value={name}
                placeholder="Ім'я*"
                onChange={(event) => setName(event.target.value)}
            /> */}

            {/* <label htmlFor="phone">Телефон</label> */}
            {/* <PhoneMask /> */}
            {/* <TextField id="name" label="Телефон *" variant="outlined" onChange={(event) => setName(event.target.value)}/> */}
            {/* <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
            /> */}
            <div className="contactForm-deliveryType">
                <label>
                    <input
                    type="radio"
                    value="delivery"
                    checked={deliveryType === "delivery"}
                    onChange={handleDeliveryTypeChange}
                    />
                    <p>Доставка</p>
                </label>
                <label>
                    <input
                    type="radio"
                    value="pickup"
                    checked={deliveryType === "pickup"}
                    onChange={handleDeliveryTypeChange}
                    />
                    <p>Самовывоз</p>
                </label>
            </div>
            {
                deliveryType === 'delivery' ? 
                <>
                    <label htmlFor="address">Адрес</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </>
                :
                <></>
            }

            <button type="submit" onClick={send}>Отправить</button>
        </form>
    )
}