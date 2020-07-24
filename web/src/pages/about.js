import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import aboutPhoto from "../images/about.jpg";

function AboutPage() {
  return (
    <Layout>
      <SEO keywords={[`photography`, `photographer`, `utah`, `family`, `film`]} title="About" />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
            I began film photography in 2019 out of a desire to capture life in its raw, beautiful,
            fleeting moments. I am committed to capturing your vision and curating your story
            honestly and passionately. I believe strongly in empathy, kindness, and human
            connection. I realize that being a part of these important and intimate moments is a big
            responsibility, and not something I take lightly. I look forward to developing
            meaningful friendships as I work alongside you!
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Michelle Watkins
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="Portrait of Michelle" src={aboutPhoto} />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
