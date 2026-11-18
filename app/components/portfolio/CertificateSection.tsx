import type { Certificate } from "~/data/types";

export function CertificateSection({ certificates }: { certificates: Certificate[] }) {
  return (
    <section className="document-section">
      <h2>자격증</h2>
      <ul className="document-entries">
        {certificates.map((certificate) => (
          <li key={`${certificate.name}-${certificate.date}`}>
            <div className="entry-heading">
              <h3>{certificate.name}</h3>
              <p>{certificate.date}</p>
            </div>
            <p className="entry-description">{certificate.issuer}</p>
            {certificate.expiry && <p className="entry-description">만료 {certificate.expiry}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
