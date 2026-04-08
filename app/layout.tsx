
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       style={{ backgroundColor: "blue", color: "white" }}
      >
        {children}
      </body>
    </html>
  );
}
