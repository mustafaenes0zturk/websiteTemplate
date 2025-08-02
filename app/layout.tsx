import type { Metadata } from "next";
import "./globals.css";
import { Background } from "@/components/ui/background";
import { Header } from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Mustafa Enes Öztürk",
  description: "Mustafa Enes Öztürk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="min-h-screen w-screen overflow-hidden relative">
          {/* Arka plan component'i - Ayarları değiştirmek için yukarıdaki rehbere bakın */}
          <Background 
            gridSize={40}                    // Kare boyutu (20=küçük, 40=normal, 60=büyük)
            gridColor="#111111"              // Çizgi rengi (yeşil="#00ff00", mavi="#0066ff", beyaz="#ffffff")
            gridOpacity={0.50}               // Grid şeffaflığı (0.05=hafif, 0.30=normal, 0.80=belirgin)
            
            particleQuantity={150}           // Parçacık sayısı (50=az, 150=normal, 300=çok)
            particleColor="#ffffff"          // Parçacık rengi (beyaz="#ffffff", yeşil="#00ff00", mavi="#0066ff")
            particleEase={80}                // Hareket yumuşaklığı (30=hızlı, 80=normal, 120=yumuşak)
            particleRefresh={true}           // Parçacık yenileme (true=açık, false=kapalı)
            
            noisePatternSize={75}            // Noise pattern boyutu (50=küçük, 75=normal, 100=büyük)
            noiseAlpha={15}                  // Noise yoğunluğu (5=hafif, 15=normal, 25=yoğun)
            noiseRefreshInterval={4}         // Noise güncellenme hızı (2=hızlı, 4=normal, 8=yavaş)
          />
          <Header />
          <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
            <div className="max-w-4xl w-full">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
} 