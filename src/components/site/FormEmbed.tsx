import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  id: string;
  formId: string;
  title: string;
  height?: number;
  className?: string;
  /** Fired when the embedded GHL form reports a successful submission. */
  onSubmitted?: () => void;
};

const Skeleton = ({ height }: { height: number }) => (
  <div
    className="absolute inset-0 rounded-lg bg-[hsl(var(--card-warm))] p-6"
    style={{ height }}
    aria-hidden="true"
  >
    <div className="space-y-4 animate-pulse">
      <div className="h-3 w-1/3 rounded bg-navy/10" />
      <div className="h-11 w-full rounded-md bg-navy/[0.07]" />
      <div className="h-3 w-1/4 rounded bg-navy/10" />
      <div className="h-11 w-full rounded-md bg-navy/[0.07]" />
      <div className="h-3 w-1/3 rounded bg-navy/10" />
      <div className="h-11 w-full rounded-md bg-navy/[0.07]" />
      <div className="h-24 w-full rounded-md bg-navy/[0.07]" />
      <div className="h-11 w-40 rounded-md bg-amber/25" />
    </div>
  </div>
);

/** GoHighLevel inline form embed: instant skeleton, fade-in, submit detection. */
export const FormEmbed = ({
  src,
  id,
  formId,
  title,
  height = 640,
  className = "",
  onSubmitted,
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const submitRef = useRef(onSubmitted);
  submitRef.current = onSubmitted;

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (typeof e.origin === "string" && !e.origin.includes("bookingmantra")) return;
      const raw = typeof e.data === "string" ? e.data : JSON.stringify(e.data ?? "");
      if (/submit/i.test(raw)) submitRef.current?.();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className={`relative w-full ${className}`} style={{ height }}>
      {!loaded && <Skeleton height={height} />}
      <iframe
        src={src}
        id={id}
        title={title}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-form-id={formId}
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height,
          border: "none",
          borderRadius: "8px",
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 300ms ease",
        }}
      />
    </div>
  );
};
