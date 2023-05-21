import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/redux/provider';
var inter = Inter({ subsets: ['latin'] });
export var metadata = {
    title: 'Hasghy',
    description: 'Sistema Hasghy',
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="pt-br">
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>);
}
