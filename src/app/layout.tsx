import NavbarComponent from '@/components/navbar/navbar.component'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-medium' >
        <NavbarComponent />
        {children}
      </body>
    </html>
  )
}
