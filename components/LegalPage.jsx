import PageHeader from "./ui/PageHeader";

// Simple long-form layout for policy pages. `sections`: [{ heading, body: string[] }]
export default function LegalPage({ label, title, intro, sections }) {
  return (
    <>
      <PageHeader label={label} lines={[title]} intro={intro} />
      <section className="section-y">
        <div className="container-x max-w-3xl space-y-12">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-title font-light">{s.heading}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted">
                {s.body.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
