import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // <--- IMPORT PROVIDER BARU

const inter = Inter({ subsets: ["latin"] });

// --- KONFIGURASI SEO (METADATA) ---
export const metadata: Metadata = {
  // Judul di Tab Browser
  title: {
    default: "Akbar Wahyu Adi | HR Development",
    template: "%s | Akbar Wahyu Adi",
  },
  // Deskripsi untuk Google Search
  description: "Portfolio of Akbar Wahyu Adi. An HR Professional based in Yogyakarta, specializing in Recruitment, Psychological Assessment, and People Development.",
  
  // Kata Kunci untuk Google
  keywords: [
    "Akbar Wahyu Adi", 
    "HR Professional", 
    "Psychology Student", 
    "Recruitment Specialist", 
    "Tamtech International", 
    "Human Resources Yogyakarta", 
    "Talent Acquisition",
    "Psychological Assessment"
  ],

  // Penulis
  authors: [{ name: "Akbar Wahyu Adi" }],
  creator: "Akbar Wahyu Adi",

  // --- OPEN GRAPH (Tampilan saat share di WA/LinkedIn/FB) ---
  openGraph: {
    title: "Akbar Wahyu Adi | Strategic HR & Psychology Professional",
    description: "Merging Psychological Insights with Strategic HR to build stronger teams. Available for Full-time, Freelance, and Projects.",
    url: "https://portfolio-akbar.vercel.app", // Ganti dengan domain asli nanti setelah deploy
    siteName: "Akbar Wahyu Adi Portfolio",
    images: [
      {
        // Saya pakai foto profil Anda sebagai thumbnail sementara
        url: "https://i.postimg.cc/RVCYBbpn/DSC07063-(4)-(1).jpg", 
        width: 1200,
        height: 630,
        alt: "Akbar Wahyu Adi Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // --- TWITTER CARD (Tampilan saat share di Twitter/X) ---
  twitter: {
    card: "summary_large_image",
    title: "Akbar Wahyu Adi | Strategic HR & Psychology Professional",
    description: "Merging Psychological Insights with Strategic HR to build stronger teams.",
    images: ["https://i.postimg.cc/RVCYBbpn/DSC07063-(4)-(1).jpg"], 
  },
  
  // Agar bot Google bisa meng-index website
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Tambahkan suppressHydrationWarning di sini
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        {/* BUNGKUS CHILDREN DENGAN PROVIDERS */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}