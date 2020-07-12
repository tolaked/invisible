const { table } = require("table");
const ora = require("ora");

const locationReport = require("../utils");

const spinner = ora("Loading weather report...");

const input = process.argv.slice(2);

const getLocationReport = async (locations) => {
  let report;
  try {
    spinner.start();
    spinner.color = "green";

    report = [["location", "weather", "temperature", "date"]];

    for (let i = 0; i < locations.length; i++) {
      const locationName = locations[i];
      const response = await locationReport(locationName).then((res) =>
        res.json()
      );
      const { location, current } = response;

      const weather = current
        ? current.weather_descriptions[0]
        : "location not found";
      const temperature = current
        ? `${current.temperature} degrees`
        : "location not found";
      const time = location ? location.localtime : "location not found";

      report.push([locationName, weather, temperature, time]);
    }
    spinner.stop();
    console.log(table(report));
  } catch (error) {
    console.log(error);
  }
  return report;
};

getLocationReport(input);
module.exports = getLocationReport;
