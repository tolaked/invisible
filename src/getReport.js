const { table } = require("table");
const ora = require("ora");

const spinner = ora("Loading weather report");
const locationReport = require("../utils");

const [executor, ignoredBin, script, ...args] = process.argv;
const input = args
const getLocationReport = async (locations) => {


  try {
    spinner.start()
    spinner.color = 'green';

    const data = [["location", "weather", "temperature", "date"]];

    for (let i = 0; i < locations.length; i++) {
 
      
      const locationName = locations[i];
      const response = await locationReport(locationName).then((res) =>
        res.json()
      );
      const { location, current } = response
    
      const weather = current ? current.weather_descriptions[0] : 'not found'
      const temperature = current ? `${current.temperature} degrees` : 'not found'
      const time = location ? location.localtime : 'not found'

      data.push([locationName, weather, temperature, time])
    }
    spinner.stop()
  console.log(table(data))
}
  
  catch (error) { console.log(error)}
 
};

getLocationReport(input)