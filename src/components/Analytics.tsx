import Script from 'next/script';

interface AnalyticsProps {
  googleAnalyticsId?: string;
  yandexMetrikaId?: string;
}

export default function Analytics({ 
  googleAnalyticsId, 
  yandexMetrikaId 
}: AnalyticsProps) {
  return (
    <>
      {/* Google Analytics - отложенная загрузка для уменьшения неиспользуемого кода */}
      {googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `}
          </Script>
        </>
      )}

      {/* Yandex Metrika - отложенная загрузка для уменьшения неиспользуемого кода */}
      {yandexMetrikaId && (
        <>
          {/* Загружаем скрипт только после полной загрузки страницы */}
          <Script id="yandex-metrika-init" strategy="lazyOnload">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(${yandexMetrikaId}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:false
              });
            `}
          </Script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<div><img src="https://mc.yandex.ru/watch/${yandexMetrikaId}" style="position:absolute; left:-9999px;" alt="" /></div>`,
            }}
          />
        </>
      )}

    </>
  );
}
