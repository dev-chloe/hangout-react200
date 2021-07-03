const fs = require('fs');

const getDBConnectionInfo = () => {
  const dbconJson = fs.readFileSync('routes/utils/dbcon.json', 'utf8');
  console.log(dbconJson);
  
  const dbconObj = JSON.parse(dbconJson);
  console.log(dbconObj);

  return dbconObj;
}

const dbcon = {
  getDBConnectionInfo,
}

module.exports = dbcon;