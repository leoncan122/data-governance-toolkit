import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";

import ensureIcon from "../public/community-org-img/ensure-icon.svg";
import advocateIcon from "../public/community-org-img/advocate-icon.svg";
import generateIcon from "../public/community-org-img/generate-icon.svg";
import improveIcon from "../public/community-org-img/improve-icon.svg";

import keyFeatures01 from "../public/community-org-img/key-features-01.svg";
import keyFeatures02 from "../public/community-org-img/key-features-02.svg";
import keyFeatures03 from "../public/community-org-img/key-features-03.svg";
import keyFeatures04 from "../public/community-org-img/key-features-04.svg";
import keyFeatures05 from "../public/community-org-img/key-features-05.svg";
//import keyFeatures06 from '../public/community-org-img/key-features-06.svg'
import keyFeatures07 from "../public/community-org-img/key-features-07.svg";
//import keyFeatures08 from '../public/community-org-img/key-features-08.svg'
import outcomes01 from "../public/community-org-img/outcomes-01.svg";
import outcomes02 from "../public/community-org-img/outcomes-02.svg";
import outcomes03 from "../public/community-org-img/outcomes-03.svg";

export default function CommunityOrganisations() {
  return (
    <>
      <Layout>
        <main className="min-h-screen px-6 py-24 top-0 px-26 text-center md:pt-18 bg-main-color-gradient flex flex-col items-center">
          <Head>
            <title>Data Governance Toolkit</title>
            <meta
              name="The Data Governance Toolkit is an online platform
          that helps community based organisations better manage and coordinate
          all of their data activities and data management in one place"
              content="Generated by create next app"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <section className="w-10/12">
            <article className="w-full flex flex-col items-center">
              <h2 className="my-5 tracking-wide md:self-start ">
                Data Governance for comunnity organisations
              </h2>
              <div className="h-6/12 font-bold text-2xl my-5 border-solid border-2 border-yellow-400 p-5">
                Data is necessary asset for community-based organisations when
                working to meet your goals and reduce societal inequalities
              </div>
              {/* //flex-row justify-around items-center */}
              <ul className="flex flex-col  md:grid md:grid-cols-4 md:gap-3">
                <li className="w-64  h-72 leading-relaxed   p-4 my-6 block text-center">
                  <Image
                    src={ensureIcon}
                    width={150}
                    height={160}
                    alt=""
                  ></Image>
                  <h3>Ensure</h3>
                  <p className="text-xl">data quality</p>
                </li>
                <li className="w-64  h-72 leading-relaxed   p-4 my-6 block text-center">
                  <Image
                    src={improveIcon}
                    width={150}
                    height={160}
                    alt=""
                  ></Image>

                  <h3>Improve</h3>
                  <p className="text-xl">service delivery</p>
                </li>
                <li className="w-64  h-72  leading-relaxed   p-4 my-6 block text-center">
                  <Image
                    src={advocateIcon}
                    width={150}
                    height={160}
                    alt=""
                  ></Image>

                  <h3>Advocate</h3>
                  <p className="text-xl">more effectively</p>
                </li>
                <li className="w-64  h-72 leading-relaxed   p-4 my-6 block text-center">
                  <Image
                    src={generateIcon}
                    width={150}
                    height={160}
                    alt=""
                  ></Image>

                  <h3>Generate</h3>
                  <p className="text-xl">new funding</p>
                </li>
              </ul>
            </article>

            <article>
              <h2 className="my-8 trackin-wide">
                The Data Governance Toolkit platform
              </h2>
              <p className="my-8 text-xl font-semibold leading-relaxed">
                Our data governance toolkit has been used by large community
                health organizations across the United States and smaller
                agencies looking to improve data collection and reporting for a
                single program
              </p>
              <div className="my-8 text-2xl font-bold rounded-xl border-solid border-2 border-yellow-400 p-5 leading-snug">
                <strong>Platformable`s Data Governance Toolkit</strong> helps
                agencies use best practices in data governance and can be
                customized to specific funding goals by addressing keydata
                governance components in a stepwise manner
              </div>
            </article>
          </section>
          <section className="bg-main-color-gradient">
            <div className="mt-10">
              <h2 className="py-7 tracking-wide">Key features</h2>
              <ul className="text-center text-lg font-semibold tracking-wide md:grid md:grid-cols-4">
                <li className="pt-11 pb-7">
                  <figure>
                    <Image src={keyFeatures01} alt=""></Image>

                    <figcaption>
                      Uses widely-used and often free tools
                    </figcaption>
                  </figure>
                </li>
                <li className="py-7">
                  <figure>
                    <Image src={keyFeatures02} alt=""></Image>

                    <figcaption>
                      Fully customizable according to your data collection needs
                    </figcaption>
                  </figure>
                </li>
                <li className="py-7">
                  <figure>
                    <Image src={keyFeatures03} alt=""></Image>

                    <figcaption>
                      Integrates with your existing data collection systems and
                      IT tools
                    </figcaption>
                  </figure>
                </li>
                <li className="py-7">
                  <figure>
                    <Image src={keyFeatures04} alt=""></Image>

                    <figcaption>Adaptable as you grow and learn</figcaption>
                  </figure>
                </li>
                <li className="py-7">
                  <figure>
                    <Image src={keyFeatures05} alt=""></Image>

                    <figcaption>Secure and safe</figcaption>
                  </figure>
                </li>
                <li className="py-7">
                  <figure>
                    <Image src={keyFeatures01} alt=""></Image>

                    <figcaption>
                      GDPR and CPAA and data privacy compliant
                    </figcaption>
                  </figure>
                </li>
                <li className="py-7">
                  <figure>
                    <Image src={keyFeatures07} alt=""></Image>

                    <figcaption>
                      Real-time data management to instantly see the impacts of
                      your work
                    </figcaption>
                  </figure>
                </li>
                <li className="py-7">
                  <figure>
                    <Image src={keyFeatures01} alt=""></Image>

                    <figcaption>
                      Able to connect to other data sets to measure on long term
                      outcomes over time
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
            <article className="mt-7 flex flex-col items-center">
              <h2 className="py-7 tracking-wide">Outcomes</h2>
              <div className="flex flex-col md:flex-row md:justify-around">
                <figure className="circular-container md:p-4 md:mx-5">
                  <Image
                    src={outcomes01}
                    width={150}
                    height={150}
                    alt=""
                  ></Image>
                  <figcaption>
                    Ensure time spent cleaning and preparing data for reports
                  </figcaption>
                </figure>
                <figure className="circular-container md:p-4 md:mx-5">
                  <Image
                    src={outcomes02}
                    width={150}
                    height={150}
                    alt=""
                  ></Image>
                  <figcaption>
                    Increase funding through effective use of data to demostrate
                    your impact
                  </figcaption>
                </figure>
                <figure className="circular-container md:p-4 md:mx-5">
                  <Image
                    src={outcomes03}
                    width={150}
                    height={150}
                    alt=""
                  ></Image>
                  <figcaption>
                    Evidence-based advocacy on key issues facing your community
                  </figcaption>
                </figure>
              </div>
            </article>
          </section>
        </main>
      </Layout>
    </>
  );
}
