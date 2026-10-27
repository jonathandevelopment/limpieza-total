// Server startup metadata only: never include request data or environment values.
export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.info("[limpieza-total:runtime]", JSON.stringify({
      node: process.version,
      brotli: process.versions.brotli,
    }));
  }
}
