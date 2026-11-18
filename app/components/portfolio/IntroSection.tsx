import type { Introduction } from "~/data/types";

export function IntroSection({ introduction }: { introduction: Introduction }) {
  return (
    <section className="document-section">
      <h2>자기소개</h2>
      <div>
        <p className="font-semibold">{introduction.summary}</p>
        <p className="entry-description whitespace-pre-line">{introduction.description}</p>
      </div>
    </section>
  );
}
