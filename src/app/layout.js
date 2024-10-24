import "./globals.css";


export const metadata = {
  title: "Dreamy",
  description: "fun hangout for dreamers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
