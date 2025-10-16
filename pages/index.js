// app/page.js
export default function Home() {
  return (
    <iframe
      src="/index.html"   // public folder ka path
      style={{
        width: "100%",
        height: "100vh",
        border: 0,
        display: "block",
      }}
    />
  );
}