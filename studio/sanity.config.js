import './components/index.css';
import { theme } from 'https://themer.sanity.build/api/hues?default=929292&primary=929292&transparent=929292&positive=darkest:101112&caution=darkest:101112&critical=darkest:101112&darkest=000000';
import { defineConfig, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { structure } from './structure';
import { media, mediaAssetSource } from 'sanity-plugin-media';
import { muxInput } from 'sanity-plugin-mux-input';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import { dashboardTool, projectUsersWidget } from '@sanity/dashboard';
import { Logo } from './components/Logo';

export default defineConfig({
  theme,

  name: 'default',
  title: 'Studio',

  projectId: 'hnuo52b9',
  dataset: 'production',

  studio: {
    components: {
      logo: Logo,
    },
  },

  plugins: [
    deskTool({ structure }),
    media(),
    dashboardTool({
      widgets: [
        //TODO
        netlifyWidget({
          title: 'Netlify Deploys',
          description:
            'Because these sites are static builds, they need to be re-deployed to see the changes when documents are published. You can check if the build was successful.',
          sites: [
            {
              title: 'Website',
              apiId: 'yyyyy-xxxxx-zzzz-xxxx-yyyyyyyy',
              buildHookId: 'yyyyxxxxxyyyxxdxxx',
              name: 'sanity-gatsby-blog-20-web',
              url: 'https://my-sanity-deployment.com',
            },
          ],
        }),
        projectUsersWidget({ layout: 'medium' }),
      ],
    }),
    muxInput(),
    ...(isDev ? [visionTool()] : []),
  ],

  schema: {
    types: schemaTypes,
    //TODO
    templates: (prev) => [...prev.filter((el) => !['media.tag', 'general', 'homepage', 'legal'].includes(el.schemaType))],
  },

  // Don't show media library on image selection
  form: {
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource.title !== mediaAssetSource.title);
      },
    },
  },
});
