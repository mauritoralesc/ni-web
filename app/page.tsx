"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Gradientdiv from "./GradientDiv";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import ScrollSection from "./ScrollSection";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function Home() {
  const [loader, setLoader] = useState(true);

  const frases = [
    { text: "Alimentando el futuro de Paraguay" },
    { text: "Mongaru Paraguái tenonderã" },
    { text: "Feeding Paraguay's future" },
  ];
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setInterval(function () {
      setLoader(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false); // Comienza el efecto de fade out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % frases.length); // Cambia el texto
        setFadeIn(true); // Comienza el efecto de fade in
      }, 1000); // Tiempo para que el fade out se complete
    }, 3000); // Cambiar de texto cada 3 segundos

    return () => clearInterval(intervalId);
  }, []);

  const gotoApp = () => {
    window.open("https://ni-app.com/", "_blank");
  };
  const gotoAppStore = () => {
    window.open(
      "https://apps.apple.com/py/app/nutrici%C3%B3n-infantil/id6451366679",
      "_blank"
    );
  };
  const gotoPlayStore = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=io.ionic.starter.appni&hl=es_PA&gl=US&pli=1",
      "_blank"
    );
  };
  const gotoWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=595983001550&text&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {loader && (
        <div className="loaderContent flex items-center justify-center">
          <div className="hoja"></div>
          <div className="manzana">
            <div className="manzanaDerecha absolute"></div>
            <div className="manzanaIzquierda absolute"></div>
            <h1 className="letraLogo font-oduda ">ni</h1>
          </div>
        </div>
      )}
      {!loader && (
        <div className="w-full fixed  top-0 left-0 z-50">
          <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-2  header w-full max-w-xl mt-4 rounded-full mx-auto flex items-center"
          >
            <Image
              className="ml-2 "
              src={"/images/logo-ni.png"}
              width={40}
              height={40}
              alt={"Nutricion infantil"}
            />
            <div className="flex justify-between w-full ml-4 mr-4">
              <Link
                activeClass="active"
                to="inicio"
                spy={true}
                smooth={true}
                offset={-50}
                duration={2000}
                className="navLink text-[#AABD70] cursor-pointer "
              >
                Inicio
              </Link>

              <Link
                activeClass="active"
                to="nosotros"
                spy={true}
                smooth={true}
                offset={-40}
                duration={2000}
                className="navLink text-[#AABD70] cursor-pointer "
              >
                Nosotros
              </Link>
              <Link
                activeClass="active"
                to="contacto"
                spy={true}
                smooth={true}
                offset={50}
                duration={2000}
                className="navLink text-[#AABD70] cursor-pointer "
              >
                Contacto
              </Link>
              <button
                onClick={gotoApp}
                className="text-[#AABD70] cursor-pointer hover:text-[#fb8602]"
              >
                Ingresar
              </button>
            </div>
          </motion.header>
        </div>
      )}
      {!loader && (
        <>
          <Element name="inicio" className="element">
            <Gradientdiv
              className={
                "bg-white w-screen h-screen flex justify-center  content-center"
              }
            >
              <motion.div
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute circulo"
              >
                <Image
                  src={"/images/circulo.png"}
                  width={1000}
                  height={1000}
                  alt={"Nutricion infantil"}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="relative z-20 min-h-screen flex flex-col items-center justify-center"
              >
                <motion.div
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="ni-title text-[#FB8602] font-oduda flex"
                >
                  Nutrici
                  <span>
                    o<span className="acento"></span>
                  </span>
                  <p className="ene mr-8">u</p> I<p className="ene">u</p>fa
                  <p className="ene">u</p>til
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-center text-[#363636] text-2xl font-bold font-monserrat"
                >
                  Educando en alimentación saludable desde temprana edad
                </motion.p>
                <div className="flex space-x-4 mt-10">
                  <button
                    onClick={gotoPlayStore}
                    className="hover:scale-[1.025] transition"
                  >
                    <Image
                      src={"/images/google.png"}
                      width={200}
                      height={50}
                      alt={"Nutricion infantil"}
                    />
                  </button>
                  <button
                    onClick={gotoAppStore}
                    className="hover:scale-[1.025] transition"
                  >
                    <Image
                      src={"/images/appstore.png"}
                      width={200}
                      height={50}
                      alt={"Nutricion infantil"}
                    />
                  </button>
                </div>
                <motion.div
                  initial={{ x: 200 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.75 }}
                  className="absolute bottom-0 right-[-200px]"
                >
                  <Image
                    src={"/images/iphone.png"}
                    width={350}
                    height={500}
                    alt={"Nutricion infantil"}
                  />
                </motion.div>
              </motion.div>
            </Gradientdiv>
            <div className="bg-[#EBE9E1] min-h-screen w-full ">
              <ScrollSection>
                <Parallax speed={50} className=" mt-40">
                  <Image
                    src={"/images/nene.jpg"}
                    width={700}
                    height={500}
                    alt={""}
                    className="rounded-xl shadow-xl"
                  />
                </Parallax>
                <Parallax speed={-10} className=" max-w-xl mt-20">
                  <h1 className="text-4xl font-bold text-[#312F3C] font-monserrat">
                    Programa Educativo <br /> Colegio Saludable
                  </h1>
                  <p className="mt-10 text-[#777675]">
                    La institución educativa genera el entorno propicio para el
                    aprendizaje, en ella los alumnos pasan una gran parte de su
                    vida escolar, lo que la convierte en la mejor aliada para
                    fomentar hábitos saludables desde la infancia.
                  </p>
                  <p className="text-[#777675] mt-4">
                    En Nutrición infantil, hemos desarrollado un programa
                    educativo integral que, en alianza con los colegios, busca
                    promover hábitos alimenticios saludables desde temprana
                    edad.{" "}
                  </p>
                  <button className="bg-[#FB8602] p-2 pl-8 pr-8 rounded-lg text-white mt-8">
                    Quiero saber más
                  </button>
                </Parallax>
              </ScrollSection>
              <ScrollSection>
                <Parallax speed={-5} className=" max-w-xl mt-40">
                  <h1 className="text-4xl font-bold text-[#312F3C] font-monserrat">
                    Nuestro Enfoque Educativo
                  </h1>
                  <p className="mt-10 text-[#777675]">
                    Nuestro programa educativo de nutrición infantil es la
                    piedra angular de nuestra estrategia. Contamos con
                    herramientas psicopedagógicas, nutricionales, digitales y de
                    marketing que impulsan hábitos saludables desde todas las
                    áreas e involucran a toda la comunidad educativa.
                  </p>
                  <p className="text-[#777675] mt-4">
                    En Nutrición Infantil, nos enfocamos en la importancia de
                    educar en alimentación desde la temprana edad.
                  </p>
                  <button className="bg-[#FB8602] p-2 pl-8 pr-8 rounded-lg text-white mt-8">
                    Quiero saber más
                  </button>
                </Parallax>
                <Parallax speed={30} className="mt-20">
                  <Image
                    src={"/images/estudiando.jpg"}
                    width={350}
                    height={500}
                    alt={""}
                    className="rounded-xl shadow-2xl"
                  />
                </Parallax>
                <Parallax speed={60} className="mt-40">
                  <Image
                    src={"/images/nena-2.jpg"}
                    width={400}
                    height={200}
                    alt={""}
                    className="rounded-xl shadow-xl"
                  />
                </Parallax>
              </ScrollSection>
              <ScrollSection>
                <Parallax speed={50} className=" mx-autp">
                  <Image
                    src={"/images/circular.png"}
                    width={600}
                    height={600}
                    alt={""}
                    className="circular"
                  />
                </Parallax>
                <Parallax speed={-10} className="max-w-xl">
                  <h1 className="text-4xl  font-bold text-[#312F3C] font-monserrat">
                    Cultura de Alimentación Saludable
                  </h1>
                  <p className="text-[#777675] mt-10">
                    No es suficiente enseñar a los niños sobre nutrición.
                    Sabemos que para que los niños adopten hábitos alimenticios
                    saludables es fundamental que las personas que inciden en su
                    formación estén comprometidas, por ello, es importante
                    involucrar a los profesores y padres en este proceso.
                  </p>
                  <p className="text-[#777675] mt-4">
                    Trabajamos estrechamente para brindarles herramientas y
                    recursos que les permitan integrar una nutrición saludable e
                    incidir de forma positiva en los niños.
                  </p>
                  <button className="bg-[#FB8602] p-2 pl-8 pr-8 rounded-lg text-white mt-8">
                    Quiero saber más
                  </button>
                </Parallax>
              </ScrollSection>
              <ScrollSection>
                <Parallax speed={-10} className="max-w-xl">
                  <h1 className="text-4xl  font-bold text-[#312F3C] font-monserrat">
                    ¡Juntos podemos hacer la diferencia!
                  </h1>
                  <p className="text-[#777675] mt-10">
                    ¡Juntos podemos hacer la diferencia! Estamos convencidos de
                    que, trabajando juntos, podemos mejorar el estado
                    nutricional de los niños en Paraguay. Nuestro programa
                    educativo de nutrición infantil es solo el comienzo.
                    Necesitamos el apoyo y la colaboración de todos los actores
                    involucrados: colegios, profesores, padres y la comunidad en
                    general.
                  </p>
                  <p className="text-[#777675] mt-4">
                    Es hora de tomar medidas y asegurarnos de que nuestros niños
                    crezcan sanos y felices.
                  </p>
                  <button className="bg-[#FB8602] p-2 pl-8 pr-8 rounded-lg text-white mt-8">
                    Quiero saber más
                  </button>
                </Parallax>
                <Parallax
                  speed={50}
                  className=" mx-auto w-full max-w-[600px] relative"
                >
                  <Image
                    src={"/images/paraguay.png"}
                    width={400}
                    height={400}
                    alt={""}
                    className="mx-auto"
                  />
                  <Image
                    src={"/images/frutas.png"}
                    width={100}
                    height={100}
                    alt={""}
                    className="absolute top-0 right-0 mr-36 mt-10"
                  />
                  <Image
                    src={"/images/obesidad.png"}
                    width={100}
                    height={100}
                    alt={""}
                    className="absolute top-0 left-0 "
                  />
                  <Image
                    src={"/images/verdura.png"}
                    width={110}
                    height={110}
                    alt={""}
                    className="absolute bottom-0 left-40 "
                  />
                  <Image
                    src={"/images/inactividad.png"}
                    width={100}
                    height={100}
                    alt={""}
                    className="absolute bottom-0 right-0"
                  />
                </Parallax>
              </ScrollSection>
            </div>
          </Element>
          <div className=" bg-white w-full min-h-96 flex items-center justify-center">
            <div className="container mx-auto">
              <p
                className={
                  fadeIn
                    ? "fade-in frase text-center"
                    : "fade-out frase text-center"
                }
              >
                {frases[index].text}
              </p>
            </div>
          </div>
          <div
            className="bg-[#EBE9E1] pb-20 pt-10 min-h-screen w-full flex justify-center items-center"
            id="nosotros"
          >
            <Element name="nosotros" className="element">
              <div className=" container mx-auto ">
                <div className="flex justify-between items-center">
                  <div className="w-full max-w-xl">
                    <h1 className="text-4xl font-bold text-[#312F3C] mt-12 ">
                      Acerca de Nutrición Infantil
                    </h1>
                    <p className="text-[#777675] text-lg mt-8">
                      En Nutrición Infantil nos dedicamos a educar en
                      alimentación saludable desde la temprana edad. Nuestro
                      programa educativo está diseñado para impulsar una cultura
                      de alimentación saludable en los colegios. Trabajamos con
                      padres, profesores y alumnos para revertir la malnutrición
                      en Paraguay.
                    </p>
                  </div>
                  <div className="w-full">
                    <Image
                      src={"/images/logo-ni.png"}
                      width={120}
                      height={120}
                      alt={"Nutricion infantil"}
                      className="mx-auto"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="text-3xl font-bold text-[#312F3C] mt-10">
                    Nuestros principios
                  </h1>
                  <div className="flex justify-between space-x-4 mt-8">
                    <div className="shadow-xl p-4 bg-white rounded-xl max-w-sm  w-full flex flex-col">
                      <Image
                        src={"/images/educacion.jpg"}
                        width={500}
                        height={500}
                        alt={""}
                        className="rounded-lg h-56"
                      />
                      <p className="text-lg mt-4 font-bold text-[#312F3C]">
                        Educación Nutricional
                      </p>
                      <p className="text-[#777675] mt-4">
                        Promovemos la importancia de una alimentación saludable
                        desde la infancia, brindando conocimientos y
                        herramientas para tomar decisiones informadas sobre la
                        nutrición.
                      </p>
                    </div>
                    <div className="shadow-xl p-4 bg-white rounded-xl max-w-sm  w-full flex flex-col">
                      <Image
                        src={"/images/familia.jpg"}
                        width={700}
                        height={500}
                        alt={""}
                        className="rounded-lg"
                      />
                      <p className="text-lg font-bold mt-4 text-[#312F3C]">
                        Colaboración Comunitaria
                      </p>
                      <p className="text-[#777675] mt-4 pb-2">
                        Trabajamos en conjunto con padres, profesores y alumnos
                        para crear un entorno que fomente la alimentación
                        saludable, promoviendo la participación activa de toda
                        la comunidad educativa.
                      </p>
                    </div>
                    <div className=" shadow-xl p-4 bg-white rounded-xl max-w-sm  w-full flex flex-col">
                      <Image
                        src={"/images/prevencion.jpg"}
                        width={700}
                        height={500}
                        alt={""}
                        className="rounded-lg"
                      />
                      <p className="text-lg font-bold mt-4 text-[#312F3C]">
                        Prevención de la malnutrición
                      </p>
                      <p className="text-[#777675] mt-4 pb-2">
                        Nuestro objetivo es revertir la malnutrición en
                        Paraguay, brindando herramientas y estrategias para
                        adoptar hábitos alimentarios saludables desde temprana
                        edad, creando un impacto positivo en la salud de las
                        futuras generaciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Element>
          </div>
          <Element name="contacto" className="element">
            <div
              className="bg-white min-h-screen w-full flex justify-center items-center"
              id="contacto"
            >
              <div className="container mx-auto flex space-x-8">
                <div className="w-full space-y-4">
                  <input
                    type="text"
                    className="border border-[#B1BC7A] bg-[#EBE9E175] w-full p-4 rounded-xl focus:outline-[#FB8602]"
                    placeholder="Nombre y Apellido"
                  />
                  <input
                    type="text"
                    className="border border-[#B1BC7A] bg-[#EBE9E175] w-full p-4 rounded-xl focus:outline-[#FB8602]"
                    placeholder="Teléfono"
                  />
                  <input
                    type="text"
                    className="border border-[#B1BC7A] bg-[#EBE9E175] w-full p-4 rounded-xl focus:outline-[#FB8602]"
                    placeholder="Email"
                  />
                  <textarea
                    className="border border-[#B1BC7A] bg-[#EBE9E175] w-full p-4 h-40 rounded-xl focus:outline-[#FB8602]"
                    placeholder="Mensaje"
                  ></textarea>
                  <button className="bg-[#FB8602] p-2 pl-20 pr-20 rounded-lg text-white mt-8">
                    Enviar
                  </button>
                </div>
                <div className="w-full">
                  <h1 className="text-4xl  font-bold text-[#312F3C] ">
                    ¿Tienes alguna duda?
                  </h1>

                  <p className="text-[#777675] text-md mt-4">
                    Contacta con nuestro equipo.
                  </p>
                  <div>
                    <button
                      onClick={gotoWhatsapp}
                      className="text-[#312F3C] cursor-pointer mt-8 flex items-center space-x-4"
                    >
                      <Image
                        src={"/images/whatsapp.svg"}
                        width={25}
                        height={25}
                        alt={""}
                      />
                      <p>+595 983 001 550</p>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={gotoWhatsapp}
                      className="text-[#312F3C] cursor-pointer mt-4 flex items-center space-x-4"
                    >
                      <Image
                        src={"/images/instagram.svg"}
                        width={25}
                        height={25}
                        alt={""}
                      />
                      <p> @nutricioninfantil.py</p>
                     
                    </button>
                  </div>
                  <p className="text-[#777675] text-md mt-8">
                    Descarga nuestra app
                  </p>
                  <div className="flex space-x-4 mt-4">
                  <button
                    onClick={gotoPlayStore}
                    className="hover:scale-[1.025] transition"
                  >
                    <Image
                      src={"/images/google.png"}
                      width={150}
                      height={50}
                      alt={"Nutricion infantil"}
                    />
                  </button>
                  <button
                    onClick={gotoAppStore}
                    className="hover:scale-[1.025] transition"
                  >
                    <Image
                      src={"/images/appstore.png"}
                      width={150}
                      height={50}
                      alt={"Nutricion infantil"}
                    />
                  </button>
                </div>
                </div>
              </div>
            </div>
          </Element>
          <div className="w-full bg-[#B1BC7A] p-8"></div>
        </>
      )}
    </main>
  );
}
