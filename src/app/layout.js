import { Oswald, Raleway, Montserrat} from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-raleway",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Dinosaur API",
  description: "Explore a free Dinosaur API with detailed scientific data, discovery info, sizes, and traits, organized, developer-friendly, and perfect for projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${raleway.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
