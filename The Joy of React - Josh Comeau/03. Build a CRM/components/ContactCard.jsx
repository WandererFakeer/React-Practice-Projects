function ContactCard({ name, jobTitle, emailId }) {
  return (
    <li className="contact-card">
      <h2 className="name">{name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{jobTitle}</dd>
        <dt>Email</dt>
        <dd>{emailId}</dd>
      </dl>
    </li>
  );
}

export default ContactCard;
