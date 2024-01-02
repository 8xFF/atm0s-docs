import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Fully Open-Source and Decentralized Media SFU",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Atm0s is a fully open-source and decentralized project. This means that
        anyone can contribute to the project and that the project is not owned
        by any single entity.
      </>
    ),
  },
  {
    title: "Powered by Rust",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Atm0s is built using Rust, a programming language that is blazingly
        fast, memory-efficient, and thread-safe. Rust is also an open-source
        programming language.
      </>
    ),
  },
  {
    title: "Built with SAN/IO in mind",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Atm0s is built with <a href="https://sans-io.readthedocs.io/" target="_blank">Sans I/O</a> in mind.
        This means that Atm0s is built to be as resusable as possible and to be
        as testable as possible by separating the logic from the I/O.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
