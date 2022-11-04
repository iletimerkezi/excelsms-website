import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import MainScreen from '@site/static/img/msexcel-sms-main-screen.png';

export default function HomeHero() {

  return (
    <header>
      <div className="container">
        <h1 className="welcome-title padding-top-lg">
          <Translate>Ücretsiz Excel SMS Eklentisi</Translate>
        </h1>
        <h3 className="welcome-title-desc">
          <Translate>Excel içinden pratik kullanım ve parametrik gönderim özelliğiyle birlikte tek</Translate>
          <br />
          <Translate>seferde, her müşterinize özel SMS gönderin.</Translate>
        </h3>
        <div className="btn-container">
          <Link
            className="welcome-title-desc btn-cta button button--primary padding-vert--sm padding-horiz--md margin-top--md"
            to="#download">
            <Translate>Ücretsiz İndir</Translate>
          </Link>
        </div>
        <div className="c-center">
          <img src={MainScreen} />
        </div>
      </div>
    </header>
  );
}