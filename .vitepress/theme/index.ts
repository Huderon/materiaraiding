import DefaultTheme from 'vitepress/theme';
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import { useRoute } from 'vitepress';

// @ts-ignore
import YoutubeEmbed from './components/YoutubeEmbed.vue'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        ctx.app.component('YoutubeEmbed', YoutubeEmbed);
    },
    setup() {
        // Get route
        const route = useRoute();
        // Using
        imageViewer(route);
    }
};