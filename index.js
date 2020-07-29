const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const patientView = require("./services/patient-view");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post(`/cds-services/${patientView.definition.id}`, patientView.handler);

app.get("/cds-services", (req, res) => {
  res.json({
    services: [patientView.definition],
  });
});

app.listen(3000, () => {
  console.log("Running!");
});
