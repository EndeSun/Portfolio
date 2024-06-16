import React from "react";

const Projects = () => {
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h2 className="text-6xl title-gradient_text">PROJECTS MADE</h2>
        <section className="mt-6 flex flex-wrap justify-center gap-2">
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
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/src/assets/images/office.webp"
                alt="desginer-image"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="src/assets/images/design.webp"
                alt="desginer-image"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  GRAPHIC DESIGNER
                </h5>
              </a>
              <ul className="[&>li]:mb-3 [&>li]:font-normal [&>li]:text-gray-700 [&>li]:dark:text-gray-400">
                <li>Logos - Poster - Infographics</li>
                <li>Brochures - Menus - Cards</li>
              </ul>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="src/assets/images/digitalMarketing.webp"
                alt="desginer-image"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="src/assets/images/translate.webp"
                alt="desginer-image"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
      </div>
    </section>
  );
};

export default Projects;
