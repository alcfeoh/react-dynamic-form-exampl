import React, { useState, useEffect } from 'react';
import { getSpecialties, submitForm } from './data';

export function Form() {
  let [formData, setFormData] = useState<FormData>({
    name: '',
    specialtyId: 0,
    consentGiven: false
  });
  let [specialties, setSpecialties] = useState<Specialty[]>('');

  useEffect(() => {
    getSpecialties().then(data => setSpecialties(data));
  }, []);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked || event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Submitted: ', formData);
    submitForm(formData).then(() => alert('Form submitted'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Specialty:
        <select
          type="text"
          name="specialtyId"
          value={formData.specialtyId}
          onChange={handleChange}
        >
          {specialties &&
            specialties.map(specialty => (
              <option key={specialty.id} value={specialty.id}>
                {specialty.text}
              </option>
            ))}
        </select>
      </label>
      <br />
      {formData.specialtyId == 8 && (
        <>
          <label>
            <input
              type="checkbox"
              name="consentGiven"
              checked={formData.consentGiven}
              onChange={handleChange}
            />
            I agree to share this information with my psychiatrist
          </label>
          <br />
        </>
      )}
      <input type="submit" value="Submit" />
    </form>
  );
}
