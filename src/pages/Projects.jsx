import React from "react";

const Projects = () => {
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h2 className="text-6xl title-gradient_text">
          PROJECTS <span className="subtitle-gradient_text">MADE</span>
        </h2>
        <section className="mt-6 flex flex-wrap justify-center gap-2">
          {/* MARK: BUGA
           */}
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
                  BUGA RAMEN S.L.
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Web development for the Buga Ramen restaurant chain
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/tailwindcss-%23a5effc?style=for-the-badge&logo=tailwindcss&logoSize=auto"
                />
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/react-%23a4ebfd?style=for-the-badge&logo=react&logoSize=auto"
                />

                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/framer-%23b5dfff?style=for-the-badge&logo=framer&logoSize=auto"
                  className="hidden lg:block"
                />
              </div>

              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/framer-%23b5dfff?style=for-the-badge&logo=framer&logoSize=auto"
                className="block lg:hidden"
              />
            </div>
          </div>

          {/* MARK: MENU DESIGN
           */}
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
                  ABC
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Photo shoot and menu design
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/gimp-%23cdceba?style=for-the-badge&logo=gimp&logoSize=auto"
                />
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/camera-black?style=for-the-badge&logoSize=auto"
                />
              </div>
            </div>
          </div>

          {/* MARK: SEÑALES
           */}
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
                  CARDIAC SIGNAL PROCESSING
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Interface for cardiac signal processing
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/matlab-blue?style=for-the-badge&logo=matlab&logoSize=auto"
                />
              </div>
            </div>
          </div>

          {/* MARK: TELEMEDICINA
           */}
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
                  TELEMEDICINE
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Medical application for the communication of healthy habits
                between the patient and the doctor
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/javascript-%23fbffe7?style=for-the-badge&logo=javascript&logoSize=auto"
                />
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Node-%23fffcea?style=for-the-badge&logo=nodedotjs&logoSize=auto"
                />
                <img
                  className="hidden lg:block"
                  alt="Static Badge"
                  src="https://img.shields.io/badge/html-%23ffcbc1?style=for-the-badge&logoSize=auto"
                />
                <img
                  className="hidden lg:block"
                  alt="Static Badge"
                  src="https://img.shields.io/badge/css-%23b6eeff?style=for-the-badge&logoSize=auto"
                />
              </div>

              <div className="flex flex-row">
                <img
                  className="block lg:hidden"
                  alt="Static Badge"
                  src="https://img.shields.io/badge/html-%23ffcbc1?style=for-the-badge&logoSize=auto"
                />
                <img
                  className="block lg:hidden"
                  alt="Static Badge"
                  src="https://img.shields.io/badge/css-%23b6eeff?style=for-the-badge&logoSize=auto"
                />
              </div>
            </div>
          </div>

          {/* MARK: USABILIDAD
           */}
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
                  STWHEALTH
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Static web page simulating medline plus
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/html-%23ffcbc1?style=for-the-badge&logoSize=auto"
                />
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/css-%23b6eeff?style=for-the-badge&logoSize=auto"
                />
              </div>
            </div>
          </div>
          {/* MARK: DICOM
           */}
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
                  DICOM miniproject
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Python program for writing information into Dicom files
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/python-black?style=for-the-badge&logo=python&logoSize=auto"
                />
              </div>
            </div>
          </div>
          {/* MARK: DATA ANALYSYS
           */}
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
                  DATA ANALYSYS
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Python program using ML and several traditional methods for
                predict solutions.
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/python-black?style=for-the-badge&logo=python&logoSize=auto"
                />
              </div>
            </div>
          </div>
          {/* MARK: IMAGE CLASSIFIER
           */}
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
                  MEDICAL IMAGE CLASSIFIER
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Matlab program using resNet50 for classify cells affected or not
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/matlab-blue?style=for-the-badge&logo=matlab&logoSize=auto"
                />
              </div>
            </div>
          </div>
          {/* MARK: AIR HOCKEY
           */}
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
                  AIR HOCKEY VIDEOGAME
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Air hockey clone game
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/scenekit-%23d1d1d1?style=for-the-badge&logo=apple&logoSize=auto"
                />
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/swift-%23fffcea?style=for-the-badge&logo=swift&logoSize=auto"
                />
              </div>
            </div>
          </div>
          {/* MARK: SQUID GAME
           */}
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
                  SQUID VIDEOGAME
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Squid game clone
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/unity-%23dcdcdc?style=for-the-badge&logo=unity&logoSize=auto"
                />
              </div>
            </div>
          </div>
          {/* MARK: DEFENSA MÍSTICA
           */}
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
                  DEFENSA MÍSTICA
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Tower defense game made
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/unity-%23dcdcdc?style=for-the-badge&logo=unity&logoSize=auto"
                />
              </div>
            </div>
          </div>
          {/* MARK: RUN TRACKER
           */}
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
                  RUN TRACKER
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Run tracker iOS application
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/swift-%23fffcea?style=for-the-badge&logo=swift&logoSize=auto"
                />
              </div>
            </div>
          </div>
          {/* MARK: BEACONS
           */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="src/assets/images/fotografo.webp"
                alt="desginer-image"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  BEACONS
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                BEACON miniproject that can detect device proximity
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/swift-%23fffcea?style=for-the-badge&logo=swift&logoSize=auto"
                />
              </div>
            </div>
          </div>
          {/* MARK: VIDEOCLUB
           */}
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
                  VIDEOCLUB
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Multiplartform app for video renting with client-server
                architecture
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/laravel-%23ffc8c5?style=for-the-badge&logo=laravel&logoSize=auto"
                />
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/ionic-%23d4f7f9?style=for-the-badge&logo=ionic&logoSize=auto"
                />
                <img
                  className="hidden lg:block"
                  alt="Static Badge"
                  src="https://img.shields.io/badge/angular-%23d9d9de?style=for-the-badge&logo=angular&logoSize=auto"
                />
              </div>

              <img
                className="block lg:hidden"
                alt="Static Badge"
                src="https://img.shields.io/badge/angular-%23d9d9de?style=for-the-badge&logo=angular&logoSize=auto"
              />
            </div>
          </div>
          {/* MARK: FILMOTECA
           */}
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
                  FILMOTECA
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Movie saving app
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/kotlin-%23ffe1fe?style=for-the-badge&logo=kotlin&logoSize=auto"
                />
              </div>
            </div>
          </div>

          {/* MARK: DIET APP
           */}
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
                  DIET APP
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Calorie count app
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/swift-%23fffcea?style=for-the-badge&logo=swift&logoSize=auto"
                />
              </div>
            </div>
          </div>
          {/* MARK: MAZE
           */}
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
                  MAZE VIDEOGAME
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Maze videogame
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/unity-%23dcdcdc?style=for-the-badge&logo=unity&logoSize=auto"
                />
              </div>
            </div>
          </div>
          {/* MARK: ECOMMERCE
           */}
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
                  ECOMMERCE
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ecommerce multiplatform application, with cliente serve
                arquitecture
              </p>
              <div className="flex flex-row">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/laravel-%23ffc8c5?style=for-the-badge&logo=laravel&logoSize=auto"
                />
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/ionic-%23d4f7f9?style=for-the-badge&logo=ionic&logoSize=auto"
                />
                <img
                  className="hidden lg:block"
                  alt="Static Badge"
                  src="https://img.shields.io/badge/angular-%23d9d9de?style=for-the-badge&logo=angular&logoSize=auto"
                />
              </div>
              <img
                className="block lg:hidden"
                alt="Static Badge"
                src="https://img.shields.io/badge/angular-%23d9d9de?style=for-the-badge&logo=angular&logoSize=auto"
              />
            </div>
          </div>
          {/*
           */}
        </section>
      </div>
    </section>
  );
};

export default Projects;
