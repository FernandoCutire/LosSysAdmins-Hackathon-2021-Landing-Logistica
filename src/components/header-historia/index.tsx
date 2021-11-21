import Link from 'next/link';
import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Fisc from '@/constants/svg/fisc.svg';
import UTP from '@/constants/svg/utp.svg';
import Eurus from '@/constants/svg/eurus.svg';
import Dell from '@/constants/svg/dell.svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Muchas gracias por el interés
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Este proyecto está en desarrollo , puedes llenar el formulario y te informaremos cuando estemos
          implementandolo.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <a href="https://forms.gle/QqjtTRjB4RtbAGsn9" target="_blank" rel="noopener noreferrer">
          <Button primary>Contáctanos</Button>
        </a>
        <span className={tw(`mx-4`)}>o</span>
        <Link href="/historia">
          <Button>Nuestra historia</Button>
        </Link>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Apoyado por</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Eurus className={tw(`m-12 mb-8`)} width={120} />
          <Fisc className={tw(`m-12`)} width={140} />
          <Dell className={tw(`m-12`)} width={140} />
          <UTP className={tw(`m-12`)} width={140} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;