import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    express,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    node,
    MongoDB,
    postgreSQL,
    Netlify,
    Firebase,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={node} title="NodeJs" alt="" />
        <img src={express} title="ExpressJs" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={postgreSQL} title="postgreSQL" alt="" />
        <img src={MongoDB} title="MongoDB" alt="" />
        <img src="https://th.bing.com/th/id/OIP.maKe3jXsLd8flovNsX2_3QAAAA?pid=ImgDet&rs=1" title="typescript" alt=""/>
        <img src="https://d33wubrfki0l68.cloudfront.net/49c2be6f2607b5c12dd27f8ecc8521723447975d/f05c5/logo-small.cbbeba89.svg" title="Nest js" alt=""/>
        <img src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png" title="antd" alt=""/>
        <img src="https://amalgjose.files.wordpress.com/2020/08/redis-white-1.png?w=512" title="redis" alt=""/>
        <img src="https://i1.wp.com/codeblog.dotsandbrackets.com/wp-content/uploads/2016/11/rabbitmq.jpg?resize=840%2C416" title="RabbitMQ" alt=""/>

      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="Vs code" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={Netlify} title="Netlify" alt="Netlify" />
        <img src="https://avatars.slack-edge.com/2022-05-10/3504409679109_09edd9580fda38ed7976_512.png" title="gitlab" alt="gitlab" />
        <img
          src="https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png"
          title="Firebase"
          alt="Firebase"
        />
        <img src={npm} title="NPM" alt="NPM" />
      </section>
    </main>
  );
}

export default Technologies;
