import { GoogleOAuthProvider } from "@react-oauth/google";

export const metadata = {
  title: "Sharescape",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleOAuthProvider clientId="589549201329-3ean4g1titcobugefs17er4o3ghngmcf.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
