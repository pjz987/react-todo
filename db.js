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

async function addQuest (quest) {
  const db = await open({
    filename: 'quests.db',
    driver: sqlite3.Database
  })
  const result = await db.run(
    'INSERT INTO quest (name, completed, failed) VALUES ($name, $completed, $failed)',
    {
      $name: quest.name,
      $completed: 0,
      $failed: 0
    }
  )
  return result
}

async function addObjectives (quest_id, objectives) {
  const db = await open({
    filename: 'quests.db',
    driver: sqlite3.Database
  })
  objectives.map(obj => {
    db.run(
      'INSERT INTO objective (description, optional, completed, failed, quest_id) VALUES ($description, $optional, $completed, $failed, $quest_id)',
      {
        $description: obj.description,
        $optional: obj.optional ? 1 : 0,
        $completed: 0,
        $failed: 0,
        $quest_id: quest_id
      }
    )
  })
}

module.exports = {
  readDb, addQuest, addObjectives
}
