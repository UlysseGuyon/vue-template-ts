module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Description',
      default: 'Vue TypeScript Project'
    },
    author: {
      type: 'string',
      required: false,
      message: 'Author',
      default: 'Ulysse Guyon'
    },
    license: {
      type: 'string',
      required: false,
      message: 'License',
      default: 'MIT'
    }
  },
  completeMessage: 'Custom TS project template generated ! Run "npm install" to get started'
};
