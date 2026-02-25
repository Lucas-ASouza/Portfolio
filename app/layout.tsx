import "./src/index.css";


export const metadata = {
  title: "Meu Portfólio",
  description: "Criado com Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen overflow-x-hidden">
        {children} 
      </body>
    </html>
  );
}