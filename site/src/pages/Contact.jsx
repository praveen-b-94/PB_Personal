import { useState } from 'react'
import { validate } from '../lib/validation'

const US_STATES = [
  ['AL','Alabama'],['AK','Alaska'],['AZ','Arizona'],['AR','Arkansas'],['CA','California'],
  ['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],['FL','Florida'],['GA','Georgia'],
  ['HI','Hawaii'],['ID','Idaho'],['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],
  ['KS','Kansas'],['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],
  ['MA','Massachusetts'],['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],['MO','Missouri'],
  ['MT','Montana'],['NE','Nebraska'],['NV','Nevada'],['NH','New Hampshire'],['NJ','New Jersey'],
  ['NM','New Mexico'],['NY','New York'],['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],
  ['OK','Oklahoma'],['OR','Oregon'],['PA','Pennsylvania'],['RI','Rhode Island'],['SC','South Carolina'],
  ['SD','South Dakota'],['TN','Tennessee'],['TX','Texas'],['UT','Utah'],['VT','Vermont'],
  ['VA','Virginia'],['WA','Washington'],['WV','West Virginia'],['WI','Wisconsin'],['WY','Wyoming'],
  ['DC','District of Columbia'],['AS','American Samoa'],['GU','Guam'],['MP','Northern Mariana Islands'],
  ['PR','Puerto Rico'],['VI','U.S. Virgin Islands'],
]

const INITIAL = {
  firstName: '', lastName: '', email: '', confirmEmail: '',
  phone: '', city: '', state: '', zip: '', message: '',
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }))

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setFields(INITIAL)
    }
  }

  if (submitted) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-orange-600/20 border border-orange-500/40 flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-neutral-900 text-2xl font-bold mb-2">Message sent!</h2>
        <p className="text-neutral-500 mb-6">Thanks for reaching out. I'll get back to you soon.</p>
        <button onClick={() => setSubmitted(false)} className="btn-primary">
          Send another
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="section-heading">Contact Me</h1>
      <p className="section-sub">Questions, comments, or just want to connect? Fill out the form below.</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="First name *" error={errors.firstName}>
            <input className="input-field" value={fields.firstName} onChange={set('firstName')} />
          </Field>
          <Field label="Last name *" error={errors.lastName}>
            <input className="input-field" value={fields.lastName} onChange={set('lastName')} />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Email address *" error={errors.email}>
            <input type="email" className="input-field" placeholder="you@example.com" value={fields.email} onChange={set('email')} />
          </Field>
          <Field label="Confirm email *" error={errors.confirmEmail}>
            <input type="email" className="input-field" placeholder="you@example.com" value={fields.confirmEmail} onChange={set('confirmEmail')} />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Phone *" error={errors.phone}>
            <input className="input-field" placeholder="123-456-7890" value={fields.phone} onChange={set('phone')} />
          </Field>
          <Field label="Zip code *" error={errors.zip}>
            <input className="input-field" placeholder="20001" value={fields.zip} onChange={set('zip')} />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="City *" error={errors.city}>
            <input className="input-field" value={fields.city} onChange={set('city')} />
          </Field>
          <Field label="State / Territory *" error={errors.state}>
            <select className="input-field" value={fields.state} onChange={set('state')}>
              <option value="">Select state…</option>
              {US_STATES.map(([abbr, name]) => (
                <option key={abbr} value={abbr}>{abbr} — {name}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Message *" error={errors.message}>
          <textarea
            rows={5}
            className="input-field resize-none"
            value={fields.message}
            onChange={set('message')}
          />
        </Field>

        <button type="submit" className="btn-primary w-full justify-center">
          Send Message
        </button>
      </form>
    </div>
  )
}
