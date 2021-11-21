import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Funcionalidades</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            Un enfoque disruptivo para la educación en áreas rurales
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Creación de módulos</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Incluye un sistema que permite la{` `}
              <a href="https://rachel.worldpossible.org/viewmod/en-module_maker">
                <b>creación de módulos</b>
              </a>
              {` `}
              adaptados al usuario que extiende las funcionalidad básicas del dispositivo.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Encuentra información sin internet</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Mediante un servidor que emite una red local, podrás conectar varias computadoras a la red , sin necesidad
              de tener internet.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Librería de contenidos y herramientas DIY</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Contiene sitios como wikipedia, proyecto gutenberg, ted, medline plus entre otros sitios de educación.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check
                width={20}
                height={20}
                fill="currentColor"
                className={tw(`h-6 w-6 text-indigo-500 group-hover:text-blue-600`)}
              />
              <div className={tw(`ml-4 text-xl`)}>Documentación y Ayuda extensiva</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Debido al tiempo en el mercado se ha creado una fuente de conocimientoes extensa que facilita la
              implementación en diversas zonas.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Mejorar el nivel de educación</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              En Sierra Leona, los estudiantes que usaron RACHEL durante solo cuatro meses (32 horas) aumentaron sus
              puntajes en las pruebas de alfabetización en inglés en un 67% más que los que no tienen RACHEL.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Foros</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Desarrollo de foros donde se hacen preguntas de instalación, soporte, buenas prácticas de la plataforma
              Rachel.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
