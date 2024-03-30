export function Fence({children, language}: {children: React.ReactNode; language: string}) {
  return (
    <pre key={language}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}
