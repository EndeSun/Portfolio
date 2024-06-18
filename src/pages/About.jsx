import React from "react";
import { skills } from "../constants/skills";
import { instagram, email, linkedin, phone } from "../assets/icons";

const About = () => {
  return (
    <section
      className="relative flex lg:flex-row flex-col max-container"
      id="particles-js"
    >
      <section className="relative flex lg:flex-row flex-col mb-10">
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h2 className="text-3xl lg:text-6xl title-gradient_text">
            PROFESSIONAL SKILLS AS A{" "}
            <span className="subtitle-gradient_text">DEVELOPER...</span>
          </h2>

          {/* MARK: PROGRAMMING LANGUAGE
           */}
          <h3 className="mt-6 text-xl lg:text-4xl blue-gradient_text my-4">
            Programming <span className="red-gradient_text">language</span>
          </h3>

          <ul className="mt-4 text-gray-700 flex flex-row [&>li]:m-0">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/c%23-black?style=for-the-badge&logo=c%23&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/java-content?style=for-the-badge&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/Matlab-blue?style=for-the-badge&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/python-black?style=for-the-badge&logo=python&logoSize=auto"
              />
            </li>
          </ul>

          <ul className="text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/swift-%23fffcea?style=for-the-badge&logo=swift&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/kotlin-%23ffe1fe?style=for-the-badge&logo=kotlin&logoSize=auto"
              />
            </li>
          </ul>

          <ul className="text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/javascript-%23fbffe7?style=for-the-badge&logo=javascript&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/php-%23e8ffff?style=for-the-badge&logo=php&logoSize=auto"
              />
            </li>
          </ul>

          <ul className="mb-4 text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/mysql-%23e8eef6?style=for-the-badge&logo=mysql&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/html-%23ffcbc1?style=for-the-badge&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/css-%23b6eeff?style=for-the-badge&logoSize=auto"
              />
            </li>
          </ul>

          {/* MARK: MOBILE APPS
           */}
          <h2 className="mt-6 text-xl lg:text-4xl blue-gradient_text">
            Mobile <span className="red-gradient_text">Apps</span>
          </h2>
          <ul className="text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/swift-%23fffcea?style=for-the-badge&logo=swift&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/kotlin-%23ffe1fe?style=for-the-badge&logo=kotlin&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/ionic-%23d4f7f9?style=for-the-badge&logo=ionic&logoSize=auto"
              />
            </li>
          </ul>

          {/* MARK: BACKEND
           */}
          <h2 className="mt-6 text-xl lg:text-4xl blue-gradient_text">
            Backend <span className="red-gradient_text">Technologies</span>
          </h2>
          <ul className="text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/Node-%23fffcea?style=for-the-badge&logo=nodedotjs&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/laravel-%23ffc8c5?style=for-the-badge&logo=laravel&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/postman-%23ffe5d4?style=for-the-badge&logo=postman&logoSize=auto"
              />
            </li>
          </ul>

          {/* MARK: FRONTEND
           */}
          <h2 className="mt-6 text-xl lg:text-4xl blue-gradient_text">
            Frontend <span className="red-gradient_text">frameworks</span>
          </h2>
          <ul className="text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/bootstrap-%23e3dff5?style=for-the-badge&logo=bootstrap&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/tailwindcss-%23a5effc?style=for-the-badge&logo=tailwindcss&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/sass-%23f3d7e7?style=for-the-badge&logo=sass&logoSize=auto"
              />
            </li>
          </ul>

          <ul className="text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/react-%23a4ebfd?style=for-the-badge&logo=react&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/angular-%23d9d9de?style=for-the-badge&logo=angular&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/vue-%23b1e9ca?style=for-the-badge&logo=vuedotjs&logoSize=auto"
              />
            </li>
          </ul>

          {/* MARK: DESIGNER SKILLS
           */}

          <h2 className="mt-6 text-xl lg:text-4xl blue-gradient_text">
            Design <span className="red-gradient_text">tools</span>
          </h2>
          <ul className="text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/figma-%23fbc9ad?style=for-the-badge&logo=figma&logoSize=auto"
              />
            </li>
          </ul>

          {/* MARK: VIDEOGAME
           */}
          <h2 className="mt-6 text-xl lg:text-4xl blue-gradient_text">
            Videogame <span className="red-gradient_text">development</span>
          </h2>
          <ul className="text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/unity-%23dcdcdc?style=for-the-badge&logo=unity&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/scenekit-%23d1d1d1?style=for-the-badge&logo=apple&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/blender-%23fbd88c?style=for-the-badge&logo=blender&logoSize=auto"
              />
            </li>
          </ul>

          {/* MARK: PROJECT
           */}

          <h2 className="mt-6 text-xl lg:text-4xl blue-gradient_text">
            Project <span className="red-gradient_text">manager</span>
          </h2>
          <ul className="text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/microsoft-Project-%23d1d1d1?style=for-the-badge&logo=microsoft&logoSize=auto"
              />
            </li>
          </ul>

          {/* MARK: AI
           */}
          <h2 className="mt-6 text-xl lg:text-4xl blue-gradient_text">
            Artifitial <span className="red-gradient_text">vision</span>
          </h2>

          <ul className="text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/opencv-%23c6caff?style=for-the-badge&logo=opencv&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/matlab-blue?style=for-the-badge&logo=matlab&logoSize=auto"
              />
            </li>
          </ul>

          {/* MARK: OTHER
           */}
          <h2 className="mt-6 text-xl lg:text-4xl ion-gradient_text">Others</h2>
          <ul className="text-gray-700 flex flex-row">
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/git-%23fdb2a4?style=for-the-badge&logo=git&logoSize=auto"
              />
            </li>
            <li>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/github-%23000000?style=for-the-badge&logo=github&logoSize=auto"
              />
            </li>
          </ul>

          {/* MARK: LANGUAGE SKILLS
           */}
          <h2 className="mt-6 text-3xl lg:text-6xl title-gradient_text">
            <span className="subtitle-gradient_text">LANGUAGE</span> SKILLS
          </h2>

          <ul className="text-white">
            <li className="bg-spanish-gradient border border-gray-300 rounded-lg shadow-lg my-2 p-4 hover:scale-105 transform transition-transform">
              <strong>
                SPANISH <span>NATIVE</span>
              </strong>
            </li>
            <li className="bg-chinese-gradient border border-gray-300 rounded-lg shadow-lg my-2 p-4 hover:scale-105 transform transition-transform">
              <strong>
                CHINESE <span>NATIVE</span>
              </strong>
            </li>
            <li className="bg-english-gradient border border-gray-300 rounded-lg shadow-lg my-2 p-4 hover:scale-105 transform transition-transform">
              <strong className="text-gray-700">
                ENGLISH <span>B2 CAMBRIDGE</span>
              </strong>
            </li>
          </ul>

          {/* MARK: OTHER SKILLS
           */}
          <h2 className="mt-6 text-3xl lg:text-6xl title-gradient_text">
            <span className="subtitle-gradient_text">OTHER</span> SKILLS
          </h2>

          <section className="mt-6 flex flex-wrap justify-center gap-2">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="src/assets/images/fotografo.webp"
                  alt="desginer-image"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    PHOTOGRAPHER
                  </h5>
                </a>
                <ul className="[&>li]:mb-3 [&>li]:font-normal [&>li]:text-gray-700 [&>li]:dark:text-gray-400">
                  <li>Commercial - Event - Product - Marketing</li>
                  <li>
                    Camera: <strong>LUMIX MARK SII</strong>
                  </li>
                  <li>Photography - Editing - Post-production</li>
                </ul>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="src/assets/images/office.webp"
                  alt="desginer-image"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    OFFICE TOOLS
                  </h5>
                </a>
                <ul className="[&>li]:mb-3 [&>li]:font-normal [&>li]:text-gray-700 [&>li]:dark:text-gray-400">
                  <li>WORD</li>
                  <li>EXCEL</li>
                  <li>POWERPOINT</li>
                  <li>PROJECT</li>
                </ul>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="src/assets/images/design.webp"
                  alt="desginer-image"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    GRAPHIC DESIGNER
                  </h5>
                </a>
                <ul className="[&>li]:mb-3 [&>li]:font-normal [&>li]:text-gray-700 [&>li]:dark:text-gray-400">
                  <li>Logos - Poster - Infographics</li>
                  <li>Brochures - Menus - Cards</li>
                </ul>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="src/assets/images/digitalMarketing.webp"
                  alt="desginer-image"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    MARKETING
                  </h5>
                </a>
                <ul className="[&>li]:mb-3 [&>li]:font-normal [&>li]:text-gray-700 [&>li]:dark:text-gray-400">
                  <li>Instagram</li>
                  <li>Tick Tock</li>
                  <li>Web SEO</li>
                </ul>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="src/assets/images/translate.webp"
                  alt="desginer-image"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    TRANSLATOR
                  </h5>
                </a>
                <ul className="[&>li]:mb-3 [&>li]:font-normal [&>li]:text-gray-700 [&>li]:dark:text-gray-400">
                  <li>Documents</li>
                  <li>Simultaneous interpretation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* MARK: EMPLOYMENT HISTORY
           */}
          <h2 className="mt-6 text-3xl lg:text-6xl title-gradient_text">
            <span className="subtitle-gradient_text">EMPLOYMENT</span> HISTORY
          </h2>

          <dl className="mt-6">
            <dt className="text-xl lg:text-4xl mb-4 blue-gradient_text">
              PRIVATE TEACHER{" "}
              <span className="red-gradient_text">FROM 2017</span>{" "}
            </dt>
            <dd className="font-semibold">PRIMARY - SECONDARY - HIGH SCHOOL</dd>
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/STILL-%23cbecc6?style=for-the-badge&logoSize=auto"
            />
          </dl>

          <dl className="mt-6">
            <dt className="text-xl lg:text-4xl mb-4 blue-gradient_text">
              OFFICE WORKER{" "}
              <span className="red-gradient_text">
                {" "}
                2018 JUNE - 2018 OCTOBER{" "}
              </span>
            </dt>
            <dd className="font-semibold">
              Stock control - Accounting - Order
            </dd>
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/summerwork-red?style=for-the-badge&logoSize=auto"
            />
          </dl>

          <dl className="mt-6">
            <dt className="text-xl lg:text-4xl mb-4 blue-gradient_text">
              CHINESE - SPANISH TRANSLATOR{" "}
              <span className="red-gradient_text"> FROM 2019 </span>
            </dt>
            <dd className="font-semibold">
              Documentation - Hospitals - Schools - Police stations.
            </dd>
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/STILL-%23cbecc6?style=for-the-badge&logoSize=auto"
            />
          </dl>

          <dl className="mt-6">
            <dt className="text-xl lg:text-4xl mb-4 blue-gradient_text">
              PHOTOGRAPHER{" "}
              <span className="red-gradient_text"> FROM 2021 </span>
            </dt>
            <dd className="font-semibold">
              Photo shoots - Post-production - Video recording.
            </dd>
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/STILL-%23cbecc6?style=for-the-badge&logoSize=auto"
            />
          </dl>

          <dl className="mt-6">
            <dt className="text-xl lg:text-4xl mb-4 blue-gradient_text">
              MARKETING <span className="red-gradient_text"> FROM 2021 </span>
            </dt>
            <dd className="font-semibold">
              Social media accounts - SEO - <strong>Website development</strong>
              .
            </dd>
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/STILL-%23cbecc6?style=for-the-badge&logoSize=auto"
            />
          </dl>

          <dl className="mt-6">
            <dt className="text-xl lg:text-4xl mb-4 blue-gradient_text">
              DESIGNER <span className="red-gradient_text"> FROM 2021 </span>
            </dt>
            <dd className="font-semibold">Menu - Cards - Brochures.</dd>
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/STILL-%23cbecc6?style=for-the-badge&logoSize=auto"
            />
          </dl>

          <dl className="mt-6">
            <dt className="text-xl lg:text-4xl mb-4 blue-gradient_text">
              BIOARRAY S.L. INTERNSHIP{" "}
              <span className="red-gradient_text">
                {" "}
                2022 OCTOBER - 2023 JANUARY{" "}
              </span>
            </dt>
            <dd className="font-semibold">
              Genetic variants analysis - Preparation of reports.
            </dd>
          </dl>

          <dl className="mt-6">
            <dt className="text-xl lg:text-4xl mb-4 blue-gradient_text">
              OSUNASPORT S.L.{" "}
              <span className="red-gradient_text"> From 2024 June </span>
            </dt>
            <dd className="font-semibold">Web development with prestashop</dd>
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/STILL-%23cbecc6?style=for-the-badge&logoSize=auto"
            />
          </dl>

          {/* MARK: TECHNOLOGIES
           */}

          <div className="py-10 flex flex-col">
            <h2 className="mt-6 text-3xl lg:text-6xl title-gradient_text">
              <span className="subtitle-gradient_text">SKILLS</span> RESUME
            </h2>

            <div className="mt-16 flex flex-wrap justify-center gap-12">
              {skills.map((skill) => (
                <div key={skill.name} className="block-container w-20 h-20">
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MARK: CONTACTS
           */}
          <div className="py-10 flex flex-col">
            <h2 className="mt-6 text-3xl lg:text-6xl title-gradient_text">
              <span className="subtitle-gradient_text">CONTACT</span> ME
            </h2>

            <div className="mt-2 flex flex-col justify-center gap-4 items-center">
              {/* {skills.map((skill) => (

              ))} */}
              <div>
                <a
                  href="https://instagram.com/ende_1195"
                  className="flex flex-row gap-4 items-center"
                >
                  <img
                    src={instagram}
                    alt="instagram"
                    className="w-1/12 h-1/12 lg:w-[4%]"
                  />
                  <strong>ende_1195</strong>
                </a>
              </div>

              <div>
                <a
                  href="tel:681671050"
                  className="flex flex-row gap-4 items-center"
                >
                  <img
                    src={phone}
                    alt="phone"
                    className="w-1/12 h-1/12 lg:w-[4%]"
                  />
                  <strong>681671050</strong>
                </a>
              </div>

              <div>
                <a
                  href="mailto:1195562121ende@gmail.com"
                  className="flex flex-row gap-4 items-center"
                >
                  <img
                    src={email}
                    alt="email"
                    className="w-1/12 h-1/12 lg:w-[4%]"
                  />
                  <strong>1195562121ende@gmail.com</strong>
                </a>
              </div>

              <div>
                <a
                  href="https://linkedin.com/in/endesun"
                  className="flex flex-row gap-4 items-center"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="w-1/12 h-1/12 lg:w-[4%]"
                  />
                  <strong>endesun</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
