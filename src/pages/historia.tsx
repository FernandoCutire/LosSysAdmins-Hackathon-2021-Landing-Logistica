import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header-empezar';
import Footer from '@/components/footer';

export default function Historia() {
  return (
    <Page>
      <NextSeo title="Historia | Cañazas" description="Como Gabo surge como solución en áreas rurales." />
      <Header />
      <main />
      <Footer />
    </Page>
  );
}
