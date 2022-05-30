import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import site from 'constants/site';
import { socialHandles } from 'constants/social';

const SEO: React.FC<DefaultSeoProps> = ({ ...props }) => {
  return (
    <DefaultSeo
      defaultTitle={site.title}
      titleTemplate={`%s | ${site.title}`}
      description={site.description}
      openGraph={{
        title: site.title,
        description: site.description,
        images: [
          { url: `${site.url}/images/og.jpg`, width: 800, height: 600, alt: 'name above logo' },
        ],
      }}
      twitter={{
        site: socialHandles.twitter,
        handle: socialHandles.twitter,
        cardType: 'summary_large_image',
      }}
      {...props}
    />
  );
};

export default SEO;
