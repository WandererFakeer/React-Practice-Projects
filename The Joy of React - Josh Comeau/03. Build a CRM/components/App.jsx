import contactDetails from "../data.js";

import ContactCard from "./ContactCard.jsx";

function App() {
  const element = contactDetails.map((contact) => {
    const { name, jobTitle, emailId } = contact;

    return (
      <ContactCard
        key={name}
        name={name}
        jobTitle={jobTitle}
        emailId={emailId}
      />
    );
  });

  return <ul className="contact-cards">{element}</ul>;
}

export default App;
