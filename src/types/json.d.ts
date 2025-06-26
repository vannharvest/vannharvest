declare module '*.json' {
  const value: Record<string, unknown> | unknown[];
  export default value;
}
