import React from 'react';
import clsx from 'clsx';
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

export default function NotFoundContent({className}) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <img
              src={"/img/oof.gif"}
              alt={"404 Animation"}
              height={150}
              style={{borderRadius: 10, marginBottom: 20}}
          />
          <Heading as="h1" className="hero__title">
            404
          </Heading>
          <Heading as="h2" className="hero__subtitle">
            Robot not found
          </Heading>
          <p>
            Either we deleted something (oopsy daisy) or you have the wrong URL.
          </p>
          <Link href={"/"}>
            {"<<"} Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
