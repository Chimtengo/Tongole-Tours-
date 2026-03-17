import './globals.css'

export const metadata = {
  title: 'Tongole Tours | Experience Malawi the Indigenous Way',
  description:
    'An indigenous Malawian-run tour operator providing immersive cultural, wilderness, and adventure experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <a
          href="https://wa.me/265987312839"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="whatsapp-float"
          style={{
            position: 'fixed',
            left: '20px',
            bottom: '20px',
            width: '54px',
            height: '54px',
            borderRadius: '999px',
            background: '#25d366',
            color: '#ffffff',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 80,
          }}
        >
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="whatsapp-icon"
            style={{ width: '26px', height: '26px', fill: 'currentColor' }}
          >
            <path
              fill="currentColor"
              d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.65 1.13 2.84.14.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.82-1.28.23-.63.23-1.18.16-1.28-.07-.11-.25-.18-.52-.32zM16.04 5.33c-5.86 0-10.63 4.77-10.63 10.63 0 1.87.49 3.7 1.42 5.32L5.26 26.7l5.53-1.45c1.56.85 3.31 1.3 5.11 1.3 5.86 0 10.63-4.77 10.63-10.63 0-5.86-4.77-10.63-10.63-10.63zm0 19.6c-1.65 0-3.27-.45-4.69-1.31l-.34-.2-3.28.86.88-3.2-.22-.34a9.28 9.28 0 0 1-1.43-4.99c0-5.12 4.16-9.28 9.28-9.28 5.12 0 9.28 4.16 9.28 9.28 0 5.12-4.16 9.28-9.28 9.28z"
            />
          </svg>
        </a>
      </body>
    </html>
  )
}
