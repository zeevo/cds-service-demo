const { v4 } = require("uuid");

const definition = {
  hook: "patient-view",
  name: "CDS Service Starter Patient View",
  description: 'An example of a CDS Service that displays "Hello World!"',
  id: "cds-service-starter-patient-view",
  prefetch: {
    patient: "Patient/{{context.patientId}}",
  },
};

const handler = (req, res) => {
  const text = `Hello world!`;

  console.log(req.body);

  let cards = {
    cards: [
      {
        uuid: v4(),
        summary: text,
        detail: "Details and recommendations here...",
        source: {
          label: "CDS Service Starter",
          url: "https://example.com",
        },
        indicator: "info",
        links: [
          {
            label: "My smart app",
            url: "https://example.org/launch.html",
            type: "smart",
          },
          {
            label: "Source code",
            url: "https://github.com/example/exampleapp",
            type: "absolute",
          },
        ],
      },
    ],
  };
  res.json(cards);
};

module.exports = { definition, handler };
