
import React from 'react';

const Sitemap = () => {
   return null;
};

export const getServerSideProps = async ({ res }: any) => {
   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

   <url>

      <loc>https://stcmicrosoft.sk/</loc>

      <priority>0.9</priority>

   </url>

   <url>

      <loc>https://stcmicrosoft.sk/registracia</loc>

      <priority>0.8</priority>

   </url>

   <url>

      <loc>https://stcmicrosoft.sk/studenti</loc>

      <priority>0.7</priority>

   </url>

   <url>

      <loc>https://stcmicrosoft.sk/absolventi</loc>

      <priority>0.7</priority>

   </url>

   <url>

      <loc>https://stcmicrosoft.sk/#kontakt</loc>

      <priority>0.6</priority>

   </url>

   <url>

      <loc>https://stcmicrosoft.sk/#oPrograme</loc>

      <priority>0.6</priority>

   </url>

</urlset>`;

   res.setHeader('Content-Type', 'text/xml');
   res.write(sitemap);
   res.end();

   return {
      props: {},
   };
};

export default Sitemap;