export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/index.html"
        style={{
          width: "100%",
          height: "100%",
          border: 0,
          display: "block",
          margin: 0,
          padding: 0,
        }}
      />
    </div>
  );
}