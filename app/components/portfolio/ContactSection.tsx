import type { Contact } from "~/data/types";

export function ContactSection({ contact }: { contact: Contact }) {
  const items = [
    { value: contact.email, href: `mailto:${contact.email}` },
    { value: contact.phone, href: `tel:${contact.phone}` },
    { value: contact.github, href: contact.github },
    { value: contact.linkedin, href: contact.linkedin },
    { value: contact.blog, href: contact.blog },
    { value: contact.website, href: contact.website },
  ];

  return (
    <section className="document-section">
      <h2>연락처</h2>
      <ul className="resume-contact">
        {items.filter(({ value }) => value).map(({ value, href }) => (
          <li key={href}>
            <a href={href}>{value?.replace(/^https?:\/\//, "")}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
