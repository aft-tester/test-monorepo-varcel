export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <h1>Test Page</h1>
      {children}
    </div>
  );
}
