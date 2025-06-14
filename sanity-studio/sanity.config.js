import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '../schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Cody Gall',

  projectId: '97b96y16',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },
})
