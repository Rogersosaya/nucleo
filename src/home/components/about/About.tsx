import Image from "next/image";
import Gallery from './gallery/Gallery';


const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-12 lg:px-20 md:py-9 md:px-6 py-4 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">¿Quienes Somos?</h1>
                    <p className="font-normal text-xl leading-6 text-gray-600 ">El Centro Cultural Núcleo, es uno de los centro culturales emblemáticos de la Facultad Nacional de Ingeniería Industrial y de Sistemas de la Universidad Nacional de Ingeniería de Perú, con más de 30 años formando líderes capaces de gestionar proyectos, realizar investigación y superarse constantemente ha sido y sigue siendo cuna de profesionales destacados en el ámbito laboral, fomentando el desarrollo de capacidades y habilidades diversas se ha logrado quedar muy bien posicionados en concursos de proyectos estudiantiles a nivel nacional e internacional, buscando siempre la excelencia, el Centro Cultural tiene sus puertas abiertas para aquellas personas con ganas de marcar una diferencia significativas y positiva en la sociedad.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <Gallery/>
                </div>
            </div>

            
        </div>
    );
};

export default About;