import { socialLinkData } from "./socialLinkData.js";

export const socialLinkApp = Vue.createApp({
    data: function() {
        return {
            data: socialLinkData
        };
    }
});