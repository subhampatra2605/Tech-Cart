import React, { useState } from 'react';

function Login() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [acceptedTerms, setAcceptedTerms] = useState(false);
const [selectedOption, setSelectedOption] = useState('');
const handleSubmit = (event) => {
event.preventDefault();

console.log('Name:', name);
console.log('Email:', email);
console.log('Accepted Terms:', acceptedTerms);
console.log('Selected Option:', selectedOption);
};
return (
<form onSubmit={handleSubmit}>
<label>
Name:<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
</label>
<br/><br/>
<label>
Email:
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
</label>
<br/><br/>
<label>
<input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
I accept the terms and conditions
</label>
<br/><br/>
<label>
Select an option:
<select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
<option value="">Select an option</option>
<option value="option1">Option 1</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
</label>
<br/><br/><br/>
<button type="submit">Submit</button>
</form>
);
}

export default Login;