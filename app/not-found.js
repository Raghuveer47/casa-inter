import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-ivory pt-24">
      <div className="container-x">
        <p className="eyebrow text-earth">404</p>
        <h1 className="mt-6 font-serif text-headline font-light">
          This room <em className="text-earth">doesn&apos;t exist.</em>
        </h1>
        <p className="mt-6 max-w-md text-muted">The page you&apos;re looking for may have moved. Let&apos;s take you somewhere beautiful.</p>
        <div className="mt-10">
          <Button href="/">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}
