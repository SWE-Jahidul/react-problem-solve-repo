import React from 'react';
import { useState } from 'react';


const CONTACT_FROM_INIT_STATE = {
    name: '',
    email: '',
    group: ''
}

const ContactFrom = ({ getContact }) => {

    const [values, setValues] = useState({ ...CONTACT_FROM_INIT_STATE })
    const { name, email, group } = values;



    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        getContact(values)

        setValues({
            ...CONTACT_FROM_INIT_STATE
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>  Name :
                    <input type='text' id='name' name='name' value={name} onChange={handleChange} />
                </label>

            </div>

            <div>
                <label htmlFor='email'> Email :
                    <input type='email' id='email' name='email' value={email} onChange={handleChange} />
                </label>

            </div>


            <div>
                <label htmlFor='group' >Group : </label>
                <select
                    name='group'
                    id='group'
                    value={group}
                    onChange={handleChange}
                >
                    <option value='Home' > Home </option>
                    <option value='Office' > Office </option>

                </select>

            </div>


            <br />

            <input type='submit' value={"Create New Contact "} />


        </form>
    )
}

const Table = ({ contacts }) => {

    const [filter, setFilter] = useState('All');

    const handleChnage = e => {
        setFilter(e.target.value)
    }

    const [searchTerm, setsearchTerm] = useState('')




    const searchCb = (contact) =>
        contact.name.includes(searchTerm) || contact.email.includes(searchTerm)



    let filterContacts = [];
    if (filter === 'All') {
        filterContacts = searchTerm ? contacts.filter(searchCb) : contacts
    } else {
        filterContacts = contacts.filter((contact) => contact.group === filter && searchCb(contact))
    }


    return (<>

        <div>
            Filters
            <select value={filter} onChange={handleChnage}>
                <option value='All'>All</option>
                <option value=''>None</option>
                <option value='Home'>Home</option>
                <option value='Office'>Office</option>


            </select>
            <input type='search' value={searchTerm}

                onChange={(e) => setsearchTerm(e.target.value)}
                placeholder='search' />

        </div>



        <tbody >
            {
                filterContacts.map((contact, index) => (
                    <tr key={index}>
                        <td>
                            {contact.name}
                        </td>
                        <td>
                            {contact.email}
                        </td>
                        <td>{contact.group} </td>

                    </tr>

                ))
            }
        </tbody>
    </>


    )
}

const StateLifting = () => {
    const [contacts, setContacts] = useState([])
    const getContact = (contact) => {
        setContacts([].concat(contacts, contact))
    }





    return (
        <div>
            State lifting

            <ContactFrom getContact={getContact} />
            <Table contacts={contacts} />
        </div>
    );
};




export default StateLifting;