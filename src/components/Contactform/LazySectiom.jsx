import { Suspense } from "react";
import { useInView } from "react-intersection-observer";

export default function LazySection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px", // start loading before it appears
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight: "300px" }} />
      )}
    </div>
  );
}