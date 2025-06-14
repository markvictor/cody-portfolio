// sanity/sanity.client.ts

import { createClient } from "@sanity/client";

const config = {
    projectId: "97b96y16",
    dataset: "production",
    apiVersion: "2025-04-16",
    useCdn: false,
};

const client = createClient(config);

export default client;
