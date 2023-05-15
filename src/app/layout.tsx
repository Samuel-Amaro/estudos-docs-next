import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

/**
 * Os metadados podem ser definidos exportando um metadataobjeto ou generateMetadata função em um arquivo layout.js ou page.js.
 */
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

/**
 * * PÁGINAS E LAYOUTS (2)
 * 
 * Root Layout Obrigatorio
 * 
 * O layout raiz é definido no nível superior do app diretório e se aplica a todas as rotas. Esse layout permite modificar o HTML inicial retornado do servidor.
 * 
 * @param param0 
 * @returns 
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}