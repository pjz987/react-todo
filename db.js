const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

async function readDb () {
  const db = await open({
    filename: 'quests.db',
    driver: sqlite3.Database
  })

  const quests = await db.all('SELECT id, name, completed, failed FROM quest')
  const objectives = await db.all('SELECT id, description, optional, completed, failed, quest_id FROM objective')

  return { quests, objectives }
}

module.exports = {
  readDb
}
