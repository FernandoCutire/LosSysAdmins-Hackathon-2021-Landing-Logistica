import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header-empezar';
import Footer from '@/components/footer';

export default function Empezar() {
  return (
    <Page>
      <NextSeo
        title="Educando Offline | Inicio"
        description="Logística para la implementación de sistemas tecnológicos en áreas remotas"
      />
      <Header />
      <main />
      <Footer />
    </Page>
  );
}
