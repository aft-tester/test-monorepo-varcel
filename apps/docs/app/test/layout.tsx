export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Test Page</h1>
      {children}
    </div>
  );
}
