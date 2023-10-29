import Link from 'next/link'
import Header from '@/components/Header/'
import Footer from '@/components/Footer/'
import '@/styles/globals.scss'

export const metadata = {
  title: 'Next.jsのテンプレート',
  description: 'Next.jsのテンプレートです。'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <div id="wrapper" className="l-wrapper"></div>
        <Header title={metadata.title} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
