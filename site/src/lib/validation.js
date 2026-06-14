// Contact form validation rules. Kept free of React imports so the external
// test suite (PB_Personal_tests) can unit-test it directly.
export function validate(fields) {
  const errors = {}
  if (!fields.firstName.trim()) errors.firstName = 'Required.'
  else if (!/^[A-Za-z0-9 '-]+$/.test(fields.firstName)) errors.firstName = 'Letters and numbers only.'
  if (!fields.lastName.trim()) errors.lastName = 'Required.'
  else if (!/^[A-Za-z0-9 '-]+$/.test(fields.lastName)) errors.lastName = 'Letters and numbers only.'
  if (!fields.email) errors.email = 'Required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Invalid email format.'
  if (!fields.confirmEmail) errors.confirmEmail = 'Required.'
  else if (fields.email !== fields.confirmEmail) errors.confirmEmail = 'Emails do not match.'
  if (!fields.phone) errors.phone = 'Required.'
  else if (!/^\d{3}-\d{3}-\d{4}$/.test(fields.phone)) errors.phone = 'Use format 123-456-7890.'
  if (!fields.city.trim()) errors.city = 'Required.'
  if (!fields.state) errors.state = 'Required.'
  if (!fields.zip) errors.zip = 'Required.'
  else if (!/^\d{5}(-\d{4})?$/.test(fields.zip)) errors.zip = 'Use 5-digit or ZIP+4 format.'
  if (!fields.message.trim()) errors.message = 'Required.'
  return errors
}
