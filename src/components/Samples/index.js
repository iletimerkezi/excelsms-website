import React from 'react';
import chunks from 'array.chunk'
import Translate from '@docusaurus/Translate';
import reactStringReplace from 'react-string-replace'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const SampleTrList  = [
  "Sayın {{A}} {{B}} {{C}} numaralı siparişiniz isteğiniz üzerine iptal edilmiştir. İyi Günler Dileriz.",
  "Sayın {{A}} {{B}}, ağustos ayı aidat borcunuz {{C}} TL'dir.",
  "Sayin {{A}} {{B}}, hastaliklari servisindeki {{C}} saatindeki randevunuz iptal edilmistir.",
  "Sayın {{A}} {{B}}, hali Saha icin rezervasyonunuz iptal edilmistir. Saha Tel : {{C}}",
  "Sayın {{A}} plakalı araç sahibi. Aracınızın işlemleri tamamlanmıştır. Bizi tercih ettiğiniz için teşekkür ederiz. Görüş ve önerileriniz için {{C}} nolu telefondan bizimle iletişime geçebilirsiniz.",
  "Sayin {{A}} {{B}}, MUZAYEDESI yayinda! sitesinden inceleyebilirsiniz.",
  "Sayin {{A}} {{B}}, {{C}} TL borcunuz bulunmaktadır.",
  "Sayin velimiz, {{A}} {{B}} öğrencimiz devamsızlık yapmıştır.",
  "Merhaba {{A}} {{B}} siparişiniz alınmıştır. Kargo dahil tutar {{C}} TL. Siparişinizi tıklayarak takip edebilirsiniz."
]

const SampleEnList  = [
  "Dear {{A}} {{B}} Your order with {{C}} has been canceled at your request. Have a nice day.",
   "Dear {{A}} {{B}}, your August subscription fee is {{C}} TL.",
   "Dear {{A}} {{B}}, your appointment at the sick ward at {{C}} has been cancelled.",
   "Dear {{A}} {{B}}, your reservation has been cancelled. Saha Tel : {{C}}",
   "Dear {{A}} owner of the vehicle with license plate. Your vehicle's procedures have been completed. Thank you for choosing us. You can contact us at {{C}} for your comments and suggestions.",
   "Dear {{A}} {{B}}, AUCTION is live!",
   "Dear {{A}} {{B}}, you owe {{C}} TL.",
   "Dear parents, our {{A}} {{B}} student has been absent.",
   "Hello {{A}} {{B}} your order has been received. The amount including shipping is {{C}} TL. You can track your order by clicking on it."
]

function SMS({body}) {

  const message = reactStringReplace(
    body,
    /(\{\{.*?\}\})/gm,
    (match, i) => <span key={`sms-${i}`} className="badge badge--cta">{match}</span>
  );

  return (
    <div className="col col--4 margin-top--md">
      <div className="card card-samples">
        <div className="card__body">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default function Samples() {
  const {i18n} = useDocusaurusContext();
  let rows     = chunks(i18n.currentLocale === 'en' ? SampleEnList : SampleTrList, 3)

  const samples = rows.map((cols, idx) => {
    let row = cols.map((body, idx) => {
      return <SMS key={`sms-${idx}`} body={body} />
    })

    return <div key={`row-${idx}`} className="row">{row}</div>
  })

  return (
    <section className="samples padding-top--lg padding-bottom--lg">
      <div className="container">
				<h5 className="welcome-title">
					<Translate>Neler Yapabilirsiniz?</Translate>
				</h5>
        {samples}
      </div>
    </section>
  );
}
