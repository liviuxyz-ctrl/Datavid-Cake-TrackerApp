// src/components/AddMemberForm.tsx
import React, { useState } from 'react';
import { Member } from '../interfaces/Member';
import '../styles/components/AddMemberForm.scss';

interface AddMemberFormProps {
    onAddMember: (newMember: Member) => Promise<void>;
    error: string | null;
}

const AddMemberForm: React.FC<AddMemberFormProps> = ({ onAddMember, error }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await onAddMember({
            first_name: firstName, last_name: lastName, birth_date: birthDate, country, city,
            id: 0,
            days_until_birthday: 0
        });
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
            />
            <button type="submit">Add Member</button>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </form>
    );
};

export default AddMemberForm;
