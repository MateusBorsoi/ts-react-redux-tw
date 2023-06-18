

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}