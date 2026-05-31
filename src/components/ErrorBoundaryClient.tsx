/** biome-ignore-all lint/nursery/noJsxPropsBind: simplify logic */
"use client";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";

const ErrorBoundaryClient = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary
    fallbackRender={({ error, resetErrorBoundary }) => (
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
    )}
    onReset={() => window.location.reload()}
  >
    {children}
  </ErrorBoundary>
);

export default ErrorBoundaryClient;
